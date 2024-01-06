// Shows hidden video when play button is clicked
let playButton = document.getElementsByClassName("play");

for (let i = 0; i < playButton.length; i++) {
    playButton[i].addEventListener("click", function() {
        this.classList.toggle("active");

        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none"
        } else {
            content.style.display = "block";
        }
    });
};