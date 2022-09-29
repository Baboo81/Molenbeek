// Select all slides
const slides = document.querySelectorAll( ".slide" );

console.log( slides );

//grab an array (NodeList) of all our slides and set their respective translateX property to 100 percent multiplied by each slide’s index in the array.

// loop through slides and set each slides translateX property to index * 100% (0, 100, 200) - will make last two slides overflow horizontally to right of slider

slides.forEach( ( slide, index ) =>
{
    slide.style.transform = `translateX(${ index * 100 }%)`;
} );

// select next slide arrow
const nextSlide = document.querySelector( ".arrow-next" );

console.log( nextSlide );

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener to next button
nextSlide.addEventListener( "click", function ()
{
    // check if current slide is the last
    // if it is go back to first slide
    if ( curSlide === maxSlide )
    {
        curSlide = 0;
        // if not, go to next slide
    } else
    {
        curSlide++;
    }

//   move slide by -100%
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

