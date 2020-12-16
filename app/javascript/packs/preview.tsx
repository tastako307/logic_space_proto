import * as React from 'react'
import styled from 'styled-components'
import * as ReactMarkdown from 'react-markdown'
import { useStateWithStorage } from './hooks/use_state_with_storage'

const Preview = styled.div`
  width: calc(100% - 6px);
  height: calc(100% - 46px );
  background-color: whitesmoke;
  border: black 3px ridge;
`

const StorageKey = 'packs/textarea:text'

export const View: React.FC = () => {
  const [text, setText] = useStateWithStorage('', StorageKey)
  return (
    <>
      <Preview>
        <ReactMarkdown source={text} />
      </Preview>
    </>
  )
}


