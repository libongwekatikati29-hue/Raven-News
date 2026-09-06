# Raven News 📰

## Mission
**"News is scattered. We organise it."**

Raven is a clean, modern mobile-first news platform designed to bring clarity and organization to local news and public information. Our goal is to make important news accessible, easy to navigate, and trustworthy.

## Features

✨ **What Raven Offers:**

- **Mobile-First Design** - Optimized for phones, tablets, and desktops
- **Clean & Modern Interface** - Professional, minimal design focused on readability
- **Category Filtering** - Organized by Water, Infrastructure, Government, Business, and Development
- **Search Functionality** - Quickly find stories by keywords
- **Latest News Section** - Stay updated with the most recent information
- **Responsive Layout** - Seamless experience across all devices
- **Simple Navigation** - Easy-to-use menu and smooth scrolling

## Categories

Raven organizes news into these main categories:

1. **Water** 💧 - Updates on water services and infrastructure
2. **Infrastructure** 🛣️ - Roads, bridges, utilities, and public works
3. **Government** 🏛️ - Policy, budgets, and civic announcements
4. **Business** 💼 - Local economic developments and business news
5. **Development** 🏗️ - Community projects and urban growth

## Getting Started

### View the Website

Simply open `index.html` in your web browser to see the Raven News homepage.

### Files Included

- `index.html` - Main homepage with structure and content
- `styles.css` - Mobile-first responsive styling
- `script.js` - Functionality for search, filtering, and interactivity
- `README.md` - This file

## How to Use

1. **Browse News** - Scroll through the latest news stories on the homepage
2. **Filter by Category** - Click category buttons to view specific types of news
3. **Search** - Use the search bar to find stories by keyword
4. **Navigate** - Use the menu to jump to different sections (Home, News, About, Contact)
5. **View Details** - Each news card shows the headline, summary, category, date, and source

## Current Setup

This first version uses **sample news data** embedded in the JavaScript. No external APIs, databases, or backend connections are required. This makes it perfect for beginners to understand and modify.

### Future Enhancements

As Raven grows, potential additions include:
- Real API integrations for live news feeds
- Database for storing articles
- User accounts and preferences
- Comment sections
- Social sharing features
- Push notifications
- Multi-language support

## Development

### For Beginners:

The code is designed to be easy to understand and modify:

- **HTML** (`index.html`) - Easy to read structure
- **CSS** (`styles.css`) - Clear sections with comments
- **JavaScript** (`script.js`) - Well-commented functions

To modify the news stories, edit the `newsData` array in `script.js`.

### Customization

**Change the Logo:**
Edit line in `index.html`:
```html
<span class="logo-icon">🐦</span>
```

**Change Colors:**
Modify the CSS variables at the top of `styles.css`:
```css
:root {
    --primary-color: #1a1a1a;
    --secondary-color: #0066cc;
    --accent-color: #ff6b35;
    ...
}
```

**Add More News:**
Add entries to the `newsData` array in `script.js` following this format:
```javascript
{
    id: 1,
    headline: "Your headline here",
    category: "Water", // or another category
    date: "2024-09-06",
    summary: "Your summary here",
    source: "Source Name",
    emoji: "💧"
}
```

## Browser Support

Raven works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available for modification and distribution.

## Contact

Have questions or feedback? Reach out:
📧 hello@ravenews.com

---

**Raven News** - Bringing clarity to scattered news.
