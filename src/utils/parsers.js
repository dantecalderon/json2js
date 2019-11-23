import { stringify } from 'javascript-stringify'

export const parseJSON2JS = jsonValue => {
  try {
    const parsed = JSON.parse(jsonValue)
    const code = stringify(parsed, null, '  ')
    return code
  } catch (error) {
    return null
  }
}
