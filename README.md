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

### Form renderer
You should make form renderer component which incorporates every component mentoned above, using sample.json
#### Protip
JSON can change, so don't try to hardcode components :)

## Anything else?

There should be printout of JSON object used for generating form.
You need to place submit button at bottom of the form, which generates object used for sending data to server.
It must be in format 
```json
{
  "key": "value"
}
```

Look in request.json for example.

Printout this object as well.

## Appendix A
### Explanation of one object of sample.js
```json
{
    "label": "Last name",
    "name": "last_name",
    "value": null,
    "component": "string",
    "col": 6
}
```
 
 * label - components label
 * name - name of form, unique in every form, used for sending data to server in key-value format
 * value - current value of component
 * component - type of component
 * col - bootstrap column with, ignored on mobile devices as it should use 12
 
 ## Appendix B
 
 Anything that is left unspecified, can be specified by challenger himself :)
