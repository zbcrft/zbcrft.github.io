const body = document.getElementById("body")

const projects = [
    {
        Thumbnail: "assets/thumbnails/DailyRewards.png",
        Title: "daily rewards UI",
        Description: "I made this UI for practice, it's a basic frame that has a title, a close button, and content inside. You can claim the rewards once they are available!"
    },
]

let count = 0

projects.forEach(element => {
    count += 1

    var id = ''

    if (count == 1) {
        id = 'id="project-first"'
    } else if (count == projects.length) {
        id = 'id="project-last"'
    }

    var mirror = ''

    if (count % 2 == 0) {
        mirror = 'project-mirror'
    }

    var firstPart = ''
    var secondPart = ''

    if (mirror) {
        firstPart = `<div>
                <span class="project-title">${element.Title}</span>
                <br>
                <span class="project-description">${element.Description}</span>
            </div>`
        secondPart = `<img src="${element.Thumbnail}">`
    } else {
        firstPart = `<img src="${element.Thumbnail}">`
        secondPart = `<div>
                <span class="project-title">${element.Title}</span>
                <br>
                <span class="project-description">${element.Description}</span>
            </div>`
    }

    if (window.innerWidth <= 1000) {
        firstPart = `<img src="${element.Thumbnail}">`
        secondPart = `<div>
                <span class="project-title">${element.Title}</span>
                <br>
                <span class="project-description">${element.Description}</span>
            </div>`
    }

    body.innerHTML += `<div class="project ${mirror}" ${id}>
            ${firstPart}
            ${secondPart}
        </div>`
});