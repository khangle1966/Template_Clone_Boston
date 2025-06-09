// Chức năng Menu Di động cho Boston WP Residence

document.addEventListener('DOMContentLoaded', function() {
    // Lấy nút menu di động và phần tử menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
    const header = document.querySelector('header');
    
    // Chuyển đổi menu di động
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Chuyển đổi biểu tượng menu giữa hamburger và đóng
            const svg = this.querySelector('svg');
            if (svg) {
                if (mobileMenu.classList.contains('hidden')) {
                    svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                } else {
                    svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
                }
            }
        });
    }
    
    // Xử lý các dropdown trên mobile
    mobileDropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.mobile-dropdown-toggle');
        const content = dropdown.querySelector('.mobile-submenu');
        
        if (button && content) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Đóng các dropdown khác
                mobileDropdowns.forEach(other => {
                    if (other !== dropdown && !other.querySelector('.mobile-submenu').classList.contains('hidden')) {
                        other.querySelector('.mobile-submenu').classList.add('hidden');
                        
                        // Đặt lại biểu tượng mũi tên
                        const otherSvg = other.querySelector('.dropdown-icon');
                        if (otherSvg) {
                            otherSvg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>';
                        }
                    }
                });
                
                // Chuyển đổi dropdown hiện tại
                content.classList.toggle('hidden');
                
                // Chuyển đổi biểu tượng mũi tên
                const svg = this.querySelector('.dropdown-icon');
                if (svg) {
                    if (content.classList.contains('hidden')) {
                        svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>';
                    } else {
                        svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>';
                    }
                }
            });
        }
    });
    
    // Đóng menu di động khi click bên ngoài
    document.addEventListener('click', function(event) {
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                
                // Đặt lại biểu tượng menu
                const svg = mobileMenuButton.querySelector('svg');
                if (svg) {
                    svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                }
                
                // Đóng tất cả các dropdown
                mobileDropdowns.forEach(dropdown => {
                    const content = dropdown.querySelector('.mobile-submenu');
                    if (content) content.classList.add('hidden');
                    
                    // Đặt lại biểu tượng mũi tên
                    const svg = dropdown.querySelector('.dropdown-icon');
                    if (svg) {
                        svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>';
                    }
                });
            }
        }
    });
    
    // Thêm bóng header khi cuộn
    if (header) {
        // Thêm bóng ngay lập tức nếu trang đã được cuộn khi tải
        if (window.scrollY > 10) {
            header.classList.add('shadow-header');
        }
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 10) {
                header.classList.add('shadow-header');
            } else {
                header.classList.remove('shadow-header');
            }
        });
    }
    
    // Xử lý hiệu ứng hover cho submenu desktop để định vị
    const menuItems = document.querySelectorAll('.group');
    menuItems.forEach(item => {
        const submenu = item.querySelector('ul');
        if (submenu) {
            item.addEventListener('mouseenter', function() {
                const rect = submenu.getBoundingClientRect();
                if (rect.right > window.innerWidth) {
                    submenu.classList.add('right-0');
                    submenu.classList.remove('left-0');
                }
            });
        }
    });
});

// Đóng menu di động khi thay đổi kích thước cửa sổ (nếu width >= 1024px)
window.addEventListener('resize', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    
    if (mobileMenu && window.innerWidth >= 1024) {
        mobileMenu.classList.add('hidden');
        
        // Đặt lại biểu tượng menu
        if (mobileMenuButton) {
            const svg = mobileMenuButton.querySelector('svg');
            if (svg) {
                svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            }
        }
        
        // Đóng tất cả các dropdown trên mobile
        const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
        mobileDropdowns.forEach(dropdown => {
            const content = dropdown.querySelector('.mobile-submenu');
            if (content) content.classList.add('hidden');
            
            // Đặt lại biểu tượng mũi tên
            const svg = dropdown.querySelector('.dropdown-icon');
            if (svg) {
                svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>';
            }
        });
    }
}); 