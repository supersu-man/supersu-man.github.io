function getConfigData(callback) {
    $.getJSON("../utils/config.json", (data) => {
        callback(data)
    }).fail(() => {
        console.log("An error has occurred");
    });
}

function makeCard(title, caption, lang, link, size){
    return `
    <div class="col-lg-${2*parseInt(size)} col-xl-${size}">
        <div class="proj-card d-flex align-items-center p-4">
            <a href="${link}">
                <div class="p-2 fw-bolder h6 s-color">${lang}</div>
                <div class="p-2 h2">${title}</div>
                <div class="p-2 t-color">${caption}</div>
            </a>
        </div>
    </div>
    `
}

function getGridItems(configData) {
    var gridItems = []
    for (const key in configData.projects) {
        var project = configData.projects[key]
        var card = makeCard(project["title"], project["caption"], project["lang"], project["link"], project["size"])
        gridItems.push(card)
    }
    return gridItems
}

function addCards(gridItems, grid){
    for (const key in gridItems) {
        grid.append(gridItems[key])
    }
}


$(() => {
    getConfigData((data) => {
        var gridItems = getGridItems(data);
        addCards(gridItems, $('#grid'))
    })
})