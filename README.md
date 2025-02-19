# React useEffect Cleanup Function Not Called

This repository demonstrates a common error in React's `useEffect` hook where the cleanup function isn't properly handled, leading to potential memory leaks or unexpected behavior when the component unmounts. The bug involves a scenario where an asynchronous operation is started within `useEffect` without a proper cleanup function.

## Bug

The `bug.js` file shows the incorrect implementation.  The fetch request is initiated but there's no way to cancel or clean up the request if the component is unmounted before the response arrives.  This could result in a stale closure or even a memory leak if the response eventually arrives after the component is already gone. 

## Solution

The `bugSolution.js` file provides the correct implementation, utilizing the return value of the effect function to implement a cleanup function. The `abortController` is used to cancel the fetch request if the component unmounts before the response is received, preventing potential issues. 
