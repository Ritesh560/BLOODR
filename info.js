var modal1 = document.getElementById('modal1');
				var btn1 = document.getElementById('btn1');
				var span1 = document.getElementsByClassName("close1")[0];
				
				btn1.onclick = function(){
					modal1.style.display = "block";
					
				}
				
				span1.onclick = function(){
					modal1.style.display = "none";
				}
				
				window.onclick = function(event){
					if (event.target == modal1){
						modal1.style.display = "none";
					}
				}
				
				
				var modal2 = document.getElementById('modal2');
				var btn2 = document.getElementById('btn2');
				var span2 = document.getElementsByClassName("close2")[0];
					
				btn2.onclick = function(){
					modal2.style.display = "block";
				}
					
				span2.onclick = function(){
					modal2.style.display = "none";
				}
					
				window.onclick = function(event){
					if (event.target == modal2){
						modal2.style.display = "none";
					}
				}
			
			var modal3 = document.getElementById('modal3');
				var btn3 = document.getElementById('btn3');
				var span3 = document.getElementsByClassName("close3")[0];
					
				btn3.onclick = function(){
					modal3.style.display = "block";
				}
					
				span3.onclick = function(){
					modal3.style.display = "none";
				}
					
				window.onclick = function(event){
					if (event.target == modal3){
						modal3.style.display = "none";
					}
				}
			