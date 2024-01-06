var a1 = document.getElementsByClassName('c1');
var a2 = document.getElementsByClassName('c2');
export default function Clicked(x) {
    a1[x].classList.toggle('rotate-180');
    a2[x].classList.toggle('hidden')

}
