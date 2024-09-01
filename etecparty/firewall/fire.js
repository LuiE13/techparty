let pts1,  pts2, pts3 ,pts4 //guarda os ponto

let pontos1=0,  pontos2=0, pontos3=0 ,pontos4=0//paragrafo q mostra os pontos

let timeActive = 0 , timeActive2=0 , timeActive3=0//tempo da função, define o fim

let firewall1, firewall2, firewall3, firewall4 //players, o boeco de cada um 

let estera1p1, estera2p1, estera3p1//esteiras do player 1

let estera1p2, estera2p2, estera3p2 //esteiras do player 2

let estera1p3, estera2p3, estera3p3 //esteiras do player 3

let estera1p4, estera2p4, estera3p4 //esteiras do player 4

let est1,est2,est3 // intervala da função de cada esteira (esteira 1 é a primeira esteira de cada player)

let dest,dest2, dest3//intervalo da descida de itens

let spaw1,spaw2,spaw3//define se vai spawnnar coisas, e que coisas

var virus,clonvir1=[] ,clonvir2=[],clonvir3=[],clonvir4=[] //virus original e o clone pra cada um dos player

let limp ,clonlimp1=[] ,clonlimp2=[],clonlimp3=[],clonlimp4=[]//arquivo limpo original e o clone pra cada um dos player

var virus2,clonvir21=[] ,clonvir22=[],clonvir23=[],clonvir24=[] //virus original e o clone pra cada um dos player

let limp2 ,clonlimp21=[] ,clonlimp22=[],clonlimp23=[],clonlimp24=[]//arquivo limpo original e o clone pra cada um dos player

var virus3,clonvir31=[] ,clonvir32=[],clonvir33=[],clonvir34=[] //virus original e o clone pra cada um dos player

let limp3 ,clonlimp31=[] ,clonlimp32=[],clonlimp33=[],clonlimp34=[]//arquivo limpo original e o clone pra cada um dos player

let coin1 ,coin2, coin3, coin4




let valdes,index2=95,index3=95,index4=95
let piriri=[],piriri2=[],piriri3=[], sfd,sfd2,sfd3

