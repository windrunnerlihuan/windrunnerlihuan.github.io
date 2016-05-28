// JavaScript Document

//prepare variables
var degree = 0;

var maxtalk = 0;
var talkbubble = 1;


$(document).ready(function(){
	
	//clear input text when clicked
	inputTextFix();
	
	//count talk bubbles
	$("div.bubble-options p.dog-bubble").each(function(){
	
		maxtalk++;
									 
	});		
	
});

//function that implements a input text hotfix; remove if you don't like it
function inputTextFix(){

	$("input[type='text'], input[type='password']").each(function(){
			
		//each time a user clicks on a input field
		$(this).click(function(){
						
			//save the current value, if any
			if($(this).attr("value")!=""){
				
				$(this).attr("previous_value", $(this).attr("value"));
				$(this).attr("value","");   
			
			}

		});
		
		//on blur, if left empty, restore the saved value, if any
		$(this).blur(function(){
					
			if($(this).attr("value") == "")
				$(this).attr("value",$(this).attr("previous_value"));					  
							  
		});
										   
	});
	
}

//function that handles the talking dog bubble animations
function dogTalk(){
		
	var timer = setTimeout(function() {
		
		//change the bubble html code
		$temp = "<p>"+$("div.bubble-options p.dog-bubble:nth-child("+talkbubble+")").html()+"</p>";		
		$("div.dog-bubble").html($temp);
		
		//browse through bubble-options
		if(talkbubble<maxtalk)
			talkbubble++;
		else
			talkbubble = 1;
				
		//show the bubble
		$(".dog-bubble").animate({"opacity":'1', "bottom":'10px'}, 400);
		
		//hide the bubble
		setTimeout(function() {
			
			$(".dog-bubble").animate({"opacity":'0', "bottom":'0px'}, 400);
			dogTalk();	
		
		}, 5000);		
		
	}, 2000);	
	
}

//function that handles the planet animation
function rotate() {

	$planet = $("div.planet");

	  //CSS3
	$planet.css({ 'transform' : 'rotate(' + degree + 'deg)'}); 
	  // For webkit browsers: e.g. Chrome
	$planet.css({ WebkitTransform : 'rotate(' + degree*2 + 'deg)'});
	  // For Mozilla browser: e.g. Firefox
	$planet.css({ '-moz-transform' : 'rotate(' + degree + 'deg)'});
	  //IE9
	$planet.css({ '-ms-transform' : 'rotate(' + degree + 'deg)'});
	  //Opera
	$planet.css({ '-o-transform' : 'rotate(' + degree + 'deg)'});
	
	// Animate rotation with a recursive call
	var timer = setTimeout(function() {
		degree-=0.1; 
		rotate();
	},10);

}

//function that handles dog movement animation
function dogRun(){
	
	var dog = $("div.dog");
	
	var timer2 = setTimeout(function() {
								 
		if(dog.css("background-position") == "0px 0px")
			dog.css({"background-position":"-80px -2px"});
		else
			dog.css({"background-position":"0px 0px"});							 
			
		dogRun();	
		
	}, 130);	
	
}