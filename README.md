# Etch A Sketch

A fun and interactive drawing application built with vanilla HTML, CSS, and JavaScript. Create beautiful pixel art by moving your mouse over the grid!

## Features

- 🎨 **Dynamic Drawing Canvas** - Hover over grid squares to draw with vibrant colors
- 🎯 **Random Color Generation** - Each hover creates a unique HSL color
- 📐 **Adjustable Grid Size** - Change grid dimensions between 16x16 and 100x100
- 🔄 **Progressive Opacity** - Squares gradually become more opaque with repeated hovers (up to 10 times)
- 🎮 **Simple One-Button Interface** - Reset button to create a new grid with custom size

## Live Demo

This project is deployed on Vercel for easy access and direct playing:
- **[Play Etch-a-Sketch on Vercel](https://etch-a-sketch-lemon-delta.vercel.app/)**

## How to Use

1. Open `index.html` in your web browser
2. Move your mouse over the grid to draw
3. Click the **"Reset Grid"** button to:
   - Clear the current drawing
   - Enter a new grid size (must be between 16 and 100)
4. Keep drawing with the new grid!

## How It Works

### Drawing Mechanics
- **Hover Effect**: Moving your mouse over squares triggers a color fill
- **Vibrant Colors**: Each square gets a random vibrant color (using HSL with 85% saturation and 60% lightness)
- **Opacity Building**: The first hover is 10% opaque, and it increases by 10% with each additional hover (max 100% after 10 hovers)
- **Smooth Transition**: Multiple hovers on the same square make it progressively more visible

### Grid System
- Default grid: **16x16 squares** (256 total squares)
- Total canvas size: **688x688 pixels**
- Each square size is dynamically calculated based on grid dimensions

## Deployment

### Deploy to Vercel (Recommended)
This is a static site and deploys perfectly on Vercel with zero configuration:

1. Push your repository to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy" - that's it!
5. Share your Vercel link for others to play

### Local Deployment
Simply open `index.html` in any modern web browser - no server required!

## File Structure

```
Etch-a-sketch/
├── index.html      # HTML structure and layout
├── program.js      # JavaScript logic and interactivity
├── style.css       # CSS styling and layout
└── README.md       # Project documentation
```

## Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Flexbox layout and styling
- **Vanilla JavaScript** - DOM manipulation and event handling

### Key JavaScript Functions
- `createGrid(n)` - Generates an n×n grid of squares
- `randomVibrantColor()` - Generates random vibrant HSL colors
- Mouse event listener - Tracks hovering and applies colors

### Browser Compatibility
Works on all modern browsers that support:
- ES6 JavaScript
- CSS Flexbox
- Dataset API

## Future Enhancements

- [ ] Color picker for custom drawing colors
- [ ] Save/export drawings as images
- [ ] Undo/Redo functionality
- [ ] Different drawing modes (pen, eraser, rainbow)
- [ ] Keyboard shortcuts
- [ ] Mobile touch support

## License

This project is open source and available for personal and educational use.

## Author

Created as a fun learning project to practice vanilla JavaScript, DOM manipulation, and CSS styling.

---

**Enjoy creating your pixel art! 🎨**
