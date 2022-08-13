import { fetchAPI } from 'utils/api';

export default function StatePage() {
  return <div>States List</div>;
}

export async function getStaticPaths(context) {
  console.log({ context });
  // Get resource Pages from Strapi
  const pages = await fetchAPI('/us-states', { fields: ['stateSlug'] });

  const paths = pages.data.map((page) => {
    const { stateSlug } = page.attributes;

    return {
      params: { resourceSlug: 'local-resources', stateSlug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const { stateSlug } = params;

  let pageData;

  return {
    props: {
      section: null,
      metadata: null,
      global: null,
    },
  };
}
