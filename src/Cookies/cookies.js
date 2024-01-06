import Cookies from "js-cookie";


Cookies.set("token", "safee");
document.cookie("name=haroon");


console.log(Cookies.get("token"))