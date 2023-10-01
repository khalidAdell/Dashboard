import React from "react";
import { PhotoshopPicker, SketchPicker, SwatchesPicker } from "react-color";
import { useStateContext } from "../Context/ContextProvider";
import Header from "../Components/Header";

const ColorPicker = () => {
  let { mainColor, setMainColor } = useStateContext();
  const handleColor = (color) => {
    setMainColor(color.hex);
  };
  return (
    <div className="m-2 mt-10 pt-8 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header content="Page" title="Color Picker" />
      <div className="flex flex-wrap items-start justify-center gap-8 ">
        <div>
          <h2
            className="mb-3 font-semibold text-center text-white"
            style={{ backgroundColor: mainColor }}
          >
            Sketch Picker
          </h2>
          <SketchPicker
            color={mainColor}
            onChangeComplete={handleColor}
            width="300px"
            height="350px"
          />
        </div>
        <div>
          <h2
            className="mb-3 font-semibold text-center text-white"
            style={{ backgroundColor: mainColor }}
          >
            Swatches Picker
          </h2>
          <SwatchesPicker
            color={mainColor}
            onChangeComplete={handleColor}
            width="300px"
            height="350px"
          />
        </div>
        <div>
          <h2
            className="mb-3 font-semibold text-center text-white"
            style={{ backgroundColor: mainColor }}
          >
            Photoshop Picker
          </h2>
          <PhotoshopPicker color={mainColor} onChangeComplete={handleColor} />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
