function meta_3() {
    const text = `<h1>Тема, Мета</h1>
        <p>Тема : БЛОЧНА ВЕРСТКА HTML-ДОКУМЕНТУ ЗА МАКЕТОМ.</p>
        <p>Мета : придбати практичні навички роботи верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок</p>`;
    changeText(text);
}

function vlad() {
    const text = `<h1>Влад</h1>
        <img src="lab_img/vlad_task.png">
        <p style="width: 100%">Вигляд табличної верстки</p>
        <img src="lab_img/vlad_table.png">
        <p style="width: 100%">HTML-код</p>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vlad-Table</title>
            <link rel="stylesheet" href="css/style.css">
        </head>
        <body>
            <table cellpadding="0" cellspacing="0">
                <tr style="height: 10%;">
                    <td colspan="3" class="first">
                        <input type="text">
                        <span>1</span>
                    </td>
                </tr>
                <tr>
                    <td style="width: 33%;">
                        <div class="second">2</div>
                    </td>
                    <td style="width: 33%; padding: 20px;">
                        <div class="third">
                            <div class="number">
                                <p>3</p>
                            </div>
                            <div class="red"></div>
                        </div>
                    </td>
                    <td style="width: 33%; padding: 20px;">
                        <div class="fourth">4</div>
                    </td>
                </tr>
                <tr style="height: 10%;">
                    <td colspan="3">
                        <div class="fifth">5</div>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        </xmp>
        <p style="width: 100%">CSS-код</p>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        body{
            font-weight: bold;
            font-size: 16pt;
            padding: 0px;
            margin: 0px;
        }
        
        table{
            width: 100%;
            height: 100vh;
        }
        
        .first{
            background-color: yellow;
        }
        
        .second{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: skyblue;
            height: 100%;
        }
        
        .third{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            background-color: whitesmoke;
            border: 1px solid gray;
            height: 100%;
        }
        
        .red{
            background-color: red;
            width: 100%;
            height: 10%;
        }
        
        .fourth{
            display: flex;
            justify-content: center;
            align-items: center;
            vertical-align: middle;
            text-align: center;
            background-color: skyblue;
            height: 100%;
        }
        
        .fifth{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: yellow;
            height: 100%;
        }
        
        input{
            margin-left: 20px;
        }
        
        span{
            float:right;
            margin-right: 100px;
        }
        
        .number{
            display: flex;
            align-items: center;
            height: 100%;
        }
        </xmp>
        <p style="width: 100%">Вигляд плавающої верстки</p>
        <img src="lab_img/vlad_float.png">\`
        <p style="width: 100%">HTML-код</p>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vlad-float</title>
            <link rel="stylesheet" href="css/style.css">
        </head>
        <body>
            <div class="first">
                <input type="text">
                <span class="span">1</span>
            </div>   
            <div class="fourth"><span>4</span></div>
            <div class="third">
                <span>3</span>
                <div class="red"></div>
            </div>
            <div class="second"><span>2</span></div>
            <div class="fifth"><span>5</span></div>
        </body>
        </html>
        </xmp>
        <p style="width: 100%">CSS-код</p>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        body{
            padding: 0px;
            margin: 0px;
            height: 100vh;
            font-weight: bold;
            font-size: 16pt;
        }
        
        .first{
            text-align: left;
            width: 100vw;
            height: 10%;
            float:top;
            background-color: yellow;
        }
        
        .third{
            margin: 20px;
            margin-right: 0px;
            height: 76%;
            width: 30%;
            float:right;
            background-color: whitesmoke;
            border: 1px solid gray;
            position: relative;
        }
        
        .fourth{
            margin: 20px;
            float: right;
            width: 30%;
            height: 76%;
            border: 1px solid lightblue;
            background-color: lightblue;
        }
        
        .second{
            text-align: center;
            height: 80%;
            width: 33%;
            margin-right: 20px;
            background-color: lightblue;
        }
        
        .fifth{
            height: 10%;
            width: 100%;
            float:bottom;
            background-color: yellow;
        }
        
        input{
            align-items: center;
            margin-top: 4vh;
            margin-left: 20px;
        }
        
        .span{
            margin-top: 4vh;
            float:right;
            margin-right: 100px;
        }
        
        span{
            margin-top: 10vh;
        }
        
        div{
            text-align: center;
        }
        
        .red{
            position: absolute;
            top: 90%;
            background-color: red;
            width: 100%;
            height: 10%;
            border: 1px solid black;
            left: -1px;
        }
        </xmp>`;

    changeText(text);
}

