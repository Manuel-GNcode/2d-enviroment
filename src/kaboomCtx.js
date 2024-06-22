import kaboom from "kaboom";

export const k = kaboom({
    global: false,
    touchToMouse: true, //to mobile
    canvas: document.getElementById("game")
})