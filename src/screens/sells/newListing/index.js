import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../../components/Input";
import Option from "../../../components/Option";
import { IoCameraOutline } from "react-icons/io5";
import Button from "../../../components/Button";
const NewListing = () => {
  const options = ["New/Never  Worn", "Gently Used", "Used", "Very Worn"];

  const handleSelect = (selectedOptions) => {
    console.log("Selected options:", selectedOptions);
    // You can perform any other actions with the selected options
  };
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  return (
    <>
      <div className=" w-[60%] mx-auto py-14">
        <div className=" flex items-center justify-between">
          <h3 className="h3">Add a new listing</h3>
          <Link to={""} className="text-[#0000FF]  font-bold text-sm">
            HOW TO SELL GUIDE
          </Link>
        </div>

        <div>
          {/* item name */}

          <div className=" pb-5 my-5">
            <label className=" text-black font-bold text-xl">Item Name</label>

            <Input
              placeholder={"item name"}
              className={"border    w-96 mt-4"}
            />
          </div>

          {/* color */}

          <div className=" pb-5">
            <label className=" text-black font-bold text-xl">Color</label>

            <Input
              placeholder={'Designer color name, i.e. "Frozen Yellow"'}
              className={"border    w-96 mt-4"}
            />
          </div>

          {/* conditions */}

          <div className=" pb-5 my-5">
            <label className=" text-black font-bold text-xl">Condition</label>

            <Option options={options} onSelect={handleSelect} />
          </div>

          {/* description */}

          <div className=" pb-5 my-5">
            <label className=" text-black font-bold text-xl">Description</label>

            <textarea
              rows={7}
              className=" w-full border"
              placeholder=""
            ></textarea>
          </div>

          <label className=" text-black font-bold text-xl">Tags</label>

          <div  className=" flex  mt-5 flex-wrap border border-black p-5">
      <div className=" flex flex-wrap items-center gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="tag border items-center  uppercase text-sm font-bold flex gap-1  py-1 border-black px-4">
            {tag}
            <button className=" bg-black  text-white w-4 flex justify-center items-center h-4 rounded-full" onClick={() => handleTagRemove(tag)}>&times;</button>
          </span>
        ))}
      </div>
      <input
        className=""
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Add tags"
      />
    </div>
          {/* Photos */}

           <div className=" pb-5 my-10">
            <label className=" text-black font-bold text-xl">Photos</label>

            {/* <Link to={''} className='text-[#0000FF]  font-bold text-sm'>HOW TO SELL GUIDE</Link> */}

            <div className=" w-full  md:flex block gap-5">
              <div className="">
                <div className=" flex justify-center items-center   w-60 h-80 bg-slate-50">
                  <IoCameraOutline size={40} />
                </div>
              </div>
              <div>
                <div className=" grid item1 col-span-2  w-full  md:grid-cols-4  grid-cols-3 bg-white gap-2">
                  <div className=" flex justify-center items-center     w-32 h-40 bg-slate-50">
                    <IoCameraOutline size={30} />
                  </div>
                  <div className=" flex justify-center items-center   w-32 h-40 bg-slate-50">
                    <IoCameraOutline size={30} />
                  </div>
                  <div className=" flex justify-center items-center   w-32 h-40 bg-slate-50">
                    <IoCameraOutline size={30} />
                  </div>
                  <div className=" flex justify-center items-center    w-32 h-40 bg-slate-50">
                    <IoCameraOutline size={30} />
                  </div>
                  <div className=" flex justify-center items-center    w-32 h-40 bg-slate-50">
                    <IoCameraOutline size={30} />
                  </div>
                  <div className=" flex justify-center items-center    w-32 h-40 bg-slate-50">
                    <IoCameraOutline size={30} />
                  </div>
                  <div className=" flex justify-center items-center    w-32 h-40 bg-slate-50">
                    <IoCameraOutline size={30} />
                  </div>
                  <div className=" flex justify-center items-center    w-32 h-40 bg-slate-50">
                    <IoCameraOutline size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="  flex   justify-between items-center container  fixed  w-full z-50  bottom-0 h-16 bg-white shadow-xl">
        <div></div>
        <div className=" flex gap-2">
          <div>
            <Button
              label={"save as draft"}
              className={" bg-white border py-2 text-black uppercase"}
            />
          </div>
          <div>
            <Button
              label={"publish"}
              className={" bg-black py-2 text-white uppercase"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewListing;
