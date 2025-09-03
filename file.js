
let currentIndex = 0;
const items = document.querySelectorAll('.bacground-img');
const totalItems = items.length;
const visibleItems = 5; 
const track = document.getElementById('karuseli');

function moveSlide(direction) {
    const maxIndex = totalItems - visibleItems;
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    track.style.transform = `translateX(-${currentIndex * 300}px)`;

   
}
