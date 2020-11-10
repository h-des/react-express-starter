const show = (_, res) => {
  res.json(res.locals.user);
};

export default show;
