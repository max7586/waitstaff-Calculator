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
		render();
	});
}

function resetForm(){
	$('#base-meal').val("");
	$('#tax-rate').val("");
	$('#tip-percentage').val("");
	$('.subtotal').val('')
	$('.tip').val('')
	$('.total').val('')
}

function handleReset(){
	$('#resetButton').on('click', event => {
		store.resetValues();
		render();
	});
}

function handlecancel() {
	$('.js-cancel-btn').on ('click', event =>{
		event.preventDefault();
		resetForm();
	} )
}

function render () {
	$('.subtotal').html(store.subtotal);
	$('.tip').html(store.tip);
	$('.total').html(store.total);
	$('.tipTotal').html(store.tipTotal);
	$('.mealCount').html(store.mealCount);
	$('.averageTipMeal').html(store.averageTipMeal);
}

function main(){
	handleSubmitNew();
	handleReset();
	handlecancel();
}

$(main());