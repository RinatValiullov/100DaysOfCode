let container = document.querySelector('#container'),
    target = document.querySelector('.target');

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.intersectionRatio)
            target.style.background = '#ff0'
        }
    })
}, {
    root: null,
    threshold: [0.5, 0.75, 1]
});

observer.observe(target);
