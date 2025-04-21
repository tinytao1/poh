"use strict";

let CDS = 'April 21 2025';
let CTS = 'Monday 2:00 AM';

document.getElementById('committed')
.innerHTML = `version: ${CDS}<br />${CTS}.`;

uncheckalltop.addEventListener('click', uncheckallloop);
uncheckallbtm.addEventListener('click', uncheckallloop);


