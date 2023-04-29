let text = document.createElement("textarea");
text.classList.add("text");
text.getAttribute("autofocus");

let body = document.querySelector("body");
body.appendChild(text);

let keyboard = document.createElement("div");
body.appendChild(keyboard);
keyboard.id = "keyboard";






