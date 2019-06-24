var arr = [5,7,2,9,1,2,2,5,2,2]

var median = () => {
    sort = arr.sort((a,b) => a-b)
    
    if (arr.length % 2 == 0) {
        var nilai1 = parseInt(arr[(arr.length/2)-1])
        var nilai2 = parseInt(arr[arr.length/2])
        var hasil = (nilai1+nilai2) / 2
    } else {
        hasil = arr[(arr.length - 1) / 2]
    }


    return `nilai median dari ${arr} adalah ${hasil}`
}

var modus = () => {
    hasil = 0
    total = 0
    for (var i = 0; i < arr.length; i++) {
        var jumlah = 0
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                jumlah++
            }                
        }

        if (jumlah > total) {
            total = jumlah
            hasil = arr[i]
        }
    }
    
    return `modus dari ${arr} adalah ${hasil} karena ada ${total} nilai`
}

var mean = () => {
    hasil = 0
    for (var i = 0; i < arr.length; i++) {
        hasil += parseInt(arr[i])
    }
    return `nilai rata-rata dari ${arr} adalah ${(hasil/arr.length)}`
}

console.log(median())
console.log(modus())
console.log(mean())