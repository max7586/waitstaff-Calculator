'use strict';

function handleSubmitNew(){
	console.log("Hello 2");
	$('#js-meal-detail').submit(function (event){
		event.preventDefault();
		const baseMeal = $('#base-meal').val();
		const taxRate = $('#tax-rate').val();
		const tipPercentage = $('#tip-percentage').val();
		const result = utils.calculateCharges(baseMeal, taxRate, tipPercentage);
		console.log(result);
	});
}


function bindEventListeners(){
	handleSubmitNew();
}

$(bindEventListeners());