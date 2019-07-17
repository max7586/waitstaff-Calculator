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
		store.setCharges(result['subtotal'], result['tip']);
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
}

$(bindEventListeners());