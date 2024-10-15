import { createBrowserRouter } from "react-router-dom";
import App from "../App";  
import Home from "../Pages/Home"; 
import CreateJob from "../Pages/CreateJob";  
import MyJobs from "../Pages/MyJobs";
import Salary from "../Pages/Salary";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    children: [
      { path: "/", 
        element: <Home /> },  
      { path: "post-job", 
        element: <CreateJob /> 
      },
      { path: "myjobs", 
        element: <MyJobs /> 
      },
      { path: "salaries", 
        element: <Salary /> 
      },


    ],
  },
]);

export default Router;
