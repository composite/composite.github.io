/*
 * https://gist.github.com/gre/1650294
 * Easing Functions - inspired from http://gizma.com/easing/
 * only considering the t value for the range [0, 1] => [0, 1]
 */
var EasingFunctions = {
    // no easing, no acceleration
    linear: function (t) { return t },
    // accelerating from zero velocity
    easeInQuad: function (t) { return t*t },
    // decelerating to zero velocity
    easeOutQuad: function (t) { return t*(2-t) },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
    // accelerating from zero velocity
    easeInCubic: function (t) { return t*t*t },
    // decelerating to zero velocity
    easeOutCubic: function (t) { return (--t)*t*t+1 },
    // acceleration until halfway, then deceleration
    easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
    // accelerating from zero velocity
    easeInQuart: function (t) { return t*t*t*t },
    // decelerating to zero velocity
    easeOutQuart: function (t) { return 1-(--t)*t*t*t },
    // acceleration until halfway, then deceleration
    easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
    // accelerating from zero velocity
    easeInQuint: function (t) { return t*t*t*t*t },
    // decelerating to zero velocity
    easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
    // acceleration until halfway, then deceleration
    easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
};
var Animatior = (function(){
    /**
     *
     *
     */
    return function Animatior(render, duration, easing){
        var start = Date.now();
        duration = !isNaN(+duration) ? +duration : 1000;
        easing = typeof easing === 'function' ? easing : EasingFunctions.linear;
        (function LOOP(){
            var p = (Date.now() - start) / duration;
            if(p > 1){
                render(1);
            }else{
                requestAnimationFrame(LOOP);
                render(easing(p));
            }
        })();
    }
})();
(function(){
    //메일주소 풀기. (수집방지)
    var mailpre = 'mailto:';
    for(var i= 0,mails=document.querySelectorAll('.mail-atob'),len=mails.length;i<len;i++){
        var mail = mails[i], bed = mail.href.substring(mail.href.indexOf('#')+1);
        if(!~bed.indexOf(mailpre)) continue;
        var href = atob(bed.replace(mailpre,''));
        mail.href = mailpre+href;
        mail.innerHTML = href;
    }
    for(var i= 0,anchors=document.querySelectorAll('a'),len=anchors.length;i<len;i++){
        anchors[i].addEventListener('click', function(e){
            if(~this.href.indexOf('#')){
                var id = this.href.substring(this.href.indexOf('#')), elem = document.querySelector(id);
                if(elem){
                    var stget=function(){return document.documentElement.scrollTop + document.body.scrollTop;},
                        finish = stget() + elem.getBoundingClientRect().top;
                    Animatior(function(p){
                        var top = stget();
                        document.documentElement.scrollTop = document.body.scrollTop = top + p * (finish - top);
                    }, 1000, EasingFunctions.easeInOutQuint);
                }
                e.stopPropagation();
                e.preventDefault();
                return false;
            }
        }, false);
    }
    //폼전송 유효성검사
    document.forms['sendme'].addEventListener('submit', function(e){
        var reqs = [],valid = true;
        for(var i=0;i<this.elements.length;i++)
            if(this.elements[i].required){
                reqs.push(this.elements[i]);
                this.elements[i].classList.remove('invalid');
            }

        for(var i=0;i<reqs.length;i++)
            if(!reqs[i].value){
                reqs[i].classList.add('invalid');
                reqs[i].focus();
                valid = false;
                e.preventDefault();
            }

        if(true){
            alert('send message is not yet support due to blog system maintaince.\nYou can contact any kind of ways in the right pane.\nthank you for intereting me.');
            e.preventDefault();
            return false;
        }

        return valid;

    }, false);

})();