const base_url = process.env.CONTENTFUL_BASE_URL;
const space_id = process.env.CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_ACCESS_TOKEN;

import resolveResponse from "contentful-resolve-response";

export const getProduct = async () => {
  const res = await fetch(
    `${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=product`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const result = resolveResponse(data);

  return result;
};
export const getProductSlug = async (slug: string) => {
  const res = await fetch(
    `${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=blog&fields.product=${slug}`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const result = resolveResponse(data);

  return result[0];
};
