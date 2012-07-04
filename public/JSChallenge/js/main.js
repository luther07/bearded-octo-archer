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
	var duration=2000;

	$(document).ready(function() {
		$("#challengeOneImageJq").css('left', ''); // clear any modifications to left attr 
		$("#challengeOneImageJq").animate({left:"+=200"},duration);
	});
}

jedi_js.prototype.challengeOneJavascript = function(){
	var self=this;
	var relativePosition = 1; //pixels
	var intervalMillis=10;
	var totalPixelMove=200;

	document.getElementById("challengeOneImageJavascript").style.position="relative";
	var endInterval = setInterval(function() {
		document.getElementById("challengeOneImageJavascript").style.left = relativePosition + "px";
		if (relativePosition >= totalPixelMove) {
			window.clearInterval(endInterval);
		}
		relativePosition++;
	}, intervalMillis);

}

/****************************************************************************************
									CHALLENGE TWO
****************************************************************************************/

jedi_js.prototype.challengeTwoJquery = function() {
	var duration=2000;

	$(document).ready(function() {
		timedCarousel();

		function timedCarousel() {
			if($(".carouselImagejQueryActive").next().length == 0) {
				$(".carouselImagejQueryActive").removeClass('carouselImagejQueryActive');
				$("#challengeTwoImageJq > img").first().addClass('carouselImagejQueryActive');
			}

			else {
				$(".carouselImagejQueryActive").removeClass('carouselImagejQueryActive').next().addClass('carouselImagejQueryActive');
			}

			setTimeout(timedCarousel, duration);
		}
	});	
}

jedi_js.prototype.challengeTwoJavascript = function() {
	var self=this;
	var activeNode = document.getElementById("challengeTwoImageJavascript").firstChild;
	var firstNode = document.getElementById("challengeTwoImageJavascript").firstChild;
	var lastNode = document.getElementById("challengeTwoImageJavascript").lastChild;
	var activeClassName = "carouselImage carouselImageJavascriptActive";

	timedCarousel();
	
	function timedCarousel() {
		if(activeNode.isSameNode(lastNode)) {
			//update class of previous node, advance the node, then update current node class
			activeNode.previousSibling.className = 'carouselImage';
			activeNode = firstNode;
			activeNode.className = activeClassName;
		}

		else if(activeNode.isSameNode(firstNode)) {
			//update class of previous node, advance the node, then update current node class
			lastNode.className = 'carouselImage';
			activeNode = activeNode.nextSibling;
			activeNode.className = activeClassName;
		}

		else {
			//update class of previous node, advance the node, then update current node class
			activeNode.previousSibling.className = 'carouselImage';
			activeNode = activeNode.nextSibling;
			activeNode.className = activeClassName;
		}

		setTimeout(timedCarousel, 2000);		
	}
}

/****************************************************************************************
									CHALLENGE THREE
****************************************************************************************/

jedi_js.prototype.challengeThree = function (){

	$('.sectionThreeTab').click(function(){
		$('.tabActive').removeClass('tabActive');
		$(this).addClass('tabActive');
		$('#sectionTabContent').empty().append("<img src='img/ajax-loader.gif'/>");
		var lesson=$(this).attr('lesson');
		setTimeout(function() {
			$.ajax({
				type: "GET",
				url: 'lessons/'+lesson+'.htm',
				success:function(data){
					$('#sectionTabContent').empty().append(data);
				}
			});
		}, 1000);	
	});

}

/****************************************************************************************
									OBJECT
****************************************************************************************/
var jedi_object = new jedi_js();
