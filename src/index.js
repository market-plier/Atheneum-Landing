import './style.css';
import "./style.scss";

import { Modal } from 'bootstrap';

var isFirstShowCall = false;
// window.addEventListener('DOMContentLoaded', (_event) => {
//     document.querySelector('#thankYouPopUp').addEventListener('show.bs.modal', function (e) {
//         debugger;
//         isFirstShowCall = !isFirstShowCall; // Prevents an endless recursive call
//         if (isFirstShowCall) {
//             e.preventDefault(); // Prevent immediate opening
//             window.setTimeout(function () {
//                 const myModalAlternative = new Modal('#thankYouPopUp');
//                 myModalAlternative.show();
//             }, 3000)
//         }
//     });
// });
document.querySelector('#closeBtn').addEventListener('click', closeMenu);
document.querySelectorAll('nav a').forEach(x => x.addEventListener('click', closeMenu));

function closeMenu(){
    document.querySelector('.burger-menu').classList.add('opacity-0', 'invisible');
    document.querySelector('#wrapper').attributeStyleMap.clear();
}
