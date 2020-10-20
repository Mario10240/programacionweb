function doSum(){
    var n1 = document.getElementById('input1');
    var n2 = document.getElementById('input2');
    var sum1 = Number(n1.value) + Number(n2.value);
    var label_result = document.getElementById('label_result');
    label_result.innerHTML = sum1;
}

function doMin(){
    var n1 = document.getElementById('input11');
    var n2 = document.getElementById('input12');
    var sum1 = Number(n1.value) - Number(n2.value);
    var label_result1 = document.getElementById('label_result1');
    label_result1.innerHTML = sum1;
}

function doDiv(){
    var n1 = document.getElementById('input21');
    var n2 = document.getElementById('input22');
    var sum1 = Number(n1.value) / Number(n2.value);
    var label_result1 = document.getElementById('label_result2');
    label_result1.innerHTML = sum1;
}

function doMulti(){
    var n1 = document.getElementById('input31');
    var n2 = document.getElementById('input32');
    var sum1 = Number(n1.value) * Number(n2.value);
    var label_result1 = document.getElementById('label_result3');
    label_result1.innerHTML = sum1;
}