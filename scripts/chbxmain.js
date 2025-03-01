




a1.addEventListener('change', function() {
	if (a1.checked == true) {
		acounter = 1;
		document.getElementById('test').innerHTML = `acounter = ${acounter}`;

	} else {
		acounter = 0;
		document.getElementById('test').innerHTML = `acounter = ${acounter}`;

	}
});

document.getElementById('test').innerHTML = `acounter = ${acounter}`;





























