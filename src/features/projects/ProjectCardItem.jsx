import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCardItem = ({ project }) => {
  const { id, name, status, client } = project;
  const navigate = useNavigate();
  return (
    <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm font-medium truncate">
              {name}
            </h3>
            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
              {status}
            </span>
          </div>
          <p className="mt-1 text-gray-500 text-sm truncate">{client.name}</p>
        </div>
        <button
          onClick={() => navigate(`/projects/${id}`)}
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Show
        </button>
      </div>
      <div></div>
    </li>
  );
};

export default ProjectCardItem;
