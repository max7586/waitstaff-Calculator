'use strict';

const utils = (function(){
	const calculateCharges = function(baseMeal, taxRate, tipPercentage){
		const subtotal = parseInt(baseMeal) + (parseInt(baseMeal) * parseInt(taxRate))/100;
		const tip = (baseMeal * parseInt(tipPercentage))/100;
		return {
			subtotal,
			tip
		}
	};

	return {
		calculateCharges
	}
}());