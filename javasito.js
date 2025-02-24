let display = document.querySelector(".display");
let total = 0;

let firstNumber = "";
let secondNumber = "";
let operatorS = "";

let firstUsing = 0;
let seconUsing = 0;

function add(numberA,numberB)
{
    
    firstNumber = numberA + numberB ;
    firstNumber = firstNumber.toString();
    secondNumber = "";
    display.textContent = firstNumber;
    operatorS = "";
    
}

function subtract(numberA,numberB)
{
    firstNumber = numberA - numberB ;
    firstNumber= firstNumber.toString();
    secondNumber = "";
    display.textContent = firstNumber;

}

function multiply(numberA,numberB)
{
    firstNumber = numberA * numberB ;
    firstNumber= firstNumber.toString();
    secondNumber = "";
    display.textContent = firstNumber;

}

function divide(numberA,numberB)
{
    {
        firstNumber = numberA / numberB ;
        firstNumber= firstNumber.toString();
        secondNumber = "";
        display.textContent = firstNumber;
    }
}

const buttons = document.querySelectorAll(".button");
buttons.forEach(button =>{
    button.addEventListener("click",() =>{


    if(button.textContent == "AC")
    {
        display.textContent=0;
        total = 0; 
        firstNumber = "";
        secondNumber = "";
        operatorS = "";       
    }
    
    else if(button.textContent == "+/-")
    {
        if(secondNumber != 0)
        {
            secondNumber = secondNumber - secondNumber * 2;
            secondNumber.toString();
            display.textContent = secondNumber;
        }
        else
        {
            firstNumber = firstNumber - firstNumber * 2;
            secondNumber.toString();
            display.textContent = firstNumber;
        }
            
    }
    else if(button.textContent == "%")
    {
        if(secondNumber != 0)
        {
            secondNumber = parseFloat(secondNumber) /100;
            display.textContent = secondNumber;
        }
        else
        {
            firstNumber = parseFloat(firstNumber) /100;
            display.textContent = firstNumber;
        }
    }
    else if(button.textContent == "/")
    {
        operatorS = "/";
    }
    else if(button.textContent == "7")
    {
        console.log("aqca");
        parseNumber(firstNumber,secondNumber,button);  
    }
    else if(button.textContent == "8")
    {
        parseNumber(firstNumber,secondNumber,button);  
    }
    else if(button.textContent == "9")
    {
        parseNumber(firstNumber,secondNumber,button);  
    }

    else if(button.textContent == "*")
        operatorS = "*";


    else if(button.textContent == "4")
    {
        parseNumber(firstNumber,secondNumber,button);  
    }    
    else if(button.textContent == "5")
    {
        parseNumber(firstNumber,secondNumber,button);  
    }

    else if(button.textContent == "6")
    {
        parseNumber(firstNumber,secondNumber,button);  
    }    
    else if(button.textContent == "-")
        operatorS = "-";

    else if(button.textContent == "1")
    {
        parseNumber(firstNumber,secondNumber,button);  
    } 
    else if(button.textContent == "2")
    {
        parseNumber(firstNumber,secondNumber,button);  
    } 
    else if(button.textContent == "3")
    {
        parseNumber(firstNumber,secondNumber,button);  
    } 
    else if(button.textContent == "+")
    {
        operatorS = "+";

    }
    else if(button.textContent == "0")
    {
        parseNumber(firstNumber,secondNumber,button);  
    } 

    else if(button.textContent == ".")
        parseNumber(firstNumber,secondNumber,button);

    else if(button.textContent == "=")
        operator(firstNumber,operatorS,secondNumber);
    // console.log(firstNumber);
    // console.log(operatorS);
    // console.log(secondNumber);

    
});
});
function parseNumber(parseFirst,parseSecond,button)
{
    let parseHere = whichNumberToParse(parseFirst,parseSecond);

    if(parseHere == 0)
    {
        if(button.textContent == "." && secondNumber.includes("."))
            return;
        secondNumber = secondNumber + button.textContent 
        display.textContent = secondNumber;
    }  

    else if(parseHere == 1)
    {
        if(button.textContent == "." && firstNumber.includes("."))
            return;
        firstNumber =  firstNumber + button.textContent 
        display.textContent = firstNumber;

    }
    
}

function whichNumberToParse(parseFirst,parseSecond)
{
    // 1 = segundo Numero
    //0 =  primero Numero
    if(operatorS == "")
        return 1 ;
    else
        return 0;
}

function operator(numberA,operator,numberB)
{
    if(operator == "/")
        divide(parseInt(numberA),parseInt(numberB));

    else if (operator == "*")
        multiply(parseInt(numberA),parseInt(numberB));

    else if(operator == "-")
        subtract(parseInt(numberA),parseInt(numberB));

    else if(operator == "+")
        add(parseInt(numberA),parseInt(numberB));
}