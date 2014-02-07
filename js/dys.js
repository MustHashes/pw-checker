window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       ||
	      window.webkitRequestAnimationFrame ||
	      window.mozRequestAnimationFrame    ||
	      function( callback ){
	        window.setTimeout(callback, 1000 / 60);
	      };
})();

/**
* Game loop for as-yet-untitled game (defend yo self?)
* Things we need, now that pw checker logic is go:
* - Title screen
* - Prompt for game parameters (which websites, how many passwords)
* - Enemy object (requires images, particle array, position)
* - Enemy images thanks to Jenning (http://simplyeightbit.tumblr.com/)
* - Password object (text value, score, total health?)?
*/


var Dys = (function(){

	//Global paramters for your game loop
	//The purpose of these is to hold references to your game elements
	//and things like jquery objects that are expensive to create on each loop
	var defaults = {
		init1: {},
		init2: {},
		init3: {}
		},
		canvas,
		context,
		$container,
		height = 0,
		width = 0,
		enemies,
		events,
		targets,
		isGameplay = false
		isMenu = false
		isGameOver = false;

	var init = function(params, e){
		e.preventDefault();
		//This enables you to pass a js object
		//as an argument to your game loop and initializes variables based on them.
		defaults = $.extend(defaults, params || {});

		//Get the canvas element, grab the 2d context to be able to manipulate it from each of the helper functions
		canvas = document.getElementById('game');
		$container = $('.canvas-container');

		//Set canvas height and width to size of container for responsive goodness
		canvas.height = 694;
		canvas.width = $container.innerWidth();
		console.log(canvas.height + ", " + canvas.width);
	    context = canvas.getContext("2d");

	    //Initialize enemies

	    //Initialize targets

	    //Start event loop
	    isMenu = true;
	    run(e);
	};

	var plotParticles = function(){
		var currentParticles = [];
          for (var i = 0; i < particles.length; i++) {
            var particle = particles[i];
            var pos = particle.pos;
         
            // If we're out of bounds, drop this particle and move on to the next
            if (pos.x <= 100 || pos.x >= canvas.width || pos.y <= 0 || pos.y >= canvas.height){
                continue;
            } 
            else{
                 // Move our particles
            particle.move();
         
            // Add this particle to the list of current particles
            currentParticles.push(particle);
          }
         
          // Update our global particles, clearing room for old particles to be collected   
        }      
        particles = currentParticles;
	};

	var drawParticles = function(){
		for (var i = 0; i < particles.length; i++) {
            context.fillStyle = particles[i].color;
            var position = particles[i].pos;
            context.fillRect(position.x, position.y, 4, 4);
        }
	};

	var run = function(e){
		//Replace this if with your halt condition
		//This can be replaced with a "while(true)", but this will have serious performance implications
		if(!isGameOver)
		{       
		  //Private animation loop functions

		  //Resets the canvas to its initial state	
          clear();
          //Update position of all elements on the canvas
          update();
          //Draw updated elements
          draw();
          //Add current context to the animation frame queue
          queue();
        }
        else{
           clear();
        }
	};

	var queue = function () {
		//Add the animation loop to the frame queue
        window.requestAnimFrame(run);
    };
   var update = function() {
        //define position updating logic here
        
        //update enemy weapon particle position

        //update target health

        //generate random events? 
        //Eg. random compromise based on site security, 
    };

	var draw = function() {
	  //define image drawing (read: context updating) logic here
	  
	  //Draw all objects in current context (menu, gameplay, etc.)
	};

	var clear = function(){
		canvas.width = canvas.width;
	};


	//This return statement should contain a js object
	//of every "public" function for your module
	return{
		init: init
	};	


})();

$(document).ready(function(){
	var $this = $(this),
		local_defaults = {
			init1: 1,
			init2: 2,
			init3: 3,
			height: 694
		};	
	//initialize module

	//Register event listener on canvas element
	$this.on('click', '.canvas-container', function(e){
		console.log(e.target);
		//var anim = Dys.init(local_defaults, e);
	});
});