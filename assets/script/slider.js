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

const arrowNext = document.querySelector( ".arrow-next svg" );

const arrowPrev = document.querySelector( ".arrow-prev svg" );



// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

let midSlide = slides.length - 2;

//TODO Sort out arrows so they fade on first/last slide
//TODO Bring if/else statement out of event listener? Into function of its own (that is called when page is in view?)?

//TODO Make slide 2 appear at right edge to give impression of carousel
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
    slides.forEach( ( slide, indx ) =>
    {
        slide.style.transform = `translateX(${ 100 * ( indx - curSlide ) }%)`;
    } );

    // if ( curSlide === maxSlide )
    // {
    //     arrowNext.style.opacity = `0.2`;
    // }
    // else
    // {
    //     arrowNext.style.opacity = `1`;
    // }
} );

// select prev slide button
const prevSlide = document.querySelector( ".arrow-prev" );

// add event listener and navigation functionality
prevSlide.addEventListener( "click", function ()
{
    // check if current slide is the first
    // if so, set previous to last slide
    if ( curSlide === 0 )
    {
        curSlide = maxSlide;

        // if not, go to previous slide
    } else
    {
        curSlide--;
    }

    //   move slide by 100%
    slides.forEach( ( slide, index ) =>
    {
        slide.style.transform = `translateX(${ 100 * ( index - curSlide ) }%)`;
    } );
    // if ( curSlide === 0 )
    // {
    //     arrowPrev.style.opacity = `0.2`;
    // }
    // else
    // {
    //     arrowPrev.style.opacity = `1`;
    // }

} );


// Intersection observer (something happens when an element scrolls into view)

// Grab all of the elements that you wish to play with

   
console.log(slides);
console.log(arrowNext);
console.log(arrowPrev);

//    loop through each element and add the “loadin” class.

slides.forEach((slide) => {
console.log(slide);
slide.classList.add('loadin');
});

// let curSlide = 0;

// let maxSlide = slides.length - 1;

// let midSlide = slides.length - 2;

const slide1 = document.querySelector('.slide-1');

const slide2 = document.querySelector('.slide-2');

const slide3 = document.querySelector('.slide-3');

console.log(slide1, slide2, slide3);

// if ( curSlide === maxSlide )
// {
//     curSlide = 0;

//     // if not, go to next slide
// } else
// {
//     curSlide++;
// }

// if ( curSlide === maxSlide )
// {
//     arrowNext.style.opacity = `0.2`;
// }
// else
// {
//     arrowNext.style.opacity = `1`;
//    }


//    set up the Intersection Observer API

const observerOptions = {
    root: null, // viewport is root element
    rootMargin: '0px',
    threshold: 0.5, // how much of target object needs to appear in viewport to register
   };

// function that we will pass as a callback to the intersection instance. We are adding the class as soon as the element enters the viewport.

function observerCallback(entries) {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      entry.target.classList.add('loaded');
      fadeArrow(entry.target);
    //   arrowNext.classList.add('pale');
     } else {
        entry.target.classList.remove("loaded");
        revertArrow(entry.target);
        // arrowNext.classList.remove('pale');
      }
    });
  }

// create a new instance of the API. Apply callback function using options set above.

const observer = new IntersectionObserver(observerCallback, observerOptions);

observer.observe(slide1);
observer.observe(slide3);


  
function fadeArrow(el) {
if (el === slide3) {
    arrowNext.classList.add('pale');
}
if (el === slide1) {
    arrowPrev.classList.add('pale');
}
}

function revertArrow(el) {
if (el === slide3) {
    arrowNext.classList.remove('pale');
}
if (el === slide1) {
    arrowPrev.classList.remove('pale');
}
}
  


