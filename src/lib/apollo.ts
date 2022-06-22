import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o2oleo09tm01xmhe5o0kug/master',
  cache: new InMemoryCache()
})