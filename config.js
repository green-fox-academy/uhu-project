'use strict';

module.exports = {
  DEFAULT_PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/uhu_app',
};