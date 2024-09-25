
// Preloader
	window.addEventListener("load", function(){
		document.querySelector(".preloader").classList.add("opacity-0");
		setTimeout(function(){
			document.querySelector(".preloader").style.display="none";
		},1000)
	})


// Resource
	const resource=document.querySelectorAll(".resource-item-list").forEach((item) => {
		const resourceItem=item.querySelectorAll(".resource-item-title"),
			  totalResourceItem=resourceItem.length;

		for (let i=0; i<totalResourceItem; i++){
			resourceItem[i].addEventListener("click",function(){
				this.classList.toggle("open");
				var content = this.nextElementSibling;
				if (content.style.maxHeight){
					content.style.maxHeight = null;
					content.style.marginTop = null;
					content.style.marginBottom = null;
				}
				else {
					content.style.maxHeight = content.scrollHeight + "px";
					content.style.marginTop = "10px";
					content.style.marginBottom = "30px";
				} 
			});
		}
	})

//KaTeX
document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
      // customised options
      // • auto-render specific keys, e.g.:
      delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false},
          {left: '\\(', right: '\\)', display: false},
          {left: '\\[', right: '\\]', display: true}
      ],
      // • rendering keys, e.g.:
      throwOnError : false
    });
});