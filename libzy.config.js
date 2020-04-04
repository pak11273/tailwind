import MainPage from "components/MainPage"
import { Masthead } from "components"
import { v4 as uuidv4 } from "uuid"

const Marketing = require("components/mdx/marketing.mdx").default
const Application = require("components/mdx/application.mdx").default
const GetStarted = require("components/mdx/get-started.mdx").default
const Styleguide = require("components/mdx/styleguide.mdx").default
const Loader = require("components/elements/loader/index.mdx").default
const Hero = require("components/marketing/page/hero/index.mdx").default
const Feature = require("components/marketing/page/feature/index.mdx").default
// const Masthead = require("./src/pages/docs/page/masthead/index.mdx").default
const Faq = require("components/mdx/faq.mdx").default

export default {
  title: "TailwindReact",
  subTitle: "Reusable React Components with TailwindCSS Styling",
  github: "https://github.com/pak11273/tailwind",
  githubShort: "pak11273/tailwind",
  menuTree: [
    {
      path: "",
      id: uuidv4(),
      component: MainPage,
      data: {
        features: [
          {
            title: "Easy to start",
            text:
              "Just find the component you need and copy/paste it to your project",
            button: {
              path: "/docs/get-started",
              id: uuidv4(),
              text: "Get started",
            },
          },
          {
            title: "Styleguide",
            text: "Build a comprehensive style-guide for your project",
          },
          {
            title: "Live Changes",
            text: "See what your components look like with dynamic props live!",
          },
          {
            title: "React-router ready",
            text:
              "Components that use links are tailored to work with React-Router",
          },
        ],
      },
    },
    {
      path: "docs",
      id: uuidv4(),
      tree: [
        {
          text: "Get Started",
          path: "get-started",
          id: uuidv4(),
          component: GetStarted,
        },
        {
          text: `StyleGuide`,
          path: "styleguide",
          id: uuidv4(),
          component: Styleguide,
        },
        {
          text: "Marketing UI Components",
          path: "marketing",
          id: uuidv4(),
          component: Marketing,
        },
        {
          text: "Page Sections",
          id: uuidv4(),
          path: "page",
          tree: [
            {
              text: "Masthead Sections",
              path: "masthead",
              id: uuidv4(),
              component: Masthead,
            },
            {
              text: "Hero Sections",
              path: "hero",
              id: uuidv4(),
              component: Hero,
            },
            {
              text: "Feature Sections",
              path: "feature",
              id: uuidv4(),
              component: Feature,
            },
          ],
        },
        {
          text: "Application Components -",
          path: "application",
          id: uuidv4(),
          component: Application,
        },
        {
          text: "Elements",
          id: uuidv4(),
          path: "elements",
          tree: [
            {
              text: "Loaders",
              path: "loader",
              id: uuidv4(),
              component: Loader,
            },
          ],
        },
        {
          text: "FAQ",
          path: "faq",
          id: uuidv4(),
          component: Faq,
        },
      ],
    },
  ],
  theme: {
    palette: {
      primary: {
        main: "#61DBFB",
      },
      secondary: {
        main: "#222222",
      },
    },
  },
  options: {
    routerType: "hash", // hash | browser
  },
}
