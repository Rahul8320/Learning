Array.prototype.extraPropertry = "hitesh"

const myNewArray = [1,2,3,4,5]

for(let v in myNewArray){
	console.log(v)
}

myNewArray.forEach(value => {
	console.log(value)
})

for(let v in myNewArray){
	if(myNewArray.hasOwnProperty(v)){
		console.log(v)
	}
}

