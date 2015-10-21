function ChromeContentOutline(){
    var me = this;
    this.tooltip = null;
    this.outlineAttributes = '1px solid red';
    this.innerOnly = true;
    this.allowInteraction = true;

    this.init  = function(){
        me.tooltip = document.createElement('div');
        me.tooltip.id = 'findMyRatioTooltip';
        document.getElementsByTagName('body')[0].appendChild(me.tooltip);
        this.addEventListeners();
    };

    this.removeEventListeners = function(){
        document.removeEventListener('mouseover', me.onMouseOverHandler);
        document.removeEventListener('mouseout', me.onMouseOutHandler);
        document.removeEventListener('click', me.onMouseClickHandler);
    };

    this.addEventListeners = function(){
        document.addEventListener('mouseover', me.onMouseOverHandler);
        document.addEventListener('mouseout', me.onMouseOutHandler);
        document.addEventListener('click', me.onMouseClickHandler);
    };

    this.onMouseOverHandler = function(e){
        if (me.allowInteraction){
            if (typeof e.target !== 'undefined' && e.target.tagName !== 'BODY' && e.target.tagName !== 'HTML'){
                e.stopPropagation();
                me.updateTooltip(e.target.getBoundingClientRect(), me.getElementDimensions(e));
                e.target.style.outline = me.outlineAttributes;
            }
        }
        e.preventDefault();
    };

    this.onMouseOutHandler = function(e){
        if (me.allowInteraction) {
            e.target.style.outline = 'none';
            me.updateTooltip();
        }
        e.preventDefault();
    };
    this.onMouseClickHandler = function(e){
        console.log(me.getElementDimensions(e).toString());
        e.preventDefault();
    };
    this.getElementDimensions = function(e){
        var el  = e.target,
            arr = [];

        if (me.innerOnly){
            arr = [parseInt(window.getComputedStyle(el,null).getPropertyValue('width')),  parseInt(window.getComputedStyle(el,null).getPropertyValue('height'))];
        } else{
            arr = [el.clientWidth, el.clientHeight];
        }
        return arr;
    };

    this.updateTooltip = function(rect,info){
        if (typeof rect !== 'undefined'){
            me.tooltip.className = 'active';
            me.tooltip.style.top = rect.top;
            me.tooltip.style.left = rect.left;
            me.tooltip.innerHTML = info.toString();
        } else{
            me.tooltip.className = '';
            me.tooltip.style.top = 0;
            me.tooltip.style.left = 0;
            me.tooltip.innerHTML = '';
        }

    };
}

var chromeContentOutline = new ChromeContentOutline();
chromeContentOutline.init();