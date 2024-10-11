# SUGGESTIONS FOR FRONTEND DEVELOEPRS
by: [Rei Ebenezer Duhina](https://github.com/Reiebenezer)

> Note: Damo kamo fixes nga need kay-uhon guys. Especially sa class naming ninyo. 


## Style Guide for Frontend Developers

I should have specified this a lot sooner. Pasensya na, damo abi ubra hehe 😅😅.

### 1. HTML Optimizations

In your code, you have used this class naming scheme: 

```html
<!-- home.html -->

<div class="navbar-link">
    <a class="navbar-link navbar-link-home navbar-link--active" href="../routes/home.html">Home</a>
    <a class="navbar-link navbar-link-competition" href="../routes/competition-ladder.html">Competition Ladder</a>
    <a class="navbar-link navbar-link-curricula" href="../routes/curricula.html">Curricula</a>
</div>

```

This can cause confusion and make things harder to name in the future. Instead, don't use classes for this purpose and select the `<a>` tags directly in the CSS. 

You can also use semantic tags such as `<nav>` to reduce the number of classes you are using in the `<nav>` element.

```html
<!-- home.html -->

<nav>
    <a class="active" href="../routes/home.html">Home</a>
    <a href="../routes/competition-ladder.html">Competition Ladder</a>
    <a href="../routes/curricula.html">Curricula</a>
</nav>
```

```css
/* style.css */

nav a {
    /* Styles for <a> */
}

nav a.active {
    /* Styles for active <a> */
}
```

If you need to use javascript to add `class="active"` to the `<a>` tag depending on route, you can add a tag attribute to the html. 

```html
<a data-route="/home">Home</a>
```

However, since we are using a backend server, instead of referencing the html file in the `href` attribute, use the route name:
```html
<a href="/home">Home</a>
```
Then, we can reference that route in the javascript code and trigger the `active` class below using `HTMLElement.classList.toggle()`. 

```js
// Note the usage of tag selection below! 
// Don't use classes here
//                    👇
document.querySelector('nav a').forEach(tag => {
    tag.classList.toggle('active', 
        window.location.href === tag.href;
    );
});
```
> NOTE: if `location.href` does not work, use `location.pathname`.

Whenever possible, use semantic tags and limit the number of classes used in HTML to increase readability. You can search for semantic tags here: https://www.w3schools.com/html/html5_semantic_elements.asp

### 2. Using the symbols `_` vs `-`

If you are a python programmer, usually underscores (`_`) are used in separating words. However, in HTML, we are using hyphens (`-`) to separate words. Stick to using `-` in class names and attributes.

```html
<div class="main-subheading">Div Content</div>
```

In Javascript, use `camelCase`. Do not use underscores, unless you are implying that it is not accessible outside the context it is in. 

### 3. Use ES6 syntax

Don't worry about incompatibility with older versions. ES6 is now the current javascript standard, supported by **ALL** browsers. 

Examples of ES6 content compared to older versions: 

1. Anonymous Functions
```js
// Old version
completedBtn.addEventListener('click', function(e) {
    
});

// New version
completedBtn.addEventListener('click', (e) => {
    
});
```
2. Variable Declarations
```js
// Old version
var chart = new ApexCharts(/* your parameters here */);

// New Version
let chart = new ApexCharts(/* your parameters here*/);

// Constants
const PI = 3.14;
```
> Note that variables declared with the `const` keyword can only be assigned a value once. However, its contents can change (especially for arrays and objects).

### 4. Use CSS efficiently

When styling elements, use generic style rules first, then start being more specific as you go through each section of the HTML document. 

Start by [(a)]() defining variables in `:root` and [(b)]() adding global styles, then [(c)]() styling the look of a specific element (*e.g. style all buttons*) and then [(d)]() go to each area of your HTML and style whatever needs to be styled that was not covered by the general style rules. 

This is to prevent defining similar style rules for similar elements but in different places within the code. 

```css
/* A. Define variables first */
:root {
    --var1: 'this-value';
}

/* B. Define global styles */
* {
    padding: 0;
    margin: 0;

    /* More global styles */
}

/* C. Define element styles */
/* This will style all buttons */
button {
    color: white;
    background-color: black;
}

/* D. Define styles for specific areas */
nav > button.active {
    color: blue;
}
```

## Feedback Based on Codebase

1. `Competition-ladder-events.js`

Use the principles I suggested in the style guide at [Section 1: HTML optimizations](). Do not declare the variables separately, instead call them using `querySelector()` and iterate through them using `forEach()`. 

For each element, use `classList.toggle` and pass `tab === 'standing'` in the second parameter. 

To distinguish between each section, you can add a class to the element that specifies the area it is representing.

Here's an example:
```html
<nav>
    <a class="tab standing">Standing</a>
    <a class="tab bracket">Bracket</a>
</nav>

<div class="container">
    <section class="standing">

    </section>
    <section class="bracket">

    </section>
</div>
```
```js
function switchTab(tab) {
    const sections = document.querySelector('.container > section');
    const tabs = document.querySelector('nav > .tab');

    // Note: tab's value must match the class name specified in the HTML.
    sections.forEach(
        s => s.classList.toggle(
            'hide', 
            s.classList.contains(tab)
        )
    );

    tabs.forEach(
        t => t.classList.toggle(
            'active', 
            t.classList.contains(tab)
        )
    );
}
```

2. `curricula.html`
You can install the package `ApexCharts` using bun and import it in javascript.

```bash
bun add apexcharts
```
Import it in the javascript file:
```js
import ApexCharts from 'apexcharts';
```
> Note: Use `type="module"` in your `<script>` tag to allow imports in javascript!