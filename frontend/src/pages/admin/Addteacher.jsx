import React, { useEffect } from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaEnvelope,
  FaPhone,
  FaIdCard,
  FaAddressCard,
  FaMale,
  FaUserShield,
  FaAddressBook,
} from "react-icons/fa";
import Main from "../../components/main/Main";
import BgInput from "../../components/inputs/Input";
// import { useStudentRegister } from "../../context/student";
// import { useClassRegister } from "../../context/class";
import { FaUserPlus } from "react-icons/fa6";

const Addteacher = () => {
  // const { handleStudentChange, handleStudentRegister, state,handleStudentSelectChange } =
  //   useStudentRegister();
  // const { getAllClassFun } = useClassRegister();
  // const { allClasses } = useClassRegister().state;
  // const { stuObj } = state;
  // const {
  //   fname,
  //   lastname,
  //   dob,
  //   // gender,
  //   email,
  //   phone,
  //   address,
  //   grade,
  //   parentname,
  //   parentcontact,
  //   guardianaddress,

  // } = stuObj;

  useEffect(() => {
    getAllClassFun();
  }, []);
  return (
    <Main>
      <div className="min-h-screen flex flex-col">
        <div className="min-h-screen flex items-center justify-center py-2 px-1 sm:px-8 lg:px-2">
          <div className=" w-full bg-white shadow-md rounded-md p-4 sm:p-6 lg:p-8 space-y-6">
            <h2 className="text-xl  text-center text-blue-600 flex justify-center items-center gap-4">
              REGISTER TEACHER{" "}
              <sup>
                <FaUserPlus className="text-xl" />
              </sup>
            </h2>
            <hr />

            <form onSubmit={handleStudentRegister} className="space-y-4">
              {/* class and seection  */}
              <div className=" flex flex-wrap justify-between  gap-[1px] ">
                <div>
                  <h4>Class Teacher of which Class</h4>
                  <div className="w-[15rem] border border-black">
                    <select
                      name="stuclass"
                      className="w-full p-2"
                      onChange={handleStudentSelectChange}
                    >
                      <option>SELECT CLASS</option>
                      {[
                        ...new Set(
                          (allClasses || [])?.map((curEle) => curEle?.classname)
                        ),
                      ].map((classname) => (
                        <option
                          key={classname}
                          value={classname}
                          className="uppercase"
                        >
                          {classname}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <h4>Which Section</h4>
                  <div className="w-[15rem] border border-black">
                    <select
                      name="section"
                      className="w-full p-2"
                      onChange={handleStudentSelectChange}
                    >
                      <option>SELECT SECTION</option>
                      {[
                        ...new Set(
                          (allClasses || []).map((curEle) => curEle.section)
                        ),
                      ].map((section) => (
                        <option
                          key={section}
                          value={section}
                          className="uppercase"
                        >
                          {section}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <h4>Not a Class Teacher</h4>
                  <div className="w-[15rem] border border-black">
                    <select
                      name="session"
                      className="w-full p-2"
                      onChange={handleStudentSelectChange}
                    >
                      <option>SELECT</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                </div>
                <div>
                  <h4>Appointed as</h4>
                  <div className="w-[15rem] border border-black">
                    <select
                      name="session"
                      className="w-full p-2"
                      onChange={handleStudentSelectChange}
                    >
                      <option>SELECT</option>
                      <option value="yes">PGT</option>
                      <option value="yes">PGT</option>
                      <option value="yes">PGT</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <BgInput
                  icon={<FaUser className="mr-2 text-indigo-500" />}
                  lName="First Name"
                  type="text"
                  name="fname"
                  placeholder="Enter First name"
                  value={fname}
                  onChange={handleStudentChange}
                />
                <BgInput
                  icon={<FaUser className="mr-2 text-indigo-500" />}
                  lName="Last Name"
                  type="text"
                  name="lastname"
                  placeholder="Enter Last name"
                  value={lastname}
                  onChange={handleStudentChange}
                />
              </div>

              {/* Date of Birth and Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <BgInput
                  icon={<FaCalendarAlt className="mr-2 text-indigo-500" />}
                  lName="Date of Joining"
                  type="date"
                  name="dob"
                  value={dob}
                  onChange={handleStudentChange}
                />
                <BgInput
                  icon={<FaEnvelope className="mr-2 text-indigo-500" />}
                  lName="Email"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={handleStudentChange}
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <BgInput
                  icon={<FaPhone className="mr-2 text-indigo-500" />}
                  lName="Phone No"
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={handleStudentChange}
                />
                <BgInput
                  icon={<FaAddressCard className="mr-2 text-indigo-500" />}
                  lName="Address"
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  value={address}
                  onChange={handleStudentChange}
                />
              </div>

              {/* Parent Name and Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <BgInput
                  icon={<FaUser className="mr-2 text-indigo-500" />}
                  lName="Parent Name"
                  type="text"
                  name="parentname"
                  placeholder="Enter Parent Name"
                  value={parentname}
                  onChange={handleStudentChange}
                />
                <BgInput
                  icon={<FaPhone className="mr-2 text-indigo-500" />}
                  lName="Other Contact Deatails"
                  type="tel"
                  name="parentcontact"
                  placeholder="Enter Other  contat Details"
                  value={parentcontact}
                  onChange={handleStudentChange}
                />
              </div>

              {/* Guardian Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <BgInput
                  icon={<FaUser className="mr-2 text-indigo-500" />}
                  lName="Adhar Number"
                  type="text"
                  name="parentname"
                  placeholder="Enter Parent Name"
                  value={parentname}
                  onChange={handleStudentChange}
                />
                <BgInput
                  icon={<FaPhone className="mr-2 text-indigo-500" />}
                  lName="Year Of experience"
                  type="tel"
                  name="parentcontact"
                  placeholder="Year Of experience"
                  value={parentcontact}
                  onChange={handleStudentChange}
                />
              </div>
              {/* Guardian Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <BgInput
                  icon={<FaUser className="mr-2 text-indigo-500" />}
                  lName="Salary Given"
                  type="text"
                  name="parentname"
                  placeholder="Enter Parent Name"
                  value={parentname}
                  onChange={handleStudentChange}
                />
                <BgInput
                  icon={<FaPhone className="mr-2 text-indigo-500" />}
                  lName="Email Or Id"
                  type="tel"
                  name="parentcontact"
                  placeholder="Year Of experience"
                  value={parentcontact}
                  onChange={handleStudentChange}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <BgInput
                  icon={<FaUser className="mr-2 text-indigo-500" />}
                  lName="Password"
                  type="text"
                  name="parentname"
                  placeholder="Enter Parent Name"
                  value={parentname}
                  onChange={handleStudentChange}
                />
                <BgInput
                  icon={<FaPhone className="mr-2 text-indigo-500" />}
                  lName="Year Of experience"
                  type="tel"
                  name="parentcontact"
                  placeholder="Year Of experience"
                  value={parentcontact}
                  onChange={handleStudentChange}
                />
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="border w-full placeholder:text-center text-xl"
                  placeholder="Any other remark/responsibility"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-3 py-2 bg-blue-900 text-white font-medium rounded-sm hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500"
              >
                Register Student
              </button>
            </form>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Addteacher;
