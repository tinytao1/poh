




a1.addEventListener('change', function() {
	if (a1.checked == false) {
		acounter = 0;
	} else {acounter = 1;
	};
	document.getElementById('test').innerHTML = `inside listener acounter = ${acounter}`;
});

document.getElementById('test').innerHTML = `acounter = ${acounter}`;





























