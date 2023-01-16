module.exports = function toReadable (number) {
    let one_dig_arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let two_dig_arr = ['ten', 'elven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen', 'nineteen'];
    if (number < 10){
        return one_dig_arr[number];
    }else if(number >= 10 && number <= 19){
        return two_dig_arr[number-10];
    }
}
