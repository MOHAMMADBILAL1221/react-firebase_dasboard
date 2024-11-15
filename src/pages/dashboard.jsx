import React from "react";
import { Link, Route, Routes } from "react-router-dom";

// import Post from "../dashboardpages/posts";
import Signupshow from "../components/signupshow";
import Postshow from "../components/postshow";
import Commentshow from "../components/commentshow";
import Todoshow from "../components/todoshow";
import Todoform from "../components/todoform";

function Dashboard() {
  return (
    <>
      <div className="h-screen grid grid-cols-12 bg-gray-100">
        {/* Sidebar */}
        <div className="col-span-2 p-6 bg-green-800 text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
          <nav className="space-y-4 ">
           
            <Link to={"signupshow"}>
              <button className="w-full py-2 px-4 my-2 bg-green-600 hover:bg-green-700 rounded-lg transition duration-200 text-left">
                Signup users  
              </button>
            </Link>
            <Link to={"postshow"}>
              <button className="w-full py-2 px-4 my-2 bg-green-600 hover:bg-green-700 rounded-lg transition duration-200 text-left">
                Posts   
              </button>
            </Link>
            <Link to={"commentshow"}>
              <button className="w-full py-2 px-4 my-2 bg-green-600 hover:bg-green-700 rounded-lg transition duration-200 text-left">
                Comments   
              </button>
            </Link>
            <Link to={"todoshow"}>
              <button className="w-full py-2 px-4 my-2 bg-green-600 hover:bg-green-700 rounded-lg transition duration-200 text-left">
               FAQ's   
              </button>
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="col-span-10 p-8 bg-white shadow-lg overflow-y-auto">
          <Routes>
           
            <Route path="/signupshow" element={<Signupshow/>} />
            <Route path="/postshow" element={<Postshow/>} />
            <Route path="/commentshow" element={<Commentshow />} />
            <Route path="/todoshow" element={<Todoshow/>} />
            <Route path="/todoform" element={<Todoform />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
