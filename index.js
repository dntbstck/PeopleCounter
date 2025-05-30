let buttonEl = document.getElementById("button-el");
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let previousCount = document.getElementById("previous-count");
let changeMode = document.getElementById('changeMode')

function colorMode(a) {
    if (changeMode.toggleAttribute){
        console.log(colormode)
    }
}

let count = 0;

function add() {
  count = count + 1;
  countEl.innerText = count;
  
  let result;
  if (count > 50) {
    result = alert("That's too many people omg PLEASE MAKE IT STOP");
    count = 0
    countEl.innerText = 0;
    
  } else {
    result = console.log('so far so good')
  }
}

function addTen() {
  count = count + 10;
  countEl.innerText = count;
  
  let result;
  if (count > 50) {
    result = alert("That's too many people omg PLEASE MAKE IT STOP");
    count = 0
    countEl.innerText = 0;
  } else {
    result = console.log('so far so good')
  }
}

function save() {
  previousCount.textContent = count;
  count = 0;
  countEl.innerText = 0;
}
