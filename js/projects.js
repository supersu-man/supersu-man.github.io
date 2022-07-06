function makeCard(title, caption, lang, link, size) {
    return `
    <div class="col-sm-${2 * size} col-xl-${size}">
        <a href="${link}">
            <div class="material-card p-4 my-2" style="height: 150px";>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="h2">${title}</div>
                    <div class="text-on-surface-variant">${lang}</div>
                </div>
                <div class="text-on-surface-variant">${caption}</div>
            </div>
        </a>
    </div>
    `
}

function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 && success) {
            success(JSON.parse(xhr.responseText))
        } else if (error) {
            error(xhr)
        }
    }
    xhr.open("GET", path, true);
    xhr.send()
}

var body = document.getElementById('body')
if (localStorage.getItem('dark-theme')) {
    body.classList.remove('light-theme')
    body.classList.add('dark-theme')
}

const grid = document.getElementById('grid')
loadJSON("../utils/config.json", (data)=>{
    data.projects.forEach(element => {
        const card = makeCard(element.title, element.caption, element.lang, element.link, element.size)
        grid.insertAdjacentHTML('beforeend', card)
    })
})