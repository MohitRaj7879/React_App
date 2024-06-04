import * as Yup from "yup";
export const Schema = Yup.object({
  name: Yup.string().min(3).max(20).required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("This field is required"),
  address: Yup.string().required("This field is required"),
  dateOfBirth: Yup.date()
    .required("Date Of Birth is required")
    .min(new Date(2000, 0, 1), "Date must be after  January 1,2000")
    .max(new Date(), "Date Cannot be in the future"),
});
