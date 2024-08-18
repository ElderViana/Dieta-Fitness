

const foods = [
	{typeMeal: "Café da manhã", name: "Pão integral", quantity: 2, unitOfMeasure: "Fatia(as)", carbohydrate: 24.54, protein: 4.74, fat: 2.14, calories: 136},
	{typeMeal: "Café da manhã", name: "Tapioca", quantity: 30, unitOfMeasure: "g", carbohydrate: 27.93, protein: 0, fat: 0, calories: 114},
	{typeMeal: "Café da manhã", name: "Açúcar", quantity: 1, unitOfMeasure: "Colher(es) de sopa", carbohydrate: 4.2, protein: 0, fat: 0, calories: 16},
	{typeMeal: "Café da manhã", name: "Ovo", quantity: 1, unitOfMeasure: "Unidade(s)", carbohydrate: 0.38, protein: 6.29, fat: 4.97, calories: 74},
	{typeMeal: "Café da manhã", name: "Queijo ricota", quantity: 30, unitOfMeasure: "g", carbohydrate: 11.23, protein: 0.40, fat: 0.61, calories: 11}, 
	{typeMeal: "Café da manhã", name: "Leite desnatado", quantity: 100, unitOfMeasure: "ml", carbohydrate: 10, protein: 6, fat: 0.7, calories: 7},
	{typeMeal: "Lanche da manhã", name: "Banana nanica", quantity: 200, unitOfMeasure: "g", carbohydrate: 47.6, protein: 2.8, fat: 0.2, calories: 184},
	{typeMeal: "Lanche da manhã", name: "Aveia", quantity: 4, unitOfMeasure: "Colher(es) de sopa", carbohydrate: 34.2, protein: 8.72, fat: 4.72, calories: 212},
	{typeMeal: "Lanche da manhã", name: "Pasta de amendoim", quantity: 2, unitOfMeasure: "Colher(es) de sopa", carbohydrate: 5.98, protein: 7.34, fat: 14.96, calories: 176},
	{typeMeal: "Lanche da manhã", name: "Yakult", quantity: 80, unitOfMeasure: "ml", carbohydrate: 11, protein: 1.6, fat: 0, calories: 51},
	{typeMeal: "Lanche da manhã", name: "Iogurte natural", quantity: 150, unitOfMeasure: "g", carbohydrate: 10, protein: 6.8, fat: 3.6, calories: 88},
	{typeMeal: "Pré-treino", name: "Batata doce", quantity: 300, unitOfMeasure: "g", carbohydrate: 77.64, protein: 7.44, fat: 0.39, calories: 336},
	{typeMeal: "Pós-treino", name: "Whey concentrado", quantity: 60, unitOfMeasure: "g", carbohydrate: 10, protein: 48, fat: 0, calories: 232},
	{typeMeal: "Almoço", name: "Arroz integral", quantity: 4, unitOfMeasure: "Colher(es) de sopa", carbohydrate: 6.88, protein: 0.68, fat: 0.24, calories: 33},
	{typeMeal: "Almoço", name: "Mandioca", quantity: 100, unitOfMeasure: "g", carbohydrate: 37.46, protein: 1.34, fat: 2.04, calories: 173},
	{typeMeal: "Almoço", name: "Filé de frango", quantity: 100, unitOfMeasure: "g", carbohydrate: 0, protein: 31.02, fat: 3.57, calories: 165},
	{typeMeal: "Almoço", name: "Filé de tilápia", quantity: 100, unitOfMeasure: "g", carbohydrate: 0, protein: 20.08, fat: 1.7, calories: 96},
	{typeMeal: "Almoço", name: "Bisteca suína", quantity: 100, unitOfMeasure: "g", carbohydrate: 0, protein: 24, fat: 5.4, calories: 146},
	{typeMeal: "Almoço", name: "Feijão", quantity: 4, unitOfMeasure: "Colher(es) de sopa", carbohydrate: 18, protein: 5.8, fat: 0.5, calories: 100},
	{typeMeal: "Almoço", name: "Tomate", quantity: 100, unitOfMeasure: "g", carbohydrate: 9.9, protein: 0.9, fat: 0, calories: 18},
	{typeMeal: "Almoço", name: "Repolho", quantity: 100, unitOfMeasure: "g", carbohydrate: 3.9, protein: 0.9, fat: 0.1, calories: 17},
	{typeMeal: "Almoço", name: "Cenoura", quantity: 100, unitOfMeasure: "g", carbohydrate: 41, protein: 0.93, fat: 0.24, calories: 41},
	{typeMeal: "Lanche da tarde", name: "Maçã", quantity: 100, unitOfMeasure: "g", carbohydrate: 15, protein: 0, fat: 0, calories: 52},
	{typeMeal: "Lanche da tarde", name: "Manga palmer", quantity: 100, unitOfMeasure: "g", carbohydrate: 18.55, protein: 0.56, fat: 18.55, calories: 72},
 	{typeMeal: "Lanche da tarde", name: "Caqui", quantity: 100, unitOfMeasure: "g", carbohydrate: 19.3, protein: 0.4, fat: 0, calories: 71},
 	{typeMeal: "Lanche da tarde", name: "Carambola", quantity: 100, unitOfMeasure: "g", carbohydrate: 6.73, protein: 1.04, fat: 0.33, calories: 31},
	{typeMeal: "Lanche da tarde", name: "Laranja pêra", quantity: 100, unitOfMeasure: "g", carbohydrate: 9.73, protein: 0.61, fat: 0.11, calories: 37},
	{typeMeal: "Jantar", name: "Cuscuz", quantity: 100, unitOfMeasure: "g", carbohydrate: 23.22, protein: 3.79, fat: 0.16, calories: 112},
	{typeMeal: "Jantar", name: "Bife bovino", quantity: 100, unitOfMeasure: "g", carbohydrate: 0, protein: 27.29, fat: 15.01, calories: 252},
	{typeMeal: "Jantar", name: "Fígado de frango", quantity: 100, unitOfMeasure: "g", carbohydrate: 0.87, protein: 24.46, fat: 6.51, calories: 167},
	{typeMeal: "Jantar", name: "Sardinha enlatada", quantity: 1, unitOfMeasure: "Lata(s)", carbohydrate: 0, protein: 22.65, fat: 10.53, calories: 191},
	{typeMeal: "Jantar", name: "Alface", quantity: 100, unitOfMeasure: "g", carbohydrate: 2.97, protein: 0.9, fat: 0.14, calories: 14},
	{typeMeal: "Jantar", name: "Pepino", quantity: 100, unitOfMeasure: "g", carbohydrate: 3.6, protein: 0.7, fat: 0.1, calories: 16},
	{typeMeal: "Jantar", name: "Beterraba", quantity: 100, unitOfMeasure: "g", carbohydrate: 9.9, protein: 1.67, fat: 0.18, calories: 44},
	{typeMeal: "Jantar", name: "Azeite", quantity: 2, unitOfMeasure: "Colher(es) de sopa", carbohydrate: 0, protein: 0, fat: 27, calories: 238},
	{typeMeal: "Ceia", name: "Abacate", quantity: 100, unitOfMeasure: "g", carbohydrate: 8.53, protein: 2, fat: 14.66, calories: 160}
];
const dark = document.getElementById("dark");
const foods2 = structuredClone(foods);

