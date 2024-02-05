import './App.css';
import React from 'react';
import { useState } from 'react';
import MarkdownPreview from './markdownpreview.js';


const EditorWrap  = () => {
  const [postContent, setPostContent] = useState('_Hello,_**Markdown**!');
  const [isChange, setIsChange] = useState(true);

  const handleMaximize = () => setIsChange(!isChange);

  return (
    
      <>
      <div class="wraptext" className={isChange ? "wraptext" : "wraptext2"} id="wrap">
          <div class="toolbar">
              <i class="fa fa-free-code-camp" title="logo"></i> Editor
              <i class="fa fa-arrows-alt" onClick={handleMaximize} > </i>
          </div>
          <textarea id="editor" type="text" name="textarea" value={postContent} onChange={e => setPostContent(e.target.value)}> </textarea>
      </div>
      <div class="converter">
<div class="toolbar">
<i class="fa fa-free-code-camp" title="logo"></i> Previewer
<i class="fa fa-arrows-alt"></i>
</div>
<MarkdownPreview markdown={postContent}></MarkdownPreview>
    </div> 
      </>
  )
  };



  
function App() {

        return (
<div className="App">
      <EditorWrap  />
         </div>
        )
}


export default App;