function misha() {
    const text = `<h1>Міша</h1>
        <img src="lab_img/misha_task.png">
        <p style="width: 100%">Вигляд табличної верстки</p>
        <img src="lab_img/misha_table.png">
        <p style="width: 100%">HTML-код</p>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>6 варіант</title>
            <style>
                table{
                    position: fixed;
                    height: 100% ;
                    width: 100%;
                    top: 0;
                    left: 0
                }
                .spacer{
                    width: 1%;
                    background: white;
                }
            </style>
        </head>
        <body>
        <table cellpadding="5" cellspacing="0" border="1">
            <tr>
                <td colspan="7" style="background: #54BBE0; padding-right: 1% ; height: 10%">
                    <p style="padding-left:20% ; background: #FFFFFF; width: 10%; height: 50%; float: left"></p>
                    <p style="float: right">Text 1</p>
                </td>
            </tr>
            <tr style=" color: #FFFFFF;" align="center">
                <td style="background: #d754e0"> Text 2</td>
                <td class="spacer"></td>
                <td style="background: #155434"> Text 3</td>
                <td class="spacer"></td>
                <td style="background: #c91a46"> Text 4</td>
                <td class="spacer"></td>
                <td style="background: #c91a46"> Text 5</td>
            </tr>
            <tr>
                <td colspan="7" style="background: #54BBE0; padding-right: 1% ; height: 10%">Text 6</td>
            </tr>
        </table>
        </body>
        </html>
        </xmp>
        <p style="width: 100%">Вигляд плавающої верстки</p>
        <img src="lab_img/misha_float.png">\`
        <p style="width: 100%">HTML-код</p>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Завдання 6 лаб 3.2</title>
            <link rel="stylesheet" href="./css/style.css">
        </head>
        <body>
        <div class="container">
            <div class="header">
                <p class="spaceH"></p>
                <p style="float: right ; margin-right: 1%">1</p>
            </div>
            <div class="context">
                <p class="_span" style="background: #d754e0">2</p>
                <p class="_span" style="background: #155434">3</p>
                <p class="_span" style="background: #c91a46">4</p>
                <p class="_span" style="background: #c91a46">5</p>
            </div>
            <div class="header">
                <p>6</p>
            </div>
        </div>
        </body>
        </html>
        </xmp>
        <p style="width: 100%">CSS-код</p>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        p {
            color: white;
            font-size: 25px;
            margin: 0;
            padding: 0;
        }

        .container {
            position: fixed;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
        }
        
        .header {
            width: 100%;
            height: 12%;
            background: orange;
        }
        
        .spaceH {
            float: left;
            width: 30%;
            height: 40%;
            margin: 1% 1%;
            background: #ffffff;
        }
        
        .context {
            position: relative;
            width: 100%;
            height: 76%;
        }
        
        ._span {
            margin: 0 0 0 0.5%;
            text-align: center;
            float: left;
            width: 24.5%;
            height: 100%;
        }
        
        .footer {
            height: 15%;
            width: 100%;
            background: orange;
        }
        </xmp>`;

    changeText(text);
}

