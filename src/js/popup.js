function FindMyRatio(){
    var me = this;
    this.form           = document.getElementById('form');
    this.outputRatio    = document.getElementById('outputRatio');
    this.sampleWidth    = document.getElementById('sampleWidth');
    this.sampleHeight   = document.getElementById('sampleHeight');
    this.outputWidth    = document.getElementById('outputWidth');
    this.outputHeight   = document.getElementById('outputHeight');

    this.init = function(){
        var inputs = document.getElementsByTagName('input');
        //Listeners
        me.form.addEventListener("submit",me.onSubmitHandler);
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("keyup", me.onKeyupHandler);
        }
    };

    this.onKeyupHandler = function(e){
        var id = this.getAttribute('id');
        if (this.value < 0) this.value = Math.abs(this.value);
        me.updateTextFieldValue(id);
    };

    this.onSubmitHandler = function(e){
        e.preventDefault();
        return false;
    };

    this.updateTextFieldValue = function(src){
        var sw,sh,ow,oh;

        sw = parseInt(me.sampleWidth.value);
        sh = parseInt(me.sampleHeight.value);
        ow = parseInt(me.outputWidth.value);
        oh = parseInt(me.outputHeight.value);

        me.setRatioText(me.fraction(sw,sh));

        if (me.isValidValue(sw) && me.isValidValue(sh)){
            if (src ==='outputWidth'){
                me.outputHeight.value = Math.round(sh/sw * ow);
            } else if (src ==='outputHeight'){
                me.outputWidth.value = Math.round(sw/sh * oh);
            } else {
                me.outputWidth.value = Math.round(sw/sh * oh);
                me.outputHeight.value = Math.round(sh/sw * ow);
            }
        }

    };

    this.setRatioText = function(arr){
        var rWidth  = (me.isValidValue(arr[0])) ? arr[0] : '-',
            rHeight = (me.isValidValue(arr[1])) ? arr[1] : '-',
            node;
        while (me.outputRatio.hasChildNodes()) {
            me.outputRatio.removeChild(me.outputRatio.lastChild);
        }
        node = document.createTextNode(rWidth + ':' + rHeight);
        me.outputRatio.appendChild(node);
    };

    //Utilities
    this.fraction = function(num1,num2){
        var gcd = function gcd(a,b){
            return b ? gcd(b, a%b) : a;
        };

        gcd = gcd(num1,num2);
        return [num1/gcd, num2/gcd];
    };

    this.isValidValue = function(val){
        var regex = /^[0-9]\d*$/g;
        return regex.test(val) && parseInt(val) > 0;
    };

}

var findMyRatio = new FindMyRatio();
findMyRatio.init();