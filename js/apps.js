var configData = null;
$(()=>{
    getConfigData((data)=>{
        configData = data;
        addCards()
    })
})


function addCards(){
    var v1 = `onmouseout="this.style='background: linear-gradient(to right, #f32170, #cdbb95,#ff6b08, #eedd44); background-clip:content-box; -webkit-background-clip: text; -webkit-text-fill-color: transparent;';"`
    for (const key in configData.apps) {
        var v2 = `onmouseover="this.style='background: ${configData.apps[key][1]}; background-clip:content-box; -webkit-background-clip: text; -webkit-text-fill-color: transparent;';"`
        $('.container').append(`<a class ="card center"  ${v1} ${v2} href="${configData.apps[key][2]}"><p>${configData.apps[key][0]}</p></a>`);
    }
}


function getConfigData(callback){
    $.getJSON("../utils/config.json", (data) => {
        callback(data)
    }).fail(() => {
        console.log("An error has occurred");
    });
}