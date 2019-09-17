const { gql } = require("apollo-server-express");
const typeDefs = gql`
  input OrgInput {
    id: ID!
  }

  type OrgOutput {
    id: ID
    reference: String
    name: String
    type: OrgType
    address: Address
    email: Email
    publicVisible: Boolean!
    active: Boolean!
  }

  input OrgsInput {
    search: String
    name: String
    type: OrgType
    reference: String
    active: Boolean
  }

  type OrgsOutput {
    data: [OrgOutput]
    moreData: Boolean
  }

  type Delegate {
    id: ID
    name: String!
    type: String
    linkedId: ID
    active: Boolean
  }

  enum OrgType {
    MED_DEVICE_COMPANY
    HEALTH_SYSTEM
    DISTRIBUTOR
    PRACTICE
    PARTNER
  }

  type Address {
    attn: String
    line1: String
    line2: String
    city: String
    state: String
    postalCode: String
    valid: Boolean
  }

  type Email {
    fullEmail: String
    user: String
    domain: String
    suffix: String
    valid: Boolean
  }

  input PagingParams {
    startRecordIdx: Int
    pageSize: Int
  }

  input OrderByParams {
    field: String
    direction: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each . In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    orgs(where: OrgsInput): OrgsOutput
    org(
      where: OrgInput
      orderBy: OrderByParams
      paging: PagingParams
    ): OrgOutput
    delegates: [Delegate]
  }
`;

module.exports = typeDefs;
