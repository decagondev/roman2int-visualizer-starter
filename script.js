/**
 * TODO: Create a romanMap object that maps Roman numerals to their integer values
 * Example: { 'I': 1, 'V': 5, 'X': 10, ... }
 * Include: I, V, X, L, C, D, M
 */
const romanMap = {
  // TODO: Fill in the mapping
};

// TODO: Get references to all DOM elements you'll need
// Use document.getElementById() for:
// - startBtn, resetBtn, romanInput
// - romanChars, stepOutput, totalOutput
// - runningTotal, stepHistory, errorMessage, legend

// TODO: Create state variables
// - isProcessing: boolean to track if conversion is in progress
// - currentTotal: number to track the running total

/**
 * TODO: Initialize the legend with Roman numeral values
 * This function should:
 * 1. Get all entries from romanMap
 * 2. Sort them by value (descending)
 * 3. Create a visual element for each (character + value)
 * 4. Append them to the legend container
 */
function initializeLegend() {
  // TODO: Implement this function
}

/**
 * TODO: Show error message to user
 * @param {string} message - Error message to display
 * This function should:
 * 1. Set the error message text
 * 2. Remove 'hidden' class to show it
 * 3. Optionally hide it after 5 seconds
 */
function showError(message) {
  // TODO: Implement this function
}

/**
 * TODO: Reset the visualizer to initial state
 * This function should:
 * 1. Clear all visual elements (romanChars, stepOutput, etc.)
 * 2. Reset totalOutput to "—"
 * 3. Reset runningTotal to "0"
 * 4. Clear stepHistory
 * 5. Reset state variables
 * 6. Re-enable buttons and input
 */
function resetVisualizer() {
  // TODO: Implement this function
}

/**
 * TODO: Update running total with animation
 * @param {number} newTotal - New total value
 * This function should:
 * 1. Update the runningTotal element text
 * 2. Add a scale animation effect (optional but nice)
 */
function updateRunningTotal(newTotal) {
  // TODO: Implement this function
}

/**
 * TODO: Add step to history
 * @param {string} operation - 'add' or 'subtract'
 * @param {string} char - Roman character
 * @param {number} value - Numeric value
 * @param {string} reason - Explanation
 * @param {number} newTotal - New total after operation
 * This function should:
 * 1. Create a new div element for the step
 * 2. Style it based on operation (green for add, red for subtract)
 * 3. Display the character, value, reason, and new total
 * 4. Add it to the stepHistory (prepend, not append)
 */
function addToHistory(operation, char, value, reason, newTotal) {
  // TODO: Implement this function
}

/**
 * TODO: Utility function to create a delay
 * @param {number} ms - Milliseconds to wait
 * @returns {Promise<void>}
 * This is needed for animations - use setTimeout wrapped in a Promise
 */
function sleep(ms) {
  // TODO: Implement this function
}

/**
 * TODO: Main visualization function
 * @param {string} roman - The Roman numeral string to convert
 * @returns {Promise<void>}
 * 
 * This is the core function! It should:
 * 
 * 1. Set processing state (disable buttons, set isProcessing = true)
 * 2. Clear previous state
 * 
 * 3. Create character boxes:
 *    - Loop through each character in the Roman string
 *    - Create a div element for each
 *    - Display the character and its numeric value
 *    - Add appropriate CSS classes
 *    - Append to romanChars container
 *    - Add a small delay between each (use sleep())
 * 
 * 4. Process each character:
 *    - Loop through each character again
 *    - Get current value and next value from romanMap
 *    - Highlight the current character (add active class)
 *    - Wait a bit (use sleep())
 *    
 *    - Determine if you should add or subtract:
 *      * If next exists AND current < next: SUBTRACT
 *      * Otherwise: ADD
 *    
 *    - Update currentTotal accordingly
 *    - Update stepOutput with explanation
 *    - Update runningTotal display
 *    - Add step to history
 *    - Style the character box (green for add, red for subtract)
 *    - Wait a bit more
 *    - Remove active highlighting, mark as processed
 * 
 * 5. Show final result:
 *    - Display the final total
 *    - Show completion message
 *    - Re-enable buttons
 *    - Reset processing state
 */
async function visualizeRomanToInt(roman) {
  // TODO: Implement this function
  // This is the main challenge! Break it down into steps above.
}

/**
 * TODO: Validate Roman numeral input
 * @param {string} roman - Input string to validate
 * @returns {boolean} - True if valid
 * This function should:
 * 1. Check if input is empty
 * 2. Check if input contains only valid Roman characters (I, V, X, L, C, D, M)
 * 3. Show error message if invalid
 * 4. Return true if valid, false otherwise
 */
function validateRomanNumeral(roman) {
  // TODO: Implement this function
}

// TODO: Add event listeners
// 1. startBtn click: validate input and call visualizeRomanToInt
// 2. resetBtn click: call resetVisualizer and clear input
// 3. romanInput keypress: if Enter key, trigger conversion

// TODO: Initialize on page load
// Use DOMContentLoaded event to:
// 1. Call initializeLegend()
// 2. Call resetVisualizer()
// 3. Focus on the input field

