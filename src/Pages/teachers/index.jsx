import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../@core/Context/AuthContext.jsx/index.jsx";
import { getAllteachers } from "../../store/teachers";

const TeachersPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  useEffect(() => {
    dispatch(getAllteachers());
  }, []);

  const { entities } = useSelector(({ teachers }) => teachers);

  return (
    <>
      <div className="text-center">
        {entities?.map((item) => (
          <h1 style={{ textAlign: "center" }}>{item?.first_name}</h1>
        ))}
        <button
          className="btn btn-danger"
          style={{ marginLeft: "auto" }}
          onClick={() => handleLogout(navigate)}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default TeachersPage;
