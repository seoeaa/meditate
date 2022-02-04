module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4ed904b0e084f4e980c67930ef036fd4'),
  },
});
