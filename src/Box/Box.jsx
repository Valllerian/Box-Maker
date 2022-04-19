import React from "react";

const Box = (props) => {
  let width = props.width;
  let height = props.height;
  let color = props.color;

  return (
    <div className="p-4 flex justify-center items-center" >
      <div className="border border-gray-800 mr-3  "
        style={{
          backgroundColor: `${color}`,
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        {" "}
      </div>
      <div className="block">
          <p>Width: {width}px;</p>
          <p>Height: {height}px;</p>
          <p>Color: {color};</p>
      </div>
    </div>
  );
};

export default Box;
