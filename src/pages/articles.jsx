// React/Next Components
import Head from 'next/head';

// Hooks
import useTranslation from '../hooks/useTranslation';

// Components
import ArticlesSection from '../containers/Articles';

// Contents
const pageName = {
  'pt-BR': {
    pageTitle: 'Artigos',
  },
  'en-US': {
    pageTitle: 'Articles',
  },
};

function Articles() {
  const translate = useTranslation(pageName);

  return (
    <>
      <Head>
        <title>{translate('pageTitle')}</title>
      </Head>
      <main>
        <ArticlesSection />
      </main>
    </>
  );
}

export default Articles;