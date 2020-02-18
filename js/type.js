document.getElementById("main").style.height=(document.body.offsetHeight-46-56)+"px";
			var divs = document.getElementById("mainLeft").getElementsByTagName("div");
			divs[0].style.backgroundColor = "#f9f9f9";
			function pulltbn(){
				for(var i=0;i<divs.length;i++){
					divs[i].style.backgroundColor ="#e9e9e9"; 
				}
				this.style.backgroundColor = "#f9f9f9";	
			}
			for(var i=0;i<divs.length;i++){
				divs[i].onclick = pulltbn;
			}
			divs[0].addEventListener("click",function(){
				document.getElementById("iframe").src = "typeOfBoy.html";
			},false);
			divs[1].addEventListener("click",function(){
				document.getElementById("iframe").src = "typeOfGril.html";
			},false);