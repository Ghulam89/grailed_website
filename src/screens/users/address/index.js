import React, { useState } from "react";
import Modal from "../../../components/modal";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { MdClose } from "react-icons/md";
import Input from "../../../components/Input";
const Address = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className=" flex justify-between items-center">
        <div>
          <h3 className="h3">Address</h3>
          <p>
            You have no saved addresses.{" "}
            <Link to={""} className=" text-black font-bold">
              Add a new address
            </Link>{" "}
          </p>
        </div>
        <div>
          <Button
            onClick={openModal}
            label={"+ Add  new address"}
            className={
              "border border-black py-2 font-bold uppercase text-xs text-black bg-white"
            }
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* Modal Content */}
        <div className="">
          <div className=" p-3 flex justify-between items-center">
            <div></div>
            <h1 className="capitalize h4">Add address</h1>
            <MdClose size={25} />
          </div>
          <hr />
          <div className=" p-5">
            <div className=" flex gap-5 flex-wrap">
              <div className=" w-full">
                <Input
                  label={"Name"}
                  placeholder={""}
                  className={"border  w-full  py-3"}
                />
              </div>

              <div className=" w-[60%]">
                <Input
                  label={"Street address"}
                  placeholder={""}
                  className={"border  w-full  py-3"}
                />
              </div>
              <div className=" w-[36%]">
                <Input
                  label={"Apt/Suite"}
                  placeholder={""}
                  className={"border  w-full  py-3"}
                />
              </div>
              <div className=" w-[60%]">
                <Input
                  label={"City"}
                  placeholder={""}
                  className={"border  w-full  py-3"}
                />
              </div>
              <div className=" w-[36%]">
                <Input
                  label={"State"}
                  placeholder={""}
                  className={"border  w-full  py-3"}
                />
              </div>
              <div className=" w-[60%]">
                <Input
                  label={"Country"}
                  placeholder={""}
                  className={"border  w-full  py-3"}
                />
              </div>
              <div className=" w-[36%]">
                <Input
                  label={"ZIP code"}
                  placeholder={""}
                  className={"border  w-full  py-3"}
                />
              </div>
            </div>

            <p className=" text-black text-xs py-4">
              This address will be set as your Default Return Address. You can
              always change this in Settings under Addresses.
            </p>
            <Button
              label={"save address"}
              className={" bg-black  uppercase text-white py-2 w-full"}
            />
          </div>
        </div>

        {/* Close button */}
        {/* <div className="bg-gray-100 p-4">
          <button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded">
            Close Modal
          </button>
        </div> */}
      </Modal>
    </div>
  );
};

export default Address;
