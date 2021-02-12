const express = require('express');
const corsHeaders = require('../middlewares/cors');
const usersRoutes = require('../routes/users');
const moviesRoutes = require('../routes/movies');
const actorsRoutes = require('../routes/actors');
const globalError = require('../middlewares/error');

module.exports = function (app) {
  app.use(express.json());
  app.use(corsHeaders);

  app.use('/api/users', usersRoutes);
  app.use('/api/movies', moviesRoutes);
  app.use('/api/actors', actorsRoutes);

  app.use(globalError);
};
