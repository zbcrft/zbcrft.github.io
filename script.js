const body = document.getElementById("body")

const projectHtml = `<div class="project" %s>
            <img src="%s">
            <div>
                <span class="project-title">%s</span>
                <br>
                <span class="project-description">%s</span>
            </div>
        </div>`

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

    body.innerHTML += `<div class="project" ${id}>
            <img src="${element.Thumbnail}">
            <div>
                <span class="project-title">${element.Title}</span>
                <br>
                <span class="project-description">${element.Description}</span>
            </div>
        </div>`
});