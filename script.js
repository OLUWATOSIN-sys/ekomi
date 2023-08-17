const sticker = document.querySelector('.widget-sticker')
const popup = document.querySelector('.widget-popup')
const closePop = document.querySelector('.pop-close')
const star = document.querySelectorAll('.star')

sticker.addEventListener('click', () => {
    if (popup.style.display == 'flex') {
        popup.style.display = 'none'
    } else {
        popup.style.display = 'flex'
    }
})

closePop.addEventListener('click', () => {
    popup.style.display = 'none'
})


const ratingStars = [...document.getElementsByClassName("rating__star")];
const ratingResult = document.querySelector(".rating__result");

// printRatingResult(ratingResult);

function executeRating(stars, result) {
   const starClassActive = "rating__star fas fa-star";
   const starClassUnactive = "rating__star far fa-star";
   const starsLength = stars.length;
   let i;
   stars.map((star) => {
      star.onclick = () => {
         i = stars.indexOf(star);

         if (star.className.indexOf(starClassUnactive) !== -1) {
            // printRatingResult(result, i + 1);
            for (i; i >= 0; --i) stars[i].className = starClassActive;
         } else {
            printRatingResult(result, i);
            for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
         }
      };
   });
}

function printRatingResult(result, num = 0) {
   result.textContent = `${num}/5`;
}

executeRating(ratingStars, ratingResult);


