"use strict";


function displayitem(counterrow_, counterrow_el, item_total, item_amountel, item_displaynumberel, item_displaynameel, item_nameel, item_displayrowel) {
	counterrow_ = Number(counterrow_el.innerHTML);
	item_total = counterrow_ * Number(item_amountel.value);
	item_displaynumberel.innerHTML = item_total;
	item_displaynameel.innerHTML = item_nameel.value;
	item_displayrowel.style.display = "block";
	viewdivtitleel.style.display = "none";
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

