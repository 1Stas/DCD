let e1 = document.getElementById("num1");
let e2 = document.getElementById("num2");
let e3 = document.getElementById("num3");
let e4 = document.getElementById("num4");
let num1 = document.getElementById("num1").dataset.num;
let num2 = document.getElementById("num2").dataset.num;
let num3 = document.getElementById("num3").dataset.num;
let num4 = document.getElementById("num4").dataset.num;




document.addEventListener("scroll", function () {
	let positionElemNum1 = document.getElementById("num1").getBoundingClientRect().y;
	let positionElemNum2 = document.getElementById("num2").getBoundingClientRect().y;
	let positionElemNum3 = document.getElementById("num3").getBoundingClientRect().y;
	let positionElemNum4 = document.getElementById("num4").getBoundingClientRect().y;

	if (positionElemNum1 > 200 && positionElemNum1 <= 400) outNum(num1, e1);
	if (positionElemNum2 > 200 && positionElemNum2 <= 400) outNum(num2, e2);
	if (positionElemNum3 > 200 && positionElemNum3 <= 400) outNum(num3, e3);
	if (positionElemNum4 > 200 && positionElemNum4 <= 400) outNum(num4, e4);
});

function outNum(num, e) {
	const time = 2000;
	const step = 1;
	let n = 0;
	let t = Math.round(time / (num / step));
	let interval = setInterval(() => {
		n = n + step;
		if (n >= num) {
			clearInterval(interval);
		}
		e.innerHTML = n;
	}, t);
}














