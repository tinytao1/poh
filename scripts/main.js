





let CDS = '3/17/2025';
let CTS = '6:40 PM - Tuesday';

document.getElementById('committed')
.innerHTML = `committed: ${CDS}<br />${CTS}.`;

uncheckalltop.addEventListener('click', uncheckallloop);
uncheckallbtm.addEventListener('click', uncheckallloop);

a1.addEventListener('change', function() {
	if (a1.checked == true) {
		acounter = 1;
		a2.checked = false;
		a3.checked = false;
		a4.checked = false;
		a5.checked = false;
		a6.checked = false;
		document.getElementById('test').innerHTML = `${acounter}`;
	} else {
		acounter = 0;
		a2.checked = false;
		a3.checked = false;
		a4.checked = false;
		a5.checked = false;
		a6.checked = false;
		document.getElementById('test').innerHTML = `${acounter}`;
	}
});

a2.addEventListener('change', function() {
	if (a2.checked == true) {
		acounter = 2;
		a1.checked = true;
		a3.checked = false;
		a4.checked = false;
		a5.checked = false;
		a6.checked = false;
		document.getElementById('test').innerHTML = `${acounter}`;
	} else {
		acounter = 0;
		a1.checked = false;
		a3.checked = false;
		a4.checked = false;
		a5.checked = false;
		a6.checked = false;
		document.getElementById('test').innerHTML = `${acounter}`;
	}
});

a3.addEventListener('change', function() {
	if (a3.checked == true) {
		acounter = 3;
		a1.checked = true;
		a2.checked = true;
		a4.checked = false;
		a5.checked = false;
		a6.checked = false;
		document.getElementById('test').innerHTML = `${acounter}`;
	} else {
		acounter = 0;
		a1.checked = false;
		a2.checked = false;
		a4.checked = false;
		a5.checked = false;
		a6.checked = false;
		document.getElementById('test').innerHTML = `${acounter}`;
	}
});

a4.addEventListener('change', function() {
	if (a4.checked == true) {
		acounter = 4;
		a1.checked = true;
		a2.checked = true;
		a3.checked = true;
		a5.checked = false;
		a6.checked = false;
		document.getElementById('test').innerHTML = `${acounter}`;
	} else {
		acounter = 0;
		a1.checked = false;
		a2.checked = false;
		a3.checked = false;
		a5.checked = false;
		a6.checked = false;
		document.getElementById('test').innerHTML = `${acounter}`;
	}
});

a5.addEventListener('change', function() {
	if (a5.checked == true) {
		acounter = 5;
		a1.checked = true;
		a2.checked = true;
		a3.checked = true;
		a4.checked = true;
		a6.checked = false;
		document.getElementById('test').innerHTML = `${acounter}`;
	} else {
		acounter = 0;
		a1.checked = false;
		a2.checked = false;
		a3.checked = false;
		a4.checked = false;
		a6.checked = false;
		document.getElementById('test').innerHTML = `${acounter}`;
	}
});

a6.addEventListener('change', function() {
	if (a6.checked == true) {
		acounter = 6;
		a1.checked = true;
		a2.checked = true;
		a3.checked = true;
		a4.checked = true;
		a5.checked = true;
		document.getElementById('test').innerHTML = `${acounter}`;
	} else {
		acounter = 0;
		a1.checked = false;
		a2.checked = false;
		a3.checked = false;
		a4.checked = false;
		a5.checked = false;
		document.getElementById('test').innerHTML = `${acounter}`;
	}
});





















