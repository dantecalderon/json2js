import React from 'react'
import styled from 'styled-components'
import Clipboard from 'clipboard'
console.log('Dante: Clipboard', Clipboard)

const CopyButton = ({ value = 'Un nuevo valor' }) => {
  new Clipboard('#copy_btn', {
    text: () => value,
  })
  return (
    <Button id="copy_btn">
      <img src="https://icongr.am/clarity/copy.svg?size=16&color=506e91" alt="Copy to clipboard" />
    </Button>
  )
}

const Button = styled.button`
  background: #eaf0f6;
  &:hover {
    background: #cbd6e2;
  }
  position: absolute;
  border: 1px solid #cbd6e2;
  right: 7px;
  top: 8px;
  outline: 0;
  cursor: pointer;
`

export default CopyButton
