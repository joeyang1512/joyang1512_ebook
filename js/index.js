			window.onload = function(){
				document.getElementById("orderSuccess").innerText="欢迎进入 杨旭看书v1.0";
				document.getElementById("orderSuccess").style.display="block";
				let time = setTimeout(function(){
					document.getElementById("orderSuccess").style.display="none";
				},2000);
				var ps = document.getElementById("page2").getElementsByTagName("p");
				for (var i = 0; i < ps.length; i++) {
					ps[i].onclick = dialog;
				}
				function dialog(){
					document.getElementById("orderSuccess").innerText="杨旭看书v2.0即将上线哦！";
					document.getElementById("orderSuccess").style.display="block";
					let time = setTimeout(function(){
						document.getElementById("orderSuccess").style.display="none";
					},1500);
				}
			};