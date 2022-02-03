module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b9fbf6b24f682fc7b0cf5887e1044512'),
  },
});
