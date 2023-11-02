import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  Template,
} from "@yext/pages";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "fin-pro",
    localization: { locales: ["en"] },
    fields: ["name", "slug"],
    filter: { entityTypes: ["financialProfessional"] },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? `financial-professionals/${document.entityId}`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  data
): HeadConfig => {
  return {
    title: "Blog Home",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 */
const EntityPage: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const { name } = document;

  return (
    <>
      <h1>Entity Powered Page for Fin Pro entities</h1>
      <div>Entity Name: {name}</div>
    </>
  );
};

export default EntityPage;
