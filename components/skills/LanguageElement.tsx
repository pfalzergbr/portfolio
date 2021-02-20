export interface LanguageElementProps {
  language: 'string',
  levelDescription: 'string'
}

const LanguageElement: React.FC<LanguageElementProps> = ({language, levelDescription}) => {
  return <div>
    <h4>{language}</h4>
    <span>{levelDescription}</span>
  </div>;
};

export default LanguageElement;
