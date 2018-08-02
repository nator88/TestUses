function test(){
    
    var navigator;
    var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));  
    
    if (mobile) { 
        alert("MOBILE DEVICE!!");
        $('.navWrap').css('display', 'none'); // OR you can use $('.navWrap').hide();
    } 
    else 
    { 
       alert("NOT A MOBILE DEVICE!!"); 
    }
}
