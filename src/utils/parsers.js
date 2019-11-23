import { stringify } from 'javascript-stringify'
// import { format } from 'prettier/standalone'

const defaultFormatOptions = {
  semi: false,
  parser: 'babel',
}

export const parseJSON2JS = jsonValue => {
  try {
    const parsed = JSON.parse(jsonValue)
    const code = stringify(parsed, null, '  ')
    return code
    // return format(code, defaultFormatOptions)
  } catch (error) {
    console.log('Dante: parseJSON2JS -> error', error)
    return null
  }
}
