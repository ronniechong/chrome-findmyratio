function ChromeContentOutline(){var t=this;this.tooltip=null,this.outlineAttributes="1px solid red",this.innerOnly=!0,this.allowInteraction=!0,this.init=function(){t.tooltip=document.createElement("div"),t.tooltip.id="findMyRatioTooltip",document.getElementsByTagName("body")[0].appendChild(t.tooltip),this.addEventListeners()},this.removeEventListeners=function(){document.removeEventListener("mouseover",t.onMouseOverHandler),document.removeEventListener("mouseout",t.onMouseOutHandler),document.removeEventListener("click",t.onMouseClickHandler)},this.addEventListeners=function(){document.addEventListener("mouseover",t.onMouseOverHandler),document.addEventListener("mouseout",t.onMouseOutHandler),document.addEventListener("click",t.onMouseClickHandler)},this.onMouseOverHandler=function(e){t.allowInteraction&&"undefined"!=typeof e.target&&"BODY"!==e.target.tagName&&"HTML"!==e.target.tagName&&(e.stopPropagation(),t.updateTooltip(e.target.getBoundingClientRect(),t.getElementDimensions(e)),e.target.style.outline=t.outlineAttributes),e.preventDefault()},this.onMouseOutHandler=function(e){t.allowInteraction&&(e.target.style.outline="none",t.updateTooltip()),e.preventDefault()},this.onMouseClickHandler=function(e){console.log(t.getElementDimensions(e).toString()),e.preventDefault()},this.getElementDimensions=function(e){var n=e.target,o=[];return o=t.innerOnly?[parseInt(window.getComputedStyle(n,null).getPropertyValue("width")),parseInt(window.getComputedStyle(n,null).getPropertyValue("height"))]:[n.clientWidth,n.clientHeight]},this.updateTooltip=function(e,n){"undefined"!=typeof e?(t.tooltip.className="active",t.tooltip.style.top=e.top,t.tooltip.style.left=e.left,t.tooltip.innerHTML=n.toString()):(t.tooltip.className="",t.tooltip.style.top=0,t.tooltip.style.left=0,t.tooltip.innerHTML="")}}var chromeContentOutline=new ChromeContentOutline;chromeContentOutline.init();