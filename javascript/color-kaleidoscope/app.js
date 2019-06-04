let colors = [{
        color: "Goldenrod"
    },
    {
        color: "Green"
    },
    {
        color: "Khaki"
    },
    {
        color: "Teal"
    },
    {
        color: "Khaki"
    },
    {
        color: "Teal"
    },
    {
        color: "Orange"
    },
    {
        color: "Aquamarine"
    },
    {
        color: "Green"
    },
    {
        color: "Pink"
    },
    {
        color: "Yellow"
    },
    {
        color: "Pink"
    },
    {
        color: "Red"
    },
    {
        color: "Orange"
    },
    {
        color: "Yellow"
    },
    {
        color: "Goldenrod"
    },
    {
        color: "Turquoise"
    },
    {
        color: "Goldenrod"
    },
    {
        color: "Green"
    },
    {
        color: "Yellow"
    }
];

let item = document.querySelector(".random-color-block");
let msg = document.querySelector(".message");

let randomColor = array => {
    let randIdx = Math.floor(Math.random() * array.length);
    return array[randIdx].color;
};

let changeBg = (elem, amount = 1000) =>
    new Promise((res, rej) => {
        setTimeout(() => {
            elem.style.backgroundColor = randomColor(colors);
            msg.innerText = `Changed BG to "${elem.style.backgroundColor}" color after ${amount} ms`;
            res(`Changed BG to "${elem.style.backgroundColor}" color after ${amount} ms`);
        }, amount);
    });

async function doIt() {
    console.log("Start");
    let res1 = await changeBg(item, 2800);
    console.log(res1);
    let res2 = await changeBg(item, 2000);
    console.log(res2);
    let res3 = await changeBg(item, 1200);
    console.log(res3);
    let res4 = await changeBg(item, 1500);
    console.log(res4);
    let res5 = await changeBg(item, 900);
    console.log(res5);
    let res6 = await changeBg(item, 3200);
    console.log(res6);
    console.log("End");
}

doIt();
