
import React from "react";
import "./login.scss"
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

function Login({isShowLogin}) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, 
      [name]: value,
    });
  };
  const validationsSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationsSchema),
  });
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
  <div className={`${!isShowLogin?"active":""} show`}>
 <div className="main-container">
        <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter your Email"
            className="container"
            name="email"
            {...register("email")}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your password"
            className="container"
            name="password"
            {...register("email")}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="">
        <Link to=""> <button type="submit" className="submit-button">
            Login
          </button></Link>
         
        </div>
        <div>
          <p className="acc">
            Don't have an account?
            <span>
              {" "}
              <Link to="/register">Signup</Link>{" "}
            </span>
          </p>
        </div>
      </form>
        </div>
     
    </div>
  </div>

   
  );
}
export default Login;


