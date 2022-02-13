// // click, mouseover, 
// btplay.addEventListener('click', function(){
//     btplay.disabled=true;
//     anime({
//         targets: "#bl1",
//         translateX: 109,
//         direction: 'alternate',
//         duration: 1500,
//     });
//     anime({
//         targets: "#bl2",
//         translateY: -175,
//         direction: 'alternate',
//         duration: 1500,

//     });
//     anime({
//         targets: "#bl3",
//         translateX: -109,
//         direction: 'alternate',
//         duration: 1500,

//     });
//     setTimeout(()=>{
//         btplay.disabled=false;
//     }, 3500)  
// })

var controlsProgressEl = document.querySelector('.block')

var tl = anime.timeline({
    direction: 'alternate',
    endDelay: 0,
    delay:0,
    duration: 1000,
    autoplay: false,
    easing:'steps(1000)', 
});

tl
.add({
    targets: "#bl1",
    translateX: 89,
})
.add({
    targets: "#bl2",
    translateY: -175,
}, 0)
.add({
    targets: "#bl3",
    translateX: -89,
}, 0)

// Loop animation
var Loop = document.querySelector("#loop");
Loop.addEventListener('click', function Name(){
    document.getElementById("loop").disabled = true;
    var stop = document.querySelector('#pause');
    var play = document.querySelector('#play');
    var tr = anime.timeline({
        direction: 'alternate',
        endDelay: 0,
        delay:0,
        duration: 1000,
        easing:'steps(1000)', 
        loop: true,
    });
    tr
    .add({
        targets: "#bl1",
        translateX: 89,
    })
    .add({
        targets: "#bl2",
        translateY: -175,
    }, 0)
    .add({
        targets: "#bl3",
        translateX: -89,
    }, 0)

    stop.addEventListener('click', tr.pause);
    play.addEventListener('click', tr.play);
    restart.addEventListener('click', tr.restart);

});

document.querySelector('#play').onclick = tl.play;
document.querySelector('#pause').onclick = tl.pause;
document.querySelector('#restart').onclick = tl.restart;
