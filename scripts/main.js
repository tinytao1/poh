

const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');

c1.addEventListener('change', function () {
	if (c1.checked == false || c1.checked == true) {
		c2.checked = false;
		c3.checked = false;
		c4.checked = false;
		c5.checked = false;
		c6.checked = false;
	}
})

c2.addEventListener('change', function () {
	if (c2.checked == true) {
		c1.checked = true;
		c3.checked = false;
		c4.checked = false;
		c5.checked = false;
		c6.checked = false;
	} else {
		c3.checked = false;
		c4.checked = false;
		c5.checked = false;
		c6.checked = false;
	}
})

c3.addEventListener('change', function () {
	if (c3.checked == true) {
		c1.checked = true;
		c2.checked = true;
		c4.checked = false;
		c5.checked = false;
		c6.checked = false;
	} else {
		c4.checked = false;
		c5.checked = false;
		c6.checked = false;
	}
})

c4.addEventListener('change', function () {
	if (c4.checked == true) {
		c1.checked = true;
		c2.checked = true;
		c3.checked = true;
		c5.checked = false;
		c6.checked = false;
	} else {
		c5.checked = false;
		c6.checked = false;
	}
})

c5.addEventListener('change', function () {
	if (c5.checked == true) {
		c1.checked = true;
		c2.checked = true;
		c3.checked = true;
		c4.checked = true;
		c6.checked = false;
	} else {
		c6.checked = false;
	}
})

c6.addEventListener('change', function () {
	if (c6.checked == true) {
		c1.checked = true;
		c2.checked = true;
		c3.checked = true;
		c4.checked = true;
		c5.checked = true;
	}
})





