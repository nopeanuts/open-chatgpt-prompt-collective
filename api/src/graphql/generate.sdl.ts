export const schema = gql`
  type GenerateResult {
    id: Int!
    output: [String]
  }

  type Mutation {
    generate(templateId: Int!, input: String!): GenerateResult! @requireAuth
  }
`
