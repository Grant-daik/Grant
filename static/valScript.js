function validatePhoneNumber(input) {
    var phoneNumber = input.value;
    var error = document.getElementById('phone_num_error');
        
    // to remove any previous custom validity message
    input.setCustomValidity('');
       
    // to check if the input is empty or does not contain exactly 11 digits
    if (phoneNumber.trim() === '' || !/^[0-9]{11}$/.test(phoneNumber)) {
        input.setCustomValidity('Number must be 11 digits');
       // errorSpan.textContent = 'Number must be 11 digits';
    } else {
        // Clear the error message if the input is valid
        error.textContent = '';
    }
}

