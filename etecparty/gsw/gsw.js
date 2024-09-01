
addEventListener('keypress',function nomezin(event) {
    if (event.key === 'c') {
        boneco2 = document.getElementById('boneco2') 
        boneco = document.getElementById('boneco1') 
        boneco3 = document.getElementById('boneco3') 
        boneco4 = document.getElementById('boneco4') 
        clearInterval(timed2)
        clearInterval(times2)
        if (timed2!=null) {
            times2 = setInterval(sub2,5)
            timed2=null
        } else {
            timed2 = setInterval(dsc2,5)    
        }
        
        function dsc2() {
            fimcoli=colizao1-45
            fimcoli2=colizao2-45
            fimcoli3=colizao3-45
            fimcoli4=colizao4-45
            if (obst[1].offsetLeft < colizao2 && boneco2.offsetTop >= 116 && obst[1].offsetLeft > fimcoli2){
                boneco2.style.top = altura2 + "px"
            } else if (obst[3].offsetLeft<colizao2 && boneco2.offsetTop>=116 && obst[3].offsetLeft>fimcoli2){
                boneco2.style.top = altura2 + "px"
            } else if (obst[5].offsetLeft<colizao2 && boneco2.offsetTop>=116 && obst[5].offsetLeft>fimcoli2){
                boneco2.style.top = altura2 + "px"
            } else if (obst[7].offsetLeft<colizao2 && boneco2.offsetTop>=116 && obst[7].offsetLeft>fimcoli2){
                boneco2.style.top = altura2 + "px"
            }else if (altura2>=158) {
                clearInterval(timed2)
            } else {
                altura2 += 2
                boneco2.style.top=altura2+"px"
            }
        }
        
        function sub2() {
            // for (let index = 0; index < obst.length; index+=2) {
            //     obst[index];
            fimcoli=colizao1-45
            fimcoli2=colizao2-45
            fimcoli3=colizao3-45
            fimcoli4=colizao4-45
            
            
            if (obst[0].offsetLeft < colizao2 && boneco2.offsetTop <= 92 && obst[0].offsetLeft > fimcoli2){
                boneco2.style.top=altura2+"px"
            } else if (obst[2].offsetLeft < colizao2 && boneco2.offsetTop <= 92 && obst[2].offsetLeft > fimcoli2){
                boneco2.style.top = altura2 + "px"
            } else if (obst[4].offsetLeft < colizao2 && boneco2.offsetTop <= 92 && obst[4].offsetLeft > fimcoli2){
                boneco2.style.top = altura2 + "px"
            } else if (obst[6].offsetLeft < colizao2 && boneco2.offsetTop <= 92 && obst[6].offsetLeft > fimcoli2){
                boneco2.style.top = altura2 + "px"
            } else if (altura2 <= 45) {
                clearInterval(timed2)
            } else {
                altura2-=2
                boneco2.style.top=altura2+"px"
            }
        }
    }  




    if (event.key === 'a') {
        boneco2 = document.getElementById('boneco2') 
        boneco = document.getElementById('boneco1') 
        boneco3 = document.getElementById('boneco3') 
        boneco4 = document.getElementById('boneco4')  
        clearInterval(timed)
        clearInterval(times)
        if (timed!=null) {
            times = setInterval(sub,5)
            timed=null
        } else {
            timed = setInterval(dsc,5)
        }
        
        function dsc() {
            fimcoli=colizao1-45
            fimcoli2=colizao2-45
            fimcoli3=colizao3-45
            fimcoli4=colizao4-45
            if (obst[1].offsetLeft<colizao1 && boneco.offsetTop>=116 && obst[1].offsetLeft>fimcoli){
                boneco.style.top=altura+"px"
            } else if (obst[3].offsetLeft<colizao1 && boneco.offsetTop>=116 && obst[3].offsetLeft>fimcoli){
                boneco.style.top=altura+"px"
            } else if (obst[5].offsetLeft<colizao1 && boneco.offsetTop>=116 && obst[5].offsetLeft>fimcoli){
                boneco.style.top=altura+"px"
            } else if (obst[7].offsetLeft<colizao1 && boneco.offsetTop>=116 && obst[7].offsetLeft>fimcoli){
                boneco.style.top=altura+"px"
            }else if (altura>=158) {
                clearInterval(timed)
            } else {
                altura+=2
                boneco.style.top=altura+"px"
            }
        }
        
        function sub() {
            // for (let index = 0; index < obst.length; index+=2) {
            //     obst[index];
                
            // }
            fimcoli=colizao1-45
            fimcoli2=colizao2-45
            fimcoli3=colizao3-45
            fimcoli4=colizao4-45
            
            
            if (obst[0].offsetLeft<colizao1 && boneco.offsetTop<=92 && obst[0].offsetLeft>fimcoli){
                boneco.style.top=altura+"px"
            } else if (obst[2].offsetLeft<colizao1 && boneco.offsetTop<=92 && obst[2].offsetLeft>fimcoli){
                boneco.style.top=altura+"px"
            } else if (obst[4].offsetLeft<colizao1 && boneco.offsetTop<=92 && obst[4].offsetLeft>fimcoli){
                boneco.style.top=altura+"px"
            } else if (obst[6].offsetLeft<colizao1 && boneco.offsetTop<=92 && obst[6].offsetLeft>fimcoli){
                boneco.style.top=altura+"px"
            } else if (altura==45) {
                
                clearInterval(times)
            } else {
                altura-=2
                
                boneco.style.top=altura+"px"
            }
            
            
            
        }
    }   


if (event.key === 'm') {
    boneco2 = document.getElementById('boneco2') 
    boneco4 = document.getElementById('boneco4')  
    clearInterval(timed3)
    clearInterval(times3)
    if (timed3!=null) {
        times3 = setInterval(sub3,5)
        timed3=null
    } else {
        timed3 = setInterval(dsc3,5)
    }
    
    function dsc3() {
        fimcoli=colizao1-45
        fimcoli2=colizao2-45
        fimcoli3=colizao3-45
        fimcoli4=colizao4-45
        if (obst[1].offsetLeft<colizao3 && boneco3.offsetTop>=116 && obst[1].offsetLeft>fimcoli3){
            boneco3.style.top=altura3+"px"
        } else if (obst[3].offsetLeft<colizao3 && boneco3.offsetTop>=116 && obst[3].offsetLeft>fimcoli3){
            boneco3.style.top=altura3+"px"
        } else if (obst[5].offsetLeft<colizao3 && boneco3.offsetTop>=116 && obst[5].offsetLeft>fimcoli3){
            boneco3.style.top=altura3+"px"
        } else if (obst[7].offsetLeft<colizao3 && boneco3.offsetTop>=116 && obst[7].offsetLeft>fimcoli3){
            boneco3.style.top=altura3+"px"
        }else if (altura3>=158) {
            clearInterval(timed3)
        } else {
            altura3+=2
            boneco3.style.top=altura3+"px"
        }
    }
    
    function sub3() {
        // for (let index = 0; index < obst.length; index+=2) {
        //     obst[index];
            
        // }
        
        fimcoli=colizao1-45
        fimcoli2=colizao2-45
        fimcoli3=colizao3-45
        fimcoli4=colizao4-45
        
        
        if (obst[0].offsetLeft<colizao3 && boneco3.offsetTop<=92 && obst[0].offsetLeft>fimcoli3){
            boneco3.style.top=altura3+"px"
        } else if (obst[2].offsetLeft<colizao3 && boneco3.offsetTop<=92 && obst[2].offsetLeft>fimcoli3){
            boneco3.style.top=altura3+"px"
        } else if (obst[4].offsetLeft<colizao3 && boneco3.offsetTop<=92 && obst[4].offsetLeft>fimcoli3){
            boneco3.style.top=altura3+"px"
        } else if (obst[6].offsetLeft<colizao3 && boneco3.offsetTop<=92 && obst[6].offsetLeft>fimcoli3){
            boneco3.style.top=altura3+"px"
        } else if (altura3<=45) {
            
            clearInterval(times3)
        } else {
            altura3-=2
            
            boneco3.style.top=altura3+"px"
        }
        
        
        
    }
}   


if (event.key === 'p') {
    boneco2 = document.getElementById('boneco2') 
    boneco = document.getElementById('boneco1') 
    boneco3 = document.getElementById('boneco3') 
    boneco4 = document.getElementById('boneco4') 
    clearInterval(timed4)
    clearInterval(times4)
    if (timed4!=null) {
        times4 = setInterval(sub4,5)
        timed4=null
    } else {
        timed4 = setInterval(dsc4,5)    
    }
    
    function dsc4() {
        fimcoli=colizao1-45
        fimcoli2=colizao2-45
        fimcoli3=colizao3-45
        fimcoli4=colizao4-45
        if (obst[1].offsetLeft < colizao4 && boneco4.offsetTop >= 116 && obst[1].offsetLeft > fimcoli4){
            boneco4.style.top = altura4 + "px"
        } else if (obst[3].offsetLeft<colizao4 && boneco4.offsetTop>=116 && obst[3].offsetLeft>fimcoli4){
            boneco4.style.top = altura4 + "px"
        } else if (obst[5].offsetLeft<colizao4 && boneco4.offsetTop>=116 && obst[5].offsetLeft>fimcoli4){
            boneco4.style.top = altura4 + "px"
        } else if (obst[7].offsetLeft<colizao4 && boneco4.offsetTop>=116 && obst[7].offsetLeft>fimcoli4){
            boneco4.style.top = altura4 + "px"
        }else if (altura4>=158) {
            clearInterval(timed4)
        } else {
            altura4 += 2
            boneco4.style.top=altura4+"px"
        }
    }
    
    function sub4() {
        // for (let index = 0; index < obst.length; index+=2) {
        //     obst[index];
        fimcoli=colizao1-45
        fimcoli2=colizao2-45
        fimcoli3=colizao3-45
        fimcoli4=colizao4-45
        
        
        if (obst[0].offsetLeft < colizao4 && boneco4.offsetTop <= 92 && obst[0].offsetLeft > fimcoli4){
            boneco4.style.top=altura2+"px"
        } else if (obst[2].offsetLeft < colizao4 && boneco4.offsetTop <= 92 && obst[2].offsetLeft > fimcoli4){
            boneco4.style.top = altura2 + "px"
        } else if (obst[4].offsetLeft < colizao4 && boneco4.offsetTop <= 92 && obst[4].offsetLeft > fimcoli4){
            boneco4.style.top = altura2 + "px"
        } else if (obst[6].offsetLeft < colizao4 && boneco4.offsetTop <= 92 && obst[6].offsetLeft > fimcoli4){
            boneco4.style.top = altura2 + "px"
        } else if (altura4 <= 45) {
            clearInterval(timed4)
        } else {
            altura4-=2
            boneco4.style.top=altura4+"px"
        }
    }
} 

})

