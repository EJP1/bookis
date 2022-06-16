module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/files",
        permanent: true,
      },
    ];
  },
};
