let btnIncrement = document.querySelectorAll('.btn-incrementa');
let btnDecrement = document.querySelectorAll('.btn-decrementa');

for(let btn of btnIncrement){
    btn.addEventListener('click',increment);

    function increment(){

        let item = btn.closest('.item');
        let input = item.querySelector('.quantidade');
        input.value++;
    
        let price = catchItemPrice(item);
        addTotal(price);
    }
}

for(let btnD of btnDecrement){
    btnD.addEventListener('click',decrement);

    function decrement(){
        let item = btnD.closest('.item');
        let input = item.querySelector('.quantidade');
        if(input.value > 0){
    
            input.value--;
        
            let price = catchItemPrice(item);
            addTotal(-price);
        }else{
            console.log('the value cannot be negative');
        }
    }
}

function catchItemPrice(item){
    let itemPrice = item.querySelector('.preco-item');
    return parseFloat(itemPrice.textContent);
}
function addTotal(price){
    let totalEl = document.querySelector('#total');
    totalEl.textContent = price + parseFloat(totalEl.textContent);
}