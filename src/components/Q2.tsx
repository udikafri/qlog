
/**
 * 1. Write a debouce function.
 * 
 * "A debounce function is a programming technique used to prevent a function from being called too many times in a
 * short amount of time. It is commonly used in event-driven programming, such as in web development or embedded
 * systems."
 * In simple terms the above means that a debounce function is designed to ensure that a function is only executed
 * once after a series of rapid events. This is achieved by adding a delay between the time an event occurs and the
 * time the function is executed. If another event occurs during this delay, the timer is reset, and the delay starts
 * again.
 * The debounce function can be used in various scenarios, such as handling user input events like button clicks, key
 * presses, or mouse movements, or in scenarios where an API request needs to be made but should not be made too
 * frequently. By using a debounce function, it helps to ensure that the program only performs the desired action once,
 * improving the efficiency and stability of the code.
 * 
 * 2. Write a component that has an input field and a button. When the button is clicked, the input value is debounced
 *    for 1 second and then printed to the screen.
 */

import React, { useState } from 'react';

export function Q2 () {
  return <p>Q2</p>
}