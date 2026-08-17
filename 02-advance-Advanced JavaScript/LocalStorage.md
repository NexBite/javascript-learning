Breakdown of Methods Used
# 1 . JSON.stringify(user): Converts the JavaScript object into a JSON string, as localStorage can only store strings.

# 2. localStorage.setItem("user", ...): Saves the stringified data under the key "user".

# 3. localStorage.getItem("user"): Fetches the stored string value associated with key "user".

# 4. JSON.parse(...): Parses the retrieved JSON string back into a usable JavaScript object.

# 5. localStorage.removeItem("user"): Deletes the key "user" and its corresponding value from storage.

Key Differences from LocalStorage
Lifecycle: sessionStorage persists only as long as the current browser tab or window remains open. Closing the tab wipes the stored data automatically.

Scope: Data stored in sessionStorage is specific to the particular window/tab where it was created, whereas localStorage is shared across all tabs and windows under the same origin.

Environment: Just like localStorage, sessionStorage is a Web Browser API and will throw a ReferenceError: sessionStorage is not defined if executed directly in Node.js.