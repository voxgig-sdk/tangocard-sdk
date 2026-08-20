
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TangocardSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await TangocardSDK.test()
    equal(null !== testsdk, true)
  })

})
