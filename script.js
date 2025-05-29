readTextFile = (file, callback) => {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("/data.json", (text) => {
    var data = JSON.parse(text)
    data.pinnedProjects.forEach((project, index) => {
        document.getElementById('myprojects').innerHTML += `
            <div class="carousel-item text-center ${index==0?'active':''}" style="background-color: ${project.background}; height: 400px;">
                <img class="mt-${project.marginTop}" height="${project.height}" src="${project.img}">
                <div class="carousel-caption">
                    <h5>${project.title}</h5>
                    <p>${project.subtitle}</p>
                    <a class="col-auto px-1 text-dark ${project.source?'':'d-none'}" href="${project.source}"><i class="bi-github"></i></a>
                    <a class="col-auto px-1 text-dark ${project.link?'':'d-none'}"  href="${project.link}"><i class="bi-box-arrow-up-right"></i></a>
                </div>
            </div>
        `
        document.getElementById('indicators').innerHTML += `
            <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="${index}" class="${index==0?'active':''}"></button>
        `
    })
    data.projects.forEach((project) => {
        document.getElementById('projects').innerHTML += `
            <div class="col-12 col-sm-6 col-lg-4 py-2    ">
                <div class="card text-bg-dark h-100">
                    <div class="d-flex flex-column card-body">
                        <div class="text-end">
                            <a class="px-1 ${project.source?'':'d-none'}" href="${project.source}"><i class="bi-github"></i></a>
                            <a class="px-1 ${project.link?'':'d-none'}"  href="${project.link}"><i class="bi-box-arrow-up-right"></i></a>
                        </div>
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.subtitle}</p>
                        <div class="mt-auto">${project.technologies}</div>
                    </div>
                </div>
            </div>
        `
    })
});