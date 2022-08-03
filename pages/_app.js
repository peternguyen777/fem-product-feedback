import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Toaster
        toastOptions={{
          style: {
            fontFamily: "Jost",
            color: "#3A4374",
          },
          iconTheme: {
            primary: "#3A4374",
            secondary: "#fff",
          },
        }}
      />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
