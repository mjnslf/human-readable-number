function one_digit (number){
    let result = '';
    let one_dig_arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    result = `${result}${one_dig_arr[number]}`;
    return result;
}

function two_digits (number){
    let result = '';
    let two_dig_arr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    result = `${result}${two_dig_arr[number-10]}`;
    return result;
}

function ty_digits (number){
    let result = '';
    let arr_ty = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number%10 === 0){
        let i = 0;
        while(i<=(number/10)){
            i++;
        }
        result = `${result}${arr_ty[i-3]}`;
    }else{
        let i = 0;
        while(i<=(number/10)){
            i++;
        }
        result = `${result}${arr_ty[i-3]} ${one_digit(number%10)}`;
    }
    return result;
}

function hundred (number){
    let result = '';
    if (number % 100 === 0){
        result = `${result}${one_digit(number / 100)}` + " hundred";
    }else{
        result = `${result}${one_digit(Math.trunc(number / 100))}` + " hundred";
        if ((number % 100) >= 10 && (number % 100) < 20){
            result = `${result} ${two_digits(number%100)}`;
        }else{
            result = `${result} ${ty_digits(number%100)}`;
        }
    }
    return result;
}

module.exports = function toReadable (number) {
    let result = '';
    if (number < 10){
        result = one_digit(number);
    }else if (number >= 10 && number < 20){
        result = two_digits(number);
    }else if (number >= 20 && number < 100){
        result = ty_digits(number);
    }else{
        result = hundred(number);
    }
    return result;
}