const input = document.querySelectorAll("[input]");
const loseWeight = document.getElementById("loseWeight");
const keepMuscleMass = document.getElementById("keepMuscleMass");
const gainMuscleMass = document.getElementById("gainMuscleMass");


const selectAllBreakfast = document.getElementById("selectAllBreakfast");
const unSelectAllBreakfast = document.getElementById("unSelectAllBreakfast");

const wholemealBread = document.getElementById("wholemealBread");
const tapioca = document.getElementById("tapioca");

const sugar = document.getElementById("sugar");
const egg = document.getElementById("egg");
const ricotaCheese = document.getElementById("ricotaCheese");
const skimedMilk = document.getElementById("skimedMilk");


const selectAllMorningSnack = document.getElementById("selectAllMorningSnack");
const unSelectAllMorningSnack = document.getElementById("unSelectAllMorningSnack");

const banana = document.getElementById("banana");
const oat = document.getElementById("oat");
const peanutButter = document.getElementById("peanutButter");

const yakult = document.getElementById("yakult");
const naturalYogurt = document.getElementById("naturalYogurt");


const selectAllLunch = document.getElementById("selectAllLunch");
const unSelectAllLunch = document.getElementById("unSelectAllLunch");

const wholegrainRice = document.getElementById("wholegrainRice");
const cassava = document.getElementById("cassava");

