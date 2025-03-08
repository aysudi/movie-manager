import React, { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import styles from "./style.module.css";

const Navbar = ({ isLogged, setIsLogged, mode, setMode }) => {
  return (
    <header className={mode == "dark" ? styles.dark : styles.light}>
      <div className="header w-5/6 m-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Movie Manager</h1>
        {isLogged == "false" ? (
          mode == "light" ? (
            <FaRegMoon
              onClick={() => {
                setMode("dark");
                localStorage.setItem("mode", JSON.stringify("dark"));
              }}
              className="text-[2.5rem] cursor-pointer p-2 rounded-sm hover:bg-gray-100"
            />
          ) : (
            <FiSun
              onClick={() => {
                setMode("light");
                localStorage.setItem("mode", JSON.stringify("light"));
              }}
              className="text-[2.5rem] text-yellow-300 cursor-pointer p-2 rounded-sm hover:bg-sky-800"
            />
          )
        ) : (
          <div className="logout-box flex items-center gap-6">
            {mode == "light" ? (
              <FaRegMoon
                onClick={() => {
                  setMode("dark");
                  localStorage.setItem("mode", JSON.stringify("dark"));
                }}
                className="icon text-[2.5rem] cursor-pointer p-2 rounded-sm hover:bg-gray-100"
              />
            ) : (
              <FiSun
                onClick={() => {
                  setMode("light");
                  localStorage.setItem("mode", JSON.stringify("light"));
                }}
                className="text-[2.5rem] text-yellow-300 cursor-pointer p-2 rounded-sm hover:bg-sky-800"
              />
            )}

            <button
              onClick={() => {
                setIsLogged("false");
                localStorage.setItem("isLogged", JSON.stringify("false"));
              }}
              className="logout rounded-xl p-[0.7rem_1rem] text-center text-lg font-bold border border-gray-200 cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
