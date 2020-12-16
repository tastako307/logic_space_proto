import * as React from 'react'
import styled from 'styled-components'
import * as ReactMarkdown from 'react-markdown'
import { useStateWithStorage } from './hooks/use_state_with_storage'

const TextArea = styled.textarea`
  height: calc(100% - 80px);
  width: calc(100% - 15px);
  padding: 5px;
  font-size: 15px;
  overflow: scroll;
`
const StorageKey = 'packs/textarea:text'

export const MarkText: React.FC = () => {
  const [text, setText] = useStateWithStorage('', StorageKey)
  return(
    <>
        <TextArea
        onChange={(event) => setText(event.target.value)}
        value={text}
        />

    </>
  )
}