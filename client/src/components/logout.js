import Axios from "axios";
import React from "react";

function logout() {
  Axios.get("/user/logout").then((res) => {
    console.log(res);
    window.location.href = "/";
  });
  return null;
}
export default logout;
