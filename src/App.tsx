import React from 'react';
import MarkdownIt from 'markdown-it';
import customTagPlugin from './customTagPlugin';
import qrCodeComponent from './qrCodeComponent';

const qrCodeInstance = new qrCodeComponent();

const md = new MarkdownIt();
md.use(customTagPlugin, {
  name: 'qrcode',
  startDelimiter: '[',
  endDelimiter: ']',
  component: qrCodeInstance.render.bind(qrCodeInstance)
});
type MarkdownRendererProps = {
  markdown: string;
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {  const html = md.render(markdown);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

function App() {
  const markdownInput = `
[qrcode: data="xx" code="ds" ]

[qrcode: ]  

* n  
  aa
* a
  `;

  return (
    <div className="App">
      <MarkdownRenderer markdown={markdownInput} />
    </div>
  );
}

export default App;
