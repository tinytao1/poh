"use strict";
/* function displayitem(counterrow, itemamount) {
         itemtotal = counterrow * itemamaount;
	} */

/* POH
A. itemanameel, itemaamaountel
A. Checkboxes
Display. viewdivtitleel
Display. itemadisplaynameel, itemadisplaynumberel
*/
function displayitema() {
        itematotal = counterrowa * Number(itemaamountel.value);
	itemadisplaynumberel.innerHTML = itematotal; //`<strong>${itematotal}</strong>`;  
	itemadisplaynameel.innerHTML = itemanameel.value; //`<strong>${itemanameel.value}</strong>`;
	itemadisplayrowel.style.display = "block";
	viewdivtitleel.style.display = "none";
	}
function displayitemb() {
        itembtotal = counterrowb * Number(itembamountel.value);
	itembdisplaynumberel.innerHTML = itembtotal;  //`<strong>${itembtotal}</strong>`;
	itembdisplaynameel.innerHTML = itembnameel.value; // `<strong>${itembnameel.value}</strong>`;
	itembdisplayrowel.style.display = "block";
	viewdivtitleel.style.display = "none";
	}
function displayitemc() {
        itemctotal = counterrowc * Number(itemcamountel.value);
	itemcdisplaynumberel.innerHTML = itemctotal; // `<strong>${itemctotal}</strong>`;
	itemcdisplaynameel.innerHTML = itemcnameel.value; // `<strong>${itemcnameel.value}</strong>`;
	itemcdisplayrowel.style.display = "block";
	viewdivtitleel.style.display = "none";
	}
function displayitemd() {
        itemdtotal = counterrowd * Number(itemdamountel.value);
	itemddisplaynumberel.innerHTML = itemdtotal; // `<strong>${itemdtotal}</strong>`;
	itemddisplaynameel.innerHTML = itemdnameel.value; // `<strong>${itemdnameel.value}</strong>`;
	itemddisplayrowel.style.display = "block";
	viewdivtitleel.style.display = "none";
	}
function displayiteme() {
        itemetotal = counterrowe * Number(itemeamountel.value);
	itemedisplaynumberel.innerHTML = itemetotal; // `<strong>${itemetotal}</strong>`;
	itemedisplaynameel.innerHTML = itemenameel.value; // `<strong>${itemenameel.value}</strong>`;
	itemedisplayrowel.style.display = "block";
	viewdivtitleel.style.display = "none";
	}
function displayitemf() {
        itemftotal = counterrowf * Number(itemfamountel.value);
	itemfdisplaynumberel.innerHTML = itemftotal; // `<strong>${itemftotal}</strong>`;
	itemfdisplaynameel.innerHTML = itemfnameel.value; // `<strong>${itemfnameel.value}</strong>`;
	itemfdisplayrowel.style.display = "block";
	viewdivtitleel.style.display = "none";
	}
function displayitemg() {
        itemgtotal = counterrowg * Number(itemgamountel.value);
	itemgdisplaynumberel.innerHTML = itemgtotal; // `<strong>${itemgtotal}</strong>`;
	itemgdisplaynameel.innerHTML = itemgnameel.value;  // `<strong>${itemgnameel.value}</strong>`;
	itemgdisplayrowel.style.display = "block";
	viewdivtitleel.style.display = "none";
	}
function displayitemh() {
        itemhtotal = counterrowh * Number(itemhamountel.value);
	itemhdisplaynumberel.innerHTML = itemhtotal;  // `<strong>${itemhtotal}</strong>`;
	itemhdisplaynameel.innerHTML = itemhnameel.value;  //`<strong>${itemhnameel.value}</strong>`;
	itemhdisplayrowel.style.display = "block";
	viewdivtitleel.style.display = "none";
	}
function displayitemi() {
        itemitotal = counterrowi * Number(itemiamountel.value);
	itemidisplaynumberel.innerHTML = itemitotal;  // `<strong>${itemitotal}</strong>`;
	itemidisplaynameel.innerHTML = iteminameel.value; // `<strong>${iteminameel.value}</strong>`;
	itemidisplayrowel.style.display = "block";
	viewdivtitleel.style.display = "none";
	}
