a1 = document.getElementsByClassName("hamburg")[0];
a2 = document.getElementsByClassName("cupboard");
a1.addEventListener("click", function () {
    a2[0].classList.replace("h-[0rem]", "h-[8rem]");
});
