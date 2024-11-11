var btnPlus = document.querySelectorAll('.btnPlus')
var btnMoins = document.querySelectorAll('.btnMoins')
var fatrash = document.querySelectorAll('.fa-trash')
var faheart = document.querySelectorAll('.fa-heart')
// var fatrash = document.getElementsByClassName('fa-trash')
console.log(fatrash)

for (let i = 0; i < btnPlus.length; i++) {
    
    btnPlus[i].addEventListener('click',function(){
        btnPlus[i].previousElementSibling.innerText++
        SommeTotal()
    })
}

for (let i = 0; i < btnMoins.length; i++) {

    btnMoins[i].addEventListener('click',function(){
        if (btnMoins[i].nextElementSibling.innerText>0) {
            btnMoins[i].nextElementSibling.innerText--
            SommeTotal()
        }
    })    
}


for (let i = 0; i < fatrash.length; i++) {

    fatrash[i].addEventListener('click',function(){
        fatrash[i].parentElement.remove()
        SommeTotal()
        console.log(fatrash)
    })
    
}

for (let i = 0; i < faheart.length; i++) {
    
    faheart[i].addEventListener('click',function(){
        faheart[i].classList.toggle('layka')
    })
    
}


function SommeTotal(){

    var price = document.querySelectorAll('.price')
    var qte = document.querySelectorAll('.qte')
    var total = document.querySelector('#total')
    var stal = 0
    
    for (let i = 0; i < price.length; i++) {
        
        stal = stal + price[i].innerText * qte[i].innerText
        
    }

    total.innerText = stal
}