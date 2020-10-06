const { gql } = require("apollo-server");

const UserDefs = gql`
  type User {
    id: Int
    name: String
    email: String
  }

  type IsDeleted {
    isDeleted: Boolean
  }

  input UserInput {
    name: String
    email: String
  }
  
  type Query {
    users: [User],
    user(id: Int): User
  }

  type Mutation {
    userStore(input: UserInput): User,
    userUpdate(input: UserInput, id: Int): User,
    userDelete(id: Int): IsDeleted,
  }
`;

export default UserDefs