'use strict'

const LENGTH = 10; // length of ARRAY

window.onload = (event) => {
    let generateBtn = document.getElementById('generateRandom');
    let generateCBtn = document.getElementById('generateC');
    let swapBtn = document.getElementById('swap');
    let sortBtn = document.getElementById('sort');

    let cSwapForm = document.getElementById('Swap');
    let cSortForm = document.getElementById('Sort');
    let aForm = document.getElementById('A');
    let bForm = document.getElementById('B');
    let cForm = document.getElementById('C');
    

    let a = [];
    let b = [];
    let c = [];

    generateBtn.addEventListener('click', () =>{
        a = generateRandomArray(10, -10);
        b = generateRandomArray(10, -10);
        aForm.innerText = "";
        bForm.innerText = "";
        for(let i = 0; i < LENGTH; i++){
            aForm.append(`${a[i]} `);
            bForm.append(`${b[i]} `);
        }
    });

    generateCBtn.addEventListener('click', () => {
        cForm.innerText = "";
        c = makeCArray(a, b);
        console.log(c);
        for(let i = 0; i < LENGTH; i++){
            cForm.append(`${c[i]} `);
        }
    });

    swapBtn.addEventListener('click', () => {
        swapMaxAndFirstNum(c);
        cSwapForm.innerText = "";
        for(let i = 0; i < LENGTH; i++){
            cSwapForm.append(`${c[i]} `);
        }
    });

    sortBtn.addEventListener('click', () => {
        sortArrayByBulb(c);
        cSortForm.innerText = "";
        console.log(c);
        for(let i = 0; i < LENGTH; i++){
            cSortForm.append(`${c[i]} `);
        }
    });

};

// Генерирует массив с рандомными числами в заданом диапазоне
function generateRandomArray(max, min){
    let array = [LENGTH];
    for(let i = 0; i < LENGTH; i++){
        array[i] = Math.floor(min + Math.random() * (max - min));
    }
    console.log(array);
    return array;
}

// Наполняет массив "C" за заданной функцией в лабараторней роботе 
function makeCArray(firstArray, secondArray){
    let cArray = [LENGTH];
    for(let i = 0; i < LENGTH; i++){
        if(firstArray[i] === secondArray[i]){
            cArray[i] = 1;
        }
        else{
            cArray[i] = +(1 / (firstArray[i] - secondArray[i])).toFixed(2);
        }
    }
    return cArray;
}

// Меняет первый и максимальный элементы в массиве
function swapMaxAndFirstNum(array){
    let indexOfMaxValue = indexOfMaxValueArray(array);
    let max = array[indexOfMaxValue];

    array[indexOfMaxValue] = array[0];
    array[0] = max;
}

// Определяет индекс максимально элемента массива
function indexOfMaxValueArray(array){
    let max = array[0];
    let maxIndex = 0;
    for(let i = 1; i < LENGTH; i++){
        if(max < array[i]){
            max = array[i];
            maxIndex = i;
        }
    }
    console.log(max);
    return maxIndex;
}

// Сортирует массив методом "Пузырька"
function sortArrayByBulb(array){
    for (let i = 0; i < LENGTH - 1; i++) {
        for (let j = 0; j < LENGTH - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}