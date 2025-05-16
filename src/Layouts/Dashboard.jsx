import React from "react";
import Chatloader from "../components/Robot-Loader/ChatLoader";
import Loader from "../components/Normal-colorfull-Loader/Loader";
import ModalComponent from "../components/Custom-modal/Modal";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination/Pagination";

export default function Dashboard() {
  return (
    <>
      <div className="">
        <h1 className="text-5xl text-center font-bold">Chat Loder</h1>
        <Chatloader />
        <h1 className="text-5xl text-center font-bold">Rounded Loder</h1>
        <Loader />
        <h1 className="text-5xl text-center font-bold">
          Custom Modal Component
        </h1>
        <ModalComponent />
        <h1 className="text-5xl text-center font-bold">
          Animated Modal Component
        </h1>
        <Link to="/reset-password">
          <button className="bg-pink-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Animated set new password Modal
          </button>
        </Link>
        <h1 className="text-5xl text-center font-bold">
          Pagination Component with .......
        </h1>
        <p className="text-center">All Data show on console</p>
        <Pagination />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
