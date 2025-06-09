# Boston WP Residence Template

A modern real estate website template built with HTML, Tailwind CSS, and JavaScript, inspired by professional real estate platforms.

## Features

- Responsive design that works on all devices
- Modern and clean interface
- Mobile navigation with dropdown menus
- Smooth animations and transitions
- Interactive property listings with filtering options
- Property sliders with pagination
- Featured neighborhoods section
- Testimonials from satisfied clients
- Contact form for inquiries
- Pure Tailwind CSS implementation (no Bootstrap or custom CSS files)

## Technologies Used

- HTML5
- Tailwind CSS (exclusively)
- JavaScript (Vanilla JS)
- Google Fonts (Playfair Display and Roboto)
- Font Awesome icons

## Project Structure

```
boston.wpresidence.net/
├── css/
│   └── styles.css         # Legacy CSS styles (minimal usage)
├── js/
│   ├── mobile-menu.js     # JavaScript for mobile menu functionality
│   ├── slider.js          # Hero section slider functionality
│   ├── property-slider.js # Property cards slider functionality
│   └── listings-slider.js # Featured listings slider functionality
├── images/                # Images and logos
│   ├── properties/        # Property listing images
│   ├── testimonials/      # Client testimonial photos
│   ├── agent/             # Real estate agent photos
│   └── boston/            # Boston neighborhood images
├── index.html             # Main HTML file with inline Tailwind classes
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md              # Project documentation
```

## Implementation Details

- The template is built using Tailwind CSS utility classes for consistent styling
- Custom styles are minimal and only included inline in the HTML `<style>` tag
- Mobile responsiveness is achieved using Tailwind's responsive prefixes (sm, md, lg, etc.)
- Dropdown menus are implemented using Tailwind's group hover functionality
- The mobile menu is toggled using vanilla JavaScript
- Property sliders use custom JavaScript for smooth transitions
- Responsive padding is implemented using custom media queries

## Key Sections

1. **Header** - Navigation menu with dropdown options
2. **Hero Section** - Full-width slider with call-to-action
3. **Real Estate Services** - Highlighting the agent and services offered
4. **Latest Properties** - Interactive property cards with filtering
5. **Featured Neighborhoods** - Grid layout showcasing Boston neighborhoods
6. **Service Cards** - Detailed services with icons
7. **Featured Listings** - Horizontal slider of property listings
8. **Testimonials** - Client reviews and ratings
9. **Contact Form** - Inquiry form with agent image
10. **Footer** - Company information, links, and contact details

## Getting Started

1. Download or fork this repository
2. Open `index.html` in your browser to view the template
3. Modify the content as needed for your project

## Customization

The template can be easily customized by:

- Changing the color scheme in the HTML file
- Replacing images in the images directory
- Modifying property listings and details
- Updating contact information and form fields
- Adding additional sections as needed

## Browser Support

This template is compatible with all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge 