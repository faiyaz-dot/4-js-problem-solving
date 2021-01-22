// 1. kilometerToMeter problem solving 
function kilometerToMeter(kilo) {
    // var kilo = 3;
    // var meter = 3 * 1000
    var meter = kilo * 1000;
    return meter;
}
// example how user will get the data 
var nanaMeter = kilometerToMeter(15);
console.log(nanaMeter);


// 2. budgetCalculator problem solving 
function budgetCalculator(
    // product name 
    watch,
    phone,
    laptop
) {
    // product price 
    var x = totalWatchPrice = watch * 50;
    var y = totalPhonePrice = phone * 100;
    var z = totalLaptopPrice = laptop * 500;
    var totalAmount = x + y + z;
    return totalAmount;
}
// exapmle of one customer input
var customerOne = budgetCalculator(20, 15, 10);
console.log(customerOne);

// 3. hotelCost problem solving 
function hotelCost(days) {
    var totalAmount = 0;
    // first 10 days Cost
    if (days <= 10) {
        totalAmount = days * 100;
    }
    // second 10 days Cost
    else if (days <= 20) {
        var x = firstTenDays = 10 * 100;
        var leftDays = days - 10;
        var y = secondTenDays = leftDays * 80;
        totalAmount = x + y;
    }
    // third 10+ days Cost
    else {
        var x = firstTenDays = 10 * 100;
        var y = secondTenDays = 10 * 80;
        var leftDays = days - 20;
        var z = thirdTenDays = leftDays * 50;
        totalAmount = x + y + z;
    }
    return totalAmount;
}
var totalCost = hotelCost(30);
console.log(totalCost);

// 4. megaFriend problem solving 
function megaFriend(Names){
    var largestWord = " ";
    for(var i = 0; i < Names.length; i++){
        var longestWord = Names[i];
        if(longestWord.length > largestWord.length){
            largestWord = longestWord;
        }
    }
    return largestWord;
}
// list of words
Names = ['Faiyaz', 'Asif', 'Saifullah', 'Rifatul Islam', 'Pias', 'Burhan', 'Shojib',]
// example of getting result 
var NanaFriends = megaFriend(Names);
console.log(NanaFriends);