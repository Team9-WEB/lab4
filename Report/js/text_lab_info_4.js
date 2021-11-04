function meta_4() {
    const text = `<h1>Тема, Мета</h1>
        <p>Тема : ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ.КЛАСИ,ОБ’ЄКТИ, ФУНКЦІЇ,  В МОВІ JAVASCRIPT. ПОДІЇ ТА ОБРОБКА ПОДІЙ.ПРОГРАМНА ВЗАЄМОДІЯ З HTML ДОКУМЕНТАМИ НА ОСНОВІ DOM АРІ.</p>
        <p>Мета : придбати практичні навички роботи маніпулювання інформаційним вмістом Web-документа засобами мови Javasсript, використання об’єктів,масивів, функцій, подій, обробників подій у сценаріях на мові JavaScript</p>`;
    changeText(text);
}

function vlad4() {
    const text = `<h1>Влад</h1>
        <h2>Завдання 1:</h2>
        <img src="lab_img/task1V4.png">
        <div style="text-align: left">
            <h4>Сортування бульбашкою</h4>
            <p style="text-align: left">Алгоритм дуже простий, і як зазвичай буває в цьому світі, простота та ефективність алгоритмів є зворотньо пропорційними величинами. Тому обчислювальна складність цього алгоритму виглядає наступним чином:  
</p><h4>Короткий опис алгоритму:</h4>
      <p style="text-align: left">Він послідовно порівнює значення сусідніх елементів і міняє їх місцями, якщо наступне виявляється меншим за попереднє. Таким чином, елементи з найбільшим значенням опиняються в кінці масиву. На малюнку нижче наведено Java-код цього алгоритму.</p>
        </div>
        <h2>Результат:</h2>
        <img src="lab_img/result1V4.png">
        <h3>HTML:</h3>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Task-1</title>
            <link rel="stylesheet" href="css/style.css">
        </head>
        <body>
            <p class="label">Масив A:</p>
            <div class="form_array" id="A"></div>

            <p class="label">Масив B:</p>
            <div class="form_array" id="B"></div>

            <button id="generateRandom">Клікни</button>

            <p class="label">Масив С:</p>
            <div class="form_array" id="C"></div>

            <button id="generateC">Тепер сюди</button>

            <p class="label">Масив С поміняний:</p>
            <div class="form_array" id="Swap"></div>

            <button id="swap">Ти правильно думаєш</button>

            <p class="label">Масив С відсортований:</p>
            <div class="form_array" id="Sort"></div>

            <button id="sort">Фінальний акорд</button>
        </body>
        <script src="js/main.js" ></script>
        </html>
        </xmp>
        <h3>CSS:</h3>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        body{
            font-size: 16pt;
            font-family: "Trebuchet MS";
            display: flex;
            align-items: center;
            flex-direction: column;
        }
        
        .form_array{
            height: 30px;
            width: 550px;
            font-weight: bold;
            background-color: bisque;
            text-align: center;
            vertical-align: middle;
            padding: 10px;
        }

        button{
            margin: 10px;
            padding: 10px;
            width: 200px;
        }
        </xmp>
        <h3>JS:</h3>
        <xmp style="text-align:justify; background-color:whitesmoke;">
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
                    aForm.append('$'{a[i]} ');
                    bForm.append('$'{b[i]} ');
                }
            });

            generateCBtn.addEventListener('click', () => {
                cForm.innerText = "";
                c = makeCArray(a, b);
                console.log(c);
                for(let i = 0; i < LENGTH; i++){
                    cForm.append('$'{c[i]} ');
                }
            });

            swapBtn.addEventListener('click', () => {
                swapMaxAndFirstNum(c);
                cSwapForm.innerText = "";
                for(let i = 0; i < LENGTH; i++){
                    cSwapForm.append('$'{c[i]} ');
                }
            });

            sortBtn.addEventListener('click', () => {
                sortArrayByBulb(c);
                cSortForm.innerText = "";
                console.log(c);
                for(let i = 0; i < LENGTH; i++){
                    cSortForm.append('$'{c[i]} ');
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
        </xmp>
        <br>
        <h2>Завдання 2:</h2>
        <img src="lab_img/task2V4.png">
        <h2>Результат:</h2>
        <img src="lab_img/result2V4.png"> 
        <h3>CSS:</h3>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        body{
            font: 1rem 'Fira Sans', sans-serif;
            text-align: center;
            margin: auto;
        }
        
        .buttons{
            width: 30px;
            height: 30px;
            margin: 5px;
            background-color: lightgray;
            border-radius: 2px;
            box-shadow: 0 0 2px black;
        }
        
        .buttons:hover{
            cursor: pointer;
            background-color: wheat;
        }
        
        .panel{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 100px;
        }
        
        textarea{
            font-size: 14pt;
        }
        
        img{
            height: 90%;
            padding: 2%;
        }
        </xmp>
        <h3>JS:</h3>
        <xmp style="text-align:justify; background-color:whitesmoke;">
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
        </xmp>
`;

    changeText(text);
}

