// palindrome
function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("makam"));

// penjumlahan array of number
var sumAll = () => {
  var number = [123, 9, 27]
  var hasil = 0
  var hasil2 = 0
  var hasil3 = 0
  console.log(number)

  for (var i = 0; i < number.length; i++) {
    hasil += number[i]
  }
  
  console.log(`${number[0]} + ${number[1]} + ${number[2]} = ${hasil}`)
  var sNumber = hasil.toString().split("")
  var arr = sNumber.map(Number)
  console.log(arr)
  for (var i = 0; i < arr.length; i++) {
    hasil2 += arr[i]
  }

  console.log(`${arr[0]} + ${arr[1]} + ${arr[2]} = ${hasil2}`)
  var sNumber = hasil2.toString().split("")
  var arr = sNumber.map(Number)
  console.log(arr)
  for (var i = 0; i < arr.length; i++) {
    hasil3 += arr[i]
  }

  return `${arr[0]} + ${arr[1]} = ${hasil3}`

}
console.log(sumAll())

