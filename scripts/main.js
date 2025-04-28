"use strict";

let CTS = '4/28/2025 12:30 PM, Monday';
let CDS = ''; /* April 24 2025 */

document.getElementById('committed')
.innerHTML = `version: ${CTS}<br />${CDS}.`;

uncheckalltop.addEventListener('click', uncheckallloop);
uncheckallbtm.addEventListener('click', uncheckallloop);


