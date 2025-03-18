function formatPhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/[^0-9]/g, ''); 

    return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7)}`;
}