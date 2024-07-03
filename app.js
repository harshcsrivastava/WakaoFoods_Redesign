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
            // console.log(`Response : ${data}`);

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

/* =================================RECIPE PAGE==================================*/
document.addEventListener('DOMContentLoaded', () => {
    // Function to handle hover effects
    function addHoverEffect(cardId, animeId, textPartId) {
        const mainDiv = document.getElementById(cardId);
        const animeDiv = document.getElementById(animeId);
        const textPartDiv = document.getElementById(textPartId);

        mainDiv.addEventListener('mouseenter', () => {
            animeDiv.style.height = '30rem';
            animeDiv.style.backgroundColor = 'var(--light-black)';
            textPartDiv.style.color = 'var(--cream)';
        });

        mainDiv.addEventListener('mouseleave', () => {
            animeDiv.style.height = '35.1rem';
            animeDiv.style.backgroundColor = 'var(--sub-main)';
            textPartDiv.style.color = 'var(--black)';
        });
    }

    // Add hover effects to each recipe card
    addHoverEffect('recipe_card1', 'anime1', 'text_part1');
    addHoverEffect('recipe_card2', 'anime2', 'text_part2');
    addHoverEffect('recipe_card3', 'anime3', 'text_part3');
    addHoverEffect('recipe_card4', 'anime4', 'text_part4');
    addHoverEffect('recipe_card5', 'anime5', 'text_part5');
});

   
/* =================================BENEFIT PAGE==================================*/
// JavaScript for image sliding animation
document.addEventListener('DOMContentLoaded', () => {
    let imageSlider = document.getElementById('ben_slider');
    let headingSlider = document.getElementById('ben_heading_slider');
    let paraSlider = document.getElementById('ben_para_slider');
    let images = document.querySelectorAll('#ben_slider img');
    let currentIndex = 0;
    let totalItems = images.length;

    // Function to update the slider position
    function updateSlider() {
        let percentage = -100 / totalItems * currentIndex;
        imageSlider.style.transform = `translateX(${percentage}%)`;
        headingSlider.style.transform = `translateX(${percentage}%)`;
        paraSlider.style.transform = `translateX(${percentage}%)`;
    }

    // Function for auto sliding
    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateSlider();
    }

    // Set interval for auto sliding every 3 seconds
    let autoSlideInterval = setInterval(autoSlide, 3000);

    // Event listeners for arrow clicks
    document.getElementById('ben_arrtop').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateSlider();
        resetInterval(); // Reset interval to avoid quick slides after manual change
    });

    document.getElementById('ben_arrbtm').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateSlider();
        resetInterval(); // Reset interval to avoid quick slides after manual change
    });

    // Function to reset the interval
    function resetInterval() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, 3000);
    }
});


/* =================================Responsive==================================*/
const nav = document.querySelector(".nav"),
//   searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

search.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  search.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  search.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});