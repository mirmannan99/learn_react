import { useState } from "react";
export default function LightBulb() {
  //create a button to turn the ligth on off
  // the button for on/off should be same  and should change color to green when turned on and to red when turned off
  // also the text for the button should change

  const [currentImage, setCurrentImage] = useState("/images/light-off.png");
  const [currentButtonText, setButtonText] = useState("Light on");
  const [currentButtonColor, setButtonColor] = useState("red");

  const changeImage = () => {
    setCurrentImage((prev) =>
      prev === "/images/light-off.png"
        ? "/images/light-on.png"
        : "/images/light-off.png"
    );
  };
  const changeText = () => {
    setButtonText((prev) => (prev === "Light on" ? "Light off" : "Light on"));
    setButtonColor((prev) => (prev === "red" ? "green" : "red"));
  };

  return (
    <div>
      {/* {" "} */}
      <img src={currentImage} width="100px" alt="" />
      <br />
      <button
        style={{ backgroundColor: currentButtonColor }}
        onClick={() => {
          changeImage();
          changeText();
        }}
      >
        {currentButtonText}
      </button>
    </div>
  );
}
