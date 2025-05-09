# note

Sure, let's break down the provided HTML code step-by-step:

### HTML Structure Explanation

#### 1. `<!DOCTYPE html>`
This line defines the document type and version of HTML being used. It helps the browser to render the page correctly.

#### 2. `<html lang="en">`
This opening tag indicates the start of an HTML document and specifies the language as English (`lang="en"`).

#### 3. `<head>`
The `<head>` section contains meta-information about the document, such as its character encoding, title, and links to stylesheets.

- **`<meta charset="UTF-8">`**: This sets the character encoding for the document to UTF-8, which supports a wide range of characters.
- **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: This makes the website responsive by setting the viewport to the device's width and scaling it accordingly.
- **`<title>Notes Website</title>`**: This sets the title of the web page, which appears in the browser tab.
- **`<link rel="stylesheet" href="decoration.css">`**: This links an external CSS file (`decoration.css`) to style the HTML document.

#### 4. `<body>`
The `<body>` section contains the content of the HTML document that will be displayed on the web page.

- **`<div class="container">`**: This is a container div that holds the main content of the page.
  - **`<h1> MichNote's</h1>`**: This is a header element displaying the title "MichNote's".
  - **`<button class="btn"><img src="images/edit.png" alt=""> Create A Note</button>`**: This is a button with an image (edit icon) and the text "Create A Note".
  - **`<div class="michnote-container">`**: This is a container div meant to hold notes. It currently contains a commented-out paragraph element.
    - **`<!--   <p contenteditable="true" class="box-input"> <img src="images/delete.png" alt=""> </p>  -->`**: This is a commented-out paragraph element that is editable (`contenteditable="true"`) and contains a delete icon image.

#### 5. `<script src="script.js"></script>`
This includes an external JavaScript file (`script.js`) that contains the functionality for the page.

### Summary
- The HTML document sets up a basic structure for a notes website.
- It includes a title, a button to create a note, and a container for displaying notes.
- External CSS and JavaScript files are linked to style the page and add functionality.
- There is a placeholder for editable notes, but it is currently commented out.

If you need a detailed explanation of any specific part or further details on how the CSS or JavaScript files might interact with this HTML, feel free to ask!

Certainly! Let's break down the provided JavaScript code step-by-step:

### Code Explanation

#### 1. Selecting Elements
```javascript
const noteContainer = document.querySelector(".michnote-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".box-input");
```
- **`noteContainer`**: Selects the container element where notes will be displayed.
- **`createBtn`**: Selects the button element for creating new notes.
- **`notes`**: Selects all elements with the class `box-input` (initially empty).

#### 2. Function to Show Notes
```javascript
function showNotes(){
    noteContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
```
- **`showNotes()`**: Retrieves notes from `localStorage` and displays them inside the `noteContainer`.
- **`showNotes();`**: Calls the function to display any previously saved notes when the page loads.

#### 3. Function to Update Local Storage
```javascript
function updateStorage(){
    localStorage.setItem("notes", noteContainer.innerHTML)
} 
```
- **`updateStorage()`**: Saves the current state of `noteContainer`'s HTML content to `localStorage`.

#### 4. Event Listener for Creating Notes
```javascript
createBtn.addEventListener("click", ()=>{
    let boxInput = document.createElement("p");
    let img = document.createElement("img");
    boxInput.className = "box-input" ;
    boxInput.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    noteContainer.appendChild(boxInput).appendChild(img);   
})
```
- **`createBtn.addEventListener("click", ()=>{...})`**: Adds a click event listener to the create button.
  - **`let boxInput = document.createElement("p");`**: Creates a new paragraph element.
  - **`let img = document.createElement("img");`**: Creates a new image element.
  - **`boxInput.className = "box-input";`**: Assigns the class `box-input` to the paragraph.
  - **`boxInput.setAttribute("contenteditable", "true");`**: Makes the paragraph content editable.
  - **`img.src = "images/delete.png";`**: Sets the source of the image to a delete icon.
  - **`noteContainer.appendChild(boxInput).appendChild(img);`**: Appends the paragraph and image to `noteContainer`.

#### 5. Event Listener for Note Actions
```javascript
noteContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".box-input");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage()
            }
        })
    }
})
```
- **`noteContainer.addEventListener("click", function(e){...})`**: Adds a click event listener to the note container.
  - **Delete Note**: If an image (delete icon) is clicked, the parent paragraph element is removed, and `updateStorage()` is called.
  - **Edit Note**: If a paragraph is clicked, all notes are selected, and an `onkeyup` event listener is added to each note to call `updateStorage()` whenever the content changes.

#### 6. Preventing Default Enter Key Behavior
```javascript
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
```
- **`document.addEventListener("keydown", event =>{...})`**: Adds a keydown event listener to the document.
  - **Enter Key**: If the Enter key is pressed, a line break is inserted instead of creating a new paragraph, and the default behavior is prevented.

### Summary
- **Element Selection**: The code selects relevant elements for the notes functionality.
- **Show Notes**: Displays previously saved notes from `localStorage` when the page loads.
- **Update Storage**: Saves the current state of notes to `localStorage`.
- **Create Note**: Adds a new editable note with a delete icon.
- **Note Actions**: Handles deleting and editing notes, updating `localStorage` accordingly.
- **Prevent Default Enter Key Behavior**: Ensures that pressing Enter inserts a line break instead of creating a new paragraph.