let firt,seco,third,ult
let coin1,coin2,coin3,coin4




// let colibaixo,colibaixo2,colibaixo3,colibaixo4  
let index = 0
let timed=null,timed3=null,timed4=null
let times=null,times3=null,times4=null
let timed2=null
let times2=null
let altura=45 
let altura2=82,altura3=121,altura4=150
let obst 
let fimcoli
let fimcoli2,fimcoli3,fimcoli4



obst = document.getElementsByClassName('obstc')

let boneco 
let boneco2,boneco3,boneco4
let id=null
let idb1=null,idb2=null,idb3=null,idb4=null
let pos1=0
let posf=0
let pos2=0,pos3=0,pos4=0

let colizao2  
colizao2 = posf+pos2+45

let colizao1
colizao1 = posf+pos1+45

let colizao3
colizao3 = posf+pos3+45

let colizao4
colizao4 = posf+pos4+45

let vsfd,vsfd2,vsfd3,vsfd4
fimcoli=colizao1-45
fimcoli2=colizao2-45
fimcoli3=colizao3-45
fimcoli4=colizao4-45


function tmncbixin() {
    coin1=Number(sessionStorage.getItem("coin1"))
    coin2=Number(sessionStorage.getItem("coin2"))
    coin3=Number(sessionStorage.getItem("coin3"))
    coin4=Number(sessionStorage.getItem("coin4"))

    boneco = document.getElementById('boneco1') 
    boneco2 = document.getElementById('boneco2') 
    boneco3 = document.getElementById('boneco3')
    boneco4 = document.getElementById('boneco4')
    clearInterval(idb1)
    clearInterval(idb2)
    clearInterval(idb3)
    clearInterval(idb4)
   clearInterval(id)

    id = setInterval(andarobj,5)
    idb1 = setInterval(andarb1,5)
    idb2 = setInterval(andarb2,5)
    idb3 = setInterval(andarb3,5)
    idb4 = setInterval(andarb4,5)
    
    function andarobj() {
        if ((pos1>=602 || pos1<=-45.5) &&  (pos2>=602  || pos2<-45.5 ) && (pos3>=602  || pos3<-45.5) && (pos4>=602  || pos4<-45.5)) {
            posf+=1
    } else  {
            posf+=1
        }
        for (let index = 0; index < obst.length; index++) {
            obst[index].style.translate="-"+posf+"px";
            
        }
        if(pos1<=-45 &&pos2<=-45&&pos3<=-45&&pos4<=-45){
            
            clearInterval(id) 
        }
        
    }
    function andarb1() {
        
        colizao1 = posf+pos1+45
        fimcoli=colizao1-45
        fimcoli2=colizao2-45
        fimcoli3=colizao3-45
        fimcoli4=colizao4-45
        colizao2 = posf+pos2+45
        colizao3 = posf+pos3+45
        colizao4 = posf+pos4+45
        // for (let index = 0; index < obst.length; index++) {
        //     while (obst[index].offsetLeft==colizao1) {
                
        //     }
        // }

        if (obst[2].offsetLeft==colizao1 && boneco.offsetTop<=92){
            vsfd=true  
            
        } else if (obst[0].offsetLeft==colizao1 && boneco.offsetTop<=92){
            vsfd=true  
            
        } else if (obst[4].offsetLeft==colizao1 && boneco.offsetTop<=92){ 
            vsfd=true  
            
        } else if (obst[6].offsetLeft==colizao1 && boneco.offsetTop<=92){
            vsfd=true
            
        } else if (obst[1].offsetLeft==colizao1 && boneco.offsetTop>=116){
            vsfd=true
           
        }else if (obst[3].offsetLeft==colizao1 && boneco.offsetTop>=116){
            vsfd=true
            
        }else if (obst[5].offsetLeft==colizao1 && boneco.offsetTop>=116){
            vsfd=true
            
        }else if (obst[7].offsetLeft==colizao1 && boneco.offsetTop>=116){
            vsfd=true
            
        }else if (fimcoli2==colizao1 && boneco.offsetTop+36>boneco2.offsetTop && boneco2.offsetTop+36>boneco.offsetTop){
            vsfd=true
            //console.log (boneco2.offsetLeft+" "+colizao1)
        }else if (fimcoli3==colizao1 && boneco.offsetTop+36>boneco3.offsetTop && boneco3.offsetTop+36>boneco.offsetTop){
            vsfd=true
            //console.log (boneco2.offsetLeft+" "+colizao1)
        }else if (fimcoli4==colizao1 && boneco.offsetTop+36>boneco4.offsetTop && boneco4.offsetTop+36>boneco.offsetTop){
            vsfd=true
            //console.log (boneco2.offsetLeft+" "+colizao1)
        }else{
            vsfd=false
        }
          
        if (pos1==1400) {
            if (firt==null) {
                firt=1
                coin1+=20
            } else if(seco==null){
                seco=1
                coin1+=10
            } else if(third==null){
                third=1
            }else{
                clearInterval(id)
                ult=1
                coin1-=10
                alert(firt+" "+seco+" "+third+" "+ult)
            }
            sessionStorage.setItem('coin1',coin1)
            clearInterval(idb1)
        }else if (vsfd==true) {
            if ((pos1>=602 || pos1<-45) && (pos2>=602  || pos2<-45 ) && (pos3>=602  || pos3<-45) && (pos4>=602  || pos4<-45)) {
                pos1-=1
                boneco.style.left=pos1+"px"
                
            }else{
                pos1-=1
                boneco.style.left=pos1+"px"
                
            }
            
        }else {
            if (pos1>601 & posf>5400) {

                pos1+=1
                boneco.style.left=pos1+"px"
                
            } else if (pos1<=601 ) {

              pos1+=1
              boneco.style.left=pos1+"px"
              
            }
        } 
        if(pos1<-45.5 ){
            if (ult==null) {
                ult=1
                coin1-=10
            } else if(third==null){
                third=1
            } else if(seco==null){
                coin1+=10
                seco=1
            }else{
                coin1+=20
                firt=1
            }
            sessionStorage.setItem('coin1',coin1)
            clearInterval(idb1) 
        }
        if (firt!=null&&seco!=null&&third!=null&&ult!=null) {
            clearInterval(id)
            setTimeout(() => {
                window.location.assign('http://127.0.0.1:5500/jogo_lpc_versaofinal/tabuleiro.html')
            }, 1000);
        }
    }
    function andarb2() {
        colizao1 = posf+pos1+45
        fimcoli=colizao1-45
        fimcoli2=colizao2-45
        fimcoli3=colizao3-45
        fimcoli4=colizao4-45
        colizao2 = posf+pos2+45
        colizao3 = posf+pos3+45
        colizao4 = posf+pos4+45
        
        
        
        
        if (obst[0].offsetLeft==colizao2 && boneco2.offsetTop<=92){  
            vsfd2=true
            
        } else if (obst[2].offsetLeft==colizao2 && boneco2.offsetTop<=92){
            vsfd2=true   
             
        } else if (obst[4].offsetLeft==colizao2 && boneco2.offsetTop<=92){ 
            vsfd2=true  
           
        } else if (obst[6].offsetLeft==colizao2 && boneco2.offsetTop<=92){
            vsfd2=true
            
        } else if (obst[1].offsetLeft==colizao2 && boneco2.offsetTop>=116){
            vsfd2=true
           
        }else if (obst[3].offsetLeft==colizao2 && boneco2.offsetTop>=116){
            vsfd2=true
            
        }else if (obst[5].offsetLeft==colizao2 && boneco2.offsetTop>=116){
            vsfd2=true
            
        }else if (obst[7].offsetLeft==colizao2 && boneco2.offsetTop>=116){
            vsfd2=true
           
        }else if (fimcoli==colizao2 && boneco2.offsetTop+36>boneco.offsetTop && boneco.offsetTop+36>boneco2.offsetTop){
            vsfd2=true
            //console.log (boneco2.offsetLeft+" "+colizao1)
        }else if (fimcoli3==colizao2 && boneco2.offsetTop+36>boneco3.offsetTop && boneco3.offsetTop+36>boneco2.offsetTop){
            vsfd2=true
            //console.log (boneco2.offsetLeft+" "+colizao2)
        }else if (fimcoli4==colizao2 && boneco2.offsetTop+36>boneco4.offsetTop && boneco4.offsetTop+36>boneco2.offsetTop){
            vsfd2=true
            //console.log (boneco2.offsetLeft+" "+colizao1)
        }else{
            vsfd2=false
        }
          
        if (pos2==1400) {
            if (firt==null) {
                firt=2
                coin2+=20
            } else if(seco==null){
                seco=2
                coin2+=10
            } else if(third==null){
                third=2
            }else{
                clearInterval(id)
                ult=2
                coin2-=10
                alert(firt+" "+seco+" "+third+" "+ult)
            }
            sessionStorage.setItem('coin2',coin2)
            clearInterval(idb2)
        }else if (vsfd2==true) {
            // alert(vsfd+" "+colizao1+" "+obst[4].offsetLeft)
            // alert(vsfd+" "+pos2+" "+posf)
            if ((pos1>=602 || pos1<-45) && (pos2>=602  || pos2<-45 ) && (pos3>=602  || pos3<-45) && (pos4>=602  || pos4<-45)) {
                pos2-=1
                boneco2.style.left=pos2+"px"
                
            }else{
                pos2-=1
                boneco2.style.left=pos2+"px"
                
            }
            
        }else {
            if (pos2>601 & posf>5400) {
                pos2+=1
                boneco2.style.left=pos2+"px"
                
                
            } else if (pos2<=601 ) {
              pos2+=1
              boneco2.style.left=pos2+"px"
              
            }
        } 
        if(pos2<-45.5 ){
            if (ult==null) {
                ult=2
                coin2-=10
            } else if(third==null){
                third=2
            } else if(seco==null){
                seco=2
                coin2+=10
            }else{
                firt=2
                coin2+=20
            }
            sessionStorage.setItem('coin2',coin2)
            clearInterval(idb2) 
        }
        if (firt!=null&&seco!=null&&third!=null&&ult!=null) {
            clearInterval(id)
            setTimeout(() => {
                window.location.assign('http://127.0.0.1:5500/jogo_lpc_versaofinal/tabuleiro.html')
            }, 1000);
        }
    }

    function andarb3() {
        
        
        colizao1 = posf+pos1+45
        fimcoli=colizao1-45
        fimcoli2=colizao2-45
        fimcoli3=colizao3-45
        fimcoli4=colizao4-45
        colizao2 = posf+pos2+45
        colizao3 = posf+pos3+45
        colizao4 = posf+pos4+45
       
        
        if (obst[0].offsetLeft==colizao3 && boneco3.offsetTop<=92){  
            vsfd3=true
            
        } else if (obst[2].offsetLeft==colizao3 && boneco3.offsetTop<=92){
            vsfd3=true    
        } else if (obst[4].offsetLeft==colizao3 && boneco3.offsetTop<=92){ 
            vsfd3=true  
        } else if (obst[6].offsetLeft==colizao3 && boneco3.offsetTop<=92){
            vsfd3=true
        } else if (obst[1].offsetLeft==colizao3 && boneco3.offsetTop>=116){
            vsfd3=true
            
        }else if (obst[3].offsetLeft==colizao3 && boneco3.offsetTop>=116){
            vsfd3=true
        }else if (obst[5].offsetLeft==colizao3 && boneco3.offsetTop>=116){
            vsfd3=true
        }else if (obst[7].offsetLeft==colizao3 && boneco3.offsetTop>=116){
            vsfd3=true
        }else if (fimcoli==colizao3 && boneco3.offsetTop+36>boneco.offsetTop && boneco.offsetTop+36>boneco3.offsetTop){
            vsfd3=true
            //console.log (boneco3.offsetLeft+" "+colizao1)
        }else if (fimcoli2==colizao3 && boneco3.offsetTop+36>boneco2.offsetTop && boneco2.offsetTop+36>boneco3.offsetTop){
            vsfd3=true
            //console.log (boneco3.offsetLeft+" "+colizao3)
        }else if (fimcoli4==colizao3 && boneco3.offsetTop+36>boneco4.offsetTop && boneco4.offsetTop+36>boneco3.offsetTop){
            vsfd3=true
            //console.log (boneco2.offsetLeft+" "+colizao1)
        }else{
            vsfd3=false
        }
          
        if (pos3==1400) {
            if (firt==null) {
                firt=3
                coin3+=20
            } else if(seco==null){
                seco=3
                coin3+=10
            } else if(third==null){
                third=3
            }else{
                clearInterval(id)
                ult=3
                coin3-=10
                alert(firt+" "+seco+" "+third+" "+ult)
            }
            sessionStorage.setItem('coin3',coin3)
            clearInterval(idb3)
        }else if (vsfd3==true) {
            // alert(vsfd+" "+colizao1+" "+obst[4].offsetLeft)
            // alert(vsfd+" "+pos3+" "+posf)
            if ((pos1>=602 || pos1<-45) &&  (pos2>=602  || pos2<-45 )&& (pos3>=602  || pos3<-45) && (pos4>=602  || pos4<-45)) {
                pos3-=1 
                boneco3.style.left=pos3+"px"
                
                
            }else{
                pos3-=1
                boneco3.style.left=pos3+"px"
                
                
            }
            
        }else {
            if (pos3>601 & posf>5400) {
                pos3+=1
                boneco3.style.left=pos3+"px"
                
            } else if (pos3<=601 ) {
              pos3+=1
              boneco3.style.left=pos3+"px"
            }
        } 
        if(pos3<-45.5){
            if (ult==null) {
                ult=3
                coin3-=10
            } else if(third==null){
                third=3
            } else if(seco==null){
                seco=3
                coin3+=10
            }else{
                firt=3
                coin3+=20
            }
            sessionStorage.setItem('coin3',coin3)
            clearInterval(idb3) 
        }
        if (firt!=null&&seco!=null&&third!=null&&ult!=null) {
            clearInterval(id)
            setTimeout(() => {
                window.location.assign('http://127.0.0.1:5500/jogo_lpc_versaofinal/tabuleiro.html')
            }, 1000);
        }
    }

    function andarb4() {
        colizao1 = posf+pos1+45
        fimcoli=colizao1-45
        fimcoli2=colizao2-45
        fimcoli3=colizao3-45
        fimcoli4=colizao4-45
        colizao2 = posf+pos2+45
        colizao3 = posf+pos3+45
        colizao4 = posf+pos4+45
        
        
        if (obst[0].offsetLeft==colizao4 && boneco4.offsetTop<=92){  
            vsfd4=true
            
        } else if (obst[2].offsetLeft==colizao4 && boneco4.offsetTop<=92){
            vsfd4=true    
        } else if (obst[4].offsetLeft==colizao4 && boneco4.offsetTop<=92){ 
            vsfd4=true  
        } else if (obst[6].offsetLeft==colizao4 && boneco4.offsetTop<=92){
            vsfd4=true
        } else if (obst[1].offsetLeft==colizao4 && boneco4.offsetTop>=116){
            vsfd4=true
        }else if (obst[3].offsetLeft==colizao4 && boneco4.offsetTop>=116){
            vsfd4=true
        }else if (obst[5].offsetLeft==colizao4 && boneco4.offsetTop>=116){
            vsfd4=true
        }else if (obst[7].offsetLeft==colizao4 && boneco4.offsetTop>=116){
            vsfd4=true
        }else if (fimcoli==colizao4 && boneco4.offsetTop+36>boneco.offsetTop && boneco.offsetTop+36>boneco4.offsetTop){
            vsfd4=true
            //console.log (boneco4.offsetLeft+" "+colizao1)
        }else if (fimcoli2==colizao4 && boneco4.offsetTop+36>boneco2.offsetTop && boneco2.offsetTop+36>boneco4.offsetTop){
            vsfd4=true
            //console.log (boneco4.offsetLeft+" "+colizao4)
        }else if (fimcoli3==colizao4 && boneco4.offsetTop+36>boneco3.offsetTop && boneco3.offsetTop+36>boneco4.offsetTop){
            vsfd4=true
            //console.log (boneco2.offsetLeft+" "+colizao1)
        }else{
            vsfd4=false
        }
          
        if (pos4==1400) {
            if (firt==null) {
                firt=4
                coin4+=20
            } else if(seco==null){
                seco=4
                coin4+=10
            } else if(third==null){
                third=4
            }else{
                clearInterval(id)
                ult=4
                coin4-=10
                alert(firt+" "+seco+" "+third+" "+ult)
            }
            sessionStorage.setItem('coin4',coin4)
            clearInterval(idb4)
           
        }else if (vsfd4==true) {
            // alert(vsfd+" "+colizao1+" "+obst[4].offsetLeft)
            // alert(vsfd+" "+pos4+" "+posf)
            if ((pos1>=602 || pos1<-45) &&  (pos2>=602  || pos2<-45 )&& (pos3>=602  || pos3<-45) && (pos4>=602  || pos4<-45)) {
                pos4-=1
                boneco4.style.left=pos4+"px"
            }else{
                pos4-=1
                boneco4.style.left=pos4+"px"
            }
            
        }else {
            if (pos4>601 & posf>5400) {
                pos4+=1
                boneco4.style.left=pos4+"px"
                
            } else if (pos4<=601 ) {
              pos4+=1
              boneco4.style.left=pos4+"px"
            }
        } 
        if(pos4<-45.5 ){
            if (ult==null) {
                ult=4
                coin4-=10
            } else if(third==null){
                third=4
            } else if(seco==null){
                seco=4
                coin4+=10
            }else{
                firt=4
                coin4+=20
            }
            sessionStorage.setItem('coin4',coin4)
            clearInterval(idb4) 
        }
        if (firt!=null&&seco!=null&&third!=null&&ult!=null) {
            clearInterval(id)
            setTimeout(() => {
                window.location.assign('http://127.0.0.1:5500/jogo_lpc_versaofinal/tabuleiro.html')
            }, 1000);
        }
    }

}