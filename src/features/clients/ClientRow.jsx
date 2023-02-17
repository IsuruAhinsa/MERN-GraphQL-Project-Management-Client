import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../../mutations/clientMutations";
import { GET_CLIENTS } from "../../queries/clientQueries";
import { GET_PROJECTS } from "../../queries/projectQueries";

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: {
      id: client.id,
    },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });
  return (
    <tr key={client.id}>
      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
        {client.id}
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
        {client.name}
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
        {client.email}
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
        {client.phone}
      </td>
      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <div
          onClick={deleteClient}
          className="text-red-600 hover:text-red-900 cursor-pointer"
        >
          Delete<span className="sr-only">, {client.id}</span>
        </div>
      </td>
    </tr>
  );
};

export default ClientRow;
