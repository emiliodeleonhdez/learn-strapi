module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7d434bd3748eae5d77d5a008eb8535f2'),
  },
});
