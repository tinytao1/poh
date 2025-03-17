
function checkbox1of6(id1,id2,id3,id4,id5,id6,counterrownumber) {
	if (id1.checked == true) {
		counterrownumber = 1;
		demo.innerHTML = counterrownumber;
	} else if (id1.checked == false && id2.checked == true) {
		counterrownumber=1;
		id3.checked = false;
		id1.checked= true;
		id4.checked = false;
		id2.checked = false;
		id5.checked = false;
		id6.checked = false;
		demo.innerHTML = counterrownumber;
	} else {
		counterrownumber=0;
		demo.innerHTML = counterrownumber;
	}
}

function checkbox2of6(id1,id2,id3,id4,id5,id6,counterrownumber) {
	if (id2.checked == true) {
		counterrownumber=2;
		id1.checked = true;
		demo.innerHTML = counterrownumber;
	} else if (id2.checked == false && id3.checked == true ) {
		counterrownumber=2;
		id2.checked=true;
		id3.checked = false;
		id4.checked = false;
		id5.checked = false;
		id6.checked = false;
		demo.innerHTML = counterrownumber;
	} else {
		counterrownumber = 0;
		id1.checked = false;
		demo.innerHTML = counterrownumber;
	}
}

function checkbox3of6(id1,id2,id3,id4,id5,id6,counterrownumber) {
	if (id3.checked == true) {
		counterrownumber=3;
		id1.checked = true;
		id2.checked = true; 
		demo.innerHTML = counterrownumber;
	} else if (id3.checked == false && id4.checked == true ) {
		counterrownumber=3;
		id3.checked=true;
		id4.checked = false;
		id5.checked = false;
		id6.checked = false;
		demo.innerHTML = counterrownumber;
	} else {
		counterrownumber=0;
		id1.checked = false;
		id2.checked = false; 
		demo.innerHTML = counterrownumber;
	}
}
function checkbox4of6(id1,id2,id3,id4,id5,id6,counterrownumber) {
	if (id4.checked == true) {
		counterrownumber=4;
		id1.checked = true;
		id2.checked = true;
		id3.checked = true;
		demo.innerHTML = counterrownumber;
	} else if (id4.checked == false && id5.checked == true ) {
		counterrownumber=4;
		id4.checked = true;
		id5.checked = false;
		id6.checked = false;
		demo.innerHTML = counterrownumber;
	} else {
		counterrownumber = 0;
		id1.checked = false;
		id2.checked = false;
		id3.checked = false;
		demo.innerHTML = counterrownumber;
	}
}
function checkbox5of6(id1,id2,id3,id4,id5,id6,counterrownumber) {
	if (id5.checked == true) {
		counterrownumber=5;
		id1.checked = true;
		id2.checked = true;
		id3.checked = true;
		id4.checked = true;
		demo.innerHTML = counterrownumber;
	} else if (id5.checked == false && id6.checked == true ) {
		counterrownumber=5;
		id5.checked = true;
		id6.checked = false;
		demo.innerHTML = counterrownumber;
	} else {
        counterrownumber = 0;
		id1.checked = false;
		id2.checked = false;
		id3.checked = false;
		id4.checked = false;
		demo.innerHTML = counterrownumber;
	}
}
function checkbox6of6(id1,id2,id3,id4,id5,id6,counterrownumber) {
	if (id6.checked == true) {
		counterrownumber=6;
		id1.checked = true;
		id2.checked = true;
		id3.checked = true;
		id4.checked = true;
		id5.checked = true;
		demo.innerHTML = counterrownumber;
	} else {
		counterrownumber = 0;
		id1.checked = false;
		id2.checked = false;
		id3.checked = false;
		id4.checked = false;
		id5.checked = false;
		demo.innerHTML = counterrownumber;
	}
}
