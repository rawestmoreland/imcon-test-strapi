import { fetchAPI } from 'utils/api';

export default function StatePage() {
  return <div>States List</div>;
}

export async function getStaticPaths(context) {
  // Get resource Pages from Strapi
  const [statePages, provincePages, categoryPages] = await Promise.all([
    fetchAPI('/us-states', {
      fields: ['stateSlug'],
      populate: { resource: { fields: ['resourceSlug'] } },
    }),
    fetchAPI('/ca-provinces', {
      fields: ['provinceSlug'],
      populate: { resource: { fields: ['resourceSlug'] } },
    }),
    fetchAPI('/resource-categories', {
      fields: ['categorySlug'],
      populate: { resource: { fields: ['resourceSlug'] } },
    }),
  ]);

  const allPages = [
    ...statePages.data,
    ...provincePages.data,
    ...categoryPages.data,
  ];

  const paths = allPages.map((page) => {
    const slug =
      page.attributes?.stateSlug ||
      page.attributes?.provinceSlug ||
      page.attributes?.categorySlug;
    const { resourceSlug } = page.attributes.resource.data.attributes;

    return {
      params: { resourceSlug, slug1: slug },
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