const chickenFillet = document.getElementById("chickenFillet");
const tilapiaFillet = document.getElementById("tilapiaFillet");
const porkChop = document.getElementById("porkChop");

const bean = document.getElementById("bean");
const tomato = document.getElementById("tomato");
const cabbage = document.getElementById("cabbage");
const carrot = document.getElementById("carrot");


const selectAllAfternoonSnack = document.getElementById("selectAllAfternoonSnack");
const unSelectAllAfternoonSnack = document.getElementById("unSelectAllAfternoonSnack");

const apple = document.getElementById("apple");
const sleeve = document.getElementById("sleeve");

const persimmon = document.getElementById("persimmon");
const starFruit = document.getElementById("starFruit");
const orange = document.getElementById("orange");


const selectAllDinner = document.getElementById("selectAllDinner");
const unSelectAllDinner = document.getElementById("unSelectAllDinner");

const couscous = document.getElementById("couscous");

const beefSteak = document.getElementById("beefSteak");
const chickenLiver = document.getElementById("chickenLiver");
const cannedSardine = document.getElementById("cannedSardine");

const lettuce = document.getElementById("lettuce");
const cucumber = document.getElementById("cucumber");
const beet = document.getElementById("beet");
const oliveOil = document.getElementById("oliveOil");


let totalCarbohydrate = document.getElementById("carbohydrate");
let totalProtein = document.getElementById("protein");
let totalFat = document.getElementById("fat");
let totalCalories = document.getElementById("calories");

let tDEE = JSON.parse(localStorage.getItem("tDEE"));



