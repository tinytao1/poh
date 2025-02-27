const cb1 = document.getElementById('cb1');
const cb2 = document.getElementById('cb2');
const cb3 = document.getElementById('cb3');
const cb4 = document.getElementById('cb4');

cb2.addEventListener('change', function() {
	if (cb1.checked == true) {
		cb1.checked = false;
    } else {cb1.checked = true;
    }
}
)

cb3.addEventListener('change', function() {
	if (cb1.checked == true) {
		cb1.checked = false;
        cb2.checked = false;
    } else {cb1.checked = true;
    		cb2.checked = true;
    }
}
)

cb4.addEventListener('change', function() {
	if (cb1.checked == true) {
		cb1.checked = false;
        cb2.checked = false;
        cb3.checked = false;
    } else {cb1.checked = true;
    		cb2.checked = true;
    		cb3.checked = true;
    }
}
)
