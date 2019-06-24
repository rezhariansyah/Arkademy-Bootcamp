var data = [
    {
        judul : "Harry Potter",
        status : true
    },
    {
        judul : "Twilight",
        status : false
    },
    {
        judul : "Si Doel",
        status : false
    },
    {
        judul : "One Punch Man",
        status : true
    }
]

// 
var statusPinjam = (str) => {
    hasil = ""
    for (var i=0 ; i<data.length ; i++ ) {
        if(data[i].judul == str) {
            hasil = data[i].status
            if (hasil == true) {
                hasil = `buku dengan judul ${data[i].judul} telah dipinjam`
            } else {
                hasil = `buku dengan judul ${data[i].judul} tersedia`
            }
        }
        
    } return hasil
}


// status buku yang masih tersedia
var bukuStatus = () => {
    var hasil = ""
    for (var i=0 ; i<data.length ; i++) {
        if(data[i].status == false) {
            hasil += `buku ${data[i].judul} available \n`
        }
        
    } return hasil
}

console.table(data)
console.log(statusPinjam("Harry Potter"))
console.log(bukuStatus())