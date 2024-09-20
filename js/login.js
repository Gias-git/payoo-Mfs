

document.getElementById('login-btn')

    .addEventListener('click', function (event) {
        event.preventDefault();

        const PhoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;


        if (PhoneNumber == '5' && pinNumber === '1234') {
            window.location.href = '/home.html';
        } else {
            alert('phone number or pin wrong')
        }
    })