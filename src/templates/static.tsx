/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import * as React from "react";
import { fetch } from "@yext/pages/util";
import "../index.css";
import {
  Template,
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TransformProps,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Favicon from "../public/yext-favicon.ico";
import { Image } from "@yext/sites-components";

import Header from "../components/header";

/**
 * Defines the path that the generated file will live at for production.
 */
export const getPath: GetPath<TemplateRenderProps> = () => {
  return `index.html`;
};

/**
 * This allows the user to define a function which will take in their template
 * data and produce a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: "Static Page Example",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Static page example meta description.",
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct result from `transformProps`.
 */
const Static: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  // This is the site object from the Knowledge Graph. It contains all the data
  // for the site entity, and can be accessed in any template, including static templates.
  const { _site } = document;

  console.log(_site);

  return  (
    <>
      <Header />
      <div className="centered-container space-y-8">
        
        <div className="section">
          <h1>Home Page</h1>
        </div>

        <div>
          <h2>Location Pages</h2>
          <ul>
            <li className="ml-8 list-disc">
              <a href="/locations/ny/new-york/location1" className="prose prose-a text-blue-800 hover:underline">
                Location1
              </a>
            </li>
          </ul>
        </div>
      
      </div>
    </>
  )
};

export default Static;
