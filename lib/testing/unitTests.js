'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape2.default)('index', function (t) {
  t.plan(4);

  t.ok(_index.profiles, 'profiles should have been imported');
  t.ok(_index.zones, 'zones should have been imported');
  t.ok(_index.tokens, 'tokens should have been imported');
  t.ok(_index.keychain, 'keychain should have been imported');
});