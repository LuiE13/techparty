

let myVar
var y,z,pi
y=0
function myTimer() {
     
    y++
        
    pi.innerHTML=y
    if (y==10) {
        y=0
    }
        
     
}

function pipip() {
    
    
     
    z=20

    pi = document.getElementById("xapisco")
    
        
    myVar = setInterval(myTimer ,100);
   
    
    
    
}





    function andar1() {    

    colizao2 = posf+pos+45


    if(pos<-45 ){
        bineco.style.display='none'
        clearInterval(id) 
    }

    if (pos==1400) {
        clearInterval(id)
    } else  if (obst[0].offsetLeft==colizao2 && bineco.offsetTop<=87){
        pos-=1
        bineco.style.left=pos+"px"
        posf+=1
        for (let index = 0; index < obst.length; index++) {
            obst[index].style.translate="-"+posf+"px";
            
        }
        
    } else if (obst[2].offsetLeft==colizao2 && bineco.offsetTop<=87){
        pos-=1
        bineco.style.left=pos+"px"
        posf+=1
        for (let index = 0; index < obst.length; index++) {
                obst[index].style.translate="-"+posf+"px";
            
        }
    } else if (obst[4].offsetLeft==colizao2 && bineco.offsetTop<=87){
        pos-=1
        bineco.style.left=pos+"px"
        posf+=1
        for (let index = 0; index < obst.length; index++) {
                obst[index].style.translate="-"+posf+"px";
            
        }
    } else if (obst[6].offsetLeft==colizao2 && bineco.offsetTop<=87){
        pos-=1
        bineco.style.left=pos+"px"
        posf+=1
        for (let index = 0; index < obst.length; index++) {
                obst[index].style.translate="-"+posf+"px";
            
        }
    } else if (obst[1].offsetLeft==colizao2 && bineco.offsetTop>=314){
        pos-=1
        bineco.style.left=pos+"px"
        posf+=1
        for (let index = 0; index < obst.length; index++) {
                obst[index].style.translate="-"+posf+"px";
            
        }
    }else if (obst[3].offsetLeft==colizao2 && bineco.offsetTop>=314){
        pos-=1
        bineco.style.left=pos+"px"
        posf+=1
        for (let index = 0; index < obst.length; index++) {
                obst[index].style.translate="-"+posf+"px";
            
        }
    }else if (obst[5].offsetLeft==colizao2 && bineco.offsetTop>=314){
        pos-=1
        bineco.style.left=pos+"px"
        posf+=1
        for (let index = 0; index < obst.length; index++) {
                obst[index].style.translate="-"+posf+"px";
            
        }
    }else if (obst[7].offsetLeft==colizao2 && bineco.offsetTop>=314){
        pos-=1
        bineco.style.left=pos+"px"
        posf+=1
        for (let index = 0; index < obst.length; index++) {
                obst[index].style.translate="-"+posf+"px";
            
        }
    }else if (pos==600 & posf<2875) {
        posf+=1
        for (let index = 0; index < obst.length; index++) {
                obst[index].style.translate="-"+posf+"px";
            
        }
        
    } else {
        pos+=1
        bineco.style.left=pos+"px"
    }
    
        
            
        
    }
    function andar2() {    

        colizao1 = posf2+pos2+45
    
    
        if(pos2<-45 ){
            bineco2.style.display='none'
            
            clearInterval(idc)
            
        }
    
        if (pos2==1400) {
            
        } else  if (obst[0].offsetLeft==colizao1 && bineco2.offsetTop<=87){
            pos2-=1
            bineco2.style.left=pos2+"px"
            posf2+=1
            for (let index = 0; index < obst.length; index++) {
                obst[index].style.translate="-"+posf2+"px";
                
            }
            
        } else if (obst[2].offsetLeft==colizao1 && bineco2.offsetTop<=87){
            pos2-=1
            bineco2.style.left=pos2+"px"
            posf2+=1
            for (let index = 0; index < obst.length; index++) {
                    obst[index].style.translate="-"+posf2+"px";
                
            }
        } else if (obst[4].offsetLeft==colizao1 && bineco2.offsetTop<=87){
            pos2-=1
            bineco2.style.left=pos2+"px"
            posf2+=1
            for (let index = 0; index < obst.length; index++) {
                    obst[index].style.translate="-"+posf2+"px";
                
            }
        } else if (obst[6].offsetLeft==colizao1 && bineco2.offsetTop<=87){
            pos2-=1
            bineco2.style.left=pos2+"px"
            posf2+=1
            for (let index = 0; index < obst.length; index++) {
                    obst[index].style.translate="-"+posf2+"px";
                
            }
        } else if (obst[1].offsetLeft==colizao1 && bineco2.offsetTop>=314){
            pos2-=1
            bineco2.style.left=pos2+"px"
            posf2+=1
            for (let index = 0; index < obst.length; index++) {
                    obst[index].style.translate="-"+posf2+"px";
                
            }
        }else if (obst[3].offsetLeft==colizao1 && bineco2.offsetTop>=314){
            pos2-=1
            bineco2.style.left=pos2+"px"
            posf2+=1
            for (let index = 0; index < obst.length; index++) {
                    obst[index].style.translate="-"+posf2+"px";
                
            }
        }else if (obst[5].offsetLeft==colizao1 && bineco2.offsetTop>=314){
            pos2-=1
            bineco2.style.left=pos2+"px"
            posf2+=1
            for (let index = 0; index < obst.length; index++) {
                    obst[index].style.translate="-"+posf2+"px";
                
            }
        }else if (obst[7].offsetLeft==colizao1 && bineco2.offsetTop>=314){
            pos2-=1
            bineco2.style.left=pos2+"px"
            posf2+=1
            for (let index = 0; index < obst.length; index++) {
                    obst[index].style.translate="-"+posf2+"px";
                
            }
        }else if (pos2==600 & posf2<2875) {
            posf2+=1
            for (let index = 0; index < obst.length; index++) {
                    obst[index].style.translate="-"+posf2+"px";
                
            }
            
        } else {
            pos2+=1
            bineco2.style.left=pos2+"px"
        }
        
            
                
            
        }