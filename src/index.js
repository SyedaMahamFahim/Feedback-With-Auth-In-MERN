import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./theme";
import store from "./redux/store";
import { Provider } from "react-redux";

import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider initialColorMode={theme.config.initialColorMode}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
