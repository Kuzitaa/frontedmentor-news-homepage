# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [solution](https://github.com/Kuzitaa/frontedmentor-news-homepage)
- Live Site URL: [live site](https://kuzitaa.github.io/frontedmentor-news-homepage/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- Responsive design
- BEM methodology

### What I learned

I discovered how the background darkens when you open a menu

```html
<div class="darken inactive"></div>
```
```css
.darken{
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: rgba(0, 0, 0, 0.5);
}
.inactive {
    display: none;
}
```
The 'Darken' class darkens the background. And the inactive class hides an HTML element
```js
const darken = document.querySelector('.darken')

darken.classList.toggle('inactive')
```
With the 'Classlist.toggy' the inactive class is activated or disabled. In that way, the background darkens only when the menu opens
