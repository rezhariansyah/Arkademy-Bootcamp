var huruf = "aiueo"
var data = huruf.split("")
var perintah = [true, false, false, false, true]


var printer = (arr) => {
    var hasil = ""
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            hasil += data[i]
        }

    }
    return hasil
}

console.log(printer(perintah))