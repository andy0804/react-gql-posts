# Getting Started with Create React App

Some notes

getting data using - QUERY
updating data - MUTATION

query queryName {
posts{
id
}
}

query MyQuery {
posts_by_pk(id: "670d1546-8ad0-4d00-b195-8b1f6cc81348"){
id,
createdAt,
body,
title
}
}
// insert

mutation MyMutation {
insert_posts(objects: {body: "Chamber of Secrets", title: "Harry Potter"}) {
returning {
body
createdAt
id
title
}
}
}

//update

mutation MyMutation {
update_posts(where: {id: {\_eq: "670d1546-8ad0-4d00-b195-8b1f6cc81348"}}, \_set: {body: "Socerers Stone\t", title: "Harry Potter and"}) {
returning {
body
createdAt
id
title
}
}
}

/delete

mutation MyMutation {
delete_posts(where: {id: {\_eq: "670d1546-8ad0-4d00-b195-8b1f6cc81348"}}) {
affected_rows
}
}

//dynamic query
mutation CreatePost($title :String!,$body: String!) {
insert_posts(objects: {body: $body, title: $title}) {
returning {
body
createdAt
id
title
}
}
}

query GetPost($id:uuid!) {
posts_by_pk(id: $id){
id,
createdAt,
body,
title
}
}

mutation UpdatePost($id:uuid!,$body:String!,$title:String!) {
update_posts(where: {id: {\_eq: $id}}, \_set: {body: $body, title: $title}) {
returning {
body
createdAt
id
title
}
}
}

mutation DeletePost($id:uuid!) {
delete_posts(where: {id: {\_eq: $id}}) {
affected_rows
}
}

1. In your index.js import Apollog Client
   import ApolloClient from "apollo-boost";

2) Store the client
   const client = new ApolloClient({
   uri: "https://react-graphql0.herokuapp.com/v1/graphql",
   });

3) Now to pass it through the entire app
   import { ApolloProvider } from "@apollo/react-hooks";

4) <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/new" component={NewPost} />
          <Route exact path="/edit/:id" component={EditPost} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>

5
