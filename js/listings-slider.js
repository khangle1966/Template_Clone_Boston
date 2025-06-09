document.addEventListener('DOMContentLoaded', function() {
    const listingsTrack = document.querySelector('.listings-track');
    const prevButton = document.querySelector('.prev-listing');
    const nextButton = document.querySelector('.next-listing');
    const listingCards = document.querySelectorAll('.listing-card');
    
    if (!listingsTrack || !prevButton || !nextButton || listingCards.length === 0) return;
    
    let currentPosition = 0;
    const cardWidth = listingCards[0].offsetWidth + 24; // Card width + gap
    const visibleCards = Math.floor(listingsTrack.offsetWidth / cardWidth);
    const maxPosition = listingCards.length - visibleCards;
    
    // Update the slider position
    function updateSliderPosition() {
        listingsTrack.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
    }
    
    // Handle next button click
    nextButton.addEventListener('click', function() {
        if (currentPosition < maxPosition) {
            currentPosition++;
            updateSliderPosition();
        } else {
            // Loop back to the beginning
            currentPosition = 0;
            updateSliderPosition();
        }
    });
    
    // Handle previous button click
    prevButton.addEventListener('click', function() {
        if (currentPosition > 0) {
            currentPosition--;
            updateSliderPosition();
        } else {
            // Loop to the end
            currentPosition = maxPosition;
            updateSliderPosition();
        }
    });
    
    // Responsive adjustment
    function updateSliderLayout() {
        const newVisibleCards = Math.floor(listingsTrack.offsetWidth / (listingCards[0].offsetWidth + 24));
        const newMaxPosition = Math.max(0, listingCards.length - newVisibleCards);
        
        if (currentPosition > newMaxPosition) {
            currentPosition = newMaxPosition;
            updateSliderPosition();
        }
    }
    
    // Update on window resize
    window.addEventListener('resize', updateSliderLayout);
    
    // Initialize
    updateSliderLayout();
}); 