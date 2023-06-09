export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "sku",
      title: "SKU",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "category" },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "sellerPrice",
      title: "Seller Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
    },
  ],
};