function denys() {
    const text = `<h1>Денис</h1>
        <img src="lab_img/den_task.png">
        <p style="width: 100%">Вигляд табличної верстки</p>
        <img src="lab_img/den_table.png">
        <p style="width: 100%">HTML-код</p>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>10 варіант</title>
            <link rel="stylesheet" href="./css/style.css">
        </head>
        <body>
        <table cellpadding="5" cellspacing="0" border="1">
            <tr>
                <td rowspan="3" style="background: gold" width="15%">
                    <p>2</p>
                </td>
                <td style="background: blue" height="15%">
                    <p style="color: white">1</p>
                </td>
                <td rowspan="3" style="background: white" width="15%">
                    <p></p>
                </td>
            </tr>
            <tr>
                <td style="background: white" height="70%">
                    <p>4</p>
                </td>
            </tr>
            <tr>
                <td style="background: blue" height="15%">
                    <p style="color: white">3</p>
                </td>
            </tr>
        </table>
        </body>
        </html>
        </xmp>
        <p style="width: 100%">CSS-код</p>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        table{
            position: fixed;
            height: 100% ;
            width: 100%;
            top: 0;
            left: 0
        }
        
        p {
            font-size: 50px;
            text-align: center;
        }
        </xmp>
        <p style="width: 100%">Вигляд плавающої верстки</p>
        <img src="lab_img/den_float.png">\`
        <p style="width: 100%">HTML-код</p>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Завдання 6 лаб 3.10</title>
            <link rel="stylesheet" href="./css/style.css">
        </head>
        <body>
        <div class="container">
            <div class="left">
                <p class="left_p">2</p>
            </div>
            <div class="center">
                <p class="center_header">1</p>
                <p class="center_c">4</p>
                <p class="center_footer">3</p>
            </div>
            <div class="right">
                <p class="right_p"></p>
            </div>
        </div>
        </body>
        </html>
        </xmp>
        <p style="width: 100%">CSS-код</p>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        .container {
            position: fixed;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
        }
        
        .left {
            height: 100%;
            width: 15%;
            float: left;
        }
        
        p {
            border: 1px solid black;
            padding: 20px;
            box-sizing: border-box;
            font-size: 50px;
            text-align: center;
        }
        
        .right {
            height: 100%;
            width: 15%;
            float: right;
        }
        
        .center {
            float: left;
            width: 70%;
            height: 100%;
        }
        
        .left_p {
            background: gold;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }
        
        .right_p {
            width: 100%;
            height: 100%;
            background: white;
            margin: 0;
            padding: 0;
        }
        
        .center_header {
            height: 15%;
            background: blue;
            margin: 0;
            padding: 0;
            color: white;
        
        }
        
        .center_footer {
            height: 15%;
            background: blue;
            margin: 0;
            padding: 0;
            color: white;
        }
        
        .center_c {
            height: 70%;
            background: white;
            margin: 0;
            padding: 0;
        }
        </xmp>`;

    changeText(text);
}

