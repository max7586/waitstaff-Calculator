'use strict';

function handleSubmitNew(){
	console.log("Hello 2");
	$('#js-meal-detail').submit(function (event){
		event.preventDefault();
		const baseMeal = $('#base-meal').val();
		const taxRate = $('#tax-rate').val();
		const tipPercentage = $('#tip-percentage').val();
		const result = utils.calculateCharges(baseMeal, taxRate, tipPercentage);
		resetForm();
		store.setCharges(result['subtotal'], result['tip']);
		dispplayInfo();
	});
}

function resetForm(){
	$('#base-meal').val("");
	$('#tax-rate').val("");
	$('#tip-percentage').val("");
}

function handleReset(){
	$('#resetButton').on('click', event => {
		store.resetValues();
		dispplayInfo();
	});
}

function dispplayInfo () {
	$('.subtotal').html(store.subtotal);
	$('.tip').html(store.tip);
	$('.total').html(store.total);
	$('.tipTotal').html(store.tipTotal);
	$('.mealCount').html(store.mealCount);
	$('.averageTipMeal').html(store.averageTipMeal);
}

function bindEventListeners(){
	handleSubmitNew();
	handleReset();
}

$(bindEventListeners());