function misha4() {
    const text = `<h1>Міша</h1>
        <h2>Завдання 1:</h2>
        <img src="lab_img/task1M4.png">
        <div style="text-align: left">
            <h4>Швидке сортування</h4>
            <h4>Короткий опис алгоритму:</h4>
            <ul>
                <li>вибрати елемент, званий опорним.</li>
                <li>порівняти всі інші елементи з опорним, на підставі порівняння розбити безліч на три - "менші опорного", "рівні" і "великі", розташувати їх у порядку менші-рівні-великі.</li>
                <li>повторити рекурсивно для "менших" і "великих".</li>
            </ul>
            <h4>Переваги і недоліки:</h4>
            <ol>
                <li>Один з самих швидкодіючих (на практиці) з алгоритмів внутрішнього сортування загального призначення.</li>
                <li>Простий в реалізації.</li>
                <li>Вимагає лише O (lg n) додаткової пам'яті для своєї роботи. (Не покращений рекурсивний алгоритм в гіршому випадку O (n) пам'яті)</li>
                <li>Добре поєднується з механізмами кешування і віртуальної пам'яті.</li>
                <li>Існує ефективна модифікація (алгоритм Седжвіка) для сортування рядків - спочатку порівняння з опорним елементом тільки по нульовому символу рядка, далі застосування аналогічної сортування для "більшого" і "меншого" масивів теж по нульовому символу, і для "рівного" масиву по вже першого символу.</li>
                <li>Працює на пов'язаних списках та інших структурах з послідовним доступом.</li>
            </ol>
        </div>
        <h3>HTML:</h3>
        <img src="lab_img/lab4_htmM.png">
        <h3>JS:</h3>
        <img src="lab_img/lab4_jsM.png">
        <h2>Результат:</h2>
        <img src="lab_img/result1M4.png">
        <br>
        <h2>Завдання 2:</h2>
        <img src="lab_img/task2M4.png">
        <h3>HTML:</h3>
        <img src="lab_img/lab4_2html.png">
        <h2>Результат:</h2>
        <img src="lab_img/result2M4.png">   
`;

    changeText(text);
}

function denys4() {
    const text = `<h1>Денис</h1>
        <h2>Завдання 1:</h2>
        <img src="lab_img/task1D4.png">
        <div style="text-align: left">
            <h4>Сортування вибором - простий алгоритм сортування лінійного масиву, на основі вставок. Має ефективність n2, що робить його неефективним при сортування великих масивів, і в цілому, менш ефективним за подібний алгоритм сортування включенням. Сортування вибором вирізняється більшою простотою, ніж сортування включенням, і в деяких випадках, вищою продуктивністю.</h4>
            <h4>Короткий опис алгоритму:</h4>
            <ul>
                <li>Знаходить у списку найменше значення</li>
                <li>Міняє його місцями із першим значеннями у списку</li>
                <li>Повторює два попередніх кроки, доки список не завершиться (починаючи з наступної позиції)</li>
            </ul>
        </div>
        <h2>Результат:</h2>
        <img src="lab_img/result1D4.png">
        <br>
        <h2>Завдання 2:</h2>
        <img src="lab_img/task2D4.png">
        <h2>Результат:</h2>
        <img src="lab_img/result2D4.png">   
`;

    changeText(text);
}

