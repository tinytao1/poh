





let CDS = '3/15/2025';
let CTS = '11:25 AM';

document.getElementById('committed')
.innerHTML = `committed: ${CDS}<br />${CTS}.`;

uncheckalltop.addEventListener('click', uncheckall);
uncheckallbtm.addEventListener('click', uncheckall);



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



function uncheckall() {
  a1.checked = false;
		a2.checked = false;
		a3.checked = false;
		a4.checked = false;
		a5.checked = false;
		a6.checked = false;
		
		b1.checked = false;
		b2.checked = false;
		b3.checked = false;
		b4.checked = false;
		b5.checked = false;
		b6.checked = false;
		
		c1.checked = false;
		c2.checked = false;
		c3.checked = false;
		c4.checked = false;
		c5.checked = false;
		c6.checked = false;
		
		d1.checked = false;
		d2.checked = false;
		d3.checked = false;
		d4.checked = false;
		d5.checked = false;
		d6.checked = false;
		
		e1.checked = false;
		e2.checked = false;
		e3.checked = false;
		e4.checked = false;
		e5.checked = false;
		e6.checked = false;
		
		f1.checked = false;
		f2.checked = false;
		f3.checked = false;
		f4.checked = false;
		f5.checked = false;
		f6.checked = false;
		
		g1.checked = false;
		g2.checked = false;
		g3.checked = false;
		g4.checked = false;
		g5.checked = false;
		g6.checked = false;
		
		h1.checked = false;
		h2.checked = false;
		h3.checked = false;
		h4.checked = false;
		h5.checked = false;
		h6.checked = false;
		
		i1.checked = false;
		i2.checked = false;
		i3.checked = false;
		i4.checked = false;
		i5.checked = false;
		i6.checked = false;
		
		j1.checked = false;
		j2.checked = false;
		j3.checked = false;
		j4.checked = false;
		j5.checked = false;
		j6.checked = false;
}



















