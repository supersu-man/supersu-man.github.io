let eventTemplate = (heading, date, images) => {

    let imageList = `
    <div class="col-12 p-1 fs-4">${heading}</div>
    <div class="col-12 p-1">${date}</div>
    `
    images.forEach(image => {
        imageList+=`
            <div class="col-auto p-1">
                <img class="img-fluid" src="assets/images/${image}" />
            </div>
        `
    });

    return `
        <div class="row pt-4">
            ` + 
            imageList
            +
            `
        </div>
    `
}

this.loadJSON((response) => {
    let data = JSON.parse(response)
    let eventList = ''
    data.forEach(eventt => {
        eventList+=eventTemplate(eventt.heading, eventt.date, eventt.images)
    })
    this.document.body.innerHTML = eventList
})

function loadJSON(callback) {
    var xObj = new XMLHttpRequest();
    xObj.overrideMimeType("application/json");
    xObj.open('GET', './cycling.json', true);
    xObj.onreadystatechange = () => {
        if (xObj.readyState === 4 && xObj.status === 200) callback(xObj.responseText); 
    };
    xObj.send(null);
}
