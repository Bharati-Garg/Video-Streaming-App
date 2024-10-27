Debouncing:

Typing slow = 200ms
Typing fast = 30ms



Performance:
- iphone pro max = 14 letter * 1000 = 14000
- with debouncing 3 API calls * 1000 = 3000




Debouncing with 200ms
- IF DIFFERENCE BETWEEN 2 KEY STROKES IS < 200ms - Decline API call
- >200ms make an API call




Cache:
time complexity to search in array = 0(n)
time complexity to search in object = 0(1)


new map();