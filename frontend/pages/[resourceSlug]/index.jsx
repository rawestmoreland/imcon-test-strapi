import Seo from '@/components/elements/seo';
import Layout from '@/components/layout';
import { fetchAPI } from 'utils/api';

/**
 * This page is a dynamic page that will render the top-level
 * 'resource' pages. It will display a list of image links to
 * the children 'subdirectory' state / province, city / region,
 * category / subcategory pages.
 */
export default function ResourcesPage({ seo, imageLinks }) {
  return (
    <Layout>
      <Seo seo={seo} />
      {imageLinks.map((imageLink) => {
        const { image, name, stateSlug } = imageLink.attributes;
        return <div key={imageLink.id}>{name}</div>;
      })}
    </Layout>
  );
}

export async function getStaticPaths() {
  /**
   * Loop through all of the resource types in Strapi.
   * ie: local resources, national resources, Canadian resources,
   * etc...
   */
  const pages = await fetchAPI('/resources', { fields: ['resourceSlug'] });

  /**
   * Generate paths for all of these slugs. This will generate the
   * 'top-level direcotories' for resource types
   * ie: https://imcon.church/local-resources
   */
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
    case 'canadian-resources':
      pageData = await fetchAPI('/ca-provinces');
      break;
    case 'national-resources':
      pageData = await fetchAPI('/resource-categories');
      break;
    case 'local-resources':
    default:
      pageData = await fetchAPI('/us-states', {
        field: ['name', 'slug'],
        populate: ['image'],
      });
      break;
  }

  return {
    props: {
      imageLinks: pageData.data,
      metadata: null,
      global: null,
    },
  };
}
