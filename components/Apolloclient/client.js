import { ApolloClient, InMemoryCache } from "@apollo/client";



//----------------THIS CODE IS NOT USED THIS WAS SETUP FOR GRAPHQL BUT PROJECT WAS CHANGED TO RESTAPI------------

const client=new ApolloClient({
    uri:"http://localhost:1337/graphql",
    cache: new InMemoryCache(),
});

export default client ;