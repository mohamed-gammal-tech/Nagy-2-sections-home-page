function scrollCarousel(direction) {
  const container = document.getElementById("carouselContainer");
  // Check if the screen width is less than or equal to 600px, which is the breakpoint for phones
  const screenWidth = window.innerWidth;
  const visibleCards = screenWidth <= 600 ? 2 : 4; // 2 cards for phone view, 4 for normal view

  // Calculate the card width based on the number of visible cards
  const cardWidth = container.offsetWidth / visibleCards;

  // Adjust the scrollLeft property of the container
  container.scrollLeft += cardWidth * direction;
}
