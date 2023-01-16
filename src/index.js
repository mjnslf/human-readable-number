module.exports = function toReadable (number) {
    let one_dig_arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    if (number < 10){
        return one_dig_arr[number];
    }
}
