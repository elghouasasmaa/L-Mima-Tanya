const buttons = document.querySelectorAll(".btn");

buttons.forEach((button, index) => {
    button.style.opacity = "0";
    button.style.transform = "translateY(20px)";

    setTimeout(() => {
        button.style.transition = "all .5s ease";
        button.style.opacity = "1";
        button.style.transform = "translateY(0)";
    }, index * 150);
});
