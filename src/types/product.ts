export interface IProductFields {
  fields: {
    name: string;
    slug: string;
    price: string;
    tagline: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}
