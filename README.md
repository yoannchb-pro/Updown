# Updown
Create an organized menu where the user can invert items

## Install

```html
<script type="text/javascript" src="./src/updown.js"></script>

<!-- OR WITH A CDN -->

<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yoannchb-pro/Updown/src/updown.js"></script>
```

## How to use ?

- Create a list of elements in html

```html
<ul>
    <li>
        <div>Sport</div>
        <div class="btn">
            <span class="up">up</span>
            <span class="down">down</span>
        </div>
    </li>
    <li>
        <div>Homework</div>
        <div class="btn">
            <span class="up">up</span>
            <span class="down">down</span>
        </div>
    </li>
    <li id="event-test">
        <div>Call of duty</div>
        <div class="btn">
            <span class="up">up</span>
            <span class="down">down</span>
        </div>
    </li>
</ul>
```

- Create updown instance

```js
const test = new Updown({
    el: "ul li", //elements list selector (necessary)
    up: ".up", //up button selector (necessary)
    down: ".down", //down button selector (necessary)
    defaultOrder: [3, 1, 2] //Create a custom default order (not necessary)
});

//custom event
document.querySelector('#event-test').addEventListener('moved-up', () => console.log("up"));
document.querySelector('#event-test').addEventListener('moved-down', () => console.log("down"));
```