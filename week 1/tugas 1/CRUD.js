let arrayObj = [
    {
        nama : "Rezha",
        umur : 24
    },
    {
        nama : "Bambang",
        umur : 22
    },
    {
        nama : "Tuman",
        umur : 34
    }
]

// Create
let addData = {
    nama : "Bobi",
    umur : 20
}
arrayObj.push(addData);
console.log(arrayObj)

// Read
let showData = function(item) {
    let data = [item.nama, item.umur].join(" : ")
    return data
}
console.log(arrayObj.map(showData))

// Update
arrayObj[1].nama = "Tejo"
console.log(arrayObj)

// Delete
arrayObj.splice(2.1)
console.log(arrayObj)


