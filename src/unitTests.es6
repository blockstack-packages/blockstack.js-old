import test from 'tape'
import { profiles, zones, tokens, keychain } from './index'

test('index', (t) => {
  t.plan(4)

  t.ok(profiles, 'profiles should have been imported')
  t.ok(zones, 'zones should have been imported')
  t.ok(tokens, 'tokens should have been imported')
  t.ok(keychain, 'keychain should have been imported')
})
