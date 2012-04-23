/****************************************************************************************
									CLASS
****************************************************************************************/
var jedi_js = function () {
    this.init();
};

/****************************************************************************************
									INIT
****************************************************************************************/
jedi_js.prototype.init = function () {
	this.listeners();
	this.offset=0;
	this.carouselIndex=1;
};



/****************************************************************************************
									LISTENERS
****************************************************************************************/
//Everytime we need to reload the listeners
jedi_js.prototype.listeners = function () {
	//self
	var self = this;
	
	$('#firstChallengeJquery').click(function(){
		self.challengeOneJquery();
	});
	
	$('#firstChallengeJavascript').click(function(){
		self.challengeOneJavascript();
	});
	
	$('#secondChallengeJquery').click(function(){
		self.challengeTwoJquery();
	});
	
	$('#secondChallengeJavascript').click(function(){
		self.challengeTwoJavascript();
	});
	
	self.challengeThree();
};

/****************************************************************************************
									CHALLENGE ONE
****************************************************************************************/

jedi_js.prototype.challengeOneJquery = function(){
	$(document).ready(function() {
		$("#challengeOneImageJq").css('left', '');
		$("#challengeOneImageJq").animate({left:"+=200"},2000);
	});
}

jedi_js.prototype.challengeOneJavascript = function(){
	var self=this;
	var x = 1;
	document.getElementById("challengeOneImageJavascript").style.position="relative";
	var endInterval = setInterval(function(){
		document.getElementById("challengeOneImageJavascript").style.left=x+"px";
		if (x == 200)
		{
			window.clearInterval(endInterval);
		}
		x++;
	}, 10);

}

/****************************************************************************************
									CHALLENGE TWO
****************************************************************************************/

jedi_js.prototype.challengeTwoJquery = function(){
	$(document).ready(function() {
		// update the img nodes, adding and removing carouselImagejQueryActive class
		// $("#challengeTwoImageJq > img").removeClass('carouselImagejQueryActive');
		// each function iterates through the images and toggles the class
		$("#challengeTwoImageJq > img").each(function() {
			$(this).toggleClass('carouselImagejQueryActive');
		}); 
	});	
}

jedi_js.prototype.challengeTwoJavascript = function(){
	var self=this;
	var i=0;
	var t;
	var timer_on=0;
		
	function turnCarousel(){
		//modify node classes
		var children = document.getElementById("challengeTwoImageJavascript").getElementsByTagName("*");
		//repeat
		var t = setTimeout("turnCarousel()",2000);

	} //end function turnCarousel

	function startCarousel()
	{
		if(!timer_on)
		{
			timer_on=1;
			turnCarousel();
		}

	} //end function startCarousel

} //end function challengeTwoJavascript

/****************************************************************************************
									CHALLENGE THREE
****************************************************************************************/

jedi_js.prototype.challengeThree = function (){
	
	$('.sectionThreeTab:not(.tabActive)').click(function(){
		$('.tabActive').removeClass('tabActive');
		$(this).addClass('tabActive');
		var lesson=$(this).attr('lessoN');
		$.ajax({
			type: "GET",
			url: 'lessons/'+lesson+'.htm',
			success:function(data){
				$('#sectionTabContent').append(data);
			}
		});	
	});

}

/****************************************************************************************
									OBJECT
****************************************************************************************/
var jedi_object = new jedi_js();
