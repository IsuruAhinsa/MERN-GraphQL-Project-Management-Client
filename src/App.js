import Navbar from "./components/Navbar";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Route, Routes } from "react-router-dom";
import AddClient from "./features/clients/AddClient";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import AddProject from "./features/projects/AddProject";
import NotFound from "./pages/NotFound";
import EditProject from "./features/projects/EditProject";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(exsisting, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(exsisting, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://isuruahinsa-mern-graphql-project.onrender.com/graphql",
  cache,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />

      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-client" element={<AddClient />} />
              <Route path="/add-project" element={<AddProject />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/projects/edit/:id" element={<EditProject />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </main>
    </ApolloProvider>
  );
}

export default App;
