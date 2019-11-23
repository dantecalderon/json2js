import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Editor from './Editor'
import { parseJSON2JS } from '../utils/parsers'

const Split = () => {
  const [json, setJson] = useState('')
  const [js, setJS] = useState('')

  useEffect(() => {
    const res = parseJSON2JS(json)
    if (res) {
      console.log('ajaj')
      setJS(res)
    }
  }, [json])

  console.log('Dante: Split -> json', json)
  console.log('Dante: Split -> js', js)

  return (
    <Container>
      <Left>
        <Editor
          tabSize={2}
          onChange={value => setJson(value)}
          value={json}
          name="left"
          placeholder="Put your JSON here"
          theme="github"
          fontSize={15}
          mode="json"
        />
      </Left>
      <Right>
        <Editor
          name="right"
          tabSize={2}
          value={js}
          theme="github"
          fontSize={15}
          mode="javascript"
        />
      </Right>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const Left = styled.div`
  border: 1px solid red;
  width: 50%;
`
const Right = styled.div`
  border: 1px solid blue;
  width: 50%;
`
export default Split
