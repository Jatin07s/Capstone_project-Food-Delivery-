
// for the cart section + and - (value gradually increase or decrease)

let a = document.getElementById('minus');
let b = document.getElementById('plus');
let c = document.getElementById('qty1');
let d = document.getElementById('total1');

let qnt = 1;
let price = 180;

//plus
b.addEventListener('click' , function() {
    qnt++;
    c.textContent = qnt;
    d.textContent = "₹" + (qnt * price) ;


}); 


//minus
a.addEventListener('click' , function() {
    if (qnt>0) {
        c.textContent = --qnt;
        d.textContent = "₹" + (qnt * price);
    }
});




// ITEM 2
let minus2 = document.getElementById('minus1');
let plus2 = document.getElementById('plus1');
let qty2 = document.getElementById('qty2');
let total2 = document.getElementById('total2');

let q2 = 1;
let price2 = 90;

// PLUS
plus2.addEventListener('click', function () {
    q2++;
    qty2.textContent = q2;
    total2.textContent = "₹" + (q2 * price2);
});

// MINUS
minus2.addEventListener('click', function () {
    if (q2 > 1) {
        q2--;
        qty2.textContent = q2;
        total2.textContent = "₹" + (q2 * price2);
    }
});


