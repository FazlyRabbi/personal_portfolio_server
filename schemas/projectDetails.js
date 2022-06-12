export default {
  name: "projectDetails",
  title: "Project Details",
  type: "document",
  fields: [
    {
      name: "projectTitle",
      title: "Project Title",
      type: "string",
    },

    {
      name: "projectSubtitle",
      title: "Project Subtitle",
      type: "string",
    },

    {
      name: "img",
      title: "Project Image",
      type: "array",
      of: [{ type: "image" }],
    },

    {
      name: "projectFeatures",
      title: "Project Features",
      type: "array",
      of: [{ name: "features", title: "Features", type: "string" }],
    },
    {
      name: "projectTechnologies",
      title: "Project Technologies",
      type: "string",
    },
    {
      name: "projec_live_link",
      title: "Project Live Link",
      type: "string",
    },
    {
      name: "project_client_repo_link",
      title: "Project Client Repo Link",
      type: "string",
    },
    {
      name: "project_server_repo_link",
      title: "Project Server Repo Link",
      type: "string",
    },
  ],
};
