/* DEBUG: CONTACT US PAGE */
import { useState } from "react";

const Alert = ({ responseAlert }) => {
  const [showAlert, setShowAlert] = useState(true);
  const { message, isError, type } = responseAlert;

  return (
    <>
      {showAlert ? (
        <div
          className={`text-white px-6 pt-1 pb-0 border-0 rounded relative mb-4 flex justify-center flex-wrap text-xl font-display ${
            isError ? "bg-red-500" : "bg-lightBlue-500"
          }`}
        >
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          &nbsp; &nbsp;
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">{type}</b>&nbsp; {message}
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Alert;
