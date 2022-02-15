let form = document.querySelector("form");
let rootElm = document.querySelector(".root");

let userInfo = {};

function handelSubmit(event) {
  event.preventDefault();
  userInfo.text = form.elements.text.value;
  userInfo.abc = form.elements.abc.value;
  console.log(userInfo);
  let box = document.createElement("div");
  box.classList.add(`box`);
  let h2 = document.createElement("h2");
  h2.innerText = userInfo.text;
  let p = document.createElement("p");
  p.innerText = userInfo.abc;
  box.append(h2, p);
  rootElm.prepend(box);
}

form.addEventListener("submit", handelSubmit);