document.getElementById("neirong").style.height=(document.body.offsetHeight-46-56)+"px";
			document.getElementById("resou").onclick = function(){
				document.getElementById("content").src="resou.html"
				var btns = document.querySelectorAll(".btn1");
				for (var i = 0; i < btns.length; i++) {
					btns[i].style.backgroundColor="#f6f6f6"
				}
				this.style.backgroundColor="#3388CC";
				
			};
			document.getElementById("shangsheng").onclick = function(){
				document.getElementById("content").src="shangsheng.html"
				var btns = document.querySelectorAll(".btn1");
				for (var i = 0; i < btns.length; i++) {
					btns[i].style.backgroundColor="#f6f6f6"
				}
				this.style.backgroundColor="#3388CC";
			};
			document.getElementById("shoucang").onclick = function(){
				document.getElementById("content").src="shoucang.html"
				var btns = document.querySelectorAll(".btn1");
				for (var i = 0; i < btns.length; i++) {
					btns[i].style.backgroundColor="#f6f6f6"
				}
				this.style.backgroundColor="#3388CC";
			};
			document.getElementById("wanjie").onclick = function(){
				document.getElementById("content").src="wanjie.html"
				var btns = document.querySelectorAll(".btn1");
				for (var i = 0; i < btns.length; i++) {
					btns[i].style.backgroundColor="#f6f6f6"
				}
				this.style.backgroundColor="#3388CC";
			};
			document.getElementById("jingdian").onclick = function(){
				document.getElementById("content").src="jingdian.html"
				var btns = document.querySelectorAll(".btn1");
				for (var i = 0; i < btns.length; i++) {
					btns[i].style.backgroundColor="#f6f6f6"
				}
				this.style.backgroundColor="#3388CC";
			}