# React useEffect Infinite Loop

This repository demonstrates a common React bug: an infinite loop caused by the `useEffect` hook. The component `MyComponent` uses `useEffect` to increment a counter, but it incorrectly includes the counter state in the dependency array. This creates a loop where the effect constantly updates the state, triggering another effect execution.

## How to reproduce

Clone this repository and run `npm install` to install dependencies. Then, run `npm start` to start the development server. You'll observe the counter rapidly increasing, indicating the infinite loop.

## Solution

The solution is to remove the state variable (`count`) from the dependency array of the `useEffect` hook. If you have a specific condition where you need to control the execution of the effect, add those condition variables to the dependency array instead.