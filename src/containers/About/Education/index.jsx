// Components
import Section from '@components/Section';
import SectionTitle from '@components/Section/SectionTitle';
import SectionContent from '@components/Section/SectionContent';

// Hooks
import useTranslation from '@hooks/useTranslation';

// Styles
import styles from '@styles/pages/About/AboutContent.module.scss';

// Content
import educationContent from './content';

const sectionContent = {
  'pt-BR': {
    title: 'educação',
  },
  'en-US': {
    title: 'education',
  },
};

const Education = () => {
  let translate = useTranslation(sectionContent);

  return (
    <Section key={translate('title')}>
      <SectionTitle title={translate('title')} />
      {educationContent.map((content) => {
        translate = useTranslation(content);
        return (
          <SectionContent
            key={translate('name')}
            image={content.image}
            imageAlt={content.imageAlt}
            readMore={content.readMore}
          >
            <div className={`${styles.about__text}`}>
              <div className={`${styles.title}`}>{translate('name')}</div>
              <div className={`${styles.subtitle}`}>{translate('course')}</div>
              <div className={`${styles.description}`}>{translate('description')}</div>
              <div className={`${styles.period}`}>{translate('period')}</div>
            </div>
          </SectionContent>
        );
      })}
    </Section>
  );
};

export default Education;