const chooseMenu = () => {

	let carbohydrate = 0;
	let protein = 0;
	let fat = 0;
	let calories = 0;

	for (i = 0; i < foods2.length; i++){
		if(loseWeight.checked || keepMuscleMass.checked || gainMuscleMass.checked === true){  
			if(input[i].checked === true){
				carbohydrate += foods2[i].carbohydrate; 
				protein += foods2[i].protein; 
				fat += foods2[i].fat; 
				calories += foods2[i].calories;	
				}		
		}
	}

	if(loseWeight.checked === true){
		tDEE -= 500;
		console.log(tDEE)
	} else if(keepMuscleMass.checked === true){
		    	tDEE += 500;
				console.log(tDEE)
	}else if(gainMuscleMass.checked === true){
				tDEE += 1000;
				console.log(tDEE)
	}
	

	if(loseWeight.checked || keepMuscleMass.checked || gainMuscleMass.checked === true){
	
		if(calories <= tDEE && input[0].checked === true){
			carbohydrate += foods2[0].carbohydrate; 
			protein += foods2[0].protein; 
			fat += foods2[0].fat; 
			calories += foods2[0].calories;

			foods2[0].quantity = (2 * foods2[0].quantity);
			foods2[0].carbohydrate = (2 * foods2[0].carbohydrate);
			foods2[0].protein = (2 * foods2[0].protein);
			foods2[0].fat = (2 * foods2[0].fat);
			foods2[0].calories = (2 * foods2[0].calories);
		} else if(calories <= tDEE && input[1].checked === true){
					carbohydrate += foods2[1].carbohydrate; 
					protein += foods2[1].protein; 
					fat += foods2[1].fat;
					calories += foods2[1].calories;

					foods2[1].quantity = (2 * foods2[1].quantity);
					foods2[1].carbohydrate = (2 * foods2[1].carbohydrate);
					foods2[1].protein = (2 * foods2[1].protein);
					foods2[1].fat = (2 * foods2[1].fat);
					foods2[1].calories = (2 * foods2[1].calories);
				}
			
			
	
		if(calories <= tDEE && input[3].checked === true){
			carbohydrate += (2 * foods2[3].carbohydrate); 
			protein += (2 * foods2[3].protein); 
			fat += (2 * foods2[3].fat); 
			calories += (2 * foods2[3].calories);

			foods2[3].quantity = (3 * foods2[3].quantity);
			foods2[3].carbohydrate = (3 * foods2[3].carbohydrate);
			foods2[3].protein = (3 * foods2[3].protein);
			foods2[3].fat = (3 * foods2[3].fat);
			foods2[3].calories = (3 * foods2[3].calories);
		}
		
		if(calories <= tDEE && input[15].checked === true){
			carbohydrate += foods2[15].carbohydrate; 
			protein += foods2[15].protein; 
			fat += foods2[15].fat; 
			calories += foods2[15].calories;

			foods2[15].quantity = (2 * foods2[15].quantity);
			foods2[15].carbohydrate = (2 * foods2[15].carbohydrate);
			foods2[15].protein = (2 * foods2[15].protein);
			foods2[15].fat = (2 * foods2[15].fat);
			foods2[15].calories = (2 * foods2[15].calories);
		} else if(calories <= tDEE && input[16].checked === true){
					carbohydrate += (2 * foods2[16].carbohydrate); 
					protein += (2 * foods2[16].protein); 
					fat += (2 * foods2[16].fat); 
					calories += (2 * foods2[16].calories);

					foods2[16].quantity = (3 * foods2[16].quantity);
					foods2[16].carbohydrate = (3 * foods2[16].carbohydrate);
					foods2[16].protein = (3 * foods2[16].protein);
					foods2[16].fat = (3 * foods2[16].fat);
					foods2[16].calories = (3 * foods2[16].calories);
	
				} else if(calories <= tDEE && input[17].checked === true){
							carbohydrate += foods2[17].carbohydrate; 
							protein += foods2[17].protein; 
							fat += foods2[17].fat; 
							calories += foods2[17].calories;
	
							foods2[17].quantity = (2 * foods2[17].quantity);
							foods2[17].carbohydrate = (2 * foods2[17].carbohydrate);
							foods2[17].protein = (2 * foods2[17].protein);
							foods2[17].fat = (2 * foods2[17].fat);
							foods2[17].calories = (2 * foods2[17].calories);
						}

		if(calories <= tDEE && input[22].checked === true){
    		carbohydrate += foods2[22].carbohydrate; 
    		protein += foods2[22].protein; 
    		fat += foods2[22].fat; 
   		 	calories += foods2[22].calories;

    		foods2[22].quantity = (2 * foods2[22].quantity);
    		foods2[22].carbohydrate = (2 * foods2[22].carbohydrate);
    		foods2[22].protein = (2 * foods2[22].protein);
    		foods2[22].fat = (2 * foods2[22].fat);
    		foods2[22].calories = (2 * foods2[22].calories);
		} else if(calories <= tDEE && input[23].checked === true){
					carbohydrate += foods2[23].carbohydrate; 
					protein += foods2[23].protein; 
					fat += foods2[23].fat; 
					calories += foods2[23].calories;
		
					foods2[23].quantity = (2 * foods2[23].quantity);
					foods2[23].carbohydrate = (2 * foods2[23].carbohydrate);
					foods2[23].protein = (2 * foods2[23].protein);
					foods2[23].fat = (2 * foods2[23].fat);
					foods2[23].calories = (2 * foods2[23].calories);
				}
		if(calories <= tDEE && input[24].checked === true){
    		carbohydrate += foods2[24].carbohydrate; 
    		protein += foods2[24].protein; 
    		fat += foods2[24].fat; 
    		calories += foods2[24].calories;

    		foods2[24].quantity = (2 * foods2[24].quantity);
    		foods2[24].carbohydrate = (2 * foods2[24].carbohydrate);
    		foods2[24].protein = (2 * foods2[24].protein);
    		foods2[24].fat = (2 * foods2[24].fat);
    		foods2[24].calories = (2 * foods2[24].calories);
		} else if(calories <= tDEE && input[25].checked === true){
					carbohydrate += (2 * foods2[25].carbohydrate); 
					protein += (2 * foods2[25].protein); 
					fat += (2 * foods2[25].fat); 
					calories += (2 * foods2[25].calories);
		
					foods2[25].quantity = (3 * foods2[25].quantity);
					foods2[25].carbohydrate = (3 * foods2[25].carbohydrate);
					foods2[25].protein = (3 * foods2[25].protein);
					foods2[25].fat = (3 * foods2[25].fat);
					foods2[25].calories = (3 * foods2[25].calories);
		} else if(calories <= tDEE && input[26].checked === true){
					carbohydrate += (2 * foods2[26].carbohydrate); 
					protein += (2 * foods2[26].protein); 
					fat += (2 * foods2[26].fat); 
					calories += (2 * foods2[26].calories);
		
					foods2[26].quantity = (3 * foods2[26].quantity);
					foods2[26].carbohydrate = (3 * foods2[26].carbohydrate);
					foods2[26].protein = (3 * foods2[26].protein);
					foods2[26].fat = (3 * foods2[26].fat);
					foods2[26].calories = (3 * foods2[26].calories);
				}
				
	
	


		if(calories <= tDEE && input[27].checked === true){
    		carbohydrate +=  foods2[27].carbohydrate; 
    		protein += foods2[27].protein; 
    		fat += foods2[27].fat; 
    		calories += foods2[27].calories;

    		foods2[27].quantity = (2 * foods2[27].quantity);
    		foods2[27].carbohydrate = (2 * foods2[27].carbohydrate);
    		foods2[27].protein = (2 * foods2[27].protein);
    		foods2[27].fat = (2 * foods2[27].fat);
    		foods2[27].calories = (2 * foods2[27].calories);
		}

	
//2.880 kcal
		if(calories <= tDEE && input[28].checked === true){
			carbohydrate += foods2[28].carbohydrate; 
			protein += foods2[28].protein; 
			fat += foods2[28].fat; 
			calories +=foods2[28].calories;
	
			foods2[28].quantity = (2 * foods2[28].quantity);
			foods2[28].carbohydrate = (2 * foods2[28].carbohydrate);
			foods2[28].protein = (2 * foods2[28].protein);
			foods2[28].fat = (2 * foods2[28].fat);
			foods2[28].calories = (2 * foods2[28].calories);
		} else if(calories <= tDEE && input[29].checked === true){
					carbohydrate += (2 * foods2[29].carbohydrate); 
					protein += (2 * foods2[29].protein); 
					fat += (2 * foods2[29].fat); 
					calories += (2 * foods2[29].calories);
	
					foods2[29].quantity = (3 * foods2[29].quantity);
					foods2[29].carbohydrate = (3 * foods2[29].carbohydrate);
					foods2[29].protein = (3 * foods2[29].protein);
					foods2[29].fat = (3 * foods2[29].fat);
					foods2[29].calories = (3 * foods2[29].calories);
				}else if(calories <= tDEE && input[30].checked === true){
							carbohydrate += (2 * foods2[30].carbohydrate); 
							protein += (2 * foods2[30].protein); 
							fat += (2 * foods2[30].fat); 
							calories += (2 * foods2[30].calories);
			
							foods2[30].quantity = (3 * foods2[30].quantity);
							foods2[30].carbohydrate = (3 * foods2[30].carbohydrate);
							foods2[30].protein = (3 * foods2[30].protein);
							foods2[30].fat = (3 * foods2[30].fat);
							foods2[30].calories = (3 * foods2[30].calories);
						}
					
//3.132 kcal
		if(calories <= tDEE && input[35].checked === true){
			carbohydrate += foods2[35].carbohydrate; 
			protein += foods2[35].protein; 
			fat += foods2[35].fat; 
			calories += foods2[35].calories;
		
			foods2[35].quantity = (2 * foods2[35].quantity);
			foods2[35].carbohydrate = (2 * foods2[35].carbohydrate);
			foods2[35].protein = (2 * foods2[35].protein);
			foods2[35].fat = (2 * foods2[35].fat);
			foods2[35].calories = (2 * foods2[35].calories);
		}
//3.292 kcal
		if(calories <= tDEE && input[3].checked === true){
				carbohydrate += 0.76; 
				protein += 12.58; 
				fat += 9.94; 
				calories += 148;

				foods2[3].quantity = 5;
				foods2[3].carbohydrate = 1.9;
				foods2[3].protein = 31.45;
				foods2[3].fat = 24.85;
				foods2[3].calories = 370;
		}

		if(calories <= tDEE && input[13].checked === true){
			carbohydrate += foods2[13].carbohydrate; 
			protein += foods2[13].protein; 
			fat += foods2[13].fat; 
			calories += foods2[13].calories;
		
			foods2[13].quantity = (2 * foods2[13].quantity);
			foods2[13].carbohydrate = (2 * foods2[13].carbohydrate);
			foods2[13].protein = (2 * foods2[13].protein);
			foods2[13].fat = (2 * foods2[13].fat);
			foods2[13].calories = (2 * foods2[13].calories);
		}

		if(calories <= tDEE && input[18].checked === true){
			carbohydrate += foods2[18].carbohydrate; 
			protein += foods2[18].protein; 
			fat += foods2[18].fat; 
			calories += foods2[18].calories;
		
			foods2[18].quantity = (2 * foods2[18].quantity);
			foods2[18].carbohydrate = (2 * foods2[18].carbohydrate);
			foods2[18].protein = (2 * foods2[18].protein);
			foods2[18].fat = (2 * foods2[18].fat);
			foods2[18].calories = (2 * foods2[18].calories);
		}
 //3.573 kcal
 		if(calories <= tDEE && input[15].checked === true){
    		carbohydrate += 0; 
    		protein += 31.02; 
    		fat += 3.57; 
    		calories += 165;

    		foods2[15].quantity = 300;
    		foods2[15].carbohydrate = 0;
    		foods2[15].protein = 93.06;
    		foods2[15].fat = 10.71;
    		foods2[15].calories = 495;
		} else if(calories <= tDEE && input[16].checked === true){
					carbohydrate += 0; 
					protein += 20.08; 
					fat += 1.7; 
					calories += 96;
		
					foods2[16].quantity = 400;
					foods2[16].carbohydrate = 0;
					foods2[16].protein = 80.32;
					foods2[16].fat = 6.8;
					foods2[16].calories = 384;
			} else if(calories <= tDEE && input[17].checked === true){
						carbohydrate += 0; 
						protein += 24; 
						fat += 5.4; 
						calories += 146;
			
						foods2[17].quantity = 300;	
						foods2[17].carbohydrate = 0;
						foods2[17].protein = 72;
						foods2[17].fat = 16.2;
						foods2[17].calories = 438;
					}
//3.738 kcal
		if(calories <= tDEE && input[27].checked === true){
			carbohydrate += 46.44; 
			protein += 7.58; 
			fat += 0.32; 
			calories += 224;
					
			foods2[27].quantity = 400;
			foods2[27].carbohydrate = 92.88;
			foods2[27].protein = 15.16;
			foods2[27].fat = 0.64;
			foods2[27].calories = 448;
		}
//3.962 kcal
		if(calories <= tDEE && input[28].checked === true){
    		carbohydrate += 0; 
    		protein += 27.29; 
    		fat += 15.01; 
    		calories += 252;

   			foods2[28].quantity = 300;
    		foods2[28].carbohydrate = 0;
    		foods2[28].protein = 81.87;
    		foods2[28].fat = 45.03;
    		foods2[28].calories = 756;
		} else if(calories <= tDEE && input[29].checked === true){
					carbohydrate += 0.87; 
					protein += 24.46; 
					fat += 6.51; 
					calories += 167;
		
					foods2[29].quantity = 400;
					foods2[29].carbohydrate = 3.48;
					foods2[29].protein = 97.84;
					foods2[29].fat = 26.04;
					foods2[29].calories = 668;
				} else if(calories <= tDEE && input[30].checked === true){
							carbohydrate += 0; 
							protein += 22.65; 
							fat += 10.53; 
							calories += 191;
				
							foods2[30].quantity = 4;
							foods2[30].carbohydrate = 0;
							foods2[30].protein = 90.6;
							foods2[30].fat = 42.12;
							foods2[30].calories = 764;
						}
//4.214 kcal
		if(calories <= tDEE && input[34].checked === true){
    		carbohydrate += 0; 
    		protein += 22.65; 
    		fat += 27; 
    		calories += 238;

    		foods2[34].quantity = 4;
    		foods2[34].carbohydrate = 0;
    		foods2[34].protein = 0;
   			 foods2[34].fat = 54;
    		foods2[34].calories = 476;
		}

		if(calories <= tDEE && input[35].checked === true){
			carbohydrate += 8.53; 
			protein += 2; 
			fat += 14.66; 
			calories += 160;
		
			foods2[35].quantity = 300;
			foods2[35].carbohydrate = 25.59;
			foods2[35].protein = 6;
			foods2[35].fat = 43.98;
			foods2[35].calories = 480;
		} 
//4.612 kcal

	}
	if(loseWeight.checked || keepMuscleMass.checked || gainMuscleMass.checked === true){
	for( i = 0; i < foods2.length; i++){
		
	

			let tb = document.getElementById("tbDiet");
			let numberOfLines = tb.rows.length;

		
				input.forEach(ipt => {
					if(ipt.checked === true){
						if(ipt.name === foods2[i].name){
							let line = tb.insertRow(numberOfLines);
							let cellTypeMeal = line.insertCell(0);
							let cellFood = line.insertCell(1);
							let cellQuantity = line.insertCell(2);
							let cellCarbohydrate = line.insertCell(3);
							let cellProtein = line.insertCell(4);
							let cellFat = line.insertCell(5);
							let cellCalories = line.insertCell(6);
							cellTypeMeal.innerHTML = foods2[i].typeMeal;
							cellFood.innerHTML = foods2[i].name;
							cellQuantity.innerHTML = `${foods2[i].quantity} ${foods2[i].unitOfMeasure}`;
							cellCarbohydrate.innerHTML = foods2[i].carbohydrate.toFixed(2);
							cellProtein.innerHTML = foods2[i].protein.toFixed(2);
							cellFat.innerHTML = foods2[i].fat.toFixed(2);
							cellCalories.innerHTML = foods2[i].calories.toFixed(2);

						}
						
					}
				})
		}
		}else {
			alert("Por favor selecione um objetivo!")
		
	}

	totalCarbohydrate.textContent = `${carbohydrate.toFixed(2)}g`;
	totalProtein.textContent = `${protein.toFixed(2)}g`;
	totalFat.textContent = `${fat.toFixed(2)}g`;
	totalCalories.textContent = `${calories}kcal`;
}


	
const unSelectInput = (input) => {


	if(input === loseWeight){
		keepMuscleMass.checked = false;
		gainMuscleMass.checked = false;
	}
	if(input === keepMuscleMass){
		loseWeight.checked = false;
		gainMuscleMass.checked = false;
	}
	if(input === gainMuscleMass){
		loseWeight.checked = false;
		keepMuscleMass.checked = false;
	}

	if(input === wholemealBread){
		tapioca.checked = false;
	}
	if(input === tapioca){
		wholemealBread.checked = false;
	}


	if(input === yakult){
		naturalYogurt.checked = false;
	}
	if(input === naturalYogurt){
		yakult.checked = false;
	}

	if(input === wholegrainRice){
		cassava.checked = false;
	}
	if(input === cassava){
		wholegrainRice.checked = false;
	}

	if(input === chickenFillet){
		tilapiaFillet.checked = false;
		porkChop.checked = false;
	}
	if(input === tilapiaFillet){
		chickenFillet.checked = false;
		porkChop.checked = false;
	}
	if(input === porkChop){
		chickenFillet.checked = false;
		tilapiaFillet.checked = false;
	}


	if(input === apple){
		sleeve.checked = false;
	}
	if(input === sleeve){
		apple.checked = false;
	}

	if(input === persimmon){
		starFruit.checked = false;
		orange.checked = false;
	}
	if(input === starFruit){
		persimmon.checked = false;
		orange.checked = false;
	}
	if(input === orange){
		persimmon.checked = false;
		starFruit.checked = false;
	}

	if(input === beefSteak){
		chickenLiver.checked = false;
		cannedSardine.checked = false;
	}
	if(input === chickenLiver){
		beefSteak.checked = false;
		cannedSardine.checked = false;
	}
	if(input === cannedSardine){
		beefSteak.checked = false;
		chickenLiver.checked = false;
	}

	if(input === selectAllBreakfast){
		wholemealBread.checked = true; 
		sugar.checked = true;  
		egg.checked = true;  
		ricotaCheese.checked = true; 
		skimedMilk.checked = true;
		selectAllBreakfast.checked = false;
	}

	if(input === unSelectAllBreakfast){
		wholemealBread.checked = false; 
		sugar.checked = false;  
		egg.checked = false;  
		ricotaCheese.checked = false; 
		skimedMilk.checked = false;
		unSelectAllBreakfast.checked = false;
		tapioca.checked = false;
	}

	if(input === selectAllMorningSnack){																
		banana.checked = true; 
		oat.checked = true; 
		peanutButter.checked = true;  
		yakult.checked = true;
		selectAllMorningSnack.checked = false;  
	
	}


	if(input === unSelectAllMorningSnack){
		banana.checked = false; 
		oat.checked = false; 
		peanutButter.checked = false;  
		yakult.checked = false;  
		naturalYogurt.checked = false; 
		unSelectAllMorningSnack.checked = false;
	
	}


	if(input === selectAllLunch){
		wholegrainRice.checked = true; 
		chickenFillet.checked = true; 
		bean.checked = true;  
		tomato.checked = true;  
		cabbage.checked = true; 
		carrot.checked = true;
		selectAllLunch.checked = false;
	}

	if(input === unSelectAllLunch){
		wholegrainRice.checked = false; 
		cassava.checked = false; 
		chickenFillet.checked = false;  
		tilapiaFillet.checked = false;  
		porkChop.checked = false; 
		bean.checked = false;
		tomato.checked = false;
		cabbage.checked = false;
		carrot.checked = false;
		unSelectAllLunch.checked = false;
		
	}
	

	if(input === selectAllAfternoonSnack){
		apple.checked = true; 
		persimmon.checked = true; 
		selectAllAfternoonSnack.checked = false;
	}

	if(input === unSelectAllAfternoonSnack){
		apple.checked = false; 
		sleeve.checked = false; 
		persimmon.checked = false;  
		starFruit.checked = false;  
		orange.checked = false; 
		unSelectAllAfternoonSnack.checked = false;
	}

	if(input === selectAllDinner){
		couscous.checked = true; 
		beefSteak.checked = true; 
		lettuce.checked = true;  
		cucumber.checked = true;  
		beet.checked = true; 
		oliveOil.checked = true;
		selectAllDinner.checked = false;
	} 

	if(input === unSelectAllDinner){
		couscous.checked = false; 
		beefSteak.checked = false; 
		chickenLiver.checked = false;  
		cannedSardine.checked = false;  
		lettuce.checked = false; 
		cucumber.checked = false;
		beet.checked = false;
		oliveOil.checked = false;
		unSelectAllDinner.checked = false;
		
	} 
}


