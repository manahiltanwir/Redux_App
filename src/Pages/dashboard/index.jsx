import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../@core/Context/AuthContext.jsx";
import { example } from "../../store/example";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  useEffect(() => {
    dispatch(example());
  }, []);

  const { example: state } = useSelector(({ example }) => example);

  return (
    <>
      <div style={{ display: "flex" }} className="text-center">
        {/* {test?.map((item) => {
          return <h1 className="text-center">{item?.user?.first_name}</h1>;
        })} */}
        <button
          className="btn btn-danger"
          style={{ marginLeft: "auto" }}
          onClick={() => handleLogout(navigate)}
        >
          Logout
        </button>
        <button
          className="btn btn-danger"
          onClick={() => navigate("/teachers")}
        >
          Teachers
        </button>
      </div>
    </>
  );
};

export default DashboardPage;
