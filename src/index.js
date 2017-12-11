import Button from './classes/button';
import './style.css';
import json from './test.json';

let baton = new Button();

let btn = document.getElementById('btn');

btn.addEventListener('click', baton.proceed);
btn.addEventListener('click', baton.vypilitsa);