loseWeight.addEventListener("click", () => {
	unSelectInput(loseWeight);
});
keepMuscleMass.addEventListener("click", () => {
	unSelectInput(keepMuscleMass);
});
gainMuscleMass.addEventListener("click", () => {
	unSelectInput(gainMuscleMass);
});

wholemealBread.addEventListener("click", () => {
	unSelectInput(wholemealBread);
});
tapioca.addEventListener("click", () => {
	unSelectInput(tapioca);
});

yakult.addEventListener("click", () => {
	unSelectInput(yakult);
});
naturalYogurt.addEventListener("click", () => {
	unSelectInput(naturalYogurt);
});

wholegrainRice.addEventListener("click", () => {
	unSelectInput(wholegrainRice);
});
cassava.addEventListener("click", () => {
	unSelectInput(cassava);
});

chickenFillet.addEventListener("click", () => {
	unSelectInput(chickenFillet);
});
tilapiaFillet.addEventListener("click", () => {
	unSelectInput(tilapiaFillet);
});
porkChop.addEventListener("click", () => {
	unSelectInput(porkChop);
});

apple.addEventListener("click", () => {
	unSelectInput(apple);
});
sleeve.addEventListener("click", () => {
	unSelectInput(sleeve);
});

persimmon.addEventListener("click", () => {
	unSelectInput(persimmon);
});
starFruit.addEventListener("click", () => {
	unSelectInput(starFruit);
});
orange.addEventListener("click", () => {
	unSelectInput(orange);
});

