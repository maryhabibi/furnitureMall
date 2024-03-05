
import { timeline, animate, stagger, spring, scroll } from "motion";

import { bounce, circOut } from "./easing.js";




// test();
// function test(){
//     alert("test");
// }


setTimeout(() => {
  const h1 = document.querySelector("h1")

  animate(
    (progress) => h1.innerHTML = Math.round(progress * 100),
    { duration: 6, easing: "ease-out" }
  )
}, 1000)



// Scroll
scroll(animate(".progress", { scaleX: [0, 1] }));

document.querySelectorAll("section").forEach((section) => {
  var classValue = section.className;

  if (classValue == "scroll-section") {
    const header = section.querySelector("h2");
    scroll(animate(header, { y: [-400, 400] }), {
      target: header
    });
  }

});


// BALL
timeline(
  [
    [".ball", { y: 200 }, { easing: circOut, duration: 0.1, delay: 0.1 }],
    [".ball", { y: 0 }, { easing: bounce, duration: 3 }]
  ],
  { repeat: Infinity }
);


// stager


timeline(
  [
    [".box",{ x: window.innerWidth/4 },{ delay: stagger(0.1), duration: 0.5, easing: [.22, .03, .26, 1]}],
  [".box",{ x: 2*window.innerWidth/4 },{ delay: stagger(0.1), duration: 1.1, easing: [.22, .03, .26, 1]}],
  // [".box",{ x: 3*window.innerWidth/4 },{ delay: stagger(0.1), duration: 1.1, easing: [.22, .03, .26, 1]}],
  // [".box",{ x: window.innerWidth },{ delay: stagger(0.1), duration: 1.1, easing: [.22, .03, .26, 1]}],
  ],
  { repeat: Infinity }
);
