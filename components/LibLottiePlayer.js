import React, { useEffect, useRef } from "react";

export default function LibLottiePlayer() {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      id="firstLottie"
      ref={ref}
      autoplay
      controls
      loop
      mode="normal"
      src="/lottieSample.json"
      style={{ width: "300px", height: "300px" }}
    ></lottie-player>
  );
}
