'use strict'

window.onload = (event) => {

    let boldBtn = document.getElementById('bold');
    let italicBtn = document.getElementById('italic');
    let underBtn = document.getElementById('under');
    let regBtn = document.getElementById('reg');
    let colorBtn = document.getElementById('color');
    let text = document.getElementById('text');

    boldBtn.addEventListener('click', () => {
        if(text.style.fontWeight == 'bold'){
            text.style.fontWeight = 'normal';
            boldBtn.style.backgroundColor = 'lightgray';
        }
        else{
            text.style.fontWeight = 'bold';
            boldBtn.style.backgroundColor = 'wheat';
        }
    });

    italicBtn.addEventListener('click', () => {
        if(text.style.fontStyle == 'italic'){
            text.style.fontStyle = 'normal';
            italicBtn.style.backgroundColor = 'lightgray';
        }
        else{
            text.style.fontStyle = 'italic';
            italicBtn.style.backgroundColor = 'wheat';
        }
    });

    underBtn.addEventListener('click', () => {
        if(text.style.textDecoration == 'underline'){
            text.style.textDecoration = 'none';
            underBtn.style.backgroundColor = 'lightgray';
        }
        else{
            text.style.textDecoration = 'underline';
            underBtn.style.backgroundColor = 'wheat';
        }
    });

    regBtn.addEventListener('click', () => {
        if(text.style.textTransform == 'uppercase'){
            text.style.textTransform = 'none';
            regBtn.style.backgroundColor = 'lightgray';
        }
        else{
            text.style.textTransform = 'uppercase';
            regBtn.style.backgroundColor = 'wheat';
        }
    });

    colorBtn.addEventListener('change', (event) => {
        text.style.color = event.target.value;
    });

};