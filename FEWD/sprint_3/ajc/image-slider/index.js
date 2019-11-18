$(document).ready(function() {
  const LEFT = 'left';
  const RIGHT = 'right';
  let result = [];
  let slideIndex = 0;

  // Cache the dom elems
  const sliderEl = $('#slider');
  const thumbnailsEl = $('#thumbnails');
  const navLeft = $('.nav-left');
  const navRight = $('.nav-right');

  // Function to slide on thumbnail click
  const onThumbnailClick = (evt) => {
    evt.stopPropagation();
    
    slideIndex = $(evt.target).parent().attr('data-id');
    
    $('.slide').removeClass('active-slide');
    $('.thumbnail').removeClass('active-thumbnail');

    $('.slide[data-id="' + slideIndex + '"').addClass('active-slide');
    $('.thumbnail[data-id="' + slideIndex + '"').addClass('active-thumbnail');
  };

  // Function to slide the image
  const onSlide = (dir) => {
    const slideCount = result.length - 1;
    $('.slide').removeClass('active-slide');
    $('.thumbnail').removeClass('active-thumbnail');

    if (dir === LEFT) {
      slideIndex = slideIndex === 0 ? slideCount : slideIndex - 1;
    } else {
      slideIndex = slideIndex === slideCount ? 0 : slideIndex + 1;
    }

    $('.slide[data-id="' + slideIndex + '"').addClass('active-slide');
    $('.thumbnail[data-id="' + slideIndex + '"').addClass('active-thumbnail');
  };

  // HTML template for single slides
  const getSlideElem = (src, title, id, className) => {
    return (
      '<li class="' + className + '" data-id="' + id + '"><img src="' + src + '" alt="' + title + '" /></li>'
    );
  };

  // Render the image slider
  const renderSlider = (response) => {
    result = response.length > 5 ? response.slice(0, 5) : [...response];
    
    _.forEach(result, (slide, index) => {
      const { url, title, thumbnailUrl } = slide;
      
      sliderEl.append(getSlideElem(url, title, index, 'slide'));
      thumbnailsEl.append(getSlideElem(thumbnailUrl, title, index, 'thumbnail'));
    });

    $('.slide').first().addClass('active-slide');
    $('.thumbnail').first().addClass('active-thumbnail');

    $('#thumbnails').on('click', '.thumbnail', onThumbnailClick);
  };

  // Get the data to render quiz questions
  const init = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(renderSlider);
  };

  // Bind events
  navLeft.on('click', () => onSlide(LEFT));
  navRight.on('click', () => onSlide(RIGHT));
  $(document).keydown(function(evt) {
    if (evt.which == 37) {
      // Left arrow key pressed
      onSlide(LEFT);
    } else if (evt.which == 39) {
      // Right arrow key pressed
      onSlide(RIGHT);
    }
  });

  // Initialize the slider
  init();
});