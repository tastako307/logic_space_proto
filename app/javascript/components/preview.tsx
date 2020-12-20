// Run this example by adding <%= javascript_pack_tag 'preview' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import * as React from 'react'
import styled from 'styled-components'
import * as ReactMarkdown from 'react-markdown'
import { useStateWithStorage } from '../packs/hooks/use_state_with_storage'
import { render } from 'react-dom'

export default class ArticlePreview extends React.Component {

  render() {
    return (
      <Preview>ここにプレビューが表示される予定（Reactでビューを設計する予定）</Preview>
    )
  }

}

const Preview = styled.div`
  width: calc(100% - 6px);
  height: calc(100% - 46px );
  background-color: whitesmoke;
  border: black 3px ridge;
`






