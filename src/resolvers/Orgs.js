const orgs = async (parent, args = { where: {} }, ctx, info) => {
  const res = await ctx.requester(
    ctx.hostName,
    "v1/directory/search/contacts",
    ctx.headers["move-session-id"],
    { ...args.where, contactTypes: ["Org"] }
  );
  return {
    data: res.contacts,
    moreData: res.moreData
  };
};

module.exports = orgs;
