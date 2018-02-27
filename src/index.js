// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    var obj = {};
    var count = 0;
    var coins = [50,25,10,5,1];
    var names = ["H","Q","D","N","P"];

    switch (true) {
      case (currency == 0):
        break;
      case (currency > 10000):
        obj.error = "You are rich, my friend! We don't have so much coins for exchange";
        break;
      default:
        coins.forEach(function(item,index){
          count = Math.floor( (currency/item) );
          if ( count > 0 ) {
            obj[ names[index] ] = count;
            currency -= item*count;
          }
        });
    }
    return obj;

}
