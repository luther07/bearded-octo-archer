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
	
}

jedi_js.prototype.challengeOneJavascript = function(){
	var self=this;
	for(i=1;i<=200;i++)
	{
		document.getElementById("challengeOneImageJavascript").style.position="relative";
		document.getElementById("challengeOneImageJavascript").style.left=i+"px";
	}
}

/****************************************************************************************
									CHALLENGE TWO
****************************************************************************************/

jedi_js.prototype.challengeTwoJquery = function(){
	
}

jedi_js.prototype.challengeTwoJavascript = function(){
	var self=this;

}

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
