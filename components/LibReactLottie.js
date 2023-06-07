import React, { useEffect, useRef } from "react";
import lottieSample from "../public/lottieSample.json";
import Lottie from "lottie-react";
export default function LibReactLottie() {
  const ref = useRef(null);

  useEffect(() => {
    // import("lottie-react");
    ref.current.play();
  });
  return (
    // <lottie-player
    //   id="firstLottie"
    //   ref={ref}
    //   autoplay
    //   controls
    //   loop
    //   mode="normal"
    //   src="/lottieSample.json"
    //   style={{ width: "300px", height: "300px" }}
    // ></lottie-player>
    <Lottie
      lottieRef={ref}
      animationData={lottieSample}
      loop="false"
      autoplay={false}
      style={{ width: "300px", height: "300px" }}
    ></Lottie>
  );
}