function game() {
    
    pts1 = document.getElementById("ponto1")
    pts2 = document.getElementById("ponto2")
    pts3 = document.getElementById("ponto3")
    pts4 = document.getElementById("ponto4")
    estera1p1 = document.getElementById("p1e1")
    estera2p1 = document.getElementById("p1e2")
    estera3p1 = document.getElementById("p1e3")
    estera1p2 = document.getElementById("p2e1")
    estera2p2 = document.getElementById("p2e2")
    estera3p2 = document.getElementById("p2e3")
    estera1p3 = document.getElementById("p3e1")
    estera2p3 = document.getElementById("p3e2")
    estera3p3 = document.getElementById("p3e3")
    estera1p4 = document.getElementById("p4e1")
    estera2p4 = document.getElementById("p4e2")
    estera3p4 = document.getElementById("p4e3")
    virus = document.getElementById("viru")
    limp = document.getElementById("limp")
    virus2 = document.getElementById("viru")
    limp2 = document.getElementById("limp")
    virus3 = document.getElementById("viru")
    limp3 = document.getElementById("limp")
    
    setTimeout(() => {
        clearInterval(est1)
        clearInterval(est2)
        clearInterval(est3)
        coin1=Number(sessionStorage.getItem('coin1'))
        coin2=Number(sessionStorage.getItem('coin2'))
        coin3=Number(sessionStorage.getItem('coin3'))
        coin4=Number(sessionStorage.getItem('coin4'))
        if (pts1==Math.max(pts1,pts2,pts3,pts4)) {
            coin1+=20
            if (pts2==Math.max(pts2,pts3,pts4)) {
                coin2+=10
                if (pts3==Math.max(pts3,pts4)) {
                   coin4-=10
                    
                } else{
                   coin3-=10
                    
                }
            } else if (pts3==Math.max(pts2,pts3,pts4)) {
                coin3+=10
                if (pts2==Math.max(pts2,pts4)) {
                    coin4-=10
                    
                } else{
                   coin2-=10
                    
                }
            } else if ((pts4==Math.max(pts2,pts3,pts4))){
                coin4+=10
                if (pts2==Math.max(pts2,pts3)) {
                    coin3-=10
                    
                } else{
                   coin2-=10
                    
                }
            }
        } else if (pts2==Math.max(pts1,pts2,pts3,pts4)) {
            coin2+=20
            if (pts1==Math.max(pts1,pts3,pts4)) {
                coin1+=10
                if (pts3==Math.max(pts3,pts4)) {
                    coin4-=10
                    
                } else{
                    coin3-=10
                    
                }
            } else if (pts3==Math.max(pts1,pts3,pts4)) {
                coin3+=10
                if (pts1==Math.max(pts1,pts4)) {
                    coin4-=10
                    
                } else{
                    coin1-=10
                    
                }
            } else if ((pts4==Math.max(pts1,pts3,pts4))){
                coin4+=10
                if (pts1==Math.max(pts1,pts3)) {
                    coin3-=10
                    
                } else{
                    coin1-=10
                    
                }
            }
        }else if (pts3==Math.max(pts1,pts2,pts3,pts4)) {
            coin3+=20
            if (pts1==Math.max(pts1,pts2,pts4)) {
                coin1+=10
                if (pts2==Math.max(pts2,pts4)) {
                    coin4-=10
                    
                } else{
                    coin2-=10
                    
                }
            } else if (pts2==Math.max(pts1,pts2,pts4)) {
                coin2+=10
                if (pts1==Math.max(pts1,pts4)) {
                    coin4-=10
                   
                    
                } else{
                    coin1-=10
                    
                }
            } else if ((pts4==Math.max(pts1,pts2,pts4))){
                coin4+=10
                if (pts1==Math.max(pts1,pts2)) {
                    coin2-=10
                    
                } else{
                    coin1-=10
                    
                }
            }
        }else{
            coin4+=20
            if (pts1==Math.max(pts1,pts2,pts3)) {
                coin1+=10
                if (pts2==Math.max(pts2,pts3)) {
                    coin3-=10
                    
                } else{
                    coin2-=10
                    
                }
            } else if (pts2==Math.max(pts1,pts2,pts3)) {
                coin2+=10
                if (pts1==Math.max(pts1,pts3)) {
                    coin3-=10
                    
                } else{
                    coin1-=10
                    
                }
            } else if ((pts3==Math.max(pts1,pts2,pts3))){
                coin3+=10
                if (pts1==Math.max(pts1,pts2)) {
                    coin2-=10
                    
                } else{
                    coin1-=10
                    
                }
            }
        }
        sessionStorage.setItem('coin1',coin1)
        sessionStorage.setItem('coin2',coin2)
        sessionStorage.setItem('coin3',coin3)
        sessionStorage.setItem('coin4',coin4)
        window.location.assign('http://127.0.0.1:5500/jogo_lpc_versaofinal/tabuleiro.html')
    }, 125000);
    
    est1=setInterval(roleta1,4000)
    setTimeout(() => {
        est2=setInterval(roleta2,4000)
    }, 1500);

    setTimeout(() => {
        est3=setInterval(roleta3,4000)
    }, 3000);
    // 
    // 

    function roleta1() { 
        timeActive++
        // (timeActive)
        // console.log(virus.cloneNode(true))
        // console.log(clonvir1)
        clonvir1[timeActive] = virus.cloneNode(true)
        clonvir2[timeActive] = virus.cloneNode(true)
        clonvir3[timeActive] = virus.cloneNode(true)
        clonvir4[timeActive] = virus.cloneNode(true)
        clonlimp1[timeActive] = limp.cloneNode(true)
        clonlimp2[timeActive] = limp.cloneNode(true)
        clonlimp3[timeActive] = limp.cloneNode(true)
        clonlimp4[timeActive] = limp.cloneNode(true)
        
        spaw1 = Math.floor(Math.random() *9) + 1; 
         
      

        switch (spaw1) {
            case 1:
                dest=setInterval(descidaItem,200)
                clonvir1[timeActive].classList.remove('arquio');
                clonvir2[timeActive].classList.remove('arquio')
                clonvir3[timeActive].classList.remove('arquio')
                clonvir4[timeActive].classList.remove('arquio')
               piriri2,piriri3 =timeActive-1
                clonvir1[timeActive].classList.remove("sp"+ sfd)
                clonvir2[timeActive].classList.remove("sp"+ sfd)
                clonvir3[timeActive].classList.remove("sp"+ sfd)
                clonvir4[timeActive].classList.remove("sp"+ sfd)
            
                clonvir1[timeActive].classList.add("sp"+timeActive)
                clonvir2[timeActive].classList.add("sp"+timeActive)
                clonvir3[timeActive].classList.add("sp"+timeActive)
                clonvir4[timeActive].classList.add("sp"+timeActive)
                
                estera1p1.appendChild(clonvir1[timeActive])
                estera1p2.appendChild(clonvir2[timeActive])
                estera1p3.appendChild(clonvir3[timeActive])
                estera1p4.appendChild(clonvir4[timeActive])
                break;
        
            case 2:
                dest=setInterval(descidaItem,200)
                clonlimp1[timeActive].classList.remove('arquio');
                clonlimp2[timeActive].classList.remove('arquio')
                clonlimp3[timeActive].classList.remove('arquio')
                clonlimp4[timeActive].classList.remove('arquio')
                
                sfd =timeActive-1
                clonlimp1[timeActive].classList.remove("lp"+ sfd)
                clonlimp2[timeActive].classList.remove("lp"+ sfd)
                clonlimp3[timeActive].classList.remove("lp"+ sfd)
                clonlimp4[timeActive].classList.remove("lp"+ sfd)
                
                clonlimp1[timeActive].classList.add("lp"+timeActive)
                clonlimp2[timeActive].classList.add("lp"+timeActive)
                clonlimp3[timeActive].classList.add("lp"+timeActive)
                clonlimp4[timeActive].classList.add("lp"+timeActive)

                estera1p1.appendChild(clonlimp1[timeActive])
                estera1p2.appendChild(clonlimp2[timeActive])
                estera1p3.appendChild(clonlimp3[timeActive])
                estera1p4.appendChild(clonlimp4[timeActive])
                break;
            case 3:
                
                break;
            case 4:
                dest=setInterval(descidaItem,200)
                clonvir1[timeActive].classList.remove('arquio');
                clonvir2[timeActive].classList.remove('arquio')
                clonvir3[timeActive].classList.remove('arquio')
                clonvir4[timeActive].classList.remove('arquio')
                
                sfd =timeActive-1
                clonvir1[timeActive].classList.remove("sp"+ sfd)
                clonvir2[timeActive].classList.remove("sp"+ sfd)
                clonvir3[timeActive].classList.remove("sp"+ sfd)
                clonvir4[timeActive].classList.remove("sp"+ sfd)
                
                clonvir1[timeActive].classList.add("sp"+timeActive)
                clonvir2[timeActive].classList.add("sp"+timeActive)
                clonvir3[timeActive].classList.add("sp"+timeActive)
                clonvir4[timeActive].classList.add("sp"+timeActive)

                estera1p1.appendChild(clonvir1[timeActive])
                estera1p2.appendChild(clonvir2[timeActive])
                estera1p3.appendChild(clonvir3[timeActive])
                estera1p4.appendChild(clonvir4[timeActive])
                break;
        
            case 5:
                dest=setInterval(descidaItem,200)
                clonlimp1[timeActive].classList.remove('arquio');
                clonlimp2[timeActive].classList.remove('arquio')
                clonlimp3[timeActive].classList.remove('arquio')
                clonlimp4[timeActive].classList.remove('arquio')
                
                sfd =timeActive-1
                clonlimp1[timeActive].classList.remove("lp"+ sfd)
                clonlimp2[timeActive].classList.remove("lp"+ sfd)
                clonlimp3[timeActive].classList.remove("lp"+ sfd)
                clonlimp4[timeActive].classList.remove("lp"+ sfd)
                
                clonlimp1[timeActive].classList.add("lp"+timeActive)
                clonlimp2[timeActive].classList.add("lp"+timeActive)
                clonlimp3[timeActive].classList.add("lp"+timeActive)
                clonlimp4[timeActive].classList.add("lp"+timeActive)
                estera1p1.appendChild(clonlimp1[timeActive])
                estera1p2.appendChild(clonlimp2[timeActive])
                estera1p3.appendChild(clonlimp3[timeActive])
                estera1p4.appendChild(clonlimp4[timeActive])
                break;
            case 6:
                
                break;
            case 7:
                dest=setInterval(descidaItem,200)
                clonvir1[timeActive].classList.remove('arquio');
                clonvir2[timeActive].classList.remove('arquio')
                clonvir3[timeActive].classList.remove('arquio')
                clonvir4[timeActive].classList.remove('arquio')

                sfd =timeActive-1
                clonvir1[timeActive].classList.remove("sp"+ sfd)
                clonvir2[timeActive].classList.remove("sp"+ sfd)
                clonvir3[timeActive].classList.remove("sp"+ sfd)
                clonvir4[timeActive].classList.remove("sp"+ sfd)

                clonvir1[timeActive].classList.add("sp"+timeActive)
                clonvir2[timeActive].classList.add("sp"+timeActive)
                clonvir3[timeActive].classList.add("sp"+timeActive)
                clonvir4[timeActive].classList.add("sp"+timeActive)

                estera1p1.appendChild(clonvir1[timeActive])
                estera1p2.appendChild(clonvir2[timeActive])
                estera1p3.appendChild(clonvir3[timeActive])
                estera1p4.appendChild(clonvir4[timeActive])
                break;
        
            case 8:
                dest=setInterval(descidaItem,200)
                clonlimp1[timeActive].classList.remove('arquio');
                clonlimp2[timeActive].classList.remove('arquio')
                clonlimp3[timeActive].classList.remove('arquio')
                clonlimp4[timeActive].classList.remove('arquio')

                sfd =timeActive-1
                clonlimp1[timeActive].classList.remove("lp"+ sfd)
                clonlimp2[timeActive].classList.remove("lp"+ sfd)
                clonlimp3[timeActive].classList.remove("lp"+ sfd)
                clonlimp4[timeActive].classList.remove("lp"+ sfd)

                clonlimp1[timeActive].classList.add("lp"+timeActive)
                clonlimp2[timeActive].classList.add("lp"+timeActive)
                clonlimp3[timeActive].classList.add("lp"+timeActive)
                clonlimp4[timeActive].classList.add("lp"+timeActive)

                estera1p1.appendChild(clonlimp1[timeActive])
                estera1p2.appendChild(clonlimp2[timeActive])
                estera1p3.appendChild(clonlimp3[timeActive])
                estera1p4.appendChild(clonlimp4[timeActive])
                break;
            case 9:
                
                break;
        }
    }
    function descidaItem() {
        if (spaw1%3==2) {
            piriri = document.getElementsByClassName("lp"+timeActive)
            index2+=15
            
            for (let index = 0; index < piriri.length; index++) {
                piriri[index].style.top=index2+"px" 
            }
            if (index2>=330) {
                for (let index = 0; index < 4; index++) {
                    
                    piriri[0].remove()
                    if (pos1==2) {
                        pontos1-=5
                        pts1.innerHTML=pontos1
                    } 
                    if (pos2==2) {
                        pontos2-=5
                        pts2.innerHTML=pontos1
                    }
                    if (pos3==2) {
                        pontos3-=5
                        pts3.innerHTML=pontos3
                    }
                    if (pos4==2) {
                        pontos4-=5
                        pts4.innerHTML=pontos4
                    }
                }
                index2=95
                clearInterval(dest)
            }
        } else if (spaw1%3==1) {
            piriri = document.getElementsByClassName("sp"+timeActive)
            index2+=15
            for (let index = 0; index < piriri.length; index++) {
                piriri[index].style.top=index2+"px" 
            }
            if (index2>=330) {
                for (let index = 0; index < 4; index++) {
                    
                    piriri[0].remove() 
                    if (pos1==2) {
                        pontos1+=5
                        pts1.innerHTML=pontos1
                    }
                    if (pos2==2) {
                        pontos2+=5
                        pts2.innerHTML=pontos2
                    }
                    if (pos3==2) {
                        pontos3+=5
                        pts3.innerHTML=pontos3
                    }
                    if (pos4==2) {
                        pontos4+=5
                        pts4.innerHTML=pontos4
                    }
                }
                index2=95
                clearInterval(dest)
            }
        }
    }









//CARALHO QUE PORRA EU FIZ MAS TA FUNUCIANDO ENT Q SEFODA










    function roleta2() { 
        timeActive2++
        // console.log(timeActive)
        // console.log(virus.cloneNode(true))
        // console.log(clonvir1)
        clonvir21[timeActive2] = virus2.cloneNode(true)
        clonvir22[timeActive2] = virus2.cloneNode(true)
        clonvir23[timeActive2] = virus2.cloneNode(true)
        clonvir24[timeActive2] = virus2.cloneNode(true)
        clonlimp21[timeActive2] = limp2.cloneNode(true)
        clonlimp22[timeActive2] = limp2.cloneNode(true)
        clonlimp23[timeActive2] = limp2.cloneNode(true)
        clonlimp24[timeActive2] = limp2.cloneNode(true)
        
        spaw2 = Math.floor(Math.random() *9) + 1; 
         
        

        switch (spaw2) {
            case 1:
                dest2=setInterval(descidaItem2,200)
                clonvir21[timeActive2].classList.remove('arquio');
                clonvir22[timeActive2].classList.remove('arquio')
                clonvir23[timeActive2].classList.remove('arquio')
                clonvir24[timeActive2].classList.remove('arquio')
                sfd2 =timeActive2-1
                clonvir21[timeActive2].classList.remove("sp2"+ sfd2)
                clonvir22[timeActive2].classList.remove("sp2"+ sfd2)
                clonvir23[timeActive2].classList.remove("sp2"+ sfd2)
                clonvir24[timeActive2].classList.remove("sp2"+ sfd2)
            
                clonvir21[timeActive2].classList.add("sp2"+timeActive2)
                clonvir22[timeActive2].classList.add("sp2"+timeActive2)
                clonvir23[timeActive2].classList.add("sp2"+timeActive2)
                clonvir24[timeActive2].classList.add("sp2"+timeActive2)
                
                estera2p1.appendChild(clonvir21[timeActive2])
                estera2p2.appendChild(clonvir22[timeActive2])
                estera2p3.appendChild(clonvir23[timeActive2])
                estera2p4.appendChild(clonvir24[timeActive2])
                break;
        
            case 2:
                dest2=setInterval(descidaItem2,200)
                clonlimp21[timeActive2].classList.remove('arquio');
                clonlimp22[timeActive2].classList.remove('arquio')
                clonlimp23[timeActive2].classList.remove('arquio')
                clonlimp24[timeActive2].classList.remove('arquio')
                
                sfd2 =timeActive2-1
                clonlimp21[timeActive2].classList.remove("lp2"+ sfd2)
                clonlimp22[timeActive2].classList.remove("lp2"+ sfd2)
                clonlimp23[timeActive2].classList.remove("lp2"+ sfd2)
                clonlimp24[timeActive2].classList.remove("lp2"+ sfd2)
                
                clonlimp21[timeActive2].classList.add("lp2"+timeActive2)
                clonlimp22[timeActive2].classList.add("lp2"+timeActive2)
                clonlimp23[timeActive2].classList.add("lp2"+timeActive2)
                clonlimp24[timeActive2].classList.add("lp2"+timeActive2)

                estera2p1.appendChild(clonlimp21[timeActive2])
                estera2p2.appendChild(clonlimp22[timeActive2])
                estera2p3.appendChild(clonlimp23[timeActive2])
                estera2p4.appendChild(clonlimp24[timeActive2])
                break;
            case 3:
                
                break;
            case 4:
                dest2=setInterval(descidaItem2,200)
                clonvir21[timeActive2].classList.remove('arquio');
                clonvir22[timeActive2].classList.remove('arquio')
                clonvir23[timeActive2].classList.remove('arquio')
                clonvir24[timeActive2].classList.remove('arquio')
                
                sfd2 =timeActive2-1
                clonvir21[timeActive2].classList.remove("sp2"+ sfd2)
                clonvir22[timeActive2].classList.remove("sp2"+ sfd2)
                clonvir23[timeActive2].classList.remove("sp2"+ sfd2)
                clonvir24[timeActive2].classList.remove("sp2"+ sfd2)
                
                clonvir21[timeActive2].classList.add("sp2"+timeActive2)
                clonvir22[timeActive2].classList.add("sp2"+timeActive2)
                clonvir23[timeActive2].classList.add("sp2"+timeActive2)
                clonvir24[timeActive2].classList.add("sp2"+timeActive2)

                estera2p1.appendChild(clonvir21[timeActive2])
                estera2p2.appendChild(clonvir22[timeActive2])
                estera2p3.appendChild(clonvir23[timeActive2])
                estera2p4.appendChild(clonvir24[timeActive2])
                break;
        
            case 5:
                dest2=setInterval(descidaItem2,200)
                clonlimp21[timeActive2].classList.remove('arquio');
                clonlimp22[timeActive2].classList.remove('arquio')
                clonlimp23[timeActive2].classList.remove('arquio')
                clonlimp24[timeActive2].classList.remove('arquio')
                
                sfd2 =timeActive2-1
                clonlimp21[timeActive2].classList.remove("lp2"+ sfd2)
                clonlimp22[timeActive2].classList.remove("lp2"+ sfd2)
                clonlimp23[timeActive2].classList.remove("lp2"+ sfd2)
                clonlimp24[timeActive2].classList.remove("lp2"+ sfd2)
                
                clonlimp21[timeActive2].classList.add("lp2"+timeActive2)
                clonlimp22[timeActive2].classList.add("lp2"+timeActive2)
                clonlimp23[timeActive2].classList.add("lp2"+timeActive2)
                clonlimp24[timeActive2].classList.add("lp2"+timeActive2)
                estera2p1.appendChild(clonlimp21[timeActive2])
                estera2p2.appendChild(clonlimp22[timeActive2])
                estera2p3.appendChild(clonlimp23[timeActive2])
                estera2p4.appendChild(clonlimp24[timeActive2])
                break;
            case 6:
                
                break;
            case 7:
                dest2=setInterval(descidaItem2,200)
                clonvir21[timeActive2].classList.remove('arquio');
                clonvir22[timeActive2].classList.remove('arquio')
                clonvir23[timeActive2].classList.remove('arquio')
                clonvir24[timeActive2].classList.remove('arquio')

                sfd2 =timeActive2-1
                clonvir21[timeActive2].classList.remove("sp2"+ sfd2)
                clonvir22[timeActive2].classList.remove("sp2"+ sfd2)
                clonvir23[timeActive2].classList.remove("sp2"+ sfd2)
                clonvir24[timeActive2].classList.remove("sp2"+ sfd2)

                clonvir21[timeActive2].classList.add("sp2"+timeActive2)
                clonvir22[timeActive2].classList.add("sp2"+timeActive2)
                clonvir23[timeActive2].classList.add("sp2"+timeActive2)
                clonvir24[timeActive2].classList.add("sp2"+timeActive2)

                estera2p1.appendChild(clonvir21[timeActive2])
                estera2p2.appendChild(clonvir22[timeActive2])
                estera2p3.appendChild(clonvir23[timeActive2])
                estera2p4.appendChild(clonvir24[timeActive2])
                break;
        
            case 8:
                dest2=setInterval(descidaItem2,200)
                clonlimp21[timeActive2].classList.remove('arquio');
                clonlimp22[timeActive2].classList.remove('arquio')
                clonlimp23[timeActive2].classList.remove('arquio')
                clonlimp24[timeActive2].classList.remove('arquio')

                sfd2 =timeActive2-1
                clonlimp21[timeActive2].classList.remove("lp2"+ sfd2)
                clonlimp22[timeActive2].classList.remove("lp2"+ sfd2)
                clonlimp23[timeActive2].classList.remove("lp2"+ sfd2)
                clonlimp24[timeActive2].classList.remove("lp2"+ sfd2)

                clonlimp21[timeActive2].classList.add("lp2"+timeActive2)
                clonlimp22[timeActive2].classList.add("lp2"+timeActive2)
                clonlimp23[timeActive2].classList.add("lp2"+timeActive2)
                clonlimp24[timeActive2].classList.add("lp2"+timeActive2)

                estera2p1.appendChild(clonlimp21[timeActive2])
                estera2p2.appendChild(clonlimp22[timeActive2])
                estera2p3.appendChild(clonlimp23[timeActive2])
                estera2p4.appendChild(clonlimp24[timeActive2])
                break;
            case 9:
                
                break;
        }
    }
    function descidaItem2() {
        if (spaw2%3==2) {
            piriri2 = document.getElementsByClassName("lp2"+timeActive2)
            index3+=15
            
            for (let index = 0; index < piriri2.length; index++) {
                piriri2[index].style.top=index3+"px" 
            }
            if (index3>=330) {
                for (let index = 0; index < 4; index++) {
                    
                    piriri2[0].remove()
                    if (pos1==3) {
                        pontos1-=5
                        pts1.innerHTML=pontos1
                    } 
                    if (pos2==3) {
                        pontos2-=5
                        pts2.innerHTML=pontos1
                    }
                    if (pos3==3) {
                        pontos3-=5
                        pts3.innerHTML=pontos3
                    }
                    if (pos4==3) {
                        pontos4-=5
                        pts4.innerHTML=pontos4
                    } 
                }
                index3=95
                clearInterval(dest2)
            }
        } else if (spaw2%3==1) {
            piriri2 = document.getElementsByClassName("sp2"+timeActive2)
            index3+=15
            for (let index = 0; index < piriri2.length; index++) {
                piriri2[index].style.top=index3+"px" 
            }
            if (index3>=330) {
                for (let index = 0; index < 4; index++) {
                    
                    piriri2[0].remove() 
                    if (pos1==3) {
                        pontos1+=5
                        pts1.innerHTML=pontos1
                    }
                    if (pos2==3) {
                        pontos2+=5
                        pts2.innerHTML=pontos2
                    }
                    if (pos3==3) {
                        pontos3+=5
                        pts3.innerHTML=pontos3
                    }
                    if (pos4==3) {
                        pontos4+=5
                        pts4.innerHTML=pontos4
                    }
                }
                index3=95
                clearInterval(dest2)
            }
        }
    }



    function roleta3() { 
        timeActive3++
        // console.log(timeActive)
        // console.log(virus.cloneNode(true))
        // console.log(clonvir1)
        clonvir31[timeActive3] = virus3.cloneNode(true)
        clonvir32[timeActive3] = virus3.cloneNode(true)
        clonvir33[timeActive3] = virus3.cloneNode(true)
        clonvir34[timeActive3] = virus3.cloneNode(true)
        clonlimp31[timeActive3] = limp3.cloneNode(true)
        clonlimp32[timeActive3] = limp3.cloneNode(true)
        clonlimp33[timeActive3] = limp3.cloneNode(true)
        clonlimp34[timeActive3] = limp3.cloneNode(true)
        
        spaw3 = Math.floor(Math.random() *9) + 1; 
         
        

        switch (spaw3) {
            case 1:
                dest3=setInterval(descidaItem3,200)
                clonvir31[timeActive3].classList.remove('arquio');
                clonvir32[timeActive3].classList.remove('arquio')
                clonvir33[timeActive3].classList.remove('arquio')
                clonvir34[timeActive3].classList.remove('arquio')
                sfd3 =timeActive3-1
                clonvir31[timeActive3].classList.remove("sp3"+ sfd3)
                clonvir32[timeActive3].classList.remove("sp3"+ sfd3)
                clonvir33[timeActive3].classList.remove("sp3"+ sfd3)
                clonvir34[timeActive3].classList.remove("sp3"+ sfd3)
            
                clonvir31[timeActive3].classList.add("sp3"+timeActive3)
                clonvir32[timeActive3].classList.add("sp3"+timeActive3)
                clonvir33[timeActive3].classList.add("sp3"+timeActive3)
                clonvir34[timeActive3].classList.add("sp3"+timeActive3)
                
                estera3p1.appendChild(clonvir31[timeActive3])
                estera3p2.appendChild(clonvir32[timeActive3])
                estera3p3.appendChild(clonvir33[timeActive3])
                estera3p4.appendChild(clonvir34[timeActive3])
                break;
        
            case 2:
                dest3=setInterval(descidaItem3,200)
                clonlimp31[timeActive3].classList.remove('arquio');
                clonlimp32[timeActive3].classList.remove('arquio')
                clonlimp33[timeActive3].classList.remove('arquio')
                clonlimp34[timeActive3].classList.remove('arquio')
                
                sfd3 =timeActive3-1
                clonlimp31[timeActive3].classList.remove("lp3"+ sfd3)
                clonlimp32[timeActive3].classList.remove("lp3"+ sfd3)
                clonlimp33[timeActive3].classList.remove("lp3"+ sfd3)
                clonlimp34[timeActive3].classList.remove("lp3"+ sfd3)
                
                clonlimp31[timeActive3].classList.add("lp3"+timeActive3)
                clonlimp32[timeActive3].classList.add("lp3"+timeActive3)
                clonlimp33[timeActive3].classList.add("lp3"+timeActive3)
                clonlimp34[timeActive3].classList.add("lp3"+timeActive3)

                estera3p1.appendChild(clonlimp31[timeActive3])
                estera3p2.appendChild(clonlimp32[timeActive3])
                estera3p3.appendChild(clonlimp33[timeActive3])
                estera3p4.appendChild(clonlimp34[timeActive3])
                break;
            case 3:
                
                break;
            case 4:
                dest3=setInterval(descidaItem3,200)
                clonvir31[timeActive3].classList.remove('arquio');
                clonvir32[timeActive3].classList.remove('arquio')
                clonvir33[timeActive3].classList.remove('arquio')
                clonvir34[timeActive3].classList.remove('arquio')
                
                sfd3 =timeActive3-1
                clonvir31[timeActive3].classList.remove("sp3"+ sfd3)
                clonvir32[timeActive3].classList.remove("sp3"+ sfd3)
                clonvir33[timeActive3].classList.remove("sp3"+ sfd3)
                clonvir34[timeActive3].classList.remove("sp3"+ sfd3)
                
                clonvir31[timeActive3].classList.add("sp3"+timeActive3)
                clonvir32[timeActive3].classList.add("sp3"+timeActive3)
                clonvir33[timeActive3].classList.add("sp3"+timeActive3)
                clonvir34[timeActive3].classList.add("sp3"+timeActive3)

                estera3p1.appendChild(clonvir31[timeActive3])
                estera3p2.appendChild(clonvir32[timeActive3])
                estera3p3.appendChild(clonvir33[timeActive3])
                estera3p4.appendChild(clonvir34[timeActive3])
                break;
        
            case 5:
                dest3=setInterval(descidaItem3,200)
                clonlimp31[timeActive3].classList.remove('arquio');
                clonlimp32[timeActive3].classList.remove('arquio')
                clonlimp33[timeActive3].classList.remove('arquio')
                clonlimp34[timeActive3].classList.remove('arquio')
                
                sfd3 =timeActive3-1
                clonlimp31[timeActive3].classList.remove("lp3"+ sfd3)
                clonlimp32[timeActive3].classList.remove("lp3"+ sfd3)
                clonlimp33[timeActive3].classList.remove("lp3"+ sfd3)
                clonlimp34[timeActive3].classList.remove("lp3"+ sfd3)
                
                clonlimp31[timeActive3].classList.add("lp3"+timeActive3)
                clonlimp32[timeActive3].classList.add("lp3"+timeActive3)
                clonlimp33[timeActive3].classList.add("lp3"+timeActive3)
                clonlimp34[timeActive3].classList.add("lp3"+timeActive3)
                estera3p1.appendChild(clonlimp31[timeActive3])
                estera3p2.appendChild(clonlimp32[timeActive3])
                estera3p3.appendChild(clonlimp33[timeActive3])
                estera3p4.appendChild(clonlimp34[timeActive3])
                break;
            case 6:
                
                break;
            case 7:
                dest3=setInterval(descidaItem3,200)
                clonvir31[timeActive3].classList.remove('arquio');
                clonvir32[timeActive3].classList.remove('arquio')
                clonvir33[timeActive3].classList.remove('arquio')
                clonvir34[timeActive3].classList.remove('arquio')

                sfd3 =timeActive3-1
                clonvir31[timeActive3].classList.remove("sp3"+ sfd3)
                clonvir32[timeActive3].classList.remove("sp3"+ sfd3)
                clonvir33[timeActive3].classList.remove("sp3"+ sfd3)
                clonvir34[timeActive3].classList.remove("sp3"+ sfd3)

                clonvir31[timeActive3].classList.add("sp3"+timeActive3)
                clonvir32[timeActive3].classList.add("sp3"+timeActive3)
                clonvir33[timeActive3].classList.add("sp3"+timeActive3)
                clonvir34[timeActive3].classList.add("sp3"+timeActive3)

                estera3p1.appendChild(clonvir31[timeActive3])
                estera3p2.appendChild(clonvir32[timeActive3])
                estera3p3.appendChild(clonvir33[timeActive3])
                estera3p4.appendChild(clonvir34[timeActive3])
                break;
        
            case 8:
                dest3=setInterval(descidaItem3,200)
                clonlimp31[timeActive3].classList.remove('arquio');
                clonlimp32[timeActive3].classList.remove('arquio')
                clonlimp33[timeActive3].classList.remove('arquio')
                clonlimp34[timeActive3].classList.remove('arquio')

                sfd3 =timeActive3-1
                clonlimp31[timeActive3].classList.remove("lp3"+ sfd3)
                clonlimp32[timeActive3].classList.remove("lp3"+ sfd3)
                clonlimp33[timeActive3].classList.remove("lp3"+ sfd3)
                clonlimp34[timeActive3].classList.remove("lp3"+ sfd3)

                clonlimp31[timeActive3].classList.add("lp3"+timeActive3)
                clonlimp32[timeActive3].classList.add("lp3"+timeActive3)
                clonlimp33[timeActive3].classList.add("lp3"+timeActive3)
                clonlimp34[timeActive3].classList.add("lp3"+timeActive3)

                estera3p1.appendChild(clonlimp31[timeActive3])
                estera3p2.appendChild(clonlimp32[timeActive3])
                estera3p3.appendChild(clonlimp33[timeActive3])
                estera3p4.appendChild(clonlimp34[timeActive3])
                break;
            case 9:
                
                break;
        }
    }
    function descidaItem3() {
        if (spaw3%3==2) {
            piriri3 = document.getElementsByClassName("lp3"+timeActive3)
            index4+=15
            
            for (let index = 0; index < piriri3.length; index++) {
                piriri3[index].style.top=index4+"px" 
            }
            if (index4>=330) {
                for (let index = 0; index < 4; index++) {
                    
                    piriri3[0].remove()
                    if (pos1==1) {
                        pontos1-=5
                        pts1.innerHTML=pontos1
                    } 
                    if (pos2==1) {
                        pontos2-=5
                        pts2.innerHTML=pontos1
                    }
                    if (pos3==1) {
                        pontos3-=5
                        pts3.innerHTML=pontos3
                    }
                    if (pos4==1) {
                        pontos4-=5
                        pts4.innerHTML=pontos4
                    }
                }
                index4=95
                clearInterval(dest3)
            }
        } else if (spaw3%3==1) {
            piriri3 = document.getElementsByClassName("sp3"+timeActive3)
            index4+=15
            for (let index = 0; index < piriri3.length; index++) {
                piriri3[index].style.top=index4+"px" 
            }
            if (index4>=330) {
                for (let index = 0; index < 4; index++) {
                    
                    piriri3[0].remove() 
                    if (pos1==1) {
                        pontos1+=5
                        pts1.innerHTML=pontos1
                    }
                    if (pos2==1) {
                        pontos2+=5
                        pts2.innerHTML=pontos2
                    }
                    if (pos3==1) {
                        pontos3+=5
                        pts3.innerHTML=pontos3
                    }
                    if (pos4==1) {
                        pontos4+=5
                        pts4.innerHTML=pontos4
                    }
                }
                index4=95
                clearInterval(dest3)
            }
        }
        if (timeActive3==30) {
            console.log('ok')
        }
    }
}

