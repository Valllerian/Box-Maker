import React, {useState} from "react";
import Box from "../Box/Box";

const Main = () => {
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [boxArray, setBoxArray] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
      
      };
    

    const handleChangeWidth = (e) => {
        setWidth({ value: e.target.value });
      };
    
      const handleChangeHeight = (e) => {
        setHeight({ value: e.target.value });
      };
  return (
  <div className="border border-gray-800 m-6 p-8  bg-[#6982d5] text-white rounded-xl shadow-2xl shadow-slate-500">
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
        <div className="flex justify-center items-center ">
          <input
            type="submit"
            value="Submit"
            className="p-3 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 rounded-md  border border-gray-800 shadow-2xl shadow-slate-600"
          />
        </div>
      </form>
      <div>
        {boxArray[0]
          ? boxArray.map((box) => {
              return (
                <div key={'hey'}>
                  <Box
                    // use new library for uuid for each key!
                    height={box.height.value}
                    width={box.width.value}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Main;
