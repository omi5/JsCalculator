function DeleteMe(){
 document.getElementById('MyResult').value = "";
}
function Calculator(value){
    document.getElementById('MyResult').value += value;
}

function Result (){
    let result = eval(document.getElementById('MyResult').value);
    document.getElementById('MyResult').value = result;
}