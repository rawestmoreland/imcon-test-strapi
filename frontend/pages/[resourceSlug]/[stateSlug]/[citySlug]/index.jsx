import { fetchAPI } from 'utils/api';

export default function StatePage() {
  return <div>Cities List</div>;
}

export async function getStaticPaths(context) {
  // Get resource Pages from Strapi
  const pages = await fetchAPI('/city-regions', {
    fields: ['citySlug'],
    populate: {
      us_state: { fields: ['stateSlug'] },
      resource: { fields: ['resourceSlug'] },
    },
  });

  const paths = pages.data.map((page) => {
    const { citySlug } = page.attributes;
    const { stateSlug } = page.attributes.us_state.data.attributes;
    const { resourceSlug } = page.attributes.resource.data.attributes;

    return {
      params: {
        resourceSlug,
        stateSlug,
        citySlug,
      },
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
