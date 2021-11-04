const num = prompt('Write number:')

function randomNum(){
    const arr = []
    for (let i = 0; i < num; i++) {
        arr[i] = Math.floor(Math.random()*100)
    }
    document.write("Початковий масив: " + arr + "<br>")
    return arr
}
let array = randomNum()
const numRes = minNum()

function minNum(){
    let minNum = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minNum) {
            minNum = array[i]
        }
    }
    return minNum
}

function SelectionSort(arr)
{
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[min]) min = j;
        }
        let t = arr[min];
        arr[min] = arr[i];
        arr[i] = t;
    }
    return arr

}

function res(arr){
    const index = arr.indexOf(numRes)
    if (index > -1){
        arr.splice(index, 1)
    }
    arr.unshift(numRes)
    return arr
}


document.write("Мінімальний елемент: " + minNum() + "<br>")
document.write("Вихідний масив: " + res(array) + "<br>")
document.write("Відсортований масив: " + SelectionSort(array))





