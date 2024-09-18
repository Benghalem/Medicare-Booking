import React, { useState } from "react";

/* import img and icons */
import signImg from "@assets/images/signup.gif";
import avatar from "@assets/images/doctor-img01.png";
import { Link } from "react-router-dom";

const Signup = () => {
  /* set form data */
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });

  /* handle form input */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* handle file input */
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target?.files?.[0];

    console.log(file);
  };

  /* handle form submit */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // later we will send form data to server

    console.log(formData);
  };
  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ====== img box ===== */}
          <div className="heading lg:block bg-primaryColore rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* ====== sign up form ===== */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColore">account</span>
            </h3>

            <form onSubmit={handleSubmit}>
              {/* ==== name and email ==== */}
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full py-3  border-b border-solid border-[#0066ff61] focus:outline-none
              focus:border-b-primaryColore text-[16px] leading-7 text-headingColor 
              placeholder:text-textColore cursor-pointer"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full py-3  border-b border-solid border-[#0066ff61] focus:outline-none
              focus:border-b-primaryColore text-[16px] leading-7 text-headingColor 
              placeholder:text-textColore cursor-pointer"
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full py-3  border-b border-solid border-[#0066ff61] focus:outline-none
              focus:border-b-primaryColore text-[16px] leading-7 text-headingColor 
              placeholder:text-textColore cursor-pointer"
                />
              </div>
              {/* ==== role and gender ==== */}
              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-textColore bg-[#fff] font-semibold text-[15px] leading-7 px-4 py-3
                    focus:outline-none"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Gender:
                  <select
                    name="role"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-textColore bg-[#fff] font-semibold text-[15px] leading-7 px-4 py-3
                    focus:outline-none"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>
              </div>
              {/* ==== upload photo box ==== */}
              <div className="mb-5 flex items-center gap-3">
                <figure
                  className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColore
                flex items-center justify-center"
                >
                  <img src={avatar} alt="" className="w-full rounded-full" />
                </figure>

                <div className="relative w-[140px] h-[50px]">
                  <input
                    type="file"
                    name="photo "
                    id="customFile"
                    onChange={handleFileChange}
                    accept=".jpg, .jpeg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex 
                  items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden 
                  bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload photo
                  </label>
                </div>
              </div>
              {/* ==== sign up button ==== */}
              <div className="mb-7">
                <button
                  type="submit"
                  className="w-full bg-primaryColore text-[#fff] text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                  Sign Up
                </button>
              </div>
              <p className="mt-5 text-textColore text-center ">
                Already have an account?
                <Link
                  to="/signup"
                  className="text-primaryColore font-medium ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
