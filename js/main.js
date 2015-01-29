(function(){

    var mailpre = 'mailto:';
    for(var i= 0,mails=document.querySelectorAll('.mail-atob'),len=mails.length;i<len;i++){
        var mail = mails[i], bed = mail.href.substring(mail.href.indexOf('#')+1);
        if(!~bed.indexOf(mailpre)) continue;
        try{
            var href = atob(bed.replace(mailpre,''));
            mail.href = mailpre+href;
            mail.innerHTML = href;
        }catch(e){

        }

    }

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
            alert('send message is not yet support.\nYou can contact any kind of ways in the right pane.\nthank you for intereting me.');
            e.preventDefault();
            return false;
        }

        return valid;

    }, false);

})();