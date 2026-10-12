const price = 1456;
const discount = 15;

const scid = (price / 100) * discount;
let total = price - scid;

if (total >= 5000) {
  console.log("доставка бесплатная");
} else {
  console.log(total + 500);
}

// **

const price1 = 5000;
const discount1 = 15;
const idVIP = true;
const deliveryPrice = 500;
const FreedeliveryTrashold = 5000;

const price1WithDiscound = (price1 / 100) * (100 - discount1);
let totalPrice;
if (idVIP) {
  totalPrice = price1;
} 
else {
  if (price >= FreedeliveryTrashold) {
    totalPrice = price1;
  } 
  else {
    totalPrice = price1 + deliveryPrice;
  }
}
console.log(totalPrice)
