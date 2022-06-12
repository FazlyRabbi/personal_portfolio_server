export default {
  name: "Skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "BgColor",
      title: "BgColor",
      type: "string",
    },

    {
      name: "icon",
      title: "icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
