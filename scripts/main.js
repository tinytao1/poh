"use strict";

let CTS = 'Thursday 3:58 PM';
let CDS = '4/24/2025'; /* April 24 2025 */

document.getElementById('committed')
.innerHTML = `version: ${CTS}<br />${CDS}.`;

uncheckalltop.addEventListener('click', uncheckallloop);
uncheckallbtm.addEventListener('click', uncheckallloop);


