
function check(){
    var cheap = document.getElementById("cheap") ;
    var fast = document.getElementById("fast") ;
    var good = document.getElementById("good") ;
    if(good.checked==true && fast.checked==true){
        cheap.checked = false ;
    }

    if(good.checked==true && cheap.checked==true){
        fast.checked = false ;
    }

    if(cheap.checked==true && fast.checked==true){
        good.checked = false ;
    }
}
