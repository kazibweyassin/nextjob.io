import { createBrowserRouter } from "react-router-dom";
import App from "../App";  
import Home from "../Pages/Home"; 
import CreateJob from "../Pages/CreateJob";  
import MyJobs from "../Pages/MyJobs";
import Salary from "../Pages/Salary";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../components/Login";

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
      { path: "updatejob", 
        element: <UpdateJob/>,
        ader: ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
      },
      { path: "login", 
        element: <Login/>,
      },





    ],
  },
]);

export default Router;
