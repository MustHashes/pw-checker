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

$(document).ready(function(){
	var $this = $(this);
	$this.on('click', '.btn', function(e){
		e.preventDefault();
		$('.content').addClass('slide-out');
		setTimeout(function(){
			$('.content').addClass('slide-in').removeClass('slide-out');
		}, 600);
		setTimeout(function(){
			$('.content').removeClass('slide-in');
		}, 1000);
	});
});