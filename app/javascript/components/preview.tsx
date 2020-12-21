// Run this example by adding <%= javascript_pack_tag 'preview' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import * as React from 'react'
import styled from 'styled-components'
import * as ReactMarkdown from 'react-markdown'
import { useStateWithStorage } from '../packs/hooks/use_state_with_storage'

export default class ArticlePreview extends React.Component {

  render() {
    return (
      <>
        <ArticleBox>
          <ArticleForm>
            <ArticleFormField>
              <TitleField>
                <ArticleLabels>タイトル</ArticleLabels>
                <TitleText/>
              </TitleField>
              <SummaryField>
                <ArticleLabels>概要</ArticleLabels>
                <SummaryText/>
              </SummaryField>
              <TextField>
                <ArticleLabels>本文</ArticleLabels>
                <ArticleText/>
              </TextField>
              <ArticleButtonField>
                <ArticleButton/>
              </ArticleButtonField>
            </ArticleFormField>
          </ArticleForm>
          <PreviewField>
            <PreviewLabel>記事プレビュー</PreviewLabel>
            <Preview>ここにプレビューが表示される予定（Reactでビューを設計する予定）</Preview>
          </PreviewField>
        </ArticleBox>
      </>
    )
  }

}

const ArticleBox = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  height: calc( 100vh - 126px);
  width: 100%;
  height: calc(100% - 30px);
`
const ArticleForm = styled.div`
  height: calc( 100vh - 126px);
  background-color: lightgray;
  width: 50% ;
  padding: 15px;
`
const ArticleFormField = styled.form`
  height: 100%;
`

const ArticleLabels = styled.label`
  width: 300px;
  font-size: 25px;
`

const TitleText = styled.textarea`
  height: 25px;
  width: calc(100% - 15px);
  padding: 5px;
  font-size: 15px;
`
const TitleField = styled.div`
  margin-bottom: 10px;
`

const SummaryField = styled.div`
  width: 100%;
`

const SummaryText = styled.textarea`
  height: 70px;
  width: calc(100% - 15px);
  padding: 5px;
  font-size: 15px;
`
const TextField = styled.div`
  height: calc(100% - 221px);
`

const ArticleText = styled.textarea`
  height: calc(100% - 80px);
  width: calc(100% - 15px);
  padding: 5px;
  font-size: 15px;
  overflow: scroll;
`

const ArticleButtonField = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-around;
`

const ArticleButton = styled.input.attrs({
  type: 'submit',
  value: '投稿する'
})`
display: block;
font-size: large;
width: 120px;
`
const PreviewField = styled.div`
  height: calc( 100vh - 126px);
  width: 50% ;
  padding: 15px;
  background-color: lightgray;
  border-left: mediumblue 5px double;
`

const PreviewLabel = styled.h1`
  font-size: 25px;
`

const Preview = styled.div`
  width: calc(100% - 6px);
  height: calc(100% - 46px );
  background-color: whitesmoke;
  border: black 3px ridge;
`







