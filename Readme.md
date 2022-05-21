# Project about JavaScript + HTML5 + CSS3
This type of  JavaScript Todo List is mainly used to organize any of  information. Here we can create a list of many texts that we want to do later. Once we've done that, we can delete them. It can basically serve as a daily routine.


# Assignment Contains :
### HTML file
This file contains the base HTML code that has all the elements defined for the webpage.

### SASS file
This file contains the SASS styles that are needed for styling the HTML elements in the webpage. The styles are self-explanatory and you are free to use or change these styles according to your preference.

### JavaScript file 
To program the behavior of the web page.


# Step 1: Basic structure of the project
I created a box on the webpage using the HTML and CSS code . This is basically the basic structure of todo list.

```html
 <div class="container">
 
 </div>
 ````
## DOM: Practice:When an HTML document is loaded into a web browser, it becomes a document object.

The document object is accessed with:
```
document.
```
For example :
```js
document.createElement()	;
document.getElementById()	;
```
# Step 2: styling by CSS Code and Bootsttrap CDN

I have created a space for  3 inputs using the following HTML. With this, I have created a button that will help to input. The width of the input space is 15em .

```css
input {
        padding: 0.6em;
        margin-left: 1em;
        background-color:rgb(235, 149, 149);
        border-radius: 5px;
        font-size: 0.8em;
        width: 15em;
       
    }
```
# Responsive Web Design :
Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones):
## Bootstrap
I have chose icons from Bootstrap library and  used this icons in the web page.

# Step 3: Make a list for viewing Todo text:

I have also created a todo list view using the HTML and CSS codes . Since there is no set amount of information in this list, height is not specified here.

# Step 4: Activate Todo List using JavaScript
Above we have designed this Todo List using HTML and CSS. Now the most important thing is to make it work with the help of JavaScript. 

## JavaScript Explanation

First I have given the 'if' condition. If nothing is input in this input place, that is, if the input is 0, then a kind of alert will be seen here. This error message will ask the user to input something.

```js
if (toTodo.value == "" || dueDate.value == "" || dueTime == "") {
        alert(" Try Again, there is an empty value");
        valid = false;
    }
    else if (!/^[a-zA-Z]+$/.test(toTodo.value) || toTodo.value.length < 2) {
        alert("False Input in Task Field");
        valid = false;
    }
```
## Setting item to the localStorage
The data being stored can be accessed using JavaScript, which gives us the ability to leverage client-side scripting to do many things that have traditionally involved server-side programming and relational databases. In this Assingment, I used Web Storage objects:

Here I stored data in the localStorage using the localStorage.setItem method :

```js
//syntax
localStorage.setItem('key', 'value')
```
### Getting item from localStorage

We get data from the local storage using _localStorage.getItem()_ method.

```js
//syntax
localStorage.getItem('key')
```

 ## ➤ Now I have added the below conditions using else, which means what will happen if the user adds some information.

###          1 - First I used textContent which will help to see this information on the web page.

###          2 - Then I created a delete button that will help to delete the information in the list. For that I           added an icon here. I have already added the required CSS code for this button.

# JavaScript classList Property

The classList property is used for representing the value of the class elements which is a DOMTokenList object. It is a read-only property but we can modify its value by manipulating the classes used in the program. The JavaScript classList property which I used to perform different operations on the class elements:

The toggle() method:
Which is used for Toggles between tokens in the list.


The remove() method:
which is used for removing one or more classes from the number of classes present in the element.



# To Download This Code:
* Download As Zip Archive.
* Save the zip file into a convenient location on your PC and start working on it.