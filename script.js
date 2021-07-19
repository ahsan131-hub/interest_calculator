var slider = document.getElementById("slide_rate");
var slider_output = document.getElementById("slider_output");
console.log("hello");
slider_output.innerHTML = slider.value;
console.log(slider_output.innerHTML);
slider.oninput = () => {
  slider_output.innerText = slider.value;
  console.log("changing");
  event.preventDefault();
};
function compute(event) {
  event.preventDefault();
  p = document.getElementById("principal").value;
  const amount = parseInt(p);
  const rate = parseFloat(slider_output.innerText);
  const year = parseInt(document.getElementById("selectNumber").value);
  const totalPaidInterest = amount * rate * year;
  document.getElementById("result").innerHTML =
    document.getElementById("result").innerText + totalPaidInterest;
}
