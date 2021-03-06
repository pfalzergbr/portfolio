import PortableText from 'react-portable-text';

const ParsedBlock = ({
  content,
  className,
  spanClass,
}) => {
  return (
    <PortableText
      className={className}
      content={content}
      serializers={{
        highlight: ({children}) => <span className={spanClass}>{children}</span>,
        // h1: props => <h1 style={{ color: "red" }} {...props} />
        // li: ({ children }) => <li className="special-list-item">{children}</li>,
        // someCustomType: YourComponent,
      }}
    />
  );
};

export default ParsedBlock;
