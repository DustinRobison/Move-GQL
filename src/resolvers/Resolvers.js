const orgs = async (parent, args, ctx, info) => {
  const orgs = require("./data/orgs");
  return {
    data: orgs,
    moreData: false
  };
};

const delegates = async (parent, args, ctx, info) => {
  return require("./data/delegates");
};

const Resolvers = {
  Query: {
    orgs,
    delegates
  }
};

module.exports = Resolvers;
