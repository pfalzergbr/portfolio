import PortableText from 'react-portable-text';
import BlockContent from '@sanity/block-content-to-react';
import highlight from './highlight';

const BlockRenderer = (props) => {
  console.log(props.children);
  return <p>{props.children}</p>;
};

const serializers = {
  marks: { highlight },
  types: { block: BlockRenderer },
};

export interface ParsedBlockProps {
  className: string;
  data: [];
}

const ParsedBlock: React.FC<ParsedBlockProps> = (props) => {

  return (
    <BlockContent
      className={props.className}
      blocks={props.data}
      renderContainerOnSingleChild={true}
      serializers={serializers}
    />
  );
};

export default ParsedBlock;
