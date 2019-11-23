import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Editor from './Editor'
import { parseJSON2JS } from '../utils/parsers'
import CopyButton from './CopyButton'

const Split = () => {
  const [json, setJson] = useState('')
  const [js, setJS] = useState('')

  useEffect(() => {
    const res = parseJSON2JS(json)
    if (res) {
      setJS(res)
    }
  }, [json])

  return (
    <Container>
      <Left>
        <Editor
          tabSize={2}
          onChange={value => setJson(value)}
          value={json}
          name="left"
          showGutter={true}
          enableBasicAutocompletion={true}
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
      <CopyButton />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  box-shadow: 0px 0px 0px 1px #e8e8e8;
`

const Left = styled.div`
  width: 50%;
  & > div {
    height: calc(100vh - 20px) !important;
  }
`
const Right = styled.div`
  width: 50%;
  & > div {
    height: calc(100vh - 20px) !important;
  }
`
export default Split
