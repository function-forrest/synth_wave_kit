console.log("hi hi");

let buttons = document.querySelectorAll(".drums");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function handleClick() {
  let key = this.innerHTML.toLowerCase();
  console.log(key);
  playSound(key);
}

function playSound(key) {
  switch (key) {
    case "a":
      const beat = new Audio("sounds/lofi-beat_70bpm.wav");
      beat.play();
      break;
    case "s":
      const kick = new Audio("sounds/lofi-kick.wav");
      kick.play();
      break;
    case "d":
      const piano = new Audio("sounds/lofi-piano_50bpm.wav");
      piano.play();
      break;
    case "f":
      const rim = new Audio("sounds/lofi-rim.wav");
      rim.play();
      break;
    case "j":
      const synth = new Audio("sounds/lofi-synth_80bpm.wav");
      synth.play();
      break;
  }
}

document.addEventListener("keydown", function (event) {
  let key = event.key;

  playSound(key);
  document.querySelector(`.${key}`).classList.add("pressed");
  setTimeout(() => {
    document.querySelector(`.${key}`).classList.remove("pressed");
  }, 100);
});
