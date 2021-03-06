//Getting value for pi
// document.getElementById('pi')


// Getting HIstory Value
function getHistory(){
    return document.getElementById("history-value").innerText;

}
function printHistory(num){
    return document.getElementById("history-value").innerText = num;

}
printHistory('');

//Getting Output Value
function getOutput(){
    return document.getElementById("output-value").innerText;

}

function printOutput(num){
    if(num ==""){
        document.getElementById("output-value").innerText = num;
    }
    else{
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    if (num=="-"){
        return "";
    }

    var n = Number(num);
    console.log({n});
    // var value = n.toLocaleString("en");
    return n;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

//Getting the operator and Number class class
var operator = document.getElementsByClassName("operator");
for (var i = 0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
        if(this.id =='clear'){
            printHistory("");
            printOutput("");
        }

        else if(this.id=='backspace'){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){
                output = output.substring(0, output.length-1);
                printOutput(output);
            }
        }

        else{
            var output = getOutput();
            var history = getHistory();
            if (output=="" && history!=""){
                if(isNaN(history[history.length-1]))
                history=history.substr(0, history.length-1);
            }
            if (output !="" || history!=""){
                output=output == ""? output:reverseNumberFormat(output);
                history = history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }

                else {
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");

                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i<number.length; i++){
    number[i].addEventListener('click', function(){
        var output = reverseNumberFormat(getOutput());
        if(output != NaN){
            console.log({output})
            output = output+this.id;
            console.log({output})
            printOutput(output);
        }
    })
}