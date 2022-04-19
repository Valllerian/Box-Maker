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
      <div >
        Width:{width} Height: {height} Color: {color}
      </div>
    </div>
  );
};

export default Box;
