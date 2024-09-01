addEventListener('keypress',function nomezin(event) {
    if (event.key === 'a'){
        coin1=Number(sessionStorage.getItem('coin1'))
        coin2=Number(sessionStorage.getItem('coin2'))
        coin3=Number(sessionStorage.getItem('coin3'))
        coin4=Number(sessionStorage.getItem('coin4'))
        uploads= document.getElementsByClassName("up")
        if (upvel1>=10){
            
        }else if (up1>=1250) {
            console.log(first)
            if (first==null) {
                first=1
                ouro1.style.display="block"
                coin1+=20
            } else if (second==null && first!=1){
                second=1
                prata1.style.display="block"
                coin1+=10
            } else if (thrid==null && first!=1 && second!=1){
                thrid=1
                bronze1.style.display="block"
                if (second!=2 && first!=2) {
                    nointhernet2.style.display="block"
                    coin2-=10
                } else if (second!=3 && first!=3){
                    nointhernet3.style.display="block"
                    coin3-=10
                }else if (second!=4 && first!=4){
                    nointhernet4.style.display="block"
                    coin4-=10
                }
                window.location.assign('http://127.0.0.1:5500/jogo_lpc_versaofinal/tabuleiro.html')
            }
        }else{
            upvel1+=2
            
        }
        
        up1+=upvel1
        sessionStorage.setItem('coin1',coin1)
        sessionStorage.setItem('coin2',coin2)
        sessionStorage.setItem('coin3',coin3)
        sessionStorage.setItem('coin4',coin4)
    }
    if (event.key === 'c'){
        coin1=Number(sessionStorage.getItem('coin1'))
        coin2=Number(sessionStorage.getItem('coin2'))
        coin3=Number(sessionStorage.getItem('coin3'))
        coin4=Number(sessionStorage.getItem('coin4'))
        uploads= document.getElementsByClassName("up")
        if (upvel2>=10){
            
        }else if (up2>=1250) {
            if (first==null) {
                first=2
                ouro2.style.display="block"
                coin2+=20
            } else if (second==null && first!=2){
                second=2
                prata2.style.display="block"
                coin2+=10
            } else if (thrid==null && first!=2 && second!=2){
                thrid=2
                bronze2.style.display="block"
                if (second!=1 && first!=1) {
                    nointhernet1.style.display="block"
                    coin1-=10
                } else if (second!=3 && first!=3){
                    nointhernet3.style.display="block"
                    coin3-=10
                }else if (second!=4 && first!=4){
                    nointhernet4.style.display="block"
                    coin4-=10
                }
                window.location.assign('http://127.0.0.1:5500/jogo_lpc_versaofinal/tabuleiro.html')
            }
        }else{
            upvel2+=2
            
        }
        
        up2+=upvel2
        sessionStorage.setItem('coin1',coin1)
        sessionStorage.setItem('coin2',coin2)
        sessionStorage.setItem('coin3',coin3)
        sessionStorage.setItem('coin4',coin4)
    }
    if (event.key === 'm'){
        coin1=Number(sessionStorage.getItem('coin1'))
        coin2=Number(sessionStorage.getItem('coin2'))
        coin3=Number(sessionStorage.getItem('coin3'))
        coin4=Number(sessionStorage.getItem('coin4'))
        uploads= document.getElementsByClassName("up")
        if (upvel3>=10){
            
        }else if (up3>=1250) {
            if (first==null) {
                first=3
                ouro3.style.display="block"
                coin3+=20
            } else if (second==null && first!=3){
                second=3
                prata3.style.display="block"
                coin3+=10
            } else if (thrid==null && first!=3 && second!=3){
                thrid=3
                bronze3.style.display="block"
                if (second!=1 && first!=1) {
                    nointhernet1.style.display="block"
                    coin1-=10
                } else if (second!=2 && first!=2){
                    nointhernet2.style.display="block"
                    coin2-=10
                }else if (second!=4 && first!=4){
                    nointhernet4.style.display="block"
                    coin4-=10
                }
                window.location.assign('http://127.0.0.1:5500/jogo_lpc_versaofinal/tabuleiro.html')
            }
        }else{
            upvel3+=2
            
        }
        up3+=upvel3
        sessionStorage.setItem('coin1',coin1)
        sessionStorage.setItem('coin2',coin2)
        sessionStorage.setItem('coin3',coin3)
        sessionStorage.setItem('coin4',coin4)
    }
    if (event.key === 'p'){
        coin1=Number(sessionStorage.getItem('coin1'))
        coin2=Number(sessionStorage.getItem('coin2'))
        coin3=Number(sessionStorage.getItem('coin3'))
        coin4=Number(sessionStorage.getItem('coin4'))
        uploads= document.getElementsByClassName("up")
        if (upvel4>=10){
            
        }else if (up4>=1250) {
            if (first==null) {
                first=4
                ouro4.style.display="block"
                coin4+=20
            } else if (second==null && first!=4){
                second=4
                prata4.style.display="block"
                coin4+=10
            } else if (thrid==null && first!=4 && second!=4){
                thrid=4
                bronze4.style.display="block"
                if (second!=1 && first!=1) {
                    nointhernet1.style.display="block"
                    coi
                } else if (second!=3 && first!=3){
                    nointhernet3.style.display="block"
                }else if (second!=2 && first!=2){
                    nointhernet2.style.display="block"
                }
                window.location.assign('http://127.0.0.1:5500/jogo_lpc_versaofinal/tabuleiro.html')
            }
        }else{
            upvel4+=2
            
        }
        up4+=upvel4
        sessionStorage.setItem('coin1',coin1)
        sessionStorage.setItem('coin2',coin2)
        sessionStorage.setItem('coin3',coin3)
        sessionStorage.setItem('coin4',coin4)
    }
})
setInterval(diminuicao,500)
let ouro1 = document.getElementById('ou1')
let ouro2 = document.getElementById('ou2')
let ouro3 = document.getElementById('ou3')
let ouro4 = document.getElementById('ou4')
let prata1 = document.getElementById('pt1')
let prata2 = document.getElementById('pt2')
let prata3 = document.getElementById('pt3')
let prata4 = document.getElementById('pt4')
let bronze1= document.getElementById('bz1')
let bronze2= document.getElementById('bz2')
let bronze3= document.getElementById('bz3')
let bronze4= document.getElementById('bz4')
let nointhernet1= document.getElementById('ni1')
let nointhernet2= document.getElementById('ni2')
let nointhernet3= document.getElementById('ni3')
let nointhernet4= document.getElementById('ni4')
let uploads= document.getElementsByClassName("up")
let upvel1=0,upvel2=0,upvel3=0,upvel4=0
let up1=0,up2=0,up3=0,up4=0
let first,second,thrid,fourth
let coin1,coin2,coin3,coin4
function diminuicao() {
    if (upvel1<=0) {
        
    } else {
        upvel1-=2  
    }
    if (upvel2<=0) {
        
    } else {
        upvel2-=2  
    }
    if (upvel3<=0) {
        
    } else {
        upvel3-=2  
    }
    if (upvel4<=0) {
        
    } else {
        upvel4-=2  
    }
    



    for (let index = 0; index < uploads.length; index++) {
        switch (index) {
            case 0:
                if (up1>=1250){

                }else{
                    uploads[0].style.width=up1+"px"
                }
                
                break;
        
            case 1:
                if (up2>=1250){

                }else{
                    uploads[1].style.width=up2+"px"
                }
                break;
            case 2:
                if (up3>=1250){

                }else{
                    uploads[2].style.width=up3+"px"
                }
                break;
            case 3:
                if (up4>=1250){

                }else{
                    uploads[3].style.width=up4+"px"
                }
                break;
        }
        
        
    }
}
