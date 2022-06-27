//TODO
//get the ball to respond to a click by adding an event listener to its id

let ball = document.getElementById("ball");
let CURRENTYPOS = 1;
let CURRENTXPOS = 50;
ball.addEventListener("click", function () {
  let maxHeight = CURRENTYPOS + 25;
  let beginningHeight = CURRENTYPOS;
  let hasReachedMax = false;
  interval = setInterval(function () {
    if (CURRENTYPOS <= maxHeight && hasReachedMax === false) {
      CURRENTYPOS++;
      ball.style.bottom = `${CURRENTYPOS}%`;
    } else {
      CURRENTYPOS--;
      ball.style.bottom = `${CURRENTYPOS}%`;
      hasReachedMax = true;
    }
    if (CURRENTYPOS === beginningHeight) {
      clearInterval(interval);
    }
  }, 15);
});
// add a momentum system to simulate bounces and hitting peaks

const momentum = (input) => {};
