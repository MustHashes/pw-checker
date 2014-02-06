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
		Passcheck.checkPassword(e);
	});
});