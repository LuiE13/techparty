let dadin=document.getElementById('numero')
let pri,seg,ter,ult
let casas
let dadoval=0,dadotimer,dadostop
let pos1val=0,pos2val=0,pos3val=0,pos4val=0
let coin1=0,coin2=0,coin3=0,coin4=0
let descoin1=false,descoin2=false,descoin3=false,descoin4=false
let vez=0,rodada=1
let game1=false,game2=false,game3=false,game4=false
let imgco1,imgco2,imgco3,imgco4
let p1,p2,p3,p4
let bifurc1=document.getElementsByClassName("escolha1")
let deci,rolada=0
function bifurcacao1(camin) {
    if (camin==2) {
        switch (vez) {
            case 1:
                pos1val+=13
                console.log(pos2val)
                break;
        
            case 2:
                pos2val+=13
                console.log(pos2val)
                break;

            case 3:
                pos3val+=13
                console.log(pos2val)
                break;
            case 4:
                pos4val+=13
                console.log(pos2val)
                break;
        }
        deci=2
    }
    if (camin==1) {
        // console.log("fuck")
        deci=1
    }
        
    casas[pos1val].append(p1)   
    casas[pos2val].append(p2)
    casas[pos3val].append(p3)
    casas[pos4val].append(p4)
    bifurc1[0].style.display='none'
    bifurc1[1].style.display='none'
}


function dado() {
    
    if (rolada<4) {
        rolada++
    }else{

    }
    sessionStorage.setItem("rolas?",rolada)
    
    if (vez>3) {
        vez=1
    } else{
        vez+=1
    }
    
    document.getElementById('vei').innerHTML="vez de player"+vez
    dadotimer=setInterval(rola,50)
    dadin.innerHTML=1
    
    sessionStorage.setItem('play',vez)
    
    
    function rola() {
        dadoval+=1
        dadostop=Math.floor(Math.random()*10)
        if (dadoval==10) {
            dadoval=1
        }
        dadin.innerHTML=dadoval
        if (dadostop==dadoval){
            clearInterval(dadotimer)
            andar()
        }
    }
}