function bohdan() {
    const text = `<h1>Богдан</h1>
        <img src="lab_img/bohdan_task.png">
        <p style="width: 100%">Вигляд табличної верстки</p>
        <img src="lab_img/bohdan_table.png">
        <p style="width: 100%">HTML-код</p>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        <!DOCTYPE html>
        <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <link rel="stylesheet"  href="css/style.css" >
            <title>Test</title>
        </head>
        <body>
        <div class="container">
            <table cellpadding="10">
                <tr class="unit_row">
                    <td class="long_cell" colspan="3">
                        <p>1</p>
                    </td>
                </tr>

                <tr class="main_row">
                    <td class="another_cell" id="left">
                        <p>2</p>
                    </td>
                    <td class="center_cell">
                        <p>3</p>
                    </td >
                    <td class="another_cell" id="right">
                        <p>4</p>
                    </td>
                </tr>

                <tr class="unit_row">
                    <td class="long_cell" colspan="3">
                        <p>5</p>
                    </td>
                </tr>
            </table>
        </div>
        </body>
        </html>
        </xmp>
        <p style="width: 100%">CSS-код</p>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        body {
            font-family: Arial, sans-serif;
            padding: 0;
            margin: 0;
        
        }
        .clearfix:after {
            content: '';
            display: table;
            width: 100%;
            clear: both;
        }
        .container {
            height: 100vh;
            margin: auto;
            width: 85%;
            align-content: center;
        }
        table {
            font-size: 24px;
            width: 100%;
            height:100%;
            border-spacing: 0 ;
        }
        .unit_row{
            color: white;
            width: 100%;
            height:15%;
        }
        .long_cell{
            background-color: blue;
        }
        .main_row{
            text-align: center;
            width: 100%;
            height:70%;
        }
        .center_cell{
            font-size: 40px;
            font-weight: bold;
        }
        .another_cell{
            width: 20%;
            background-color: yellow;
        }
        </xmp>
        <p style="width: 100%">Вигляд плавающої верстки</p>
        <img src="lab_img/bohdan_float.png">\`
        <p style="width: 100%">HTML-код</p>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        <!DOCTYPE html>
        <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <link rel="stylesheet"  href="css/style.css" >
            <title>Test</title>
        </head>
        <body>
        <div class="container">
            <div class="topbot">
                <p>1</p>
            </div>
            <div id="body">
                <div class="left">
                    <p>2</p>
                </div>
                <div class="center">
                    <p>3</p>
                </div>
                <div class="right">
                    <p>4</p>
                </div>
            </div>
            <div class="topbot">
                <p>5</p>
            </div>
        </div>
        </body>
        </html>
        </xmp>
        <p style="width: 100%">CSS-код</p>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        body {
            font-family: Arial, sans-serif;
            padding: 0;
            margin: 0;
        
        }
        .clearfix:after {
            content: '';
            display: table;
            width: 100%;
            clear: both;
        }
        .container {
            height: 100vh;
            margin: auto;
            width: 80%;
            align-content: center;
        }
        .topbot{
        
            background-color: blue;
            height: 15%;
            width: 100%;
        }
        p {
            margin: auto;
            margin-left: 10px;
        
        }
        #body{
            height: 70%;
            width: 100%;
            overflow: hidden;
        }
        .left {
            padding: 0;
            margin: 0;
            background-color: yellow;
            display: inline-block;
            width: 20%;
            height: 100%;
            overflow: hidden;
        }
        .center {
            text-align: center;
            padding: 0;
            margin: 0;
            display: inline-block;
            width: auto;
            height: 100%;
            overflow: hidden;
        }
        .right{
            padding: 0;
            margin: 0;
            background-color: yellow;
            display: inline-block;
            width: 20%;
            height: 100%;
            overflow: hidden;
            float: right;
        }        
        </xmp>`;

    changeText(text);
}

function mainsite() {
    const text = `<h1>Сайт</h1>
        <p style="width: 100%">Вигляд</p>
        <img src="lab_img/site.png">
        <p style="width: 100%">HTML-код</p>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Sport is the LIFE</title>
            <link rel="stylesheet" href="css/style.css">
            <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
            <script src="js/main.js"></script>
        </head>
        <body>
            <div class="header">

            </div>

            <div class="mainbody">
                <div class="main">
                    
                </div>

                <div class="sidebar">
                    
                </div>
            </div>

            <div class="footer">

            </div>
        </body>
        </html>
        </xmp>
        <p style="width: 100%">CSS-код</p>
        <xmp style="text-align:justify; background-color:whitesmoke;">
        body{
            padding: 0;
            margin: 0;
            font-family: "Trebuchet MS";
            height: 100vh;
            width: 100vw;
            position: relative;
        }
        
        .header{
            position: fixed;
            height: 10%;
            width: 100vw;
            background-color: lightblue;
        }
        
        .footer{
            position: absolute;
            top: 90%;
            height: 10%;
            width: 100vw;
            background-color: red;
        }
        
        .mainbody{
            padding-top: 12vh;
            margin-left: 2%;
            display: flex;
            height: 76%;
            width: 98%;
            justify-content: space-between;
        }
        
        .main{
            background-color: gray;
            width: 80vw;
            height: 100%;
        }
        
        .sidebar{
            margin-left: 20px;
            margin-right: 20px;
            background-color: yellow;
            height: 100%;
            width: 20%;
        }
        </xmp>`;

    changeText(text);
}

function itog_3() {
    const text = `<h1>Висновок</h1>
        <p style="text-align:justify;">На лабораторній роботі №3 ми ознайомилися та придбали навички роботи з версткою сторінок засобами CSS, версткою на основі плаваючих елементів, з’ясували переваги та недоліки типів макетів веб-сторінок</p>`
    changeText(text);
}

