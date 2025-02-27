const cb1 = document.getElementById('cb1');
const cb2 = document.getElementById('cb2');
const cb3 = document.getElementById('cb3');
const cb4 = document.getElementById('cb4');

cb2.addEventListener('click', function() {
	if (cb1.checked == true) {
		cb1.checked = false;
    } else {cb1.checked = true;
    }
}
)
