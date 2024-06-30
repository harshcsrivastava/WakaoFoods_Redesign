/* =============================Header JS================================ */
window.onload = () => {
    setInterval(autoChangeProd,3000);    
}

//>>> Left Section Button Script
let cta_btn = document.querySelector(".cta-button");
let arrowIcon = document.querySelector(".cta-arrow")

//Hover Animation
cta_btn.addEventListener("mouseover",() => {
        arrowIcon.setAttribute("src","./images/icons/arrrowWhite.svg")
    })
cta_btn.addEventListener('mouseout', () => {
    arrowIcon.setAttribute("src","./images/icons/arrowGreen.svg")
    });


//>>> Right Section Button Script
let btn = document.querySelector(".top");
let bt = document.querySelector(".bot")
let toparr = document.querySelector("#top-arrow")
let botarr = document.querySelector("#bottom-arrow")

btn.addEventListener(
    "mouseover", () => {
        toparr.setAttribute("src","./images/icons/arrrowWhite.svg")
    }
)
bt.addEventListener(
    "mouseover", () => {
        botarr.setAttribute("src","./images/icons/arrrowWhite.svg")
    }
)

btn.addEventListener('mouseout', () => {
    toparr.setAttribute("src","./images/icons/arrowGreen.svg")
  });
bt.addEventListener('mouseout', () => {
    botarr.setAttribute("src","./images/icons/arrowGreen.svg")
  });


//>>> Prod Section Button Script
let prod = document.querySelectorAll(".prod");
let prodName = document.querySelector('#prod-title')
let prodPrice = document.querySelector('#price')

let index = 0
prod.forEach((p,index) => {
    p.style.top = `${index*80}%`
});

let changeProd = () => {
    prod.forEach((p) => {
        p.style.transform = `translateY(-${index*110}%)`
    });
    async function prodData(){
        try {
            let response = await fetch('./product_details.json')
            let data = await response.json()
            console.log(`Response : ${data}`);

            prodName.innerHTML = data.name[index]
            prodPrice.innerHTML = data.price[index]
        } catch (error) {
            console.log(error);
        }
    }
    prodData()
}

toparr.addEventListener('click', () => {
    if(index === 0) return index
    index--
    changeProd()
})

botarr.addEventListener('click',() => {
    if(index === prod.length-3) return index
    index++
    changeProd()
})
let autoChangeProd = () => {
    if(index === prod.length-3) index = -1;
    index++;
    changeProd()
}

//>>> Right Nav Icons Script
let navbar = document.querySelector("nav");
let search = document.getElementById('search')
let user = document.getElementById('user')
let cart = document.getElementById('cart')

document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled")
        search.setAttribute("src","./images/icons/searchBlack.svg")
        user.setAttribute("src","./images/icons/userBlack.svg")
        cart.setAttribute("src","./images/icons/cartBlack.svg")
      } else {
        navbar.classList.remove("scrolled");
        search.setAttribute("src","./images/icons/search.svg")
        user.setAttribute("src","./images/icons/user.svg")
        cart.setAttribute("src","./images/icons/cart.svg")
      }
})

//>>> Left Nav Script
let products = document.querySelector('#products')
let media = document.querySelector('#media')
let more = document.getElementById('more')
function passNav(li){
    li.addEventListener(
        "mouseover",
        () => {
            if (window.scrollY > 0) {
                li.classList.add("nav-hover-black")
                li.classList.remove("nav-hover");             
              } else {
                li.classList.add("nav-hover")
                li.classList.remove("nav-hover-black");
              }
        }
    )
}
passNav(products)
passNav(media)
passNav(more)