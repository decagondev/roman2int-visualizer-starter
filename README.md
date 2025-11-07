# Roman to Integer Visualizer - Starter Project

## 🎯 Project Overview

Congratulations on solving the Roman to Integer LeetCode problem! Now it's time to build an interactive visualizer that helps users understand how the conversion algorithm works step-by-step.

This project will challenge you to:
- Apply your algorithmic knowledge to create a visual representation
- Work with DOM manipulation and event handling
- Create smooth animations and transitions
- Build a professional, user-friendly interface

## 📋 Learning Objectives

By completing this project, you will:
1. **Reinforce Algorithm Understanding**: Visualize the Roman to Integer conversion algorithm you've already solved
2. **DOM Manipulation**: Practice creating, modifying, and styling HTML elements with JavaScript
3. **Async/Await**: Use promises and async functions for animations and delays
4. **CSS Animations**: Create smooth, professional animations using CSS keyframes
5. **Event Handling**: Implement user interactions with buttons and keyboard events
6. **State Management**: Track and update application state during the conversion process

## 🚀 Getting Started

### Prerequisites

- You should have already solved the LeetCode "Roman to Integer" problem
- Basic understanding of HTML, CSS, and JavaScript
- A code editor (VS Code recommended)
- A modern web browser

### Setup

1. Open the `index.html` file in your browser
2. Open all three files (`index.html`, `script.js`, `styles.css`) in your code editor
3. Follow the TODO comments in each file to build out the functionality

## 📁 File Structure

```
starter/
├── index.html    # HTML structure (partially complete)
├── script.js     # JavaScript logic (TODOs to implement)
├── styles.css    # Custom styling (TODOs to implement)
└── README.md     # This file
```

## 🎨 Project Requirements

### Core Functionality

1. **Roman Numeral Input**
   - User can enter a Roman numeral
   - Input validation (only I, V, X, L, C, D, M allowed)
   - Error messages for invalid input

2. **Visual Character Display**
   - Display each Roman character in a box
   - Show the numeric value of each character
   - Highlight the current character being processed
   - Color-code characters (green for add, red for subtract)

3. **Step-by-Step Visualization**
   - Show current operation (add/subtract) with explanation
   - Display running total that updates in real-time
   - Show step history with all previous calculations
   - Display final result when complete

4. **User Controls**
   - Convert button to start visualization
   - Reset button to clear and start over
   - Enter key support for quick conversion

### Visual Requirements

1. **Animations**
   - Smooth character box appearance
   - Pulsing highlight for active character
   - Smooth transitions for number updates
   - Fade-in effects for history items

2. **Color Coding**
   - Green theme for addition operations
   - Red theme for subtraction operations
   - Blue highlight for active/processing state

3. **Professional Design**
   - Clean, modern layout
   - Responsive design (works on mobile and desktop)
   - Clear visual hierarchy
   - Helpful legend showing Roman numeral values

## 📝 Implementation Guide

### Step 1: Complete the HTML Structure

In `index.html`, you'll find TODO comments indicating where to add:
- Input field for Roman numerals
- Convert and Reset buttons
- Error message container
- Display containers for characters, steps, and results

**Hint**: Look at the existing structure and follow the same patterns for styling classes.

### Step 2: Implement JavaScript Logic

In `script.js`, you'll need to implement:

1. **Data Structures**
   - `romanMap`: Object mapping Roman characters to integers

2. **DOM References**
   - Get references to all HTML elements you'll manipulate

3. **Core Functions**
   - `initializeLegend()`: Populate the legend with Roman numeral values
   - `showError()`: Display error messages
   - `resetVisualizer()`: Reset all visual elements
   - `updateRunningTotal()`: Update the running total display
   - `addToHistory()`: Add a step to the history panel
   - `sleep()`: Create delays for animations
   - `visualizeRomanToInt()`: **Main function** - the core visualization logic
   - `validateRomanNumeral()`: Validate user input

4. **Event Listeners**
   - Button click handlers
   - Keyboard event handler (Enter key)
   - Page load initialization

**Key Algorithm Reminder**:
```javascript
// The core logic you've already solved:
for (let i = 0; i < roman.length; i++) {
  const current = romanMap[roman[i]];
  const next = romanMap[roman[i + 1]];
  
  if (next && current < next) {
    total -= current;  // Subtract
  } else {
    total += current;   // Add
  }
}
```

Now you need to visualize each step of this process!

### Step 3: Add CSS Styling

In `styles.css`, implement:

1. **Keyframe Animations**
   - `slideIn`: Elements appearing from top
   - `pulse`: Scale animation
   - `highlight`: Glowing effect
   - `fadeIn`: Opacity transition

