import yellowstar from "../../assets/yellowstar.png"
import emptystar from "../../assets/emptystar.png"
var count = 0;
var a1 = document.getElementsByClassName('s-1');
export default function ChangeStar(i) {
    count = count + 1;
    if ((count % 2) == 0) {
        a1[i].src = emptystar
    } else {
        a1[i].src = yellowstar
    }
}
