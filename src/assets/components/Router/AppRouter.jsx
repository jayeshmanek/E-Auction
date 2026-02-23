import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ================= USER COMPONENTS =================
import { UserNavbar } from "../user/UserNavbar";
import { CarList } from "../user/CarList";
import { CarDetail } from "../user/CarDetail";
import { GetApiDemo } from "../user/GetApiDemo";
import { UseEffectDemo } from "../user/UseEffectDemo";

// ================= ADMIN COMPONENTS =================
import { AdminSidebar } from "../Admin/AdminSidebar";
import { AllUserList } from "../Admin/AllUserList";

// ================= AUTH PAGES =================
import Login from "../Login";
import Signup from "../Signup";

// ================= ROUTER CONFIG =================
const router = createBrowserRouter([

  // ---------- AUTH ROUTES ----------
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },

  // ---------- USER ROUTES ----------
  {
    path: "/user",
    element: <UserNavbar />,
    children: [
      { index: true, element: <CarList /> },   // default page
      { path: "carlist", element: <CarList /> },
      { path: "cardetail", element: <CarDetail /> },
      { path: "getapidemo1", element: <GetApiDemo /> },
      { path: "useeffectdemo", element: <UseEffectDemo /> },
    ],
  },

  // ---------- ADMIN ROUTES ----------
  {
    path: "/admin",
    element: <AdminSidebar />,
    children: [
      { index: true, element: <AllUserList /> },
      { path: "allusers", element: <AllUserList /> },
    ],
  },

  // ---------- 404 ROUTE ----------
  {
    path: "*",
    element: <h2 style={{ textAlign: "center" }}>404 Page Not Found</h2>,
  }

]);

// ================= ROUTER PROVIDER =================
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;