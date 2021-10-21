function QuickSort(A) {
    if (A.length === 0) return [];
    let a = [], b = [], p = A[0];
    for (let i = 1; i < A.length; i++) {
        if (A[i] < p) a[a.length] = A[i];
        else b[b.length] = A[i];
    }
    return QuickSort(a).concat(p, QuickSort(b));
}

let val = 0;

function add_input() {
    document.getElementById('arrays').innerHTML += `<div>[${val}]  <input type="number" value="${val}" id="${val}_input" name="array"></div>`
    val++;
}

function createArray() {
    return Array.from(document.getElementsByName('array')).map(e => parseInt(e.value))
}

function findBetween() {
    const array = createArray()
    let sortArray = QuickSort(array)
    let a = document.getElementById('answer')
    a.innerHTML = `<div>Вхідний масив : ${array}</div>`
    a.innerHTML += `<div>Відсортований масив (вихідний): ${sortArray}</div>`
    if (sortArray.length < 3) {
        a.innerHTML = `<div> Між максимальним і мінімальним значення масиву не має проміжку</div>`
    } else {
        const sum = sortArray.reduce((a, b) => parseInt(a) + parseInt(b), 0) - sortArray[0] - sortArray[sortArray.length - 1]
        a.innerHTML += `Сума елементів між максимальним та мінімальними значеннями масиву : ${sum}`
    }
}