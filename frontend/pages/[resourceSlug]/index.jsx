import { fetchAPI } from 'utils/api';

export default function DynamicPage({ section, metadata, global }) {
  return <div>Testing</div>;
}

export async function getStaticPaths() {
  // Get resource Pages from Strapi
  const pages = await fetchAPI('/resources', { fields: ['resourceSlug'] });

  const paths = pages.data.map((page) => {
    const { resourceSlug } = page.attributes;

    return {
      params: { resourceSlug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const { resourceSlug } = params;

  let pageData;

  switch (resourceSlug) {
    case 'national-resources':
      pageData = await fetchAPI('/us-states');
      break;

    default:
      break;
  }

  return {
    props: {
      section: null,
      metadata: null,
      global: null,
    },
  };
}
