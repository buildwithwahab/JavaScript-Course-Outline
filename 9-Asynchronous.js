// ==============================
// JAVASCRIPT ASYNCHRONOUS PROGRAMMING – CORE OUTLINE
// ==============================

// 📘 1. What is Asynchronous Programming?
// - Non-blocking code execution
// - Allows performing multiple tasks at once (e.g., HTTP requests, file reading)
// - Improves performance by not freezing the UI

// 📘 2. Callbacks
// - Functions passed as arguments to other functions
// - Callback hell (nested callbacks)
// - Example: setTimeout, event listeners

// 📘 3. Promises
// - Represent the completion (or failure) of an asynchronous operation
// - Three states: pending, resolved (fulfilled), rejected
// - Using `.then()` for success and `.catch()` for errors
// - Chaining promises to handle multiple asynchronous actions

// 📘 4. Handling Multiple Promises
// - Promise.all(): waiting for multiple promises to resolve
// - Promise.race(): resolves when the first promise resolves
// - Promise.allSettled(): waits for all promises to settle (resolve or reject)

// 📘 5. Async/Await (ES8)
// - Syntactic sugar over promises
// - Simplifies working with asynchronous code
// - `async` functions return a promise
// - `await` pauses code execution until the promise resolves
// - Example: async function with await

// 📘 6. Error Handling with Async/Await
// - Using try/catch blocks to handle errors in async functions
// - Catching errors from async operations using `.catch()`

// 📘 7. Event Loop and Callback Queue
// - How JavaScript handles async code in the event loop
// - Understanding the call stack, event queue, and microtask queue

// 📘 8. Common Use Cases for Asynchronous Programming
// - Fetching data from APIs (e.g., using Fetch API with async/await)
// - File reading, database operations, timers, animations

// 📘 9. Best Practices
// - Avoid callback hell by using promises or async/await
// - Handle errors in async functions
// - Use async/await for cleaner, more readable code
