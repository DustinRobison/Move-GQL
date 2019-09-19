const org = async (parent, args, ctx, info) => {
  const orgs = require("./data/orgs");
  return orgs[0];
};

const orgs = async (parent, args, ctx, info) => {
  const orgs = require("./data/orgs");
  return {
    data: orgs,
    moreData: false
  };
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

const bizUnit = async (parent, args, ctx, info) => {
  const bizUnits = require("./data/bizUnits");
  return bizUnits[0];
};

const bizUnits = async (parent, args, ctx, info) => {
  const bizUnits = require("./data/bizUnits");
  return {
    data: bizUnits,
    moreData: false
  };
};

const Resolvers = {
  Query: {
    org,
    orgs,
    delegate,
    delegates,
    bizUnit,
    bizUnits
  }
};

module.exports = Resolvers;
