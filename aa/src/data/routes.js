// import Attendance from "../Pages/Attendance";
import Attendance from "../pages/Attendance";
import ClassDetails from "../pages/ClassDetails";
import Home from "../pages/Home";
// import Login from "../Pages/Login";

const routes = [
    {
        path: "/",
        Component: Home
    },
    {
        path: "/attendance",
        Component: Attendance
    },
    {
        path: "/class_details",
        Component: ClassDetails
    }

];

export default routes;