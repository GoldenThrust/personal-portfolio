let NavBar = () => {
    const opener = document.querySelector(".opener");
    const nav = document.querySelector(".headerNav")
    let open = false;
    function navMenu() {
        if (open) {
            nav.style.left = '0';
            opener.style.left = '80%';
            opener.style.transform = 'rotate(180deg)';
            open = false;
        } else {
            nav.style.left = '-100%';
            opener.style.left = '-4%';
            opener.style.transform = 'rotate(0deg)';
            open = true;
        }
    }

    opener.addEventListener('click', navMenu);
}

let Profession = () => {
    const professions = ["Full-Stack Web Developer", "Software Engineer"];
    const specialization = document.querySelector(".specialization");
    let currentTextIndex = 0;
    let currentText = professions[currentTextIndex];
    let isErasing = false;
    let typingDelay = 100;
    let eraseDelay = 50;

    function typeText() {
        if (isErasing) {
            currentText = currentText.substring(0, currentText.length - 1);
        } else {
            currentText = professions[currentTextIndex].substring(0, currentText.length + 1);
        }

        specialization.textContent = currentText;

        if (currentText === professions[currentTextIndex] && !isErasing) {
            isErasing = true;
            typingDelay = 1000;
        } else if (currentText === "" && isErasing) {
            isErasing = false;
            typingDelay = 100;
            currentTextIndex = (currentTextIndex + 1) % professions.length;
        }

        const delay = isErasing ? eraseDelay : typingDelay;
        setTimeout(typeText, delay);
    }

    typeText();
}

NavBar();
Profession();
