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
			$('.content').removeClass('slide-out');
		}, 2000);
	});
});