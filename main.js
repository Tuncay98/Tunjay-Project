const scroll = document.querySelector(".scroll");
var isDown = false;
var scrollX;
var scrollLeft;

// Mouse Up Function
scroll.addEventListener("mouseup", () => {
	isDown = false;
	scroll.classList.remove("active");
});

// Mouse Leave Function
scroll.addEventListener("mouseleave", () => {
	isDown = false;
	scroll.classList.remove("active");
});

// Mouse Down Function
scroll.addEventListener("mousedown", (e) => {
	e.preventDefault();
	isDown = true;
	scroll.classList.add("active");
	scrollX = e.pageX - scroll.offsetLeft;
	scrollLeft = scroll.scrollLeft;
});

// Mouse Move Function
scroll.addEventListener("mousemove", (e) => {
	if (!isDown) return;
	e.preventDefault();
	var element = e.pageX - scroll.offsetLeft;
	var scrolling = (element - scrollX) * 2;
	scroll.scrollLeft = scrollLeft - scrolling;
});




// Responsive

$(document).ready(function() {
  const productContainer = $(".product-container");
  const scrollLeftButton = $("#scroll-left-button");
  const scrollRightButton = $("#scroll-right-button");

  // Calculate the maximum scroll distance
  const maxScroll = productContainer[0].scrollWidth - productContainer.width();

  // Hide/show scroll buttons based on scroll position
  productContainer.on("scroll", function() {
    if (productContainer.scrollLeft() === 0) {
      scrollLeftButton.hide();
    } else {
      scrollLeftButton.show();
    }

    if (productContainer.scrollLeft() >= maxScroll) {
      scrollRightButton.hide();
    } else {
      scrollRightButton.show();
    }
  });

  // Handle left scroll button click
  scrollLeftButton.on("click", function() {
    productContainer.animate({ scrollLeft: "-=200" }, "fast");
  });

  // Handle right scroll button click
  scrollRightButton.on("click", function() {
    productContainer.animate({ scrollLeft: "+=200" }, "fast");
  });
});


  // JavaScript code for quantity counter

  
