import { Outlet } from "react-router-dom";
import Nabvars from "../Page/Shired/Nabvar/Nabvars";


const Main = () => {
  return (
    <div>
      <Nabvars></Nabvars>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;