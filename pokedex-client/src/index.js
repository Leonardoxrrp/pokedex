import ReactDOM from 'react-dom/client';
import {
  ApolloClient, InMemoryCache, ApolloProvider,
} from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('app'),
);
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
);
