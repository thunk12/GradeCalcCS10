// JavaScript Code

function calculate() {
  //Input
  let grade1 = +document.getElementById("box1").value;
  let grade2 = +document.getElementById("box2").value;
  let grade3 = +document.getElementById("box3").value;
  let grade4 = +document.getElementById("box4").value;
  let grade5 = +document.getElementById("box5").value;

  //Process
  let pretotal = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;
  let total = pretotal.toFixed(1);

  //Output
  document.getElementById("output").innerHTML = total;
}
//Button
document.getElementById("CalcButton").addEventListener("click", calculate);
