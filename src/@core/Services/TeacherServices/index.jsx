import request from "../../config/httpService";

const Services = {
  getAll: () => {
    return request.get("auth/teachers");
  },
};
export default Services;
