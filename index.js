"use strict";

const isV = typeof process.env.EASYLOG_V !== 'undefined' || typeof process.env.EASYLOG_VV !== 'undefined';
const isVV = typeof process.env.EASYLOG_VV !== 'undefined';
const withTime = typeof process.env.EASYLOG_WITHTIME !== 'undefined';
const useJalaali = typeof process.env.EASYLOG_JALAALI !== 'undefined';

const moment = useJalaali ? require('moment-jalaali') : require('moment');

module.exports = function (category) {
  return {
    info: function (...msg) {
      console.info(`${withTime ? `${moment().format('YYYY-MM-DD HH:mm:ss')} ` : ''}INFO: [${category}]`, ...msg);
    },
    warn: function (...msg) {
      console.warn(`${withTime ? `${moment().format('YYYY-MM-DD HH:mm:ss')} ` : ''}WARNING: [${category}]`, ...msg);
    },
    critical: function (...msg) {
      console.error(`${withTime ? `${moment().format('YYYY-MM-DD HH:mm:ss')} ` : ''}CRITICAL: [${category}]`, ...msg);
      console.trace();
      process.exit(1);
    },
    error: function (...msg) {
      console.error(`${withTime ? `${moment().format('YYYY-MM-DD HH:mm:ss')} ` : ''}ERROR: [${category}]`, ...msg);
      console.trace();
    },
    v: function (...msg) {
      isV && console.log(`${withTime ? `${moment().format('YYYY-MM-DD HH:mm:ss')} ` : ''}VERBOSE: [${category}]`, ...msg);
    },
    vv: function (...msg) {
      isVV && console.log(`${withTime ? `${moment().format('YYYY-MM-DD HH:mm:ss')} ` : ''}VERBOSE+: [${category}]`, ...msg);
    },
    isVV: () => isVV,
    isV: () => isV
  };
};
