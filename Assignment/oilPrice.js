function oilPrice(d, p, o) {
  let dieselPrice = 114;
  let petrolPrice = 130;
  let octanePrice = 135;

  dieselPrice = dieselPrice * d;
  petrolPrice = petrolPrice * p;
  octanePrice = octanePrice * o;

  let totalPrice = dieselPrice + petrolPrice + octanePrice;
  console.log(totalPrice)
}

const total = oilPrice(30, 20, 10);
