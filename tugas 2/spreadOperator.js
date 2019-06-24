var data = [{
		name: "Tatas",
		company: "Arkademy",
		job: "Trainer",
		status: "single",
		city: "Jogja"
	},
	{
		name: "Pratama",
		company: "Emago",
		job: "Trainer",
		status: "single",
		city: "Jakarta"
	}
]

// console.log(...data)

var tatasMenikah = true
var pratamaDirekrut = true


// merubah value pada object pabila tatas menikah dan pratama direkrut
var spread = () => {
	if (tatasMenikah && pratamaDirekrut) {
		var hasil = [...data.splice(0, 0), Object.assign({}, data[0], {
			status: 'Menikah',
			city: 'Jakarta'
		}), ...data.splice(1, 0), Object.assign({}, data[1], {
			company: 'Arkademy',
			city: 'Jogja'
		})]
	} else {
		hasil = data
	}

	return hasil
}

console.log(spread())