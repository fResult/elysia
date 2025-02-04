import { describe, expect, it } from 'bun:test'
import { cookieToHeader } from '../../src/handler'

describe('Cookie to Header', () => {
	it('return undefined on empty object', () => {
		const cookies = {}
		const result = cookieToHeader(cookies)
		expect(result).toBeUndefined()
	})

	it('correctly serialize a single value cookie', () => {
		const cookies = {
			cookie1: {
				value: 'value1'
			}
		}
		const result = cookieToHeader(cookies)
		expect(result).toEqual('cookie1=value1')
	})

	it('correctly serialize a multi-value cookie', () => {
		const cookies = {
			cookie1: {
				value: ['value1', 'value2']
			}
		}

		// @ts-ignore
		const result = cookieToHeader(cookies)
		expect(result).toEqual(['cookie1=value1', 'cookie1=value2'])
	})

	it('return undefined when the input is undefined', () => {
		const cookies = undefined
		// @ts-ignore
		const result = cookieToHeader(cookies)
		expect(result).toBeUndefined()
	})

	it('return undefined when the input is null', () => {
		const cookies = null
		// @ts-ignore
		const result = cookieToHeader(cookies)
		expect(result).toBeUndefined()
	})

	it('return undefined when the input is not an object', () => {
		const cookies = 'invalid'
		// @ts-ignore
		const result = cookieToHeader(cookies)
		expect(result).toBeUndefined()
	})

	it('return undefined when the input is an empty object', () => {
		const cookies = {}
		const result = cookieToHeader(cookies)
		expect(result).toBeUndefined()
	})

	it('return undefined when the input is an empty object', () => {
		const cookies = {}
		const result = cookieToHeader(cookies)
		expect(result).toBeUndefined()
	})

	it('return undefined when the input is an object with null values', () => {
		const cookies = {
			cookie1: null,
			cookie2: null
		}

		// @ts-ignore
		const result = cookieToHeader(cookies)
		expect(result).toBeUndefined()
	})

	it('return undefined when the input is an empty object', () => {
		const cookies = {}
		const result = cookieToHeader(cookies)
		expect(result).toBeUndefined()
	})

	it('return undefined when the input is an object with non-string or non-array values', () => {
		const cookies = {
			key1: 123,
			key2: true,
			key3: { prop: 'value' },
			key4: [1, 2, 3]
		}
		// @ts-ignore
		const result = cookieToHeader(cookies)
		expect(result).toBeUndefined()
	})

	it('return undefined when the input is an empty object', () => {
		const cookies = {}
		const result = cookieToHeader(cookies)
		expect(result).toBeUndefined()
	})

	it('return undefined when the input is an empty object', () => {
		const cookies = {}
		const result = cookieToHeader(cookies)
		expect(result).toBeUndefined()
	})

	it('return undefined when the input is an empty object', () => {
		const cookies = {}
		const result = cookieToHeader(cookies)
		expect(result).toBeUndefined()
	})

	it('return undefined when the input is an object with non-string keys', () => {
		const cookies = { 1: 'value1', 2: 'value2' }
		// @ts-ignore
		const result = cookieToHeader(cookies)
		expect(result).toBeUndefined()
	})
})
