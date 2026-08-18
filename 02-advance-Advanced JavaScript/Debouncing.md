# -------- 30️ Debouncing
  What is Debouncing?
  Debouncing means:
  Wait until the user stops performing an action for a certain amount of time, then execute the function.

  Search box:
    User types:
    J
    Ja
    Jav
    Java
    Javas
    JavaS
    JavaSc
    JavaScr
    JavaScript

  With debouncing:
      User types
        ↓
      wait 500ms
        ↓
      user stopped typing?
        ↓
      YES
        ↓
      make API request
# ======= Interview Definition

Debouncing delays function execution until a specified period has passed without the event being triggered again.

Common uses
Search suggestions
API requests
Form validation
Autocomplete
Window resize

# === 31️ Throttling
Throttling is different.
Throttling ensures a function executes at most once within a specified time interval.
For example:
User scrolls continuously
        ↓
scroll
scroll
scroll
scroll
scroll
scroll
        ↓
Function runs
        ↓
wait 500ms
        ↓
Function can run again

| Debouncing                 | Throttling                        |
| -------------------------- | --------------------------------- |
| Waits until activity stops | Runs periodically during activity |
| Executes after inactivity  | Executes at controlled intervals  |
| Search box                 | Scroll                            |
| Autocomplete               | Mouse movement                    |
| Form validation            | Resize                            |
| API search                 | Continuous events                 |

