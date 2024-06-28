import Lottie from "react-lottie";
import animasiHeart from "./heart/Animation - 1718619051743.json";

export const HeartBeat = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animasiHeart,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} />;
};
