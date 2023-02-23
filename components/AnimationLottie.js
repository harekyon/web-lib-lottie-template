import React, { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  React.useEffect(() => {
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
      src="/data.json"
      style={{ width: "300px", height: "300px" }}
    ></lottie-player>
  );
}
