import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [firstname, SetFirstname] = useState("");
  const [Lastname, SetLastname] = useState("");
  const [mobile, SetMobile] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmpassord, setConfirmPassword] = useState("");
  const [radiobutton, setRadiobutton] = useState("");
  const [checkboxbutton, setCheckboxbutton] = useState(false);
  const [imagecontrol, setImagecontrol] = useState(null);

  // Showing Error in Valiation
  const [firstnameerror, SetFirstnameerror] = useState(false);
  const [lastnameerror, SetLastnameerror] = useState(false);
  const [mobileerror, SetMobileerror] = useState(false);
  const [emailerror, SetEmailerror] = useState(false);
  const [passworderror, SetPassworderror] = useState(false);
  const [confirmpassworderror, SetConfirmpassworderror] = useState(false);
  const [radiobuttonerror, setRadiobuttonerror] = useState(false);

  // Redirect To Other Page
  const Navigate = useNavigate();

  // Submit Button Validation
  function Login(e) {
    e.preventDefault();
    // Stored In Local Storage
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", Lastname);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmpassword", confirmpassord);
    localStorage.setItem("radiobutton", radiobutton);
    localStorage.setItem("checkboxbutton", checkboxbutton);

    if (
      firstname.length < 5 ||
      Lastname.length < 5 ||
      mobile.length < 10 ||
      password != confirmpassord
    ) {
      alert("Please Enter Valid Details");
    } else {
      alert("Submit Successfully...✔");
    }
  }
  // Function Use Validation's
  // First Name Validation
  function Firstnamehandler(e) {
    let item = e.target.value;
    if (item.length < 5) {
      SetFirstnameerror(true);
    } else {
      SetFirstnameerror(false);
    }
    SetFirstname(item);
  }

  // LastName Validation
  function Lastnamehandler(e) {
    let item = e.target.value;
    if (item.length < 4) {
      SetLastnameerror(true);
    } else {
      SetLastnameerror(false);
    }
    SetLastname(item);
  }

  // MobileNumber Validation
  function Mobilehander(e) {
    let item = e.target.value;
    if (item.length < 10) {
      SetMobileerror(true);
    } else {
      SetMobileerror(false);
    }
    SetMobile(item);
  }

  // Email Validations
  function Emailhandler(val) {
    if (val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      SetEmailerror(false);
    } else {
      SetEmailerror(true);
    }
    SetEmail(val);
  }

  // Password Validation
  function Passwordhandler(e) {
    let item = e.target.value;
    if (item.length < 8) {
      SetPassworderror(true);
    } else {
      SetPassworderror(false);
    }
    SetPassword(item);
  }

  // Confirm Password Validation
  function Confirmpasswordhandler(e) {
    let item = e.target.value;
    if (item != password) {
      SetConfirmpassworderror(true);
    } else {
      SetConfirmpassworderror(false);
    }
    setConfirmPassword(item);
  }

  // RadioButton Handler
  function Radiohandler(e) {
    let item = e.target.value;
    if (item == "male") {
      setRadiobuttonerror(true);
    } else if (item !== "male") {
      setRadiobuttonerror(true);
    } else {
      setRadiobuttonerror(false);
    }
    setRadiobutton(item);
  }

  // Checkbox Handler
  function Checkboxhandler(e) {
    setCheckboxbutton(e.target.value);
  }

  // File Handler
  function filehandler(image) {
    setImagecontrol(null);
    if (image.name.match(/\.(jpg|jpeg|png|gif|JPG|MOV)$/)) {
      const imageerror = "Files Yype Is Wrong";
      setImagecontrol(imageerror);
      return;
    }
    // Check size In Photos
    if (image.size > 5000000) {
      const imageerror = "File Size is Too Large";
      setImagecontrol(imageerror);
      return;
    }
    setImagecontrol(null);
  }

  return (
    <>
      <form onSubmit={Login}>
        <h1>Create Form</h1>
        {/* FirstName */}
        <input
          type="text"
          placeholder="Enter Your First Name"
          onChange={(e) => Firstnamehandler(e)}
        />
        First Name
        {firstnameerror ? <span>First Name is Not Valid</span> : ""}
        <br />
        <br />
        {/* LastName */}
        <input
          type="text"
          placeholder="Enter Your Last Name"
          onChange={(e) => Lastnamehandler(e)}
        />
        Last Name
        {lastnameerror ? <span>Last Name Is not Valid</span> : ""}
        <br />
        <br />
        {/* Mobile Number */}
        <input type="tel" placeholder="Enter Mo.No" onChange={Mobilehander} />
        Mo.No
        {mobileerror ? <span>Mobile Number Is Not Valid</span> : ""}
        <br />
        <br />
        {/* Email Id */}
        <input
          type="email"
          placeholder="Enter Your Email Id"
          onChange={(e) => Emailhandler(e.target.value)}
        />
        Email Address
        {emailerror ? <span>Email Is Not To Valid</span> : ""}
        <br />
        <br />
        {/* Password */}
        <input
          type="password"
          placeholder="Enter Your Pasword"
          onChange={(e) => Passwordhandler(e)}
        />
        Password
        {passworderror ? <span>Password Must Be A 8 Char</span> : ""}
        <br />
        <br />
        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Enter Your Confirm Pasword"
          onChange={(e) => Confirmpasswordhandler(e)}
        />
        Confirm Password
        {confirmpassworderror ? <span>Password is Not Same</span> : ""}
        <br />
        <br />
        Select Gender
        <br />
        {/* Radio Button */}
        <input
          type="radio"
          className="Male"
          value="male"
          name="gender"
          required
          style={{ width: "5%" }}
          onChange={(e) => Radiohandler(e)}
        />
        Male
        <br />
        {radiobuttonerror ? <span>is Reuried!</span> : ""}
        <input
          type="radio"
          className="feMale"
          value="female"
          name="gender"
          required
          style={{ width: "5%" }}
          onChange={(e) => Radiohandler(e)}
        />
        Female
        <br />
        {radiobuttonerror ? <span>is Required!</span> : ""}
        <br />
        Hobbies
        <br />
        <br />
        {/* Hobbies */}
        <input
          type="checkbox"
          name="Checkbox"
          style={{ width: "10%" }}
          value="cricket"
          onChange={(e) => Checkboxhandler(e)}
        />
        Cricket
        {checkboxbutton ? (
          <span>Checkbox is Checked </span>
        ) : (
          <span>Checkbox Is Not Checked</span>
        )}
        <input
          type="checkbox"
          name="Checkbox"
          value="Football"
          style={{ width: "10%" }}
          onChange={(e) => Checkboxhandler(e)}
        />
        Football
        <input
          type="checkbox"
          name="Checkbox"
          value="Learning"
          style={{ width: "10%" }}
          onChange={(e) => Checkboxhandler(e)}
        />
        Learning
        <br />
        <br />
        {/* New Profile */}
        <div>
          <label
            htmlFor="image"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            Image
          </label>
          <input
            type="file"
            className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
            onChange={(e) => filehandler(e.target.files[0])}
          />
          {imagecontrol && <span>{imagecontrol}</span>}
        </div>
        <button
          className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          onClick={Login}
        >
          Submit
        </button>
        <br />
        <br />
        <button
          type="submit"
          className="px-6 py-2 font-medium content-center  tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          onClick={() => Navigate("/home")}
        >
          Next Page
        </button>
      </form>
    </>
  );
}

export default Login;
