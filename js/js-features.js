
// show cashout 

document.getElementById('show-cash-out').addEventListener('click',function(){
    document.getElementById('cashout-form').classList.remove('hidden');
    document.getElementById('add-balance-form').classList.add('hidden');
    document.getElementById('show-cash-out').style.backgroundColor = 'orange';
    document.getElementById('show-cash-out').style.color = 'black';
    document.getElementById('show-cash-out').style.border = 'none';

    document.getElementById('show-add-balance').style.backgroundColor = 'black';
    document.getElementById('show-add-balance').style.color = 'white';

})

document.getElementById('show-add-balance').addEventListener('click',function(){
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('add-balance-form').classList.remove('hidden');

    document.getElementById('show-add-balance').style.backgroundColor = 'orange';
    document.getElementById('show-add-balance').style.color = 'black';
    document.getElementById('show-add-balance').style.border = 'none';

    document.getElementById('show-cash-out').style.backgroundColor = 'black';
    document.getElementById('show-cash-out').style.color = 'white';
})