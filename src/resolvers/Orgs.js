const orgs = async (parent, args, ctx, info) => {
  const res = await ctx.requester(
    ctx.hostName,
    "/api/v1/directory/org/org/list_root_orgs",
    ctx.headers["move-session-id"],
    { ...args }
  );
  return res;
};

module.exports = orgs;
