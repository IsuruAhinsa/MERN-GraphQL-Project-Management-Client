import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADD_CLIENT } from "../../mutations/clientMutations";
import { GET_CLIENTS } from "../../queries/clientQueries";

const AddClient = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: {
      name,
      email,
      phone,
    },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });

      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    addClient(name, email, phone);

    setName("");
    setEmail("");
    setPhone("");

    navigate("/");
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
            new client.
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
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            Add Client
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddClient;
