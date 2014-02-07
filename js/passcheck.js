var Passcheck = (function(){
	
	var defaults = {};

	function init(){

	}

	function checkPassword(e){
		e.preventDefault();
	}
	return{
		init: init
	};
})();

$(window).load(function(){
	var $this = $(this),
		$pw = $('#pw'),
		result = {};
	$this.on('click', '.btn', function(e){
		e.preventDefault();
		$('.content').addClass('slide-out');
		setTimeout(function(){
			$('.content').addClass('slide-in').removeClass('slide-out');
			result = zxcvbn($pw.value);
			console.log(result);
		}, 600);
		setTimeout(function(){
			$('.content').removeClass('slide-in');
		}, 5000);
	});
});