beefSteak.addEventListener("click", () => {
	unSelectInput(beefSteak);
});
chickenLiver.addEventListener("click", () => {
	unSelectInput(chickenLiver);
});
cannedSardine.addEventListener("click", () => {
	unSelectInput(cannedSardine);
});

cannedSardine.addEventListener("click", () => {
	unSelectInput(cannedSardine);
});

selectAllBreakfast.addEventListener("click", () => {
	unSelectInput(selectAllBreakfast);
});

unSelectAllBreakfast.addEventListener("click", () => {
	unSelectInput(unSelectAllBreakfast);
});

selectAllMorningSnack.addEventListener("click", () => {
	unSelectInput(selectAllMorningSnack);
});

unSelectAllMorningSnack.addEventListener("click", () => {
	unSelectInput(unSelectAllMorningSnack);
});

selectAllLunch.addEventListener("click", () => {
	unSelectInput(selectAllLunch);
});

unSelectAllLunch.addEventListener("click", () => {
	unSelectInput(unSelectAllLunch);
});

selectAllAfternoonSnack.addEventListener("click", () => {
	unSelectInput(selectAllAfternoonSnack);
});

unSelectAllAfternoonSnack.addEventListener("click", () => {
	unSelectInput(unSelectAllAfternoonSnack);
});

selectAllDinner.addEventListener("click", () => {
	unSelectInput(selectAllDinner);
});

unSelectAllDinner.addEventListener("click", () => {
	unSelectInput(unSelectAllDinner);
});

dark.addEventListener("change", () => {
	document.body.classList.toggle("dark");
});




const clean = () => {
	window.location.reload()
}