function bohdan4() {
    const text = `<h1>Богдан</h1>
        <h2>Завдання 1:</h2>
        <img src="lab_img/task1B4.png">
        <div style="text-align: left">
            <h4>Сортування вибором - простий алгоритм сортування лінійного масиву, на основі вставок. Має ефективність n2, що робить його неефективним при сортування великих масивів, і в цілому, менш ефективним за подібний алгоритм сортування включенням. Сортування вибором вирізняється більшою простотою, ніж сортування включенням, і в деяких випадках, вищою продуктивністю.</h4>
            <h4>Короткий опис алгоритму:</h4>
            <ul>
                <li>Знаходить у списку найменше значення</li>
                <li>Міняє його місцями із першим значеннями у списку</li>
                <li>Повторює два попередніх кроки, доки список не завершиться (починаючи з наступної позиції)</li>
            </ul>
        </div>
        <h2>Результат:</h2>
        <img src="lab_img/lab4B/result1B4.png">
        <h3>HTML-код: </h3>
        <img src="lab_img/lab4B/HTMLcodeT1p1.png">
        <img src="lab_img/lab4B/HTMLcodeT1p2.png">
        <h3>CSS-код: </h3>
        <img src="lab_img/lab4B/CSScodeT1.png">
        <br>
        <h2>Завдання 2:</h2>
        <img src="lab_img/task2B4.png">
        <h2>Результат:</h2>
        <img src="lab_img/lab4B/result2B4.png">   
         <h3>HTML-код: </h3>
        <img src="lab_img/lab4B/HTMLcodeT2p1.png">
        <img src="lab_img/lab4B/HTMLcodeT2p2.png">
        <h3>CSS-код: </h3>
        <img src="lab_img/lab4B/CSScodeT2p1.png">
        <img src="lab_img/lab4B/CSScodeT2p2.png">
`;

    changeText(text);
}

function mainsite4() {
    const text = `<h1>Сайт</h1>
        <h2>Завдання:</h2>
        <img src="lab_img/siteTASK.png">
        <div style="text-align: left">
            <h4>Гіпертекстове посилання (схема URL):</h4>
            <div>Гіперпосилання, або просто посила́ння — активний текст, зображення чи кнопка на вебсторінці, натиснення на яку (активізація гіперпосилання) викликає перехід на іншу сторінку чи іншу частину поточної сторінки.</div>
            <img src="lab_img/href_lab4.png">
            <h4>Handler:</h4>
            <div>Подія – це сигнал від браузера у тому, що щось сталося. Всі DOM-вузли подають такі сигнали (хоча події бувають не тільки в DOM).</div>
            <img src="lab_img/handler_lab4.png">
            <h4>Підстановка (entity):</h4>
            <div>Підстановка ( entity ) зустрічається на Web-сторінках досить рідко. Тим не менш, це досить потужний інструмент генерації HTML-сторінки на стороні браузера. Підстановки використовуються як значення атрибутів HTML-контейнерів. </div>
            <img src="lab_img/entity_lab4.png">
            <h4>Вставка (тег SCRIPT)</h4>
            <div>Тег script призначений для опису скриптів, може містити посилання на програму або її текст певною мовою. Скрипти можуть розміщуватися у зовнішньому файлі та зв'язуватися з будь-яким HTML-документом. Такий підхід дозволяє використовувати одні й самі загальні функції багатьох веб-сторінках і прискорює їх завантаження, т.к. зовнішній файл кешується при першому завантаженні, і скрипт викликається швидше за наступних дзвінків.
script може розташовуватись у заголовку або тілі HTML-документа у необмеженій кількості. Найчастіше місце розташування скрипта не позначається роботу програми. Однак скрипти, які повинні виконуватися в першу чергу, зазвичай розміщують у заголовку документа.</div>
            <img src="lab_img/script_lab4.png">
        </div>
        <h2>Результат:</h2>
        <img src="lab_img/site_result_lab4.png">
       
`;
    changeText(text);
}

function itog_4() {
    const text = `<h1>Висновок</h1>
        <p style="text-align:justify;">На лабораторній роботі №4 ми придбали практичні навички роботи маніпулювання інформаційним вмістом Web-документа засобами мови Javasсript, використання об’єктів,масивів, функцій, подій, обробників подій у сценаріях на мові JavaScript</p>`
    changeText(text);
}

