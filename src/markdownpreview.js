import { Remarkable } from "remarkable";

const md = new Remarkable();

export default function MarkdownPreview ({markdown}){
    const renderedHTML = md.render(markdown);
    return <div class="preview" id= "input" dangerouslySetInnerHTML={{__html: renderedHTML}}/>;
}   

