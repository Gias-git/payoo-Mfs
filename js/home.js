

document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addBalance = document.getElementById('add-balance').value;
        const addBalanceNumber = Number(addBalance);
        const pin = document.getElementById('pin-number').value;

        if (pin === '1234') {
            let balanceAccount = document.getElementById('balance-account').innerText;
            const balanceAccountNumber = parseFloat(balanceAccount);
            const newBalanceAccount = balanceAccountNumber + addBalanceNumber;


            document.getElementById('balance-account').innerText = newBalanceAccount;

            console.log(balanceAccount);
        } else {
            alert('please Enter Correct PIn');
        }


    });