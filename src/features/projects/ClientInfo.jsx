import React from "react";
import { useNavigate } from "react-router-dom";

const ClientInfo = ({ client, projectId }) => {
  const navigate = useNavigate();
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {client.name}
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            {client.email}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            {client.phone}
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate(`/projects/edit/${projectId}`)}
        type="button"
        className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Edit this Project
      </button>
    </div>
  );
};

export default ClientInfo;
