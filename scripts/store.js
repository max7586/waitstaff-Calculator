'use strict';

const store = (function(){
	let subtotal = 0.00;
	let tip = 0.00;
	let total = 0.00;
	let tipTotal = 0.00;
	let mealCount = 0;
	let averageTipMeal = 0.00;

	const setCharges = function(subtotal, tip){
		this.subtotal = subtotal;
		this.tip = tip;
		this.total = subtotal + tip;
		this.tipTotal += tip;
		this.mealCount++;
		this.averageTipMeal = this.tipTotal / this.mealCount;
	};

	const resetValues = function(){
	 this.subtotal = 0.00;
	 this.tip = 0.00;
	 this.total = 0.00;
	 this.tipTotal = 0.00;
	 this.mealCount = 0;
	 this.averageTipMeal = 0.00;
	}

	return{
		subtotal,
		tip,
		total,
		tipTotal,
		mealCount,
		averageTipMeal,
		setCharges,
		resetValues
	}
}());