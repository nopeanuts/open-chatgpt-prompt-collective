export const schema = gql`
  type ModelQuery {
    id: Int!
    input: String!
    output_options: String!
    output_ranking: [Int]!
    template: Template!
    templateId: Int!
  }

  type Query {
    modelQueries: [ModelQuery!]! @requireAuth
    modelQuery(id: Int!): ModelQuery @requireAuth
  }

  input CreateModelQueryInput {
    input: String!
    output_options: String!
    output_ranking: [Int]!
    templateId: Int!
  }

  input UpdateModelQueryInput {
    input: String
    output_options: String
    output_ranking: [Int]!
    templateId: Int
  }

  type Mutation {
    createModelQuery(input: CreateModelQueryInput!): ModelQuery! @requireAuth
    updateModelQuery(id: Int!, input: UpdateModelQueryInput!): ModelQuery!
      @requireAuth
    deleteModelQuery(id: Int!): ModelQuery! @requireAuth
  }
`
