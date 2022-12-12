export const schema = gql`
  type Template {
    id: Int!
    category: String!
    input: String!
    output: String!
    query: [ModelQuery]!
  }

  type Query {
    templates(count: Int): [Template!]! @requireAuth
    template(id: Int!): Template @requireAuth
  }

  input CreateTemplateInput {
    category: String!
    input: String!
    output: String!
  }

  input UpdateTemplateInput {
    category: String
    input: String
    output: String
  }

  type Mutation {
    createTemplate(input: CreateTemplateInput!): Template! @requireAuth
    updateTemplate(id: Int!, input: UpdateTemplateInput!): Template!
      @requireAuth
    deleteTemplate(id: Int!): Template! @requireAuth
  }
`
