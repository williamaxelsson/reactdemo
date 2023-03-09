import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";

// import { BrowserRouter as Router } from 'react-router-dom';

// import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

// import { Provider as ReduxProvider } from 'react-redux';
// import configureStore from './redux/configureStore';

// import { ChakraProvider } from '@chakra-ui/react';
// import theme from './theme';
// import './theme/styles.css';

// const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <React.StrictMode>
      {/* <ReduxProvider store={store}> */}
      {/* <Router> */}
      {/* <Auth0ProviderWithHistory> */}
      {/* <ChakraProvider theme={theme}> */}
      <App />
      {/* </ChakraProvider> */}
      {/* </Auth0ProviderWithHistory> */}
      {/* </Router> */}
      {/* </ReduxProvider> */}
    </React.StrictMode>
  </ErrorBoundary>
);
