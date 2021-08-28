// memory handle 
document.getElementById('8gb').addEventListener('click', function () {
    document.getElementById('extra-memory').innerText = 0;
    addTotal();
});
document.getElementById('16gb').addEventListener('click', function () {
    document.getElementById('extra-memory').innerText = 180;
    addTotal();
});

// storage handle
document.getElementById('256gb').addEventListener('click', function () {
    document.getElementById('extra-storage').innerText = 0;
    addTotal();
});
document.getElementById('512gb').addEventListener('click', function () {
    document.getElementById('extra-storage').innerText = 100;
    addTotal();
});
document.getElementById('1tb').addEventListener('click', function () {
    document.getElementById('extra-storage').innerText = 180;
    addTotal();
});

// delivery handle 
document.getElementById('free').addEventListener('click', function () {
    document.getElementById('extra-delivery').innerText = 0;
    addTotal();
});
document.getElementById('ex20').addEventListener('click', function () {
    document.getElementById('extra-delivery').innerText = 20;
    addTotal();
});

// promo code handle 
document.getElementById('apply-btn').addEventListener('click', function () {
    if (document.getElementById('promo-code').value == 'stevekaku') {
        discountTotal()
    }
    else {
        alert('SORRY! Your Promo Code is not valid');
    }
})

// handle total price in a function 
function addTotal() {
    document.getElementById('in-total').innerText = 1299 + parseInt(document.getElementById('extra-memory').innerText) + parseInt(document.getElementById('extra-storage').innerText) + parseInt(document.getElementById('extra-delivery').innerText);
}
// handle discount price in a function 
function discountTotal() {
    document.getElementById('discount-price').innerText = parseInt(document.getElementById('in-total').innerText) - (0.2 * parseInt(document.getElementById('in-total').innerText));
}