function poke_back(){
    var repoke_box=document.getElementsByClassName("_4-u2 _xct _4-u8")[0];
    var pokes = repoke_box.getElementsByClassName("_42ft _4jy0 _4jy3 _4jy1 selected _51sy");
    var i =0;
    for (i=0;i<pokes.length;i++ ){
        pokes[i].click();
    }   
    if (pokes.length > 0 ){
    	return true;
    } else {
    	return false;
    }
}

setInterval(function(){ 
    if(poke_back()){
    	console.log("Poked");
    } else {
    	console.log("No one to poke back");
    }    
}, 500);