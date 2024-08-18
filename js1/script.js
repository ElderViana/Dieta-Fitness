
const name = document.getElementById("name");
const maleGender = document.getElementById("male");
const femaleGender = document.getElementById("female");
const age = document.getElementById("age");
const tall = document.getElementById("tall");
const weight = document.getElementById("weight");
const input = document.querySelectorAll("[input]")
const tDEEresult = document.getElementById("tDEEresult");
const dark = document.getElementById("dark");




const calculateTDEE = () => {

	let bMR = 0; //(bMR) basal Metabolic Rate
	let tDEE = 0;
console.log(name.value)
	
	if(male.checked === true){
		bMR = 66 + (13.7 * (parseFloat(weight.value))) + (5 * (parseFloat(tall.value))) - (6.8 * (parseInt(age.value)));
	}
	if(female.checked === true){
		bMR = 655 + (9.6 * (parseFloat(weight.value))) + (1.8 * (parseFloat(tall.value))) - (4.7 * (parseInt(age.value)));
	}

	//Physical activity level
	if(input[0].checked === true){
		tDEE = (bMR * 1.2); //sedentary
	}

	if(input[1].checked === true){
		tDEE = (bMR * 1.375); //slightlyActive
	}

	if(input[2].checked === true){
		tDEE = (bMR * 1.55); //moderatelyActive
	}

	if(input[3].checked === true){
		tDEE = (bMR  * 1.725); //highlyActive
	}

	if(input[4].checked === true){
		tDEE = (bMR * 1.9); //extremelyActive
	}


	tDEEresult.textContent = `Olá, ${name.value}! A sua taxa metabólica basal é de ${bMR.toFixed(2)} kcal e o seu gasto energético é de ${tDEE.toFixed(2)} kcal.`

	localStorage.setItem("tDEE", JSON.stringify(tDEE))
}

const clean = () => {
	window.location.reload();
}

const unSelectInput = (input) => {
	if(input === male){
		femaleGender.checked = false;
	}
	if(input === female){
		maleGender.checked = false;
	}
	if(input === sedentary){
		slightlyActive.checked = false;
		moderatelyActive.checked = false;
		highlyActive.checked = false;
		extremelyActive.checked =false;	
	}
	
	if(input === slightlyActive){
		sedentary.checked = false;
		moderatelyActive.checked = false;
		highlyActive.checked = false;
		extremelyActive.checked =false;	
	}
	if(input === moderatelyActive){
		sedentary.checked = false;
		slightlyActive.checked = false;
		highlyActive.checked = false;
		extremelyActive.checked =false;	
	}
	if(input === highlyActive){
		sedentary.checked = false;
		slightlyActive.checked = false;
		moderatelyActive.checked = false;
		extremelyActive.checked =false;	
	}
	if(input === extremelyActive){
		sedentary.checked = false;
		slightlyActive.checked = false;
		moderatelyActive.checked = false;
		highlyActive.checked =false;	
	}
}

male.addEventListener("click", () => {
	unSelectInput(male);
});
female.addEventListener("click", () => {
	unSelectInput(female);
});
sedentary.addEventListener("click", () => {
	unSelectInput(sedentary);
});
slightlyActive.addEventListener("click", () => {
	unSelectInput(slightlyActive);
});
moderatelyActive.addEventListener("click", () => {
	unSelectInput(moderatelyActive);
});
highlyActive.addEventListener("click", () => {
	unSelectInput(highlyActive);
});
extremelyActive.addEventListener("click", () => {
	unSelectInput(extremelyActive);
});


dark.addEventListener("change", () => {
	document.body.classList.toggle("dark");
});