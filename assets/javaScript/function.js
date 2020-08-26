function cancel() {
    document.getElementById("addmenu-box").style.display = "none";
    document.getElementById("container").classList.remove("hide");
}
function add(){
    document.getElementById("addmenu-box").style.display = "grid";
    document.getElementById("container").classList.add("hide");
}
function checkout(){
    document.getElementById("checkout").style.display = "flex";
    document.getElementById("container").classList.add("hide");
}
function cancelCheckout(){
    document.getElementById("listorder").style.display = "none";
    document.getElementById("cartfooter").style.display = "none";
    document.getElementById("empty").style.display = "block";
}
let cart = document.querySelector('.btn')

cart.addEventListener('click',function(){
    let headCart = document.getElementById("cart-h")
    let bodyCart = document.getElementById("cart-b")

    if(headCart.style.display != "flex"){
    headCart.style.display ="flex"
    bodyCart.style.display ="grid"
    headCart.style.position ="absolute"
    bodyCart.style.position ="absolute"
    document.getElementById("container").classList.add("hide");
    } else{
        headCart.style.display ="none"
        bodyCart.style.display ="none"
        document.getElementById("container").classList.remove("hide");
    }
})

const select = () => {
    const selectCard = document.querySelectorAll('.img-card')
    let a = null
    for (let i=0; i<selectCard.length; i++){
        selectCard[i].addEventListener("click",function(){
            selectCard[i].classList.add('selected-card')
            a = true
            console.log('added checklist')
            if(a == true){
                console.log("empty = none then turn back listorder")
                document.getElementById("empty").style.display = "none";
                document.getElementById("listorder").style.display = "flex";
                document.getElementById("cartfooter").style.display = "block";
            }
        })
    }

}
let notEmpty = document.getElementById("empty").style.display;
if (notEmpty = "block") {
    const selectCard = document.querySelectorAll('.img-card')
    console.log('not empty = block')
}
select()

function removechecked() {
    const selectCard = document.querySelectorAll('.img-card')
        for (let i=0; i<selectCard.length; i++){
            console.log('checklist removed')
            selectCard[i].classList.remove('selected-card')
    }
}
const cancelcheck = document.getElementById("cancel")

cancelcheck.addEventListener('click', function(){
    console.log('cancel clicked empty = block')
    const selectCard = document.querySelectorAll('.img-card')
    document.getElementById("listorder").style.display = "none";
    document.getElementById("cartfooter").style.display = "none";
    document.getElementById("empty").style.display = "block";
    removechecked()
})




const checkoutbox = document.getElementById("checkout")
checkoutbox.addEventListener('click', function(){
    checkoutbox.style.display = "none";
document.getElementById("container").classList.remove("hide");
})



// window.onscroll = function(){
//     moveLeftbar()
// }
// const moveLeftbar = () => {
//     if (window.scrollTop > 1) {
//         let leftbar = document.querySelector('.leftbar')
//         leftbar.className = 'leftfix'
//         console.log('ok')
//     } else {
//         leftbar.className = 'leftbar'
//     }
// }

window.addEventListener('scroll', function(){
    console.log(window.scrollY)
    if (window.scrollY > 50) {
    let leftbar = document.getElementById('leftbar')
    leftbar.className = 'leftfix'
    console.log(leftbar.className)
    } else {
        leftbar.className = 'leftbar'
    }
})