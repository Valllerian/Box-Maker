import React, { useState } from "react";
import Box from "../Box/Box";

const Main = () => {
  const [width, setWidth] = useState("");
  const [color, setColor] = useState("");
  const [height, setHeight] = useState("");
  const [boxArray, setBoxArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (width !== `` && height !== ``) {
      let currentBox = { width: width, height: height, color: color };
      setBoxArray([...boxArray, currentBox]);
      setWidth({ value: "" });
      setHeight({ value: "" });
      setColor({ value: "" });
    } else {
      alert("Type in width and height please!");
    }
  };

  const handleChangeColor = (e) => {
    setColor({ value: e.target.value });
  };

  const handleChangeWidth = (e) => {
    setWidth({ value: e.target.value });
  };

  const handleChangeHeight = (e) => {
    setHeight({ value: e.target.value });
  };
  
  const deleteButton = (e, height, width, color) => {
    e.preventDefault();
    let result = boxArray.find(({height, width, color}) => height === height && width === width && color === color )
    console.log(result)
    setBoxArray(boxArray.filter(box => box !== result)) 
  }

  return (
    <div>
      <div className="border border-gray-800 m-6 p-8  bg-[#fbdcb0] text-black rounded-xl shadow-2xl shadow-slate-500">
        <form className="mb-6 " onSubmit={(e) => handleSubmit(e)}>
          <div className="pb-4 ">
            <label className="mr-9 ">
              Width:
              <input
                type="text"
                name="width"
                value={width.value}
                onChange={(e) => handleChangeWidth(e)}
                className="ml-1 border border-gray-800 bg-[#e5f8ea] text-black rounded-md"
              />
            </label>
          </div>
          <div className="pb-4 ">
            <label className=" ">
              Height:
              <input
                type="text"
                name="height"
                value={height.value}
                onChange={(e) => handleChangeHeight(e)}
                className="ml-1 border border-gray-800 bg-[#e5f8ea] text-black rounded-md "
              />
            </label>
          </div>
          <div className="pb-4 ">
            <label className=" ">
              Color:
              <input
                type="text"
                name="height"
                value={color.value}
                onChange={(e) => handleChangeColor(e)}
                className="ml-1 border border-gray-800 bg-[#e5f8ea] text-black rounded-md "
              />
            </label>
          </div>
          <div className="flex justify-center items-center ">
            <input
              type="submit"
              value="Submit"
              className="p-3 bg-[#dac97d] hover:bg-[#db9e3d] active:bg-[#db9e3d] rounded-md  border border-gray-800 shadow-2xl shadow-slate-600"
            />
          </div>
        </form>
      </div>

      <div>
        {boxArray[0]
          ? boxArray.map((box) => {
              return (
                <div key={"hey"} className="flex justify-center items-center border border-gray-800 bg-[#FFFFFF]">
                  <Box
                    // use new library for uuid for each key!
                    height={box.height.value}
                    width={box.width.value}
                    color={box.color.value}
                  />
                  <button className="ml-6 mr-2 p-3 bg-[#9c0726] border border-gray-800" onClick={(e)=>deleteButton(e, box.height.value, box.width.value, box.color.value)}>X</button>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Main;
