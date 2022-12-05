const billAmount = document.querySelector('#bill-Amount');
const cashGiven = document.querySelector('#cash-Given');
const checkBtn = document.querySelector('#check');
const output= document.querySelector('.output');
const notes = document.querySelectorAll('.notes');

function calculateChange(billAmount,cashGiven){
    var balance = cashGiven-billAmount;
    var note2000 = Math.trunc(balance/2000);
    balance = balance % 2000;
    var note500 = Math.trunc(balance/500);
    balance = balance % 500;
    var note100 = Math.trunc(balance/100);
    balance = balance % 100;
    var note20 = Math.trunc(balance/20);
    balance = balance % 20;
    var note10 = Math.trunc(balance/10);
    balance = balance % 10;
    var note5 = Math.trunc(balance/5);
    balance = balance % 5;
    var note1 = balance;
    //print values
    notes[0].innerText = note2000;
    notes[1].innerText = note500;
    notes[2].innerText = note100;
    notes[3].innerText = note20;
    notes[4].innerText = note10;
    notes[5].innerText = note5;
    notes[6].innerText = balance;
}
function validateAmount(billAmount,cashGiven){
    if (billAmount<0){
        output.innerText = "We need some cash from you to function..!!"
    }
    else if(billAmount>cashGiven){
        output.innerText = "OOhhh..!! We actually are short of dishwashers..!! wanna join the fleet..!!"
    }
    else{ calculateChange(billAmount,cashGiven);
    }

}
function getChange(){
    validateAmount(Number(billAmount.value),Number(cashGiven.value));
}

checkBtn.addEventListener('click',getChange);