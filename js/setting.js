			window.onload = function(){
				var lis = document.getElementById("list").getElementsByTagName("li");
				for (var i = 0; i < lis.length; i++) {
					lis[i].onclick = handle;
				}
				function handle(){
					document.getElementById("orderSuccess").innerText="敬请期待杨旭看书v2.0";
					document.getElementById("orderSuccess").style.display="block";
					let time = setTimeout(function(){
						document.getElementById("orderSuccess").style.display="none";
					},1500);
				}
				
			}