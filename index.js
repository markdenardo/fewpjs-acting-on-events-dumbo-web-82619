// Your code here
let doger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.left;
dodger.style.bottom;

document.addEventListener("keydown", function(e){
  console.log(e.key);

  if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    // let leftNumbers = dodger.style.left.replace("px", "");
    // let left = parseInt(leftNumbers, 10);
    // dodger.style.left = `${left - 10}px`
  }

})

document.addEventListener("keydown", function(e){

    if (e.key === "ArrowRight") {
      moveDodgerRight();
      // let leftNumbers = dodger.style.left.replace("px", "");
      // let left = parseInt(leftNumbers, 10);
      // dodger.style.left = `${left + 10}px`
    }

})

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}
