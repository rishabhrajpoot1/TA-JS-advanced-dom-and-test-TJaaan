let root = document.querySelector("ul");

let max = 3;
let index = 0;

function addQuotes() {
  for (let i = 0; i < max; i++) {
    let li = document.createElement("li");
    let div = document.createElement("div");
    div.classList.add("quotes-container");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    h2.innerText = ` 🧿  ${quotes[index].quoteText}`;
    p.innerText = ` ✍️ ${
      quotes[index].quoteAuthor === "" ? "Anonymous" : quotes[index].quoteAuthor
    }`;
    div.append(h2, p);
    li.append(div);
    root.append(li);
    index++;
  }
}

document.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;
  let clientHeight = document.documentElement.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight && index < quotes.length) {
    addQuotes();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  alert("The content of the DOM is loaded");
  addQuotes();
});