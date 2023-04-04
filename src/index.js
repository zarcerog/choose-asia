import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './i18n';

const client = new ApolloClient({
  uri: 'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clcazbtzx31gd01uo1tz33498/master',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <BrowserRouter>
    <React.Suspense fallback="loading">
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);