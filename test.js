const test = new Updown({
    el: "ul li",
    up: ".up",
    down: ".down",
    defaultOrder: [3, 1, 2]
});

document.querySelector('#event-test').addEventListener('moved-up', () => console.log("up"));
document.querySelector('#event-test').addEventListener('moved-down', () => console.log("down"));