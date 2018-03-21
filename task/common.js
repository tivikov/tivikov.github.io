var val = document.querySelector("#value");
function calc() { 
    var value = val.value;
    var result = Math.atan(value) * 180/Math.PI;
    document.getElementById('result').innerHTML = result+" Градусов";
 }