// ==============================
// JAVASCRIPT SESSION & LOCAL STORAGE – CORE OUTLINE
// ==============================

// 📘 1. What Is Web Storage?
// - Local Storage vs Session Storage
// - Key-Value storage mechanism

// 📘 2. Session Storage
// - Data stored for the duration of the page session
// - Using sessionStorage.setItem(key, value)
// - Retrieving data: sessionStorage.getItem(key)
// - Removing data: sessionStorage.removeItem(key)
// - Clearing all data: sessionStorage.clear()

// 📘 3. Local Storage
// - Data stored even after the browser is closed
// - Using localStorage.setItem(key, value)
// - Retrieving data: localStorage.getItem(key)
// - Removing data: localStorage.removeItem(key)
// - Clearing all data: localStorage.clear()

// 📘 4. Data Types in Storage
// - Storing only strings
// - Converting objects to strings using JSON.stringify()
// - Converting strings back to objects using JSON.parse()

// 📘 5. Use Cases for Local Storage and Session Storage
// - Storing user preferences, themes, authentication tokens, etc.
// - Storing form data across pages
// - Session storage for temporary data (e.g., a shopping cart)

// 📘 6. Storage Limits
// - Roughly 5MB per origin (varies by browser)
// - Considerations for large data storage

// 📘 7. Best Practices
// - Don't store sensitive data (e.g., passwords) in storage
// - Always use JSON for complex data
// - Clean up storage after use to avoid excessive data
