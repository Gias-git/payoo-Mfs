
document.getElementById('cashout-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addBalance = document.getElementById('cash-out').value;
        const addBalanceNumber = Number(addBalance);
        const pin = document.getElementById('cashout-pin-number').value;

        if (pin === '1234') {
            let balanceAccount = document.getElementById('balance-account').innerText;
            const balanceAccountNumber = parseFloat(balanceAccount);
            const newBalanceAccount = balanceAccountNumber - addBalanceNumber;

            if (newBalanceAccount < 0) {
                alert('Your account doesnot have enough money');
            } else {
                document.getElementById('balance-account').innerText = newBalanceAccount;
            }



        } else {
            alert('please Enter Correct PIn');
        }


    });