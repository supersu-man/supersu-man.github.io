configData = null
$(()=>{
    getConfigData((data) => {
        configData = data
        addSocials()
        addCardImage()
        cardMove()
        addText()
    })
})

function addSocials(){
    for (const key in configData.links) {
        $('.socials').append(`<a href="${configData.links[key][0]}"><img class="icon" src="${configData.links[key][1]}"></a>`);
    }
}

function addCardImage(){
    $(".card").css("background-image",`url("${configData.card_image}")`)
}

function cardMove(){
    $("body").mousemove((event) => {
        var objLeft = $("body").offset().left;
        var objTop = $("body").offset().top;

        var objCenterX = objLeft + $("body").width() / 2;
        var objCenterY = objTop + $("body").height() / 2;
        var x = event.pageX - objCenterX
        var y = event.pageY - objCenterY

        $(".card").css("transform",`perspective(500px) rotateX(${-y/70}deg) rotateY(${x/70}deg)`)
    })
}

function addText(){
    $(".text").html(configData.text)
}

function getConfigData(callback){
    $.getJSON("../utils/config.json", (data) => {
        callback(data)
    }).fail(() => {
        console.log("An error has occurred");
    });
}