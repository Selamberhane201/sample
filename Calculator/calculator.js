function number(num) {
    var result = document.getElementById('input');
    result.innerText += num
}

function result() {
    var resultInput = document.getElementById('input');
    var resultOutPut = document.getElementById('output');
    resultOutPut.innerText = eval(resultInput.innerText);
}

function clearResult() {
    var result = document.getElementById('input');
    result.innerText = "";

    var result = document.getElementById('output');
    result.innerText = 0;

}

function negativeResult() {
    var result = document.getElementById('input');
    var number = result.innerText;
    number = number.slice(0, -1);
    console.log(number)
}