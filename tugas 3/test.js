// // let arr = [
// //     [1, 2, 3],
// //     [4, 5, 6]
// // ]

// // let arr2 = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// // ]

// // transposeMat = (a) => {
// //     let t = []
// //     for (let i = 0; i < a[0].length; i++) {
// //         t[i] = []
// //         for (let j = 0; j < a.length; j++) {
// //             t[i][j] = a[j][i]
// //         }
// //     }
// //     return t
// // }

// // console.log(transposeMat(arr2))

// // var re = /[^A-Za-z0-9]/g;
// // console.log(re)

// var data = [{
//     name: "Tatas",
//     company: "Arkademy",
//     job: "Trainer",
//     status: "single",
//     city: "Jogja"
// },
// {
//     name: "Pratama",
//     company: "Emago",
//     job: "Trainer",
//     status: "single",
//     city: "Jakarta"
// }
// ]

// var hasil = [...data.splice(0, 0), Object.assign({}, data[0], {
//     status: 'Menikah',
//     city: 'Jakarta'
// }), ...data.splice(1, 0), Object.assign({}, data[1], {
//     company: 'Arkademy',
//     city: 'Jogja'
// })]

// console.log(hasil)

// var index = items.indexOf(3452);

// if (index !== -1) {
//     items[index] = 1010;
// }

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); 

console.log(months)