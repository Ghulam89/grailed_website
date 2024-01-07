import React, { useEffect, useState } from "react";
import Modal from "../../../components/modal";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { auth, provider, providerFacebook } from "../../../utils/config";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
const Register = ({ isModalOpen, setIsModalOpen, closeModal, openModal }) => {
  const [withEmail, setWithEmail] = useState(false);

  const [value, setValue] = useState();
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user);

      localStorage.setItem("email", data.user);
    });
  };
console.log(value);
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  
  return (
    <div>
      {withEmail === false ? (
        <>
          <Modal
              
            isOpen={isModalOpen}
            onClose={closeModal}
            className={" rounded-lg max-w-md"}
          >
            {/* Modal Content */}
            <div className="  text-center">
              <div className=" py-10 px-8">
                <h1 className="h2  font-medium">Create an Account</h1>
                <p className=" pt-4  pb-8 text-left">
                  By creating an account on Grailed you'll be able to buy, sell,
                  comment, and more.
                </p>

                <Button
                  Icons={<FaFacebookSquare size={20} className=" mr-2" />}
                  label={"Continue with Facebook"}
                  className={
                    "   mx-auto w-full text-md  bg-[#3B5998]  text-white py-2"
                  }
                />
                <Button
                  Icons={<FaApple size={20} className=" mr-2" />}
                  label={"Continue with Apple"}
                  className={
                    "   my-3 mx-auto w-full text-md   bg-black  text-white py-2"
                  }
                />

                <Button
                  onClick={handleClick}
                  Icons={<FcGoogle size={20} className="mr-2" />}
                  label={"Continue with Google"}
                  className={
                    " border    rounded-sm mx-auto w-full text-md    text-gray-400 py-2"
                  }
                />
                <hr className=" my-5" />
                <Button
                  onClick={() => setWithEmail(true)}
                  label={"create account with email"}
                  className={
                    " uppercase  mx-auto w-full text-sm  bg-black  text-white py-3"
                  }
                />

                <div>
                  <p className=" text-left mt-3">
                    Already have an accouunt?{" "}
                    <Link to={""} className=" border-b">
                      Log in
                    </Link>{" "}
                  </p>
                  <p className=" text-sm mt-7">
                    By creating an account, I accept Grailed's{" "}
                    <span className=" text-black font-semibold">
                      Terms of Service.
                    </span>{" "}
                    For Grailed's Privacy Policy,{" "}
                    <span className="text-black font-semibold">
                      click here.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Modal>
        </>
      ) : (
        <>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            className={" rounded-lg max-w-md"}
          >
            {/* Modal Content */}
            <div className="  text-center">
              <div className=" py-10 px-8">
                <h1 className="h2  font-medium">Create an Account</h1>

                <div className=" text-left mt-5">
                  <label className=" text-left font-semibold mb-3">
                    Email Address
                  </label>
                  <Input
                    placeholder={""}
                    className={"border w-full rounded-sm py-2"}
                  />
                </div>

                <div className=" text-left mt-5">
                  <label className=" text-left font-semibold mb-3">
                    Password
                  </label>
                  <Input
                    placeholder={""}
                    className={"border w-full rounded-sm py-2"}
                  />
                </div>

                <Button
                  label={"sign up"}
                  className={
                    " uppercase border w-full py-2 mt-5  text-gray-400 text-sm bg-gray-100"
                  }
                />

                <div>
                  <p className=" text-left mt-3">
                    Sign up for email to access sales, exclusive drops & more
                    from Grailed
                    <Link to={""} className=" border-b">
                      Log in
                    </Link>{" "}
                  </p>
                  <p className=" text-sm mt-7">
                    By creating an account, I accept Grailed's{" "}
                    <span className=" text-black font-semibold">
                      Terms of Service.
                    </span>{" "}
                    For Grailed's Privacy Policy,{" "}
                    <span className="text-black font-semibold">
                      click here.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Modal>
        </>
      )}
    </div>
  );
};

export default Register;
