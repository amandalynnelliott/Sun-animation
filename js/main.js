const slider = document.getElementById("slider");

const DURATION = 10;

const tl = new TimelineMax({
    repeat: -1,
    yoyo: true,
    onUpdate: () => {
        slider.value = tl.progress() * 100
    }
});
tl.add([
    TweenMax.to('.sun', DURATION, {
        y: window.innerHeight / 2
    }),
    TweenMax.to('.sun', DURATION, {
        backgroundColor: 'rgb(245,174,47)'
    }),
    TweenMax.to('.sky', DURATION / 2, {
        backgroundColor: 'rgb(255,122,122)'
    }),
    TweenMax.to('.ocean', DURATION, {
        backgroundColor: 'rgb(126,121,255)'
    }),
]);
tl.add(TweenMax.to('.sky', DURATION / 2, {
    backgroundColor: 'rgb(94,54,180)'
}));

function play() {
    tl.play();
}

function pause() {
    tl.pause();
}

function restart() {
    tl.restart();
}

slider.oninput = function (ev, ui) {
    tl.pause();
    tl.progress(ev.srcElement.value / 100);
}
