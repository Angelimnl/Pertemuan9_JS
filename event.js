let btnClick = document.getElementById("btn-click");
let btnMouse = document.getElementById("btn-mouse");
let dClick = document.getElementById("dclick");

dClick.addEventListener("dblclick", () => {
    document.body.style.backgroundColor = "lightpink";
    console.log("event Type: ", event.type);
    console.log("event Target: ", event.target);
});
btnClick.addEventListener("click", () => {
    alert("Tombol sudah diklik");
});
btnMouse.addEventListener("mouseover", () => {
    alert("Mouse Kursor sudah di arahkan ke Button");
});