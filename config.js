module.exports = {
  port: 8000,
  db: {
    prod: "mongodb://localhost/mystackoverflow-clone",
    test: "mongodb://localhost/stackoverflow-test",
    options: {
      useNewUrlParser: true,
    },
  },
  jwt: {
    expiry: "7d",
  },
};
