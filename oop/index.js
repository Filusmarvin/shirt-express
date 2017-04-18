function pizza (theSize, theCrust, theCheese, theSauce, theToppings){
  // this becomes a new, empty object (when 'new' is used)
  this.size = theSize
  this.Crust = theCrust;
  this.Cheese = theCheese;
  this.sauce = theSauce;
  this.Toppings = theToppings;
  this.price = function () {
    let sizeToPrice = {
      'Small':	11.55,
      'Medium':	15.25,
      'Large':	22.00,
      'X-Large':	25.00,
    };
    return sizeToPrice[this.size] + 1.79 * this.toppings.length
  }
  // the object which was used for 'this' gets returned (when 'new' is used)
}
function displayPrice (event{
  event.preventDefault();
  console.log('ok');
  let size = form.querySelector('select[name="size"]').value;
  let crust = form.querySelector('select[name="crust"]').value;
  let cheese = form.querySelector('select[name="cheese"]').value;
  let size = form.querySelector('select[name="topping"]').value;
  let pizza = new pizza ( size, crust, " ", " ", [])

})
