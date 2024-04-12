
addEventListener('keypress',function name(event) {
    if (event.key === 'c') {
        boneco2 = document.getElementById('boneco2') 
        boneco = document.getElementById('boneco1') 
        clearInterval(timed2)
        clearInterval(times2)
        if (timed2!=null) {
            times2 = setInterval(sub2,5)
            timed2=null
        } else {
            timed2 = setInterval(dsc2,5)    
        }
        
        function dsc2() {
            
            let fimcoli2 = colizao2 - 45
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
                
            // }
            
            let fimcoli2=colizao2-45
            
            
            if (obst[0].offsetLeft < colizao2 && boneco2.offsetTop <= 92 && obst[0].offsetLeft > fimcoli2){
                boneco2.style.top=altura2+"px"
            } else if (obst[2].offsetLeft < colizao2 && boneco2.offsetTop <= 92 && obst[2].offsetLeft > fimcoli2){
                boneco2.style.top = altura2 + "px"
            } else if (obst[4].offsetLeft < colizao2 && boneco2.offsetTop <= 92 && obst[4].offsetLeft > fimcoli2){
                boneco2.style.top = altura2 + "px"
            } else if (obst[6].offsetLeft < colizao2 && boneco2.offsetTop <= 92 && obst[6].offsetLeft > fimcoli2){
                boneco2.style.top = altura2 + "px"
            } else if (altura2 == 45) {
                clearInterval(timed2)
            } else {
                altura2-=2
                boneco2.style.top=altura2+"px"
            }
        }
    }  




    if (event.key === 'a') {
         
        boneco = document.getElementById('boneco1') 
        clearInterval(timed)
        clearInterval(times)
        if (timed!=null) {
            times = setInterval(sub,5)
            timed=null
        } else {
            timed = setInterval(dsc,5)
        }
        
        function dsc() {
            
            let fimcoli=colizao1-45
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
            
            let fimcoli=colizao1-45
            
            
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
})

  
let index = 0
let timed=null
let times=null
let timed2=null
let times2=null
let altura=45 
let altura2=81
let obst 

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

function tmncbixin() {
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
            posf+=2
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
        
        // for (let index = 0; index < obst.length; index++) {
        //     while (obst[index].offsetLeft==colizao1) {
                
        //     }
        // }

        if (obst[0].offsetLeft==colizao1 && (boneco.offsetTop<=92 || boneco.offsetTop>=116)){  
            vsfd=true
            console.log(obst[0].offsetLeft+" "+colizao1+" "+pos1+" "+posf+" colizao obj 1")
        } else if (obst[2].offsetLeft==colizao1 && boneco.offsetTop<=92){
            vsfd=true  
            console.log(obst[2].offsetLeft+" "+colizao1+" "+pos1+" "+posf+" colizao obj 2")  
        } else if (obst[4].offsetLeft==colizao1 && boneco.offsetTop<=92){ 
            vsfd=true  
            console.log(obst[4].offsetLeft+" "+colizao1+" "+pos1+" "+posf+" colizao obj 3")
        } else if (obst[6].offsetLeft==colizao1 && boneco.offsetTop<=92){
            vsfd=true
            console.log(obst[6].offsetLeft+" "+colizao1+" "+pos1+" "+posf+" colizao obj 4")
        } else if (obst[1].offsetLeft==colizao1 && boneco.offsetTop>=116){
            vsfd=true
            console.log(obst[1].offsetLeft+" "+colizao1+" "+pos1+" "+posf+" colizao obj 5")
        }else if (obst[3].offsetLeft==colizao1 && boneco.offsetTop>=116){
            vsfd=true
            console.log(obst[3].offsetLeft+" "+colizao1+" "+pos1+" "+posf+" colizao obj 6")
        }else if (obst[5].offsetLeft==colizao1 && boneco.offsetTop>=116){
            vsfd=true
            console.log(obst[5].offsetLeft+" "+colizao1+" "+pos1+" "+posf+" colizao obj 7")
        }else if (obst[7].offsetLeft==colizao1 && boneco.offsetTop>=116){
            vsfd=true
            console.log(obst[7].offsetLeft+" "+colizao1+" "+pos1+" "+posf+" colizao obj 8")
        }else{
            vsfd=false
        }
          
        if (pos1==1400) {
            clearInterval(idb1)
        }else if (vsfd==true) {
            if ((pos1>=602 || pos1<-45) && (pos2>=602  || pos2<-45 ) && (pos3>=602  || pos3<-45) && (pos4>=602  || pos4<-45)) {
                pos1-=1
                boneco.style.left=pos1+"px"
                console.log(pos1+" pos1")
            }else{
                pos1-=1
                boneco.style.left=pos1+"px"
                console.log(pos1+" pos1")
            }
            
        }else {
            if (pos1>601 & posf>5400) {

                pos1+=1
                boneco.style.left=pos1+"px"
                console.log(pos1+" pos1")
            } else if (pos1<=601 ) {

              pos1+=1
              boneco.style.left=pos1+"px"
              console.log(pos1+" pos1")
            }
        } 
        if(pos1<-45.5 ){
            boneco.remove()
            console.log(pos1+" pos1")
            clearInterval(idb1) 
        }
        
    }
    function andarb2() {
        
        
        colizao2 = posf+pos2+45
        
        
        if (obst[0].offsetLeft==colizao2 && boneco2.offsetTop<=92){  
            vsfd2=true
            console.log(obst[0].offsetLeft+" "+colizao2+" "+pos1+" "+posf+" colizao obj 1")
        } else if (obst[2].offsetLeft==colizao2 && boneco2.offsetTop<=92){
            vsfd2=true   
            console.log(obst[2].offsetLeft+" "+colizao2+" "+pos1+" "+posf+" colizao obj 1") 
        } else if (obst[4].offsetLeft==colizao2 && boneco2.offsetTop<=92){ 
            vsfd2=true  
            console.log(obst[4].offsetLeft+" "+colizao2+" "+pos1+" "+posf+" colizao obj 1")
        } else if (obst[6].offsetLeft==colizao2 && boneco2.offsetTop<=92){
            vsfd2=true
            console.log(obst[6].offsetLeft+" "+colizao2+" "+pos1+" "+posf+" colizao obj 6 boneco2")
        } else if (obst[1].offsetLeft==colizao2 && boneco2.offsetTop>=116){
            vsfd2=true
            console.log(obst[1].offsetLeft+" "+colizao2+" "+pos1+" "+posf+" colizao obj 1")
        }else if (obst[3].offsetLeft==colizao2 && boneco2.offsetTop>=116){
            vsfd2=true
            console.log(obst[3].offsetLeft+" "+colizao2+" "+pos1+" "+posf+" colizao obj 1")
        }else if (obst[5].offsetLeft==colizao2 && boneco2.offsetTop>=116){
            vsfd2=true
            console.log(obst[5].offsetLeft+" "+colizao2+" "+pos1+" "+posf+" colizao obj 1")
        }else if (obst[7].offsetLeft==colizao2 && boneco2.offsetTop>=116){
            vsfd2=true
            console.log(obst[7].offsetLeft+" "+colizao2+" "+pos1+" "+posf+" colizao obj 1")
        }else{
            vsfd2=false
        }
          
        if (pos2==1400) {
            clearInterval(id)
        }else if (vsfd2==true) {
            // alert(vsfd+" "+colizao1+" "+obst[4].offsetLeft)
            // alert(vsfd+" "+pos2+" "+posf)
            if ((pos1>=602 || pos1<-45) && (pos2>=602  || pos2<-45 ) && (pos3>=602  || pos3<-45) && (pos4>=602  || pos4<-45)) {
                pos2-=1
                boneco2.style.left=pos2+"px"
                console.log(pos2+" pos2")
            }else{
                pos2-=1
                boneco2.style.left=pos2+"px"
                console.log(pos2+" pos2")
            }
            
        }else {
            if (pos2>601 & posf>5400) {
                pos2+=1
                boneco2.style.left=pos2+"px"
                console.log(pos2+" pos2")
                
            } else if (pos2<=601 ) {
              pos2+=1
              boneco2.style.left=pos2+"px"
              console.log(pos2+" pos2")
            }
        } 
        if(pos2<-45.5 ){
            console.log(pos2+" pos2")
            boneco2.remove()
            clearInterval(idb2) 
        }
    }

    function andarb3() {
        
        
        colizao3 = posf+pos3+45
        if(pos3<-45.5){
            
            boneco3.remove()
            clearInterval(idb3) 
        }
        
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
        }else{
            vsfd3=false
        }
          
        if (pos3==1400) {
            clearInterval(id)
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
        
    }

    function andarb4() {
        
        
        colizao4 = posf+pos4+45
        if(pos4<-45.5 ){
            boneco4.remove()
            clearInterval(idb4) 
        }
        
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
        }else{
            vsfd4=false
        }
          
        if (pos4==1400) {
            clearInterval(id)
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
        
    }
}