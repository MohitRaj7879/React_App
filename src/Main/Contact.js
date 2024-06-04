import "./Contact.css";
//importing useFormik hook from formik library
import { useFormik } from "formik";
//importing validation schema for form
import { Schema } from "./Schema";
// Importing various icons from react-icons library
import { FaAddressCard, FaRegUser } from "react-icons/fa";
import { MdDateRange, MdEmail } from "react-icons/md";
import { useState } from "react";
// Importing useSelector hook from react-redux to access the Redux store
import { useSelector } from "react-redux";
// Importing the ThemeToggle component from Redux store
import { ThemeToggle } from "../Redux/ThemeToggle";

function Contact() {
  // Using useState hook to manage submission state
  const [isSubmit, setIsSubmit] = useState(false);

  // Accessing the theme state from the Redux store
  const theme = useSelector((state) => {
    return state.theme.theme;
  });

  // Setting up formik for form handling
  const { errors, values, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        address: "",
        dateOfBirth: "",
      },
      validationSchema: Schema,
      onSubmit: (values, action) => {
        setIsSubmit(true);
      },
    });
  return (
    <>
      <div className="mainContainer" data-theme={theme}>
        {isSubmit && (
          <div className="modalContainer">
            <div className="modal">
              <div className="modalImageContainer">
                <img
                  src={require("../images/tic.jpg")}
                  className="modalImage"
                  alt="done"
                />
              </div>
              <div className="textContainer">
                <p className="text">Thank You</p>
              </div>
              <div className="userdetailsContainer">
                <FaRegUser class="userdetailsIcon" />
                <p className="userdetails">{values.name}</p>
              </div>
              <div className="userdetailsContainer">
                <MdEmail class="userdetailsIcon" />
                <p className="userdetails">{values.email}</p>
              </div>
              <div className="userdetailsContainer">
                <FaAddressCard class="userdetailsIcon" />
                <p className="userdetails">{values.address}</p>
              </div>
              <div className="userdetailsContainer">
                <MdDateRange class="userdetailsIcon" />
                <p className="userdetails">{values.dateOfBirth}</p>
              </div>
              <div className="buttonContainer">
                <button
                  type="submit"
                  id="submit"
                  className="submitbutton"
                  onClick={() => {
                    setIsSubmit(false);
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="formContainer">
          <div className="formHeaderContainer">
        
          <div className="formHeader">
            <h3 className="headerHeading">Welcome </h3>
          </div>
          <div className="toggleButton">
          <ThemeToggle />
        </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputContainer">
              <label htmlFor="name" className="inputLabel">
                Name
              </label>
              <input
                type="name"
                autoComplete="off"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Name"
              />
              {errors.name && touched.name ? (
                <p className="formError">{errors.name}</p>
              ) : null}
            </div>
            <div className="inputContainer">
              <label htmlFor="email" className="inputLabel">
                Email
              </label>
              <input
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <p className="formError">{errors.email}</p>
              ) : null}
            </div>
            <div className="inputContainer">
              <label htmlFor="address" className="inputLabel">
                Address
              </label>
              <input
                type="address"
                autoComplete="off"
                name="address"
                id="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Address"
              />
              {errors.address && touched.address ? (
                <p className="formError">{errors.address}</p>
              ) : null}
            </div>
            <div className="inputContainer">
              <label htmlFor="dataOfBirth" className="inputLabel">
                Date Of Birth
              </label>
              <input
                type="date"
                autoComplete="off"
                name="dateOfBirth"
                id="dateOfbirth"
                value={values.dateOfBirth}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Date Of Birth"
              />
              {errors.dateOfBirth && touched.dateOfBirth ? (
                <p className="formError">{errors.dateOfBirth}</p>
              ) : null}
            </div>
            <div className="inputContainer">
              <label htmlFor="image" className="inputLabel">
                Upload Files
              </label>
              <input type="file" name="image" id="image" />
            </div>
            <div className="buttonContainer">
              <button type="submit" id="submit" className="submitbutton">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Contact;
