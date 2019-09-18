const orgs = require("./Orgs");

const moveSessionKeyName = "move-session-id";

const org = async (parent, args, ctx, info) => {
  const orgs = require("./data/orgs");
  return orgs[0];
};

const delegate = async (parent, args, ctx, info) => {
  const delegates = require("./data/delegates");
  return delegates[0];
};

const delegates = async (parent, args, ctx, info) => {
  const delegates = require("./data/delegates");
  return {
    data: delegates,
    moreData: false
  };
};

const Resolvers = {
  Query: {
    org,
    orgs,
    delegate,
    delegates
  }
};

module.exports = Resolvers;