function displayitemj() {
        itemjtotal = counterrowj * Number(itemjamountel.value);
	itemjdisplaynumberel.innerHTML = itemjnameel.value;  // `<strong>${itemjtotal}</strong>`;
	itemjdisplaynameel.innerHTML = itemjnameel.value; // `<strong>${itemjnameel.value}</strong>`;
	itemjdisplayrowel.style.display = "block";
	viewdivtitleel.style.display = "none";
	}


function getrowatotal() {
	counterrowa = Number(counterrowael.innerHTML);
	return counterrowa;
}
function getrowbtotal() {
	counterrowb = Number(counterrowbel.innerHTML);
	return counterrowb;
}
function getrowctotal() {
	counterrowc = Number(counterrowcel.innerHTML);
	return counterrowc;
}
function getrowdtotal() {
	counterrowd = Number(counterrowdel.innerHTML);
	return counterrowd;
}
function getrowetotal() {
	counterrowe = Number(counterroweel.innerHTML);
	return counterrowe;
}
function getrowftotal() {
	counterrowf = Number(counterrowfel.innerHTML);
	return counterrowf;
}
function getrowgtotal() {
	counterrowg = Number(counterrowgel.innerHTML);
	return counterrowg;
}
function getrowhtotal() {
	counterrowh = Number(counterrowhel.innerHTML);
	return counterrowh;
}
function getrowitotal() {
	counterrowi = Number(counterrowiel.innerHTML);
	return counterrowi;
}
function getrowjtotal() {
	counterrowj = Number(counterrowjel.innerHTML);
	return counterrowj;
}


function checkbox1of6(id1,id2,id3,id4,id5,id6,counterrow,counterrowel,itemdisplayrowel) {
	if (id1.checked == true) {
		counterrow = 1;
		counterrowel.innerHTML = counterrow;
		return counterrow;
	} else if (id1.checked == false && id2.checked == true) {
		counterrow=1;
		id3.checked = false;
		id1.checked= true;
		id4.checked = false;
		id2.checked = false;
		id5.checked = false;
		id6.checked = false;
		counterrowel.innerHTML = counterrow;
		return counterrow;
	} else {
		counterrow=0;
		counterrowel.innerHTML = counterrow;
		itemdisplayrowel.style.display = "none";
		return counterrow;
	}}

function checkbox2of6(id1,id2,id3,id4,id5,id6,counterrow,counterrowel,itemdisplayrowel) {
	if (id2.checked == true) {
		id1.checked = true;
		counterrow=2;
		counterrowel.innerHTML = counterrow;
		return counterrow;
	} else if (id2.checked == false && id3.checked == true ) {
		counterrow=2;
		id2.checked=true;
		id3.checked = false;
		id4.checked = false;
		id5.checked = false;
		id6.checked = false;
		counterrowel.innerHTML = counterrow;
		return counterrow;
	} else {
		counterrow = 0;
		id1.checked = false;
		counterrowel.innerHTML = counterrow;
		itemdisplayrowel.style.display = "none";
		return counterrow;
	}}

function checkbox3of6(id1,id2,id3,id4,id5,id6,counterrow,counterrowel,itemdisplayrowel) {
	if (id3.checked == true) {
		counterrow=3;
		id1.checked = true;
		id2.checked = true; 
		counterrowel.innerHTML = counterrow;
		return counterrow;
	} else if (id3.checked == false && id4.checked == true ) {
		counterrow=3;
		id3.checked=true;
		id4.checked = false;
		id5.checked = false;
		id6.checked = false;
		counterrowel.innerHTML = counterrow;
		return counterrow;
	} else {
		counterrow=0;
		id1.checked = false;
		id2.checked = false; 
		counterrowel.innerHTML = counterrow;
		itemdisplayrowel.style.display = "none";
		return counterrow;
	}}
function checkbox4of6(id1,id2,id3,id4,id5,id6,counterrow,counterrowel,itemdisplayrowel) {
	if (id4.checked == true) {
		counterrow=4;
		id1.checked = true;
		id2.checked = true;
		id3.checked = true;
		counterrowel.innerHTML = counterrow;
		return counterrow;
	} else if (id4.checked == false && id5.checked == true ) {
		counterrow=4;
		id4.checked = true;
		id5.checked = false;
		id6.checked = false;
		counterrowel.innerHTML = counterrow;
		return counterrow;
	} else {
		counterrow = 0;
		id1.checked = false;
		id2.checked = false;
		id3.checked = false;
		counterrowel.innerHTML = counterrow;
		itemdisplayrowel.style.display = "none";
		return counterrow;
	}}