If you have any specific questions or need further details on any part of the code, feel free to ask!

Sure, let's break down the provided CSS code step-by-step:

### Global Styles
```css
* {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-sizing: border-box;
}
```
- **`*`**: Applies styles to all elements.
  - **`margin: 0;`**: Removes default margin from all elements.
  - **`padding: 0;`**: Removes default padding from all elements.
  - **`font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;`**: Sets a default font family for the entire document.
  - **`box-sizing: border-box;`**: Ensures that padding and border are included in the element's total width and height.

### Container Styles
```css
.container {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, rgb(62, 6, 104), rgba(153, 226, 255, 0.667));
    color: whitesmoke;
    padding-top: 4%;
    padding-left: 30%;
}
```
- **`.container`**: Styles the container div.
  - **`width: 100%;`**: Sets the width to 100% of the parent element.
  - **`min-height: 100vh;`**: Ensures the container takes at least the full viewport height.
  - **`background: linear-gradient(135deg, rgb(62, 6, 104), rgba(153, 226, 255, 0.667));`**: Applies a diagonal gradient background.
  - **`color: whitesmoke;`**: Sets the text color to whitesmoke.
  - **`padding-top: 4%;`**: Adds padding to the top.
  - **`padding-left: 30%;`**: Adds padding to the left.

### Header Styles
```css
.container h1 {
    display: flex;
    align-items: center;
    font-size: 35px;
    font-weight: 600;
}
```
- **`.container h1`**: Styles the header within the container.
  - **`display: flex;`**: Makes the header a flex container.
  - **`align-items: center;`**: Vertically centers the content.
  - **`font-size: 35px;`**: Sets the font size to 35 pixels.
  - **`font-weight: 600;`**: Sets the font weight to 600 (semi-bold).

### Button Styles
```css
.container button {
    display: flex;
    align-items: center;
    background: linear-gradient(rgba(17, 42, 153, 0.533), rgba(17, 119, 39, 0.453));
    color: whitesmoke;
    font-size: 20px;
    outline: 0;
    border: 0;
    border-radius: 5px;
    padding: 10px 20px 10px 20px;
    margin: 30px 0 20px;
    cursor: pointer;
}
```
- **`.container button`**: Styles the button within the container.
  - **`display: flex;`**: Makes the button a flex container.
  - **`align-items: center;`**: Vertically centers the content.
  - **`background: linear-gradient(rgba(17, 42, 153, 0.533), rgba(17, 119, 39, 0.453));`**: Applies a gradient background.
  - **`color: whitesmoke;`**: Sets the text color to whitesmoke.
  - **`font-size: 20px;`**: Sets the font size to 20 pixels.
  - **`outline: 0;`**: Removes the default outline.
  - **`border: 0;`**: Removes the default border.
  - **`border-radius: 5px;`**: Adds rounded corners with a 5-pixel radius.
  - **`padding: 10px 20px 10px 20px;`**: Adds padding inside the button.
  - **`margin: 30px 0 20px;`**: Adds margin around the button.
  - **`cursor: pointer;`**: Changes the cursor to a pointer on hover.

### Note Box Styles
```css
.box-input {
    position: relative;
    width: 100%;
    max-width: 500px;
    min-height: 130px;
    background: rgba(245, 245, 245, 0.527);
    color: #333;
    padding: 20px;
    margin: 20px 0;
    outline: none;
    border-radius: 5px;
}
```
- **`.box-input`**: Styles the note box.
  - **`position: relative;`**: Positions the element relative to its normal position.
  - **`width: 100%;`**: Sets the width to 100% of the parent element.
  - **`max-width: 500px;`**: Sets the maximum width to 500 pixels.
  - **`min-height: 130px;`**: Sets the minimum height to 130 pixels.
  - **`background: rgba(245, 245, 245, 0.527);`**: Applies a translucent light gray background.
  - **`color: #333;`**: Sets the text color to dark gray.
  - **`padding: 20px;`**: Adds padding inside the note box.
  - **`margin: 20px 0;`**: Adds margin around the note box.
  - **`outline: none;`**: Removes the default outline.
  - **`border-radius: 5px;`**: Adds rounded corners with a 5-pixel radius.

### Delete Icon Styles
```css
.box-input img {
    width: 25px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    cursor: pointer;
}
```
- **`.box-input img`**: Styles the delete icon within the note box.
  - **`width: 25px;`**: Sets the width to 25 pixels.
  - **`position: absolute;`**: Positions the element absolutely within the note box.
  - **`bottom: 15px;`**: Positions the element 15 pixels from the bottom.
  - **`right: 15px;`**: Positions the element 15 pixels from the right.
  - **`cursor: pointer;`**: Changes the cursor to a pointer on hover.

### Summary
- **Global Styles**: Applied to all elements to reset margins, paddings, set a default font, and use border-box sizing.
- **Container Styling**: Full-width container with a gradient background and padding.
- **Header Styling**: Flexbox header aligned to the center with specific font size and weight.
- **Button Styling**: Flexbox button with gradient background, rounded corners, and pointer cursor.
- **Note Box Styling**: Styled note box with relative positioning, padding, margin, and rounded corners.
- **Delete Icon Styling**: Positioned delete icon within the note box with pointer cursor.
