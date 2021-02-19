export interface LanguageElementProps {
  language: 'string',
  level: 'string'
}

const LanguageElement: React.FC<LanguageElementProps> = ({language, level}) => {
  return <div>
    <h4>{}</h4>
    <span>{}</span>
  </div>;
};

export default LanguageElement;
