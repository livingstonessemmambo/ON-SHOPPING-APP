let inputField= document.querySelector('.input-field');
let list= document.querySelector('.list');
let addButton= document.querySelector('.add-button');
let priceField=document.querySelector('.price');
let quantityField=document.querySelector('.quantity');
let totalTotal=document.querySelector('.total-total');

let darkMode=document.querySelector('.dark-mode');
let bodyContainer=document.querySelector('.body');

let settings=document.querySelector('.settings');
let menuButtton=document.querySelector('.menu');
let closeButtton=document.querySelector('.close-icon');

menuButtton.addEventListener('click',()=>{
    settings.style.display='block';
    settings.style.animation='menushow 0.5s ease-in';
});
closeButtton.addEventListener('click',()=>{
    settings.style.display='none'
})

darkMode.addEventListener('click',()=>{
    if(bodyContainer.style.backgroundColor!=='black'){
        bodyContainer.style.backgroundColor='black';
    }else{
        bodyContainer.style.backgroundColor='white';
    }
})

let overallPrice=0;
addButton.addEventListener('click',()=>{
    if(inputField.value!==''){
        let inputValue=inputField.value;
        let priceValue=priceField.value;
        let quantityValue=quantityField.value;
        

        let listItem=document.createElement("li");
        listItem.classList.add('list-item');

        let listValue=document.createElement('p');
        listValue.classList.add('list-value');
        if(quantityValue>1){
            listValue.innerText=`${inputValue}  --  ${quantityValue}  pcs         @ Shs:${priceField.value}/=`;
        }else{
            listValue.innerText=`${inputValue}  --  ${quantityValue}pc`;
        }
        listItem.appendChild(listValue);

        let totalPriceField=document.createElement('button');
        let totalPriceForEach=priceValue*quantityValue;
        totalPriceField.innerHTML=`<b>Shs:${totalPriceForEach}/=</b>`;
        totalPriceField.classList.add('total-price');
        listItem.appendChild(totalPriceField);

        let itemButtons=document.createElement('div');
        itemButtons.classList.add('item-buttons');



        let completeButton=document.createElement('button');
        completeButton.classList.add('complete-button');
        completeButton.innerHTML='<img class="completesvg" src="../images/completesvg.png">';
        itemButtons.appendChild(completeButton);

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML='<img class="deletesvg" src="../images/deletesvg.png">'
        itemButtons.appendChild(deleteButton);

        listItem.appendChild(itemButtons);


        list.appendChild(listItem)
        inputField.value='';
        quantityField.value=1;
        priceField.value='';
        overallPrice+=totalPriceForEach;
        totalTotal.innerHTML=`SHS:${overallPrice}/=`;
        completeButton.addEventListener('click',()=>{
                listValue.style.textDecoration='line-through';
                listValue.style.color='gray';
                completeButton.style.backgroundColor='green';
                
            })


        deleteButton.addEventListener('click',()=>{
            listItem.style.animation='removeitem 0.5s ease-out'
            overallPrice-=totalPriceForEach;
            totalTotal.innerHTML=`SHS:${overallPrice}/=`
            setTimeout(remove,500);
        })
        function remove(){
            list.removeChild(listItem);
        }
}else{
    alert('OOPs... Missing details..');
}
})


