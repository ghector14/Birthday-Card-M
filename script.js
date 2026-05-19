const reveals = {
    "gift-img-happy": "images/happycat.gif",
    "gift-img-hot": "images/kobe.gif",
    "gift-img-genius": "images/pony.gif",
    "gift-img-badass": "images/neo.gif",
    "gift-img-cheers": "images/cat-bday.gif"
};

document.querySelectorAll(".gift-img").forEach(button => {
    button.addEventListener("click", () => {
        const revealSrc = reveals [button.id];
        if(revealSrc) {
            button.style.backgroundImage = `url(${revealSrc})`;
            button.style.cursor = "default";
            button.disabled = true; 
        }
    });
});