let val1=1,val2=1,val3=1,val4=1
let pos1=2,pos2=2,pos3=2,pos4=2
firewall1 = document.getElementById("b1")
firewall2 = document.getElementById("b2")
firewall3 = document.getElementById("b3")
firewall4 = document.getElementById("b4")

addEventListener('keypress',function nomezin(event) {
    firewall1 = document.getElementById("b1")
    firewall2 = document.getElementById("b2")
    firewall3 = document.getElementById("b3")
    firewall4 = document.getElementById("b4")
    if (event.key === 'a') {
        val1=pos1
        if (val1==1) {
            firewall1.style.left="3%"
            pos1=2
        }else if (val1==2) {
            firewall1.style.left="9.5%"
            pos1=3
        }else {
            firewall1.style.left="16%"
            pos1=1
        }
        
    }

    if (event.key === 'c') {
        val2=pos2
        if (val2==1) {
            firewall2.style.left="27.5%"
            pos2=2
        }else if (val2==2) {
            firewall2.style.left="34.5%"
            pos2=3
        }else {
            firewall2.style.left="41%"
            pos2=1
        }
        
    }

    if (event.key === 'm') {
        val3=pos3
        if (val3==1) {
            firewall3.style.left="52.5%"
            pos3=2
        }else if (val3==2) {
            firewall3.style.left="59.5%"
            pos3=3
        }else {
            firewall3.style.left="66.5%"
            pos3=1
        }
        
    }

    if (event.key === 'p') {
        val4=pos4
        if (val4==1) {
            firewall4.style.left="77.5%"
            pos4=2
        }else if (val4==2) {
            firewall4.style.left="84.5%"
            pos4=3
        }else {
            firewall4.style.left="91%"
            pos4=1
        }
        
    }
})
