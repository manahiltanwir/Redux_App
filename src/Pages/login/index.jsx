import React, { useContext } from "react";
import "./index.css";
import { AuthContext } from "../../@core/Context/AuthContext.jsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { handleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const { handleSubmit, register } = useForm();

  const onSubmit = async (body) => {
    await handleLogin(body, navigate);
  };

  return (
    <>
      <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center">
              <i
                className="fa fa-user-circle"
                style={{ fontSize: "110px" }}
              ></i>
            </h4>
            <div className="image"></div>
          </div>
          <div className="body-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type={"email"}
                  className="form-control"
                  {...register("email", { required: true, maxLength: 30 })}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type={"password"}
                  className="form-control"
                  {...register("password", { required: true, maxLength: 30 })}
                />
              </div>
              <button className="btn btn-secondary btn-block" type="submit">
                LOGIN
              </button>
              <div className="message">
                <div>
                  <input type="checkbox" onClick={() => localStorage.clear()} />{" "}
                  Remember ME
                </div>
                <div>
                  <a href="#">Forgot your password</a>
                </div>
              </div>
            </form>
            <div className="social">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
