import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_PROJECT } from "../queries/projectQueries";
import { Spinner } from "../components/Spinner";
import DeleteProject from "../features/projects/DeleteProject";
import ClientInfo from "../features/projects/ClientInfo";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  const { name, description, status, client } = data.project;

  return (
    <main>
      <ClientInfo client={client} projectId={id} />
      <div className="mx-auto max-w-2xl py-12">
        <div className="mb-8 flex justify-center">
          <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            <div className="font-semibold text-indigo-600 cursor-pointer inline-block">
              {status}
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {name}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => navigate("/")}
              type="button"
              className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Back to Home
            </button>
            <DeleteProject projectId={id} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
