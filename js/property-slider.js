// Property Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Lấy các phần tử cần thiết
    const sliderTrack = document.querySelector('.property-slider-track');
    const prevButton = document.querySelector('.prev-property');
    const nextButton = document.querySelector('.next-property');
    const cards = document.querySelectorAll('.property-slider-track .property-card');
    
    // Số lượng card hiển thị cùng lúc (phụ thuộc vào kích thước màn hình)
    let cardsPerView = getCardsPerView();
    
    // Vị trí hiện tại của slider (index của card đầu tiên được hiển thị)
    let currentIndex = 0;
    
    // Tổng số cards
    const totalCards = cards.length;
    
    // Số lượng dots cần hiển thị (totalCards - cardsPerView + 1)
    const totalDots = totalCards - cardsPerView + 1;
    
    // Đảm bảo số lượng dots bằng với số lượng nhóm cards có thể hiển thị
    function updatePaginationDots() {
        const dotsContainer = document.querySelector('.pagination-dots-container');
        if (dotsContainer) {
            // Xóa tất cả dots hiện tại
            dotsContainer.innerHTML = '';
            
            // Thêm dots mới tương ứng với số lượng nhóm cards có thể hiển thị
            for (let i = 0; i < totalDots; i++) {
                const dot = document.createElement('span');
                dot.className = 'property-pagination-dot';
                if (i === 0) dot.classList.add('active');
                dot.setAttribute('data-slide', i);
                dot.addEventListener('click', function() {
                    goToCard(i);
                });
                dotsContainer.appendChild(dot);
            }
        }
    }
    
    // Gọi function để cập nhật pagination dots khi trang được tải
    updatePaginationDots();
    
    // Cập nhật số lượng card hiển thị khi thay đổi kích thước màn hình
    window.addEventListener('resize', function() {
        cardsPerView = getCardsPerView();
        goToCard(currentIndex); // Cập nhật lại vị trí hiện tại
    });
    
    // Xác định số lượng card hiển thị dựa trên kích thước màn hình
    function getCardsPerView() {
        if (window.innerWidth >= 1024) {
            return 3; // Desktop: hiển thị 3 cards
        } else if (window.innerWidth >= 768) {
            return 2; // Tablet: hiển thị 2 cards
        } else {
            return 1; // Mobile: hiển thị 1 card
        }
    }
    
    // Hàm di chuyển đến card cụ thể
    function goToCard(cardIndex) {
        // Đảm bảo cardIndex nằm trong phạm vi hợp lệ
        if (cardIndex < 0) {
            cardIndex = 0;
        } else if (cardIndex > totalDots - 1) {
            cardIndex = totalDots - 1;
        }
        
        // Cập nhật vị trí hiện tại
        currentIndex = cardIndex;
        
        // Tính toán khoảng cách cần dịch chuyển
        const cardWidth = cards[0].offsetWidth;
        const translateX = -cardIndex * cardWidth;
        
        // Di chuyển slider track
        sliderTrack.style.transform = `translateX(${translateX}px)`;
        
        // Lấy danh sách pagination dots mới (có thể đã được cập nhật)
        const paginationDots = document.querySelectorAll('.property-pagination-dot');
        
        // Cập nhật trạng thái active cho pagination dots
        paginationDots.forEach((dot, index) => {
            if (index === cardIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Xử lý sự kiện click cho nút Previous
    prevButton.addEventListener('click', function() {
        goToCard(currentIndex - 1);
    });
    
    // Xử lý sự kiện click cho nút Next
    nextButton.addEventListener('click', function() {
        goToCard(currentIndex + 1);
    });
    
    // Thêm chức năng swipe cho thiết bị di động
    let touchStartX = 0;
    let touchEndX = 0;
    
    const sliderContainer = document.querySelector('.property-slider-container');
    
    sliderContainer.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    sliderContainer.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        const swipeThreshold = 50; // Ngưỡng để xác định swipe
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left -> next card
            goToCard(currentIndex + 1);
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right -> previous card
            goToCard(currentIndex - 1);
        }
    }
    
    // In a real implementation, we would have functions to:
    // 1. Load property data from API
    // 2. Render property cards based on the current page
    // 3. Handle animations for page transitions
    // For this demo, we're just updating the pagination dots
}); 