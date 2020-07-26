const router = require('express').Router();
const cors = require('cors');

const corsConfig = {
  origin: [
    'http://localhost:5500',
    'https://getlemondrop.com',
    'http://getlemondrop.com',
    'http://lemondrop-dev.diodeiva.com',
    'https://lemondrop-dev.diodeiva.com',
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

router.options('*', cors(corsConfig));
router.use(cors(corsConfig));

module.exports = {
  config: corsConfig,
  cors: router,
};
