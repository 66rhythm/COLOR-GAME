
var numsquares=6;
var colors=pickrandomcolor(numsquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=randomcolor();
var colordisplay=document.querySelector("#d");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easybtn");
var hardBtn=document.querySelector("#hardbtn");
easyBtn.addEventListener("click",function(){easyBtn.classList.add("selected");
hardBtn.classList.remove("selected");
numsquares=3;
colors=pickrandomcolor(numsquares);
	pickedcolor=randomcolor();
	colordisplay.textContent=pickedcolor;

			for(var i=0;i<squares.length;i++)

	{
		if(colors[i])
		{
		squares[i].style.backgroundColor=colors[i];
	}
	else
		squares[i].style.display="none";
}


});
hardBtn.addEventListener("click",function(){hardBtn.classList.add("selected");
easyBtn.classList.remove("selected");
numsquares=6;
colors=pickrandomcolor(numsquares);
	pickedcolor=randomcolor();
	colordisplay.textContent=pickedcolor;

			for(var i=0;i<squares.length;i++)

	{
		
		
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	
	}
});




resetbutton.addEventListener("click",function(){ colors=pickrandomcolor(numsquares);
	pickedcolor=randomcolor();
	colordisplay.textContent=pickedcolor;

			for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];

	}
	h1.style.backgroundColor="steelblue";
	messagedisplay.textContent="";
	resetbutton.textContent="New colors";
})


colordisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor===pickedcolor)
		{
			
			for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=clickedcolor;
	}
			messagedisplay.textContent="correct";
			h1.style.backgroundColor=clickedcolor;
			resetbutton.textContent="PLay AGain";

		}
		else
			{this.style.backgroundColor="#232323";
		messagedisplay.textContent="Try again!!!!";
	}

	});
}

function randomcolor()
{
	var random= Math.floor(Math.random()*colors.length);
	return colors[random];
}

function pickrandomcolor(num)
{
	var arr =[];
	for(var i=0;i<num;i++)
	{
		arr.push(chooserandomcolor());
	}
	return arr;
}

 function chooserandomcolor()

{
var r= Math.floor(Math.random()*256);
var g= Math.floor(Math.random()*256);
var b= Math.floor(Math.random()*256);
return "rgb(" + r + ", " + g +", " + b + ")";


}