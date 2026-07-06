const button =document.querySelector("button");
button.addEventListener("click",()=>{
    let input1=document.getElementById("firstNumber");
    let number1=Number(input1.value);
    
     let input2=document.getElementById("secondNumber");
    let number2=Number(input2.value);

    if(isNaN==number1 || isNaN==number2){
        return ;
    }

    let result=number1+number2;
    let re=document.getElementById("result");
    re.textContent=result;
})
