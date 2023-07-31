module.exports = function toReadable (number) {
  let result = ''
  let number_arr = [...number.toString()]
  const digits = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  }

  const uniq_numbers = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  }

  const dozens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
  }

  if(number_arr.length == 1){
    return len1(number_arr)
  } else if (number_arr.length == 2){
    return len2(number_arr)
  } else {
    return len3(number_arr)
  }

  function len1(number_arr){
    return digits[number_arr[0]]
  }

  function len2(number_arr){
    if(number_arr[0] == 0){
        return digits[number_arr[1]]
    }
    if (uniq_numbers[number_arr[0]+number_arr[1]] !== undefined){
        return uniq_numbers[number_arr[0]+number_arr[1]]
    } else {
        if(number_arr[1] == 0){
            return dozens[number_arr[0]]
        } else {
            return dozens[number_arr[0]] + ' ' + digits[number_arr[1]]
        }
    }
  }
  

function len3(number_arr){
  result += digits[number_arr[0]] + ' hundred'
  if(number_arr[1] == 0 && number_arr[2] == 0){
    return result
  }
  number_arr.shift()
  return result + ' ' + len2(number_arr)
}

}


