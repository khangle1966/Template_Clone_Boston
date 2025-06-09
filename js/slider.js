// Chức năng Slider cho phần Hero

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 6000; // Chuyển slide sau mỗi 6 giây
    let isAutoSliding = true;
    
    // Khởi tạo slider
    function startSlideShow() {
        if (isAutoSliding) {
            slideInterval = setInterval(nextSlide, intervalTime);
        }
    }
    
    // Đặt lại bộ đếm thời gian khi chuyển slide thủ công
    function resetInterval() {
        if (isAutoSliding) {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
        }
    }
    
    // Chuyển đến slide tiếp theo
    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }
    
    // Chuyển đến slide trước đó
    function prevSlide() {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    }
    
    // Chuyển đến slide được chỉ định
    function goToSlide(slideIndex) {
        // Ẩn slide hiện tại
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        // Cập nhật slide hiện tại
        currentSlide = slideIndex;
        
        // Hiển thị slide mới
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Thêm mũi tên điều hướng vào slider
    function addNavArrows() {
        const slider = document.querySelector('.slider');
        
        // Tạo mũi tên trước
        const prevArrow = document.createElement('button');
        prevArrow.className = 'slider-arrow prev-arrow';
        prevArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevArrow.addEventListener('click', function() {
            prevSlide();
            resetInterval();
        });
        
        // Tạo mũi tên sau
        const nextArrow = document.createElement('button');
        nextArrow.className = 'slider-arrow next-arrow';
        nextArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextArrow.addEventListener('click', function() {
            nextSlide();
            resetInterval();
        });
        
        // Thêm mũi tên vào slider
        slider.appendChild(prevArrow);
        slider.appendChild(nextArrow);
        
        // Thêm style vào phần head của document
        const style = document.createElement('style');
        style.textContent = `
            .slider-arrow {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 100;
                background-color: rgba(255, 255, 255, 0.2);
                color: white;
                border: none;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                font-size: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }
            
            .slider-arrow:hover {
                background-color: rgba(255, 255, 255, 0.4);
            }
            
            .prev-arrow {
                left: 20px;
            }
            
            .next-arrow {
                right: 20px;
            }
            
            @media (max-width: 640px) {
                .slider-arrow {
                    width: 40px;
                    height: 40px;
                    font-size: 16px;
                }
                
                .prev-arrow {
                    left: 10px;
                }
                
                .next-arrow {
                    right: 10px;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Click vào dots để chuyển slide
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            goToSlide(slideIndex);
            resetInterval();
        });
    });
    
    // Tạm dừng tự động chạy khi di chuột vào slider
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', function() {
        if (isAutoSliding) {
            clearInterval(slideInterval);
        }
    });
    
    slider.addEventListener('mouseleave', function() {
        if (isAutoSliding) {
            slideInterval = setInterval(nextSlide, intervalTime);
        }
    });
    
    // Thêm điều hướng bằng bàn phím
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            resetInterval();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            resetInterval();
        }
    });
    
    // Thêm hỗ trợ vuốt cho thiết bị cảm ứng
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    slider.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const threshold = 50; // Khoảng cách tối thiểu để đăng ký là vuốt
        
        if (touchEndX < touchStartX - threshold) {
            // Vuốt sang trái, chuyển đến slide tiếp theo
            nextSlide();
            resetInterval();
        } else if (touchEndX > touchStartX + threshold) {
            // Vuốt sang phải, chuyển đến slide trước đó
            prevSlide();
            resetInterval();
        }
    }
    
    // Khởi tạo
    addNavArrows();
    startSlideShow();
}); 