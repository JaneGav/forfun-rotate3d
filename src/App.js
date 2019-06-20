import React, { useEffect } from "react";
import $ from "jquery";
import _ from "lodash";
import { TweenMax } from "gsap";

import "./App.css";

function App() {
  useEffect(() => {
    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;
    const $iphone = $(".iphone");
    const $line1 = $(".line1");
    const $line2 = $(".line2");
    const $line3 = $(".line3");

    const rotation = _.throttle(({ clientX, clientY }) => {
      const Xdeg = (clientX - halfW) / 25;
      const Ydeg = (clientY - halfH) / 100;
      const delay = 0.5;

      TweenMax.to($line1, delay, {
        transform: `rotate3d(0, 1, 0, ${Xdeg}deg)`
      });
      TweenMax.to($line2, delay, {
        transform: `rotate3d(0, 1, 0, ${Xdeg * -1}deg)`
      });
      TweenMax.to($line3, delay, {
        transform: `rotate3d(0, 1, 0, ${Xdeg / 5}deg)`
      });
      TweenMax.to($iphone, delay, {
        transform: `rotate3d(1, 1, 0, ${Ydeg}deg)`
      });
    }, 1000 / 60);

    $(document).on("mousemove", rotation);
  });
  return (
    <div className="App">
      <div className="text-container">
        <div className="line1">
          <div className="text">RE</div>
          <div className="text" />
          <div className="text">ACH</div>
        </div>
        <div className="line2">
          <div className="text">GOA</div>
          <div className="text" />
          <div className="text">LS</div>
        </div>
        <div className="line3">
          <div className="text">WI</div>
          <div className="text" />
          <div className="text">TH</div>
        </div>
      </div>
      <div className="iphone" />
    </div>
  );
}

export default App;
