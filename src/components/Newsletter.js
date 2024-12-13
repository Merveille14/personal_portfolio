import { useState, useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || email.indexOf("@") === -1) {
      setEmailError("Please enter a valid email.");
      return;
    }

    setEmailError("");
    onValidated({ EMAIL: email });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold">
        Subscribe to our Newsletter<br /> & Never miss latest updates
      </h3>
      {status === "sending" && (
        <div className="mt-4 text-yellow-500 flex items-center">
          <FaCheckCircle className="mr-2" />
          <span>Sending...</span>
        </div>
      )}
      {status === "error" && (
        <div className="mt-4 text-red-500 flex items-center">
          <FaExclamationCircle className="mr-2" />
          <span>{message}</span>
        </div>
      )}
      {status === "success" && (
        <div className="mt-4 text-green-500 flex items-center">
          <FaCheckCircle className="mr-2" />
          <span>{message}</span>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-2/3"
          />
          {emailError && <div className="text-red-500 mt-2 md:mt-0">{emailError}</div>}
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
