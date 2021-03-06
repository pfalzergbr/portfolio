import BlockContent from '@sanity/block-content-to-react';
import Highlight from './Highlight';


const serializers = {
  marks: { Highlight }
}

export interface ParsedBlockProps {
  nodeClassName: string;
  data: []
}
 
const ParsedBlock: React.FC<ParsedBlockProps> = (props) => {
  return ( <BlockContent className={props.nodeClassName} block={props.data} serializers={serializers}/> );
}
 
export default ParsedBlock;