document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("reset").addEventListener("click", function() {
        document.getElementById("first").checked=false;
        document.getElementById("second").checked=false;
        document.getElementById("third").checked=false;
        document.getElementById("fourth").checked=false;
        document.getElementById("fifth").checked=false;
    });

    document.getElementById("button").addEventListener("click", function() {
       let result = 0;

       result += checkBoxCount("first"); 
       result += checkBoxCount("second"); 
       result += checkBoxCount("third"); 
       result += checkBoxCount("fourth"); 
       result += checkBoxCount("fifth");

       let name = document.getElementById("input-text").value;


       alert(name + "님, 저와 " + result + "개의 취향이 같으시네요!");
    });
});

function checkBoxCount(name) {
    if (document.getElementById(name).checked) {
        return 1;
    }
    return 0;
}