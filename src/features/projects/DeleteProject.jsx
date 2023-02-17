import React from "react";
import { useNavigate } from "react-router-dom";
import { DELETE_PROJECT } from "../../mutations/projectMutations";
import { GET_PROJECTS } from "../../queries/projectQueries";
import { useMutation } from "@apollo/client";

const DeleteProject = ({ projectId }) => {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    refetchQueries: [{ query: GET_PROJECTS }],
    onCompleted: () => navigate("/"),
  });

  return (
    <button
      onClick={deleteProject}
      type="button"
      className="rounded-md bg-red-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
    >
      Delete this Project
    </button>
  );
};

export default DeleteProject;