2. **Character Box Styles**
   - Base styling for `.roman-char`
   - Active state (being processed)
   - Processed state (completed)
   - Add state (green theme)
   - Subtract state (red theme)

3. **History Item Styles**
   - Base styling for `.step-item`
   - Add and subtract variants

4. **Interactive Elements**
   - Button hover/active states
   - Input focus effects
   - Scrollbar styling

## 🎯 Implementation Tips

### Breaking Down the Main Function

The `visualizeRomanToInt()` function is the most complex. Break it into phases:

1. **Setup Phase**
   - Disable buttons
   - Clear previous state
   - Reset variables

2. **Character Display Phase**
   - Create visual boxes for each character
   - Show character and its value
   - Add animation delays

3. **Processing Phase** (the main loop)
   - Highlight current character
   - Determine add/subtract
   - Update total
   - Update displays
   - Style character box
   - Add to history
   - Move to next character

4. **Completion Phase**
   - Show final result
   - Re-enable buttons
   - Display completion message

### Using Async/Await

Since you need delays for animations, use `async/await`:

```javascript
async function visualizeRomanToInt(roman) {
  // ... setup code ...
  
  for (let i = 0; i < roman.length; i++) {
    // Highlight character
    await sleep(600);  // Wait 600ms
    
    // Process character
    // ... calculation ...
    
    await sleep(1000);  // Wait 1 second
  }
}
```

### DOM Manipulation Tips

- Use `document.createElement()` to create new elements
- Use `classList.add()` / `classList.remove()` for styling
- Use `innerHTML` or `textContent` to set content
- Use `appendChild()` or `insertBefore()` to add elements

### CSS Animation Tips

- Use `@keyframes` for complex animations
- Use `transition` for simple property changes
- Combine multiple animations with commas
- Use `transform` and `opacity` for smooth animations (GPU-accelerated)

## 🧪 Testing Your Implementation

Test with these Roman numerals:

1. **Simple**: `III` (3), `VII` (7), `XII` (12)
2. **Subtraction**: `IV` (4), `IX` (9), `XL` (40)
3. **Complex**: `XIV` (14), `MCMXCIV` (1994), `LVIII` (58)

For each test, verify:
- ✅ Characters display correctly
- ✅ Each step is highlighted
- ✅ Running total updates correctly
- ✅ Step history shows all operations
- ✅ Final result is correct
- ✅ Colors match operations (green/red)
- ✅ Animations are smooth

## 🎨 Styling Suggestions

- Use Tailwind CSS classes (already included via CDN)
- Add custom CSS for animations and special effects
- Ensure good contrast for readability
- Make it responsive for mobile devices
- Use consistent spacing and sizing

## 🐛 Common Challenges

1. **Timing Issues**: If animations feel rushed, increase `sleep()` delays
2. **State Management**: Make sure to track `isProcessing` to prevent multiple conversions
3. **DOM Updates**: Ensure elements exist before trying to modify them
4. **Async/Await**: Remember to use `await` with `sleep()` calls
5. **Event Listeners**: Make sure to check `isProcessing` before allowing new conversions

## 📚 Resources

- [MDN: DOM Manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [MDN: Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN: CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## ✅ Completion Checklist

- [ ] HTML structure complete with all required elements
- [ ] Roman numeral mapping object created
- [ ] All DOM references obtained
- [ ] Input validation implemented
- [ ] Character boxes created and displayed
- [ ] Step-by-step visualization working
- [ ] Running total updates correctly
- [ ] Step history displays all operations
- [ ] Final result shows correctly
- [ ] Color coding works (green/red)
- [ ] Animations are smooth
- [ ] Reset button works
- [ ] Error handling implemented
- [ ] Enter key support added
- [ ] Legend displays correctly
- [ ] CSS animations implemented
- [ ] Responsive design works
- [ ] Code is clean and well-commented

## 🎉 Next Steps

Once you've completed the basic requirements, consider these enhancements:

1. **Speed Control**: Add a slider to control animation speed
2. **Step Navigation**: Add Previous/Next buttons to step through manually
3. **Examples**: Add preset buttons for common Roman numerals
4. **Dark Mode**: Implement a dark theme toggle
5. **Export**: Allow users to export the step-by-step breakdown
6. **Sound Effects**: Add audio feedback for each step (optional)
7. **Statistics**: Show statistics like total steps, operations count, etc.

## 💡 Remember

- Take it one function at a time
- Test frequently as you build
- Use console.log() for debugging
- Reference your LeetCode solution for the core algorithm
- Don't be afraid to experiment with animations and styling!

Good luck, and have fun building your visualizer! 🚀

