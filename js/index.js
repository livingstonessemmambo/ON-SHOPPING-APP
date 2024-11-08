let numberButtons =document.querySelectorAll('.number-button');
let operatorButtons =document.querySelectorAll('.operator');
let inputField =document.querySelector('.input-field');
let inputField1 =document.querySelector('.input-field1');
let inputOperator =document.querySelector('.input-operator');
let secondNumberButtons= document.querySelectorAll('.second-number-button');
let secondNumberButtonsContainer= document.querySelectorAll('.sec-numbers-container');
let equalField=document.querySelector('.equal-field');

let extraButton=document.querySelectorAll('.extra-button');

let inputValue='';
let equalValue='';
let inputValue1='';
let finalAnswer='';
numberButtons.forEach((btn)=>{
   btn.addEventListener('click',()=>{
    if(btn.innerHTML==='1'){
        inputField.innerHTML=inputValue+=1;
        equalValue=Number(inputValue);
    }else if (btn.innerHTML==='2'){
        inputField.innerHTML=inputValue+=2;
        equalValue=Number(inputValue);
    }else if(btn.innerText==='3'){
        inputField.innerHTML=inputValue+=3;
        equalValue=Number(inputValue);
    }else if(btn.innerHTML==='4'){
        inputField.innerHTML=inputValue+=4;
        equalValue=Number(inputValue);
    }else if(btn.innerHTML==='5'){
        inputField.innerHTML=inputValue+=5;
        equalValue=Number(inputValue);
    }else if(btn.innerHTML==='6'){
        inputField.innerHTML=inputValue+=6;
        equalValue=Number(inputValue);
    }else if(btn.innerHTML==='7'){
        inputField.innerHTML=inputValue+=7;
        equalValue=Number(inputValue);
    }else if(btn.innerHTML==='8'){
        inputField.innerHTML=inputValue+=8;
        equalValue=Number(inputValue);
    }else if(btn.innerHTML==='9'){
        inputField.innerHTML=inputValue+=9;
        equalValue=Number(inputValue);
    }else if(btn.innerHTML==='0'){
        inputField.innerHTML=inputValue+=0;
        equalValue=Number(inputValue);
    }
   });
    

});
operatorButtons.forEach((but)=>{
    but.addEventListener('click',()=>{
        if(but.innerHTML==='/'){
            inputOperator.innerHTML='/';
        }else if(but.innerHTML==='*'){
            inputOperator.innerHTML=`*`;
        }else if(but.innerHTML==='-'){
            inputOperator.innerHTML=`-`;
        }else if(but.innerHTML==='+'){
            inputOperator.innerHTML=`+`;
        }else if(but.innerHTML==='='){
            if(inputOperator.innerHTML==='+'){
                finalAnswer=equalValue+Number(inputValue1)
                inputValue=finalAnswer;
                equalValue=Number(inputValue)
            }else if(inputOperator.innerHTML==='*'){
                finalAnswer=equalValue*Number(inputValue1)
                inputValue=finalAnswer;
                equalValue=Number(inputValue)
            }else if(inputOperator.innerHTML==='/'){
                finalAnswer=equalValue/(Number(inputValue1))
                inputValue=finalAnswer;
                equalValue=Number(inputValue)
            }else if(inputOperator.innerHTML==='-'){
                finalAnswer=equalValue-Number(inputValue1)
                inputValue=finalAnswer;
                equalValue=Number(inputValue)
            };
                inputValue1='';
                inputField.innerHTML=inputValue;
                inputField1.innerHTML=inputValue1;
                inputOperator.innerHTML='';
        };
        secondNumberButtonsContainer.forEach((but)=>{
            but.style.display='grid';
            but.style.gridTemplateColumns='1fr 1fr';
            but.style.position='absolute';
        });
        numberButtons.forEach((but)=>{
            but.style.display='none';
        });


    }); 
   });
   secondNumberButtons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
     if(btn.innerHTML==='1'){
         inputField1.innerHTML=inputValue1+=1;
     }else if (btn.innerHTML==='2'){
         inputField1.innerHTML=inputValue1+=2;
     }else if(btn.innerText==='3'){
         inputField1.innerHTML=inputValue1+=3;
     }else if(btn.innerHTML==='4'){
         inputField1.innerHTML=inputValue1+=4;
     }else if(btn.innerHTML==='5'){
         inputField1.innerHTML=inputValue1+=5;
     }else if(btn.innerHTML==='6'){
         inputField1.innerHTML=inputValue1+=6;
     }else if(btn.innerHTML==='7'){
         inputField1.innerHTML=inputValue1+=7;
     }else if(btn.innerHTML==='8'){
         inputField1.innerHTML=inputValue1+=8;
     }else if(btn.innerHTML==='9'){
         inputField1.innerHTML=inputValue1+=9;
     }else if(btn.innerHTML==='0'){
         inputField1.innerHTML=inputValue1+=0;
     }
     
    });
     
 
 }); /* 
 extraButton.forEach((but)=>{
    but.addEventListener('click',()=>{
        if(but.innerHTML==='e'){
        equalValue=Math.exp(equalValue,inputValue1);
        inputField.innerHTML=equalValue;
    }else if(but.innerHTML==='PI'){
        equalValue=Math.PI;
        inputField.innerHTML=equalValue;
    }
        
    })
 })*/