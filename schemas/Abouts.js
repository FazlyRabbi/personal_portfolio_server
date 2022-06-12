export default {
  name: "Abouts",
  title: "Abouts",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Title",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "Img Url",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
