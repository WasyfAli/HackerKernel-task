import React, { useState } from "react";
import ReusableHeading from "./Reusable/ReusableHeading";
import NavBar from "./Reusable/NavBar";
import Footer from "./Reusable/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { user, saveXlxs } from "./helper/UserHelper";

const User = ({ heading }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    error: "",
    success: "",
  });
  const { name, email, mobile, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    user({ name, email, mobile })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            mobile: "",
            error: "",
            success: true,
          });
          return toast("User Registered..!", { type: "success" });
        }
      })
      .catch(() => {
        return toast("Not able to register..!", { type: "error" });
      });
  };

  const onSubmitSecond = (event) => {
    event.preventDefault();

    saveXlxs()
      .then((data) => {
        if (data.error) {
          return toast("Error Occurred...!", { type: "error" });
        } else {
          return toast("File Created Successfully..!", { type: "success" });
        }
      })

      .catch(() => {
        return toast("Not able to convert..!", { type: "error" });
      });
  };

  const userForm = () => (
    <div className="container row center">
      <form className=" col s12">
        <div className="input-field row s4">
          <i className="material-icons prefix">account_circle</i>
          <input
            id="icon_prefix"
            onChange={handleChange("name")}
            type="text"
            className="validate"
            value={name}
          />
          <label for="icon_prefix">First Name</label>
        </div>

        <div class="input-field row s4">
          <i className="material-icons prefix">email</i>
          <input
            id="email"
            onChange={handleChange("email")}
            type="email"
            class="validate"
            value={email}
          />
          <label for="email">Email</label>
        </div>

        <div className="input-field row s4">
          <i className="material-icons prefix">phone</i>
          <input
            id="icon_telephone"
            onChange={handleChange("mobile")}
            type="tel"
            className="validate"
            value={mobile}
          />
          <label for="icon_telephone">Mobile Number</label>
        </div>
        <div className="col s6">
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={onSubmit}
            style={{ marginTop: "40px", marginBottom: "50px" }}
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
        <div className="col s6">
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={onSubmitSecond}
            style={{ marginTop: "40px", marginBottom: "50px" }}
          >
            Convert to Excel Format
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <ToastContainer position="top-right" />
      <NavBar />
      <ReusableHeading title={heading} />
      {userForm()}
      <Footer />
    </div>
  );
};

export default User;
