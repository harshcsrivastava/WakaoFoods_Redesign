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

// document.addEventListener('DOMContentLoaded', () => {
//     const recipeContainer = document.querySelector('#recipe_card');
//     const recipes = document.querySelectorAll('#recipe_allcard');

//     let isDown = false;
//     let startX;
//     let scrollLeft;

//     recipeContainer.addEventListener('mousedown', (e) => {
//         isDown = true;
//         recipeContainer.classList.add('active');
//         startX = e.pageX - recipeContainer.offsetLeft;
//         scrollLeft = recipeContainer.scrollLeft;
//     });

//     recipeContainer.addEventListener('mouseleave', () => {
//         isDown = false;
//         recipeContainer.classList.remove('active');
//     });

//     recipeContainer.addEventListener('mouseup', () => {
//         isDown = false;
//         recipeContainer.classList.remove('active');
//     });

//     recipeContainer.addEventListener('mousemove', (e) => {
//         if (!isDown) return;
//         e.prevent
//     });   
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


