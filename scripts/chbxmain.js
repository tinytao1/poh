

let CDS = '3/1/2025';
let CTS = '3:34 PM';

document.getElementById('committed')
.innerHTML = `committed: ${CDS}` + <br /> + `${CTS}.`;

a1.addEventListener('change', function() {
	if (a1.checked == true) {
		acounter = 1;
		document.getElementById('test').innerHTML = `acounter = ${acounter}`;
	} else {
		acounter = 0;
		a2.checked = false;
		a3.checked = false;
		a4.checked = false;
		a5.checked = false;
		a6.checked = false;
		document.getElementById('test').innerHTML = `acounter = ${acounter}`;
	}
});

a2.addEventListener('change', function() {
	if (a2.checked == true) {
		acounter = 2;
		document.getElementById('test').innerHTML = `acounter = ${acounter}`;
	} else if (a1.checked == true) {
		acounter = 1;
		a2.checked = false;
		a3.checked = false;
		a4.checked = false;
		a5.checked = false;
		a6.checked = false;
		document.getElementById('test').innerHTML = `acounter = ${acounter}`;
	} else {
		acounter = 0;
		document.getElementById('test').innerHTML = `acounter = ${acounter}`;

	}

});






