function andar() {
    rolada=Number(sessionStorage.getItem('rolas?'))
    imgco1=document.getElementById('coin1')
    imgco2=document.getElementById('coin2')
    imgco3=document.getElementById('coin3')
    imgco4=document.getElementById('coin4')
    casas=[
        document.getElementById('b1'),
        document.getElementById('b2'),
        document.getElementById('b3'),
        document.getElementById('b4'),
        document.getElementById('b5'),
        document.getElementById('b6'),
        document.getElementById('b7'),
        document.getElementById('b8'),
        document.getElementById('b9'),
        document.getElementById('b10'),
        document.getElementById('b11'),
        document.getElementById('b12'),
        document.getElementById('b13'),
        document.getElementById('b14'),
        document.getElementById('b15'),
        document.getElementById('b16'),
        document.getElementById('b17'),
        document.getElementById('b18'),
        document.getElementById('b19'),
        document.getElementById('b20'),
        document.getElementById('b21'),
        document.getElementById('b22'),
        document.getElementById('b23'),
        document.getElementById('b24'),
        document.getElementById('b1a'),
        document.getElementById('b2a'),
        document.getElementById('b3a'),
        document.getElementById('b4a'),
        document.getElementById('b5a'),
        document.getElementById('b6a'),
        document.getElementById('b7a'),
        document.getElementById('b8a'),
        document.getElementById('b9a'),
        document.getElementById('b10a'),
        document.getElementById('b11a'),
        document.getElementById('b12a'),
        document.getElementById('b13a'),
        document.getElementById('b1b'),
        document.getElementById('b2b'),
        document.getElementById('b3b'),
        document.getElementById('b4b'),
        document.getElementById('b5b'),
        document.getElementById('b6b'),
        document.getElementById('b7b'),
        document.getElementById('b8b'),
        document.getElementById('b9b'),
        document.getElementById('b10b'),
        document.getElementById('b11b'),
        document.getElementById('b1c'),
        document.getElementById('b2c'),
        document.getElementById('b3c'),
        document.getElementById('b4c'),
        document.getElementById('b5c'),
        document.getElementById('b6c'),
        document.getElementById('b7c'),
        document.getElementById('b8c'),
        document.getElementById('b12b'),
        document.getElementById('b13b'),
        document.getElementById('b14g'),
        document.getElementById('bgs1'),
        document.getElementById('bgs2')
    ]
    // casas = document.getElementsByClassName('hous')
    p1=document.getElementById('p1')
    p2=document.getElementById('p2')
    p3=document.getElementById('p3')
    p4=document.getElementById('p4')
    
    switch (vez) {
        case 1:
            for (let index=0; index < dadoval; index++) {
                pos1val+=1
                if (pos1val==60) {
                    casas[0].append(p1)
                    pos1val=0
                }
    
            }
            casas[pos1val].append(p1)
                
            
            if (pos1val == 5 ||pos1val ==  13 ||pos1val ==  19 || pos1val == 31 ||pos1val ==  35 ||pos1val ==  44 ||pos1val ==  49 ||pos1val ==  51 ||pos1val ==  60 ) {
                descoin1=true
            }else {
                descoin1=false
            }
            if (descoin1==true) {
                for (let index = 0; index < 5; index++) {
                    (function loop(index) {
                        setTimeout(function() {
                            if (coin1==0) {
                    
                            } else{
                                if (index<=3) {
                                    coin1--
                                    // console.log("moedas? "+coin1)
                                    imgco1.innerHTML='moedas:'+coin1+" -5"
                                }  else{
                                    coin1--
                                    // console.log("moedas? "+coin1)
                                    imgco1.innerHTML='moedas:'+coin1
                                } 
                            }
                            sessionStorage.setItem('coin1',coin1)
                        }, 900*index)
                    })(index)
                    
                }
                
               
                
            } else{
                for (let index = 0; index < 5; index++) {
                    (function loop(index) {
                        setTimeout(function() {
                            if (index<=3) {
                                coin1++
                                // console.log("moedas? "+coin1)
                                imgco1.innerHTML='moedas:'+coin1+" +5"
                            }  else{
                                coin1++
                                // console.log("moedas? "+coin1)
                                imgco1.innerHTML='moedas:'+coin1
                            } 
                            sessionStorage.setItem('coin1',coin1)
                        }, 900*index)
                    })(index)
                    
                }
            }
            if (pos1val==11 || pos1val==58) {
                if (game2==true || game1==true || game3==true) {
                    rolada=4
                    sessionStorage.setItem("rolas?",rolada)
                    
                    window.location.assign('http://127.0.0.1:5500/upload/upload.html')
                } else {
                    game1=true
                }
            }
            if (pos1val==32) {
                if (game2==true || game1==true || game3==true) {
                    rolada=4
                    sessionStorage.setItem("rolas?",rolada)
                    
                    window.location.assign('http://127.0.0.1:5500/firewall/firewal.html')
                } else {
                    game2=true
                } 
            }
            if (pos1val==42) {
                if (game2==true || game1==true || game3==true) {
                    rolada=4
                    sessionStorage.setItem("rolas?",rolada)
                    
                    window.location.assign('http://127.0.0.1:5500/gsw/gsw.html')
                } else {
                    game3=true
                } 
            }

            if (pos1val==4 || pos1val==27 || pos1val==49 || pos1val==55) {
                rolada=4
                sessionStorage.setItem("rolas?",rolada)
                
                window.location.assign('http://127.0.0.1:5500/cartinhas2/index.html')
            }

            sessionStorage.setItem('pos1',pos1val)
            
            break;
    
        case 2:
            for (let index=0; index < dadoval; index++) {
                pos2val+=1
                
                pos1val==11 || pos4val==58
                if (pos2val==60) {
                    casas[0].append(p2)
                    pos2val=0
                }
                
            }
            casas[pos2val].append(p2)
            if (pos2val== 5 ||pos2val ==  13 ||pos2val ==  19 || pos2val == 31 ||pos2val ==  35 ||pos2val ==  44 ||pos2val ==  49 ||pos2val ==  51 ||pos2val ==  60 ) {
                            
                            descoin2=true
            }else {
                descoin2=false
            }

            if (descoin2==true) {
                for (let index = 0; index < 5; index++) {
                    (function loop(index) {
                        setTimeout(function() {
                            if (coin2==0) {
                    
                            }else{
                                if (index<=3) {
                                    coin2--
                                    // console.log("moedas? "+coin2)
                                    imgco2.innerHTML='moedas:'+coin2+" -5"
                                }  else{
                                    coin2--
                                    // console.log("moedas? "+coin2)
                                    imgco2.innerHTML='moedas:'+coin2
                                } 
                            }
                            sessionStorage.setItem('coin2',coin2)
                        }, 900*index)
                    })(index)
                    
                }
               
                
            } else{
                for (let index = 0; index < 5; index++) {
                    (function loop(index) {
                        setTimeout(function() {
                            if (index<=3) {
                                coin2++
                                // console.log("moedas? "+coin2)
                                imgco2.innerHTML='moedas:'+coin2+" +5"
                            }  else{
                                coin2++
                                // console.log("moedas? "+coin2)
                                imgco2.innerHTML='moedas:'+coin2
                            } 
                            sessionStorage.setItem('coin2',coin2)
                        }, 900*index)
                    })(index)
                    
                }
            }

            if (pos2val==11 || pos2val==58) {
                if (game2==true || game1==true || game3==true || game1==true) {
                    rolada=4
                    sessionStorage.setItem("rolas?",rolada)
                    
                    window.location.assign('http://127.0.0.1:5500/upload/upload.html')
                } else {
                    game1=true
                } 
            }
            if (pos2val==32) {
                if (game2==true || game1==true || game3==true || game1==true) {
                    rolada=4
                    sessionStorage.setItem("rolas?",rolada)
                    
                    window.location.assign('http://127.0.0.1:5500/firewall/firewal.html')
                } else {
                    game2=true
                } 
            }
            if (pos2val==42) {
                if (game2==true || game1==true || game3==true || game1==true) {
                    rolada=4
                    sessionStorage.setItem("rolas?",rolada)
                    
                    window.location.assign('http://127.0.0.1:5500/gsw/gsw.html')
                } else {
                    game3=true
                } 
            }
            
            if (pos2val==4 || pos2val==27 || pos2val==49 || pos2val==55) {
                rolada=4
                sessionStorage.setItem("rolas?",rolada)
                
                window.location.assign('http://127.0.0.1:5500/cartinhas2/index.html')
            }
            
            sessionStorage.setItem('pos2',pos2val)
            
            break;
        case 3:
            for (let index=0; index < dadoval; index++) {
                pos3val+=1
                if (pos3val==60) {
                    casas[0].append(p3)
                    pos3val=0
                }
            
            }
            casas[pos3val].append(p3)
            if (pos3val== 5 ||pos3val==  13 ||pos3val==  19 || pos3val== 31 ||pos3val==  35 ||pos3val==  44 ||pos3val==  49 ||pos3val==  51 ||pos3val==  60 ) {
                descoin3=true
            }else {
                descoin3=false
            }

            if (descoin3==true) {
                for (let index = 0; index < 5; index++) {
                    (function loop(index) {
                        setTimeout(function() {
                            if (coin2==0) {
                    
                            }else{
                                if (index<=3) {
                                    coin3--
                                    // console.log("moedas? "+coin3)
                                    imgco3.innerHTML='moedas:'+coin3+" -5"
                                }  else{
                                    coin3--
                                    // console.log("moedas? "+coin3)
                                    imgco3.innerHTML='moedas:'+coin3
                                }
                            } 
                            sessionStorage.setItem('coin3',coin3)
                        }, 900*index)
                    })(index)
                    
                }
               
                
            } else{
                for (let index = 0; index < 5; index++) {
                    (function loop(index) {
                        setTimeout(function() {
                            if (index<=3) {
                                coin3++
                                // console.log("moedas? "+coin3)
                                imgco3.innerHTML='moedas:'+coin3+" +5"
                            }  else{
                                coin3++
                                // console.log("moedas? "+coin3)
                                imgco3.innerHTML='moedas:'+coin3
                            } 
                            sessionStorage.setItem('coin3',coin3)
                        }, 900*index)
                    })(index)
                    
                }
            }

            if (pos3val==11 || pos3val==58) {
                if (game2==true || game1==true || game3==true || game1==true) {
                    rolada=4
                    sessionStorage.setItem("rolas?",rolada)
                    
                    window.location.assign('http://127.0.0.1:5500/upload/upload.html')
                } else {
                    game1=true
                } 
            }
            if (pos3val==32) {
                if (game2==true || game1==true || game3==true || game1==true) {
                    rolada=4
                    sessionStorage.setItem("rolas?",rolada)
                    
                    window.location.assign('http://127.0.0.1:5500/firewall/firewal.html')
                } else {
                    game2=true
                } 
            }
            if (pos3val==42) {
                if (game2==true || game1==true || game3==true || game1==true) {
                    rolada=4
                    sessionStorage.setItem("rolas?",rolada)
                    
                    window.location.assign('http://127.0.0.1:5500/gsw/gsw.html')
                } else {
                    game3=true
                } 
            }
            if (pos3val==4 || pos3val==27 || pos3val==49 || pos3val==55) {
                rolada=4
                sessionStorage.setItem("rolas?",rolada)
                
                window.location.assign('http://127.0.0.1:5500/cartinhas2/index.html')
            }
            sessionStorage.setItem('pos3',pos3val)
            
            break;
        case 4:
            for (let index=0; index < dadoval; index++) {
                pos4val+=1
               
                if (pos4val==60) {
                    casas[0].append(p4)
                    pos4val=0
                }
            }
            casas[pos4val].append(p4)
            if (pos4val == 5 ||pos4val ==  13 ||pos4val ==  19 || pos4val == 31 ||pos4val ==  35 ||pos4val ==  44 ||pos4val ==  49 ||pos4val ==  51 ||pos4val ==  60 ) {
                descoin4=true
            }else {
                descoin4=false
            }




            if (descoin4==true) {
                for (let index = 0; index < 5; index++) {
                    (function loop(index) {
                        setTimeout(function() {
                            if (coin2==0) {
                    
                            }else{
                                if (index<=3) {
                                    coin4--
                                    // console.log("moedas? "+coin4)
                                    imgco4.innerHTML='moedas:'+coin4+" -5"
                                }  else{
                                    coin4--
                                    // console.log("moedas? "+coin4)
                                    imgco4.innerHTML='moedas:'+coin4
                                } 
                            }
                            sessionStorage.setItem('coin4',coin4)
                        }, 900*index)
                    })(index)
                    
                }
               
                
            } else{
                for (let index = 0; index < 5; index++) {
                    (function loop(index) {
                        setTimeout(function() {
                            if (index<=3) {
                                coin4++
                                // console.log("moedas? "+coin4)
                                imgco4.innerHTML='moedas:'+coin4+" +5"
                            }  else{
                                coin4++
                                // console.log("moedas? "+coin4)
                                imgco4.innerHTML='moedas:'+coin4
                            } 
                            sessionStorage.setItem('coin4',coin4)
                        }, 900*index)
                    })(index)
                    
                }
            }

            if (pos4val==11 || pos4val==58) {
                if (game2==true || game1==true || game3==true || game1==true) {
                    rolada=4
                    sessionStorage.setItem("rolas?",rolada)
                    
                    window.location.assign('http://127.0.0.1:5500/upload/upload.html')
                } else {
                    game1=true
                } 
            }
            if (pos4val==32) {
                if (game2==true || game1==true || game3==true || game1==true) {
                    rolada=4
                    sessionStorage.setItem("rolas?",rolada)
                    
                    window.location.assign('http://127.0.0.1:5500/firewall/firewal.html')
                } else {
                    game2=true
                } 
            }
            if (pos4val==42) {
                if (game2==true || game1==true || game3==true || game1==true) {
                    rolada=4
                    sessionStorage.setItem("rolas?",rolada)
                    
                    window.location.assign('http://127.0.0.1:5500/gsw/gsw.html')
                } else {
                    game3=true
                } 
            }
            if (pos4val==58) {
                if (game2==true || game1==true || game3==true || game1==true) {
                    rolada=4
                    sessionStorage.setItem("rolas?",rolada)
                    
                    window.location.assign('http://127.0.0.1:5500/upload/upload.html')
                } else {
                    game1=true
                }
            }
            if (pos4val==4 || pos4val==27 || pos4val==49 || pos4val==55) {
                rolada=4
                sessionStorage.setItem("rolas?",rolada)
                
                window.location.assign('http://127.0.0.1:5500/cartinhas2/index.html')
            }
            sessionStorage.setItem('pos4',pos4val)
            if (game1==true) {
                rolada=4
                window.location.assign('http://127.0.0.1:5500/upload/upload.html')
            }
            if (game2==true) {
                rolada=4
                window.location.assign('http://127.0.0.1:5500/firewall/firewal.html')
            }
            if (game3==true) {
                rolada=4
                window.location.assign('http://127.0.0.1:5500/gsw/gsw.html')
            }
            rodada+=1
            break;
    }
    sessionStorage.setItem("rodade",rodada)
    
    if (rolada==4) {
        casas[Number(sessionStorage.getItem("pos1"))].append(p1)
        casas[Number(sessionStorage.getItem("pos2"))].append(p2)
        casas[Number(sessionStorage.getItem("pos3"))].append(p3)
        casas[Number(sessionStorage.getItem("pos4"))].append(p4)
        pos1val=Number(sessionStorage.getItem("pos1"))
        pos2val=Number(sessionStorage.getItem("pos2"))
        pos3val=Number(sessionStorage.getItem("pos3"))
        pos4val=Number(sessionStorage.getItem("pos4"))
        imgco1.innerHTML='moedas:'+sessionStorage.getItem('coin1')
        imgco2.innerHTML='moedas:'+sessionStorage.getItem('coin2')
        imgco3.innerHTML='moedas:'+sessionStorage.getItem('coin3')
        imgco4.innerHTML='moedas:'+sessionStorage.getItem('coin4') 
        coin1=Number(sessionStorage.getItem('coin1'))
        coin2=Number(sessionStorage.getItem('coin2'))
        coin3=Number(sessionStorage.getItem('coin3'))
        coin4=Number(sessionStorage.getItem('coin4'))
        rodada=Number(sessionStorage.getItem("rodade"))
        vez=Number(sessionStorage.getItem('play'))
    } 
    
    
    


    if (rodada==12) {
        if (coin1==Math.max(coin1,coin2,coin3,coin4)) {
            pri="Player 1"
            if (coin2==Math.max(coin2,coin3,coin4)) {
                seg="Player 2"
                if (coin3==Math.max(coin3,coin4)) {
                    ter="Player 3"
                    ult="Player 4"
                } else{
                    ter="Player 4"
                    ult="Player 3"
                }
            } else if (coin3==Math.max(coin2,coin3,coin4)) {
                if (coin2==Math.max(coin2,coin4)) {
                    ter="Player 2"
                    ult="Player 4"
                } else{
                    ter="Player 4"
                    ult="Player 2"
                }
            } else if ((coin4==Math.max(coin2,coin3,coin4))){
                if (coin2==Math.max(coin2,coin3)) {
                    ter="Player 2"
                    ult="Player 3"
                } else{
                    ter="Player 3"
                    ult="Player 2"
                }
            }
        } else if (coin2==Math.max(coin1,coin2,coin3,coin4)) {
            pri="Player 2"
            if (coin1==Math.max(coin1,coin3,coin4)) {
                seg="Player 1"
                if (coin3==Math.max(coin3,coin4)) {
                    ter="Player 3"
                    ult="Player 4"
                } else{
                    ter="Player 4"
                    ult="Player 3"
                }
            } else if (coin3==Math.max(coin1,coin3,coin4)) {
                seg="Player 3"
                if (coin1==Math.max(coin1,coin4)) {
                    ter="Player 1"
                    ult="Player 4"
                } else{
                    ter="Player 4"
                    ult="Player 1"
                }
            } else if ((coin4==Math.max(coin1,coin3,coin4))){
                seg="Player 4"
                if (coin1==Math.max(coin1,coin3)) {
                    ter="Player 1"
                    ult="Player 3"
                } else{
                    ter="Player 3"
                    ult="Player 1"
                }
            }
        }else if (coin3==Math.max(coin1,coin2,coin3,coin4)) {
            pri="Player 3"
            if (coin1==Math.max(coin1,coin2,coin4)) {
                seg="Player 1"
                if (coin2==Math.max(coin2,coin4)) {
                    ter="Player 2"
                    ult="Player 4"
                } else{
                    ter="Player 4"
                    ult="Player 2"
                }
            } else if (coin2==Math.max(coin1,coin2,coin4)) {
                seg="Player 2"
                if (coin1==Math.max(coin1,coin4)) {
                    
                    ter="Player 1"
                    ult="Player 4"
                } else{
                    ter="Player 4"
                    ult="Player 1"
                }
            } else if ((coin4==Math.max(coin1,coin2,coin4))){
                seg="Player 4"
                if (coin1==Math.max(coin1,coin2)) {
                    ter="Player 1"
                    ult="Player 2"
                } else{
                    ter="Player 2"
                    ult="Player 1"
                }
            }
        }else{
            pri="Player 4"
            if (coin1==Math.max(coin1,coin2,coin3)) {
                seg="Player 1"
                if (coin2==Math.max(coin2,coin3)) {
                    ter="Player 2"
                    ult="Player 3"
                } else{
                    ter="Player 3"
                    ult="Player 2"
                }
            } else if (coin2==Math.max(coin1,coin2,coin3)) {
                seg="Player 2"
                if (coin1==Math.max(coin1,coin3)) {
                    ter="Player 1"
                    ult="Player 3"
                } else{
                    ter="Player 3"
                    ult="Player 1"
                }
            } else if ((coin3==Math.max(coin1,coin2,coin3))){
                seg="Player 3"
                if (coin1==Math.max(coin1,coin2)) {
                    ter="Player 1"
                    ult="Player 2"
                } else{
                    ter="Player 2"
                    ult="Player 1"
                }
            }
        }
        
        alert(pri+" ficou em primeiro! uhuu:) "+seg+" ficou em segundo! quase:( "+ter+" ficou em teceiro que azar :| Já o"+ult+" ficou em ultimo kkkk muito ruim")
        alert("para jogar novamente feche e abra seu navegador! (Sim os desenvolvedores são imconpetentes mesmo!)")



       
    }
}