import SkillHeader from './SkillHeader';

export interface LanguageListProps {}

const LanguageList: React.FC<LanguageListProps> = () => {
  return (
    <div>
      <SkillHeader
        title='Languages'
        subtitle='...I speak and write on different levels'
      />
    </div>
  );
};

export default LanguageList;
