
import { useParams } from "react-router-dom";

type Skill = {
  name: string;
  level: number;
};

type SkillsSectionProps = {
  skills: Skill[];
};

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const { username } = useParams<{ username: string }>();
  const templateStyle = username?.split('-')[0] || 'modern'; // Extract template style from username

  // Template-specific styling
  const getTemplateStyles = () => {
    switch (templateStyle) {
      case 'creative':
        return {
          bg: 'bg-gradient-to-r from-purple-50 to-blue-50',
          barBg: 'bg-gray-200',
          barFill: 'bg-purple-600 group-hover:bg-purple-700',
          titleColor: 'text-purple-800',
          divider: 'bg-purple-600',
        };
      case 'professional':
        return {
          bg: 'bg-slate-50',
          barBg: 'bg-gray-200',
          barFill: 'bg-slate-600 group-hover:bg-slate-700',
          titleColor: 'text-slate-800',
          divider: 'bg-slate-600',
        };
      case 'minimalist':
        return {
          bg: 'bg-white',
          barBg: 'bg-gray-100',
          barFill: 'bg-gray-800 group-hover:bg-black',
          titleColor: 'text-gray-900',
          divider: 'bg-black',
        };
      default: // modern
        return {
          bg: 'bg-gray-50',
          barBg: 'bg-gray-200',
          barFill: 'bg-blue-600 group-hover:bg-blue-700',
          titleColor: 'text-gray-900',
          divider: 'bg-blue-600',
        };
    }
  };

  const styles = getTemplateStyles();

  return (
    <section id="skills" className={`py-16 md:py-24 ${styles.bg}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold mb-4 ${styles.titleColor}`}>Skills & Expertise</h2>
          <div className={`w-24 h-1 ${styles.divider} mx-auto`}></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className={`w-full ${styles.barBg} rounded-full h-2.5`}>
                  <div
                    className={`${styles.barFill} h-2.5 rounded-full transition-all duration-500 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
