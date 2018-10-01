$("#navbarDropdownMenuLink").click(function(){
	$(".dropdown-menu").slideToggle();
})

$(".dropdown-menu").css(
		{
			textAlign : "center",
			backgroundColor: "rgba(0,0,0,0.8)"
		}
	);
$(".dropdown-menu .dropdown-item").css({
	color: "white",
	textTransform: "uppercase",
	fontFamily: "Roboto",
	fontWeight: "100"
})
$(".dropdown-menu .dropdown-item").on("mouseover",function(){
	$(this).css({
	color: "black",
	backgroundColor: "rgb(100,255,200)",
	transition: "0.4s"
	})
})
$(".dropdown-menu .dropdown-item").on("mouseout",function(){
	$(this).css({
	color: "white",
	backgroundColor: "black"
	})
})





$(".row-custom div img").click(function(){
	$(".row-custom div p").hide();
	$("#myModal").css("display","block");
	$("#img01").attr("src",$(this).attr("src"));
	$("#caption").text($(this).attr("title"));
})

$(".close").click(function(){
	$(this).parent().hide();
	$(".row-custom div p").show();
})


$(document).ready(function(){
	$("#h1").css("padding-top","30px")
})

$(".btn-hide").on("click",function(){
	$(this).siblings(".hide").slideToggle();
	if($(this).text() === "Read More"){
		$(this).text("Read Less")
	}
	else{
		$(this).text("Read More");
	}
})


var background = 1;
setInterval(function(){
	if(background >=1){
		background++;

		if(background == 5){
			background = 1;
		}
	}
	var backgroundUrl = "url('landscape" + background + ".jpg')";
	$(".jumbotron").css("background-image",backgroundUrl);
	
},3000);

var bottom = 1;
setInterval(function(){
	if(bottom >=1){
		bottom++;

		if(bottom == 5){
			 bottom = 1;
		}
	}
	var backgroundUrl = "url('landscape" + background + ".jpg')";
	$(".bottom").css("background-image",backgroundUrl);
	
},3000);

$("#blog img").mouseenter(function(){
	$(this).css({
		transform: "scale(1.3)",
		filter: "brightness(125%)"
	});
	
})
$("#blog img").mouseleave(function(){
	$(this).css({
		transform: "scale(1)",
		filter: "brightness(100%)"
	});

})


// create the loading sign
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },1000);
  }
}