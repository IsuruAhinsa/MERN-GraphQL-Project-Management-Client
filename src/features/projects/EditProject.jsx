import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UPDATE_PROJECT } from "../../mutations/projectMutations";
import { GET_PROJECT } from "../../queries/projectQueries";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { loading, data } = useQuery(GET_PROJECT, { variables: { id } });

  const [name, setName] = useState(data.project.name);
  const [description, setDescription] = useState(data.project.description);
  const [status, setStatus] = useState(() => {
    switch (data.project.status) {
      case "Not Started":
        return "NEW";
      case "In Progress":
        return "PROGRESS";
      case "Completed":
        return "COMPLETED";
      default:
        throw new Error(`Unknown status ${data.project.status}`);
    }
  });

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: id, name, description, status },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: id } }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !status) {
      return alert("All fields are required!");
    }

    updateProject(name, description, status);

    navigate(`/projects/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div>
          <h1 className="text-lg leading-6 font-medium text-gray-900">
            Add Client
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Let’s get started by filling in the information below to create your
            new project.
          </p>
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <div className="mt-1">
            <textarea
              rows={4}
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            id="status"
            name="status"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="NEW">Not Started</option>
            <option value="PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            Cancel
          </button>
          <button
            disabled={loading}
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Update Project
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditProject;
