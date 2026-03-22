import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ================= USER COMPONENTS =================
import { UserNavbar } from "../user/UserNavbar";
import CarList from "../HomePage/CarList";
import PropertyList from "../HomePage/PropertyList";
import OldProperty from "../HomePage/oldproperties";
import Upcoming from "../HomePage/upcoming";

// ✅ CATEGORY PAGES (FINAL PATH FIXED)
import Residential from "../Category Auctions/Residential";
import Commercial from "../Category Auctions/Commercial"; // ✅ FINAL
import Industrial from "../Category Auctions/Industrial";
import Scrap from "../Category Auctions/Scrap";
import Gold from "../Category Auctions/Gold";

import { MyDashboard } from "../user/Dashboard/MyDashboard";
import { EditProfile } from "../user/Dashboard/EditProfile";
import { ChangePassword } from "../user/Dashboard/ChangePassword";
import Home from "../user/Dashboard/Home";
import AboutUs from "../user/AboutUs";
import Settings from "../user/Settings";

// ================= ADMIN COMPONENTS =================
import { AdminSidebar } from "../Admin/AdminSidebar";
import { AllUserList } from "../Admin/AllUserList";

// ================= AUTH =================
import Login from "../Login";
import Signup from "../Signup";

// ================= ROUTER =================
const router = createBrowserRouter([

  // ---------- AUTH ----------
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },

  // ---------- USER ----------
  {
    path: "/user",
    element: <UserNavbar />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },

      // 🚗 CAR
      { path: "carlist", element: <CarList /> },

      // 🏠 PROPERTY
      { path: "propertylist", element: <PropertyList /> },
      { path: "oldproperty", element: <OldProperty /> },
      { path: "upcoming", element: <Upcoming /> },

      // 🔥 CATEGORY PAGES
      { path: "residential", element: <Residential /> },
      { path: "commercial", element: <Commercial /> }, // ✅ WORKING
      { path: "industrial", element: <Industrial /> },
      { path: "scrap", element: <Scrap /> },
      { path: "gold", element: <Gold /> },

      // 📊 DASHBOARD
      { path: "dashboard", element: <MyDashboard /> },
      { path: "MyDashboard", element: <MyDashboard /> },

      { path: "editprofile", element: <EditProfile /> },
      { path: "changepassword", element: <ChangePassword /> },

      // ⚙ SETTINGS
      { path: "settings", element: <Settings /> },

      // ℹ ABOUT
      { path: "about", element: <AboutUs /> },
      { path: "AboutUs", element: <AboutUs /> },
    ],
  },

  // ---------- ADMIN ----------
  {
    path: "/admin",
    element: <AdminSidebar />,
    children: [
      { index: true, element: <AllUserList /> },
      { path: "allusers", element: <AllUserList /> },
    ],
  },

  // ---------- 404 ----------
  {
    path: "*",
    element: <h2 style={{ textAlign: "center" }}>404 Page Not Found</h2>,
  }

]);

// ================= PROVIDER =================
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;