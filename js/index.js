$(()=>{
    addSocials()
})

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