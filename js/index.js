function getConfigData(callback) {
    $.getJSON("../utils/config.json", (data) => {
        callback(data)
    }).fail(() => {
        console.log("An error has occurred");
    });
}

function makeCard(title, caption, lang, link){
    return `
    <div class="proj-card d-flex align-items-center p-4">
        <a href="${link}">
            <div class="p-2 fw-bolder h6 s-color">${lang}</div>
            <div class="p-2 h2">${title}</div>
            <div class="p-2 t-color">${caption}</div>
        </a>
    </div>
    `
}

function getGridItems(configData) {
    var gridItems = []
    for (const key in configData.projects) {
        var project = configData.projects[key]
        console.log(project["title"])
        if(project["star"]){
            var card = makeCard(project["title"], project["caption"], project["lang"], project["link"])
            gridItems.push(card)
        }
    }
    return gridItems
}

function addCards(gridItems, list){
    for (const key in gridItems) {
        list.append(gridItems[key])
    }
}


$(() => {
    getConfigData((data) => {
        var gridItems = getGridItems(data);
        console.log(gridItems)
        addCards(gridItems, $('#list'))
    })
})