function checkbox5of6(id1,id2,id3,id4,id5,id6,counterrow,counterrowel,itemdisplayrowel) {
	if (id5.checked == true) {
		counterrow=5;
		id1.checked = true;
		id2.checked = true;
		id3.checked = true;
		id4.checked = true;
		counterrowel.innerHTML = counterrow;
		return counterrow;
	} else if (id5.checked == false && id6.checked == true ) {
		counterrow=5;
		id5.checked = true;
		id6.checked = false;
		counterrowel.innerHTML = counterrow;
		return counterrow;
	} else {
  		counterrow = 0;
		id1.checked = false;
		id2.checked = false;
		id3.checked = false;
		id4.checked = false;
		counterrowel.innerHTML = counterrow;
		itemdisplayrowel.style.display = "none";
		return counterrow;
	}}
function checkbox6of6(id1,id2,id3,id4,id5,id6,counterrow,counterrowel,itemdisplayrowel) {
	if (id6.checked == true) {
		counterrow=6;
		id1.checked = true;
		id2.checked = true;
		id3.checked = true;
		id4.checked = true;
		id5.checked = true;
		counterrowel.innerHTML = counterrow;
		return counterrow;
	} else {
		counterrow = 0;
		id1.checked = false;
		id2.checked = false;
		id3.checked = false;
		id4.checked = false;
		id5.checked = false;
		counterrowel.innerHTML = counterrow;
		itemdisplayrowel.style.display = "none";
		return counterrow;
	}}

function uncheckallloop() {
	for (var i = 0; i < allcheckboxesarray.length; i++) {
		allcheckboxesarray[i].checked = false;
		if (i == allcheckboxesarray.length - 1) {
			counterproducetotal = 0;
			counterproducetotalel.innerHTML = 0;
			counterrowael.innerHTML = 0;
			counterrowbel.innerHTML = 0;
			counterrowcel.innerHTML = 0;
			counterrowdel.innerHTML = 0;
			counterroweel.innerHTML = 0;
			counterrowfel.innerHTML = 0;
			counterrowgel.innerHTML = 0;
			counterrowhel.innerHTML = 0;
			counterrowiel.innerHTML = 0;
			counterrowjel.innerHTML = 0;
			getrowatotal();
			getrowbtotal();
			getrowctotal();
			getrowdtotal();
			getrowetotal();
			getrowftotal();
			getrowgtotal();
			getrowhtotal();
			getrowitotal();
			getrowjtotal();
			viewdivtitleel.style.display = 'block';
			itemadisplayrowel.style.display = "none";
			itembdisplayrowel.style.display = "none";
			itemcdisplayrowel.style.display = "none";
			itemddisplayrowel.style.display = "none";
			itemedisplayrowel.style.display = "none";
			itemfdisplayrowel.style.display = "none";
			itemgdisplayrowel.style.display = "none";
			itemhdisplayrowel.style.display = "none";
			itemidisplayrowel.style.display = "none";
			itemjdisplayrowel.style.display = "none";
			// calculateproducetotal();
		}}}
function calculateproducetotal() {
	let rowA=Number(counterrowael.innerHTML);
	let rowB=Number(counterrowbel.innerHTML);
	let rowC=Number(counterrowcel.innerHTML);
	let rowD=Number(counterrowdel.innerHTML);
	let rowE=Number(counterroweel.innerHTML);
	let rowF=Number(counterrowfel.innerHTML);
	let rowG=Number(counterrowgel.innerHTML);
	let rowH=Number(counterrowhel.innerHTML);
	let rowI=Number(counterrowiel.innerHTML);
	let rowJ=Number(counterrowjel.innerHTML);
	let total = rowA+rowB+rowC+rowD+rowE+rowF+rowG+rowH+rowI+rowJ;
	document.getElementById('counterproducetotalel').innerHTML = total;
	return total;
}

/*
UNCHECK ALL STATEMENTS
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
*/
