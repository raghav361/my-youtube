# My-YouTube

- Head
- Body
  - SideBar
    - MenuItems
  - MainContainer
    - ButtonsList
    - VideoContainer
      - VideoCard

# Debouncing

- Typing Slow - 200ms
- Typing Fast - 30ms

Performance

- iphone pro max - 14 characters \* 1000 = 14000 API Calls
- with debouncing - 3 API Calls \* 1000 = 3000 API Calls

Debouncing with 200ms

- If difference between 2 key strokes is less than 200ms - Decline the API Call
- If greater than 200ms make an API Call
