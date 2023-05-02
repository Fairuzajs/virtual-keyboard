let text = document.createElement("textarea");
text.classList.add("display");
text.getAttribute("autofocus");

let body = document.querySelector("body");
body.appendChild(text);

let keyboard = document.createElement("div");
body.appendChild(keyboard);
keyboard.id = "keyboard";




//let key = document.createElement("button");
//key.classList.add("key");
//keyboard.appendChild(key);

let capsLock = document.querySelector;
//capsLock.classList.add("key", "key_capslock");
//capsLock.innerText = "CapsLock";
//button.setAttribute("data", )

//keyboard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];



keyboardEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', '  ____________________________________ ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

//document.onkeydown = function(event) {
 //console.log(event);
 //keyboard.push(event.code);
 //console.log(keyboard);
//}

//keyboard = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight'];




  function init() {
    let keys = '';
    for (let i = 0; i < keyboardEng.length; i++) {
      if (i == 14 || i == 28 || i == 41 || i == 54) {
        keys += '<div class="line-break"></div>';
      }
      keys += '<div class="key" data="' + keyboardEng[i] + '">' + (keyboardEng[i]) + '</div>';
    }
    document.querySelector('#keyboard').innerHTML = keys;

  }

  init();







document.onkeydown = function (event) {
  console.log(event.code);
 console.log(event.key);
document.querySelectorAll('#keyboard .key').forEach(function(element) {
    element.classList.remove('key_active');
  });
  document.querySelector('#keyboard .key[data="' + event.key + '"]').classList.add('key_active');
  }

document.querySelectorAll('#keyboard .key').forEach(function(element) {

  element.onclick = function (event) {
    document.querySelectorAll('#keyboard .key').forEach(function (element) {
      element.classList.remove('key_active');
   });
  let code = this.getAttribute('data');
  this.classList.add('key_active');
  console.log(code);
 }
});

