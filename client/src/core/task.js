import React, { useEffect, useState } from "react";
import ReusableHeading from "./Reusable/ReusableHeading";
import NavBar from "./Reusable/NavBar";
import Footer from "./Reusable/Footer";
import { getUsers, createaTask } from "./helper/TaskHelper";

const Task = ({ heading }) => {
  const [values, setValues] = useState({
    users: [],
    user_to_assign_task: "",
    name: "", //taskname
    type: "", //taskstatus
    error: "",
    loading: false,
    formData: "",
  });

  const {
    name,
    type,
    error,
    users,
    user_to_assign_task,
    loading,
    formData,
  } = values;

  const preload = () => {
    getUsers().then((data) => {
      if (data?.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, users: data, formData: new FormData() });
        console.log("USERS:", users);
      }
    });
  };

  useEffect(() => {
    preload();
    const M = window.M;
    M.AutoInit();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    createaTask(formData)
      .then((data) => {
        if (data?.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            type: "",
            loading: false,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value; //if photo field is there then photo-- else values
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <NavBar />
      <ReusableHeading title={heading} />

      <div className="container row center">
        <form className=" col s12">
          <div className="input-field row s4">
            <select onChange={handleChange("user_to_assign_task")}>
              <option disabled selected>
                Choose your option
              </option>
              {users.map((user, index) => (
                <option key={index} value={user._id}>
                  {user.name}
                </option>
              ))}
            </select>

            <label>User to assign Task</label>
          </div>
          <div className="input-field row s12">
            <input
              onChange={handleChange("name")}
              placeholder="Task Name"
              id="first_name"
              type="text"
              class="validate"
              value={name}
            />
            <label for="first_name">Task Name</label>
          </div>
          <div className="input-field row s4">
            <select onChange={handleChange("type")}>
              <option value="" disabled selected>
                Choose your option
              </option>
              <option value={type}>Done</option>
              <option value={type}>Pending</option>
            </select>

            <label>Task Type - Done/Pending</label>
          </div>

          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
            style={{ marginTop: "40px", marginBottom: "50px" }}
            onClick={onSubmit}
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Task;
