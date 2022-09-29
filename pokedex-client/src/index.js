import ReactDOM from 'react-dom/client';
import {
  ApolloClient, InMemoryCache, ApolloProvider, gql,
} from '@apollo/client';

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
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
