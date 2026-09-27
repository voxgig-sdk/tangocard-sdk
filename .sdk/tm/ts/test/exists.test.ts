
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TangocardSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = TangocardSDK.test()
    equal(testsdk instanceof TangocardSDK, true,
      'TangocardSDK.test() must return a client synchronously')
  })

})
