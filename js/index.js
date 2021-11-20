$(()=>{
    addSocials()
    cardMove()
})

function cardMove(){
    $("body").mousemove(function (event) {
        var objLeft = $("body").offset().left;
        var objTop = $("body").offset().top;

        var objCenterX = objLeft + $("body").width() / 2;
        var objCenterY = objTop + $("body").height() / 2;
        var x = event.pageX - objCenterX
        var y = event.pageY - objCenterY

        $(".card").css("transform",`perspective(500px) rotateX(${-y/100}deg) rotateY(${x/100}deg)`)
    })
}

function addSocials(){
    getConfigData((data)=>{
        for (const key in data.links) {
            $('.socials').append(`<a href="${data.links[key][0]}"><img class="icon" src="${data.links[key][1]}"></a>`);
        }
    })
}

function getConfigData(callback){
    $.getJSON("../utils/config.json", (data) => {
        callback(data)
    }).fail(() => {
        console.log("An error has occurred");
    });
}