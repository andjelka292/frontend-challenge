# Frontend Challenge

## What is the concept of this challenge?
Your task is to render form that uses JSON data obtained from backend server. In this case you will be using local file: sample.json

## What should you use?
- Git (fork this repo, and work there)
- Bootstrap
- Sass
- Vue.js
- JavaScript Standard Style

## What should I do?
You should make five Vue.js components that will be used for rendering later on.

### String
Normal text input field that has label associated with it.

### Email
Normal email input field that has label associated with it.

### Radio
Radio button field with multiple options. (+ label)

### Select
Select input wiht multiple options. (+ label)

### Phone
Phone component is using Select component for extensions list, and String component for phone number. (+ label)
Return value of Phone component should be object. Format:
```json
{"ext": "...", "phone": "..."}
```

### MultiString
MultiString component is using n String components, with minimum of one. Return value is array. Example:
```json
["...", "..."]
```
This component must have option of adding/removing rows (array members).


