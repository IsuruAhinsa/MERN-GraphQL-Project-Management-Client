import React from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_PROJECTS } from "../../queries/projectQueries";
import { Spinner } from "../../components/Spinner";
import ProjectCardItem from "./ProjectCardItem";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  const navigate = useNavigate();

  if (loading) return <Spinner />;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Projects</h1>
          <p className="mt-2 text-sm text-gray-700">
            A table of placeholder stock market data that does not make any
            sense.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            onClick={() => navigate("/add-project")}
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-pink-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 sm:w-auto"
          >
            Add Project
          </button>
        </div>
      </div>
      {data.projects.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-8">
          {data.projects.map((project) => (
            <ProjectCardItem key={project.id} project={project} />
          ))}
        </ul>
      ) : (
        <p>No Projects.</p>
      )}
    </div>
  );
};

export default Projects;
