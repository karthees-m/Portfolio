var list = document.querySelectorAll("#nav a");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}


const bar = document.getElementById("bar")
const nav = document.getElementById("nav")

bar.addEventListener("click", () => {
    nav.classList.toggle("navHide");
})


var buttom = document.getElementById("btm")

    function show() {
      alert("Msg sent successfully! ")
    }
