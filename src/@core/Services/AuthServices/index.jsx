import request from "../../config/httpService";

const Services = {
  login: (body) => {
    return request.post("/auth/signin", body);
  },
};
export default Services;
