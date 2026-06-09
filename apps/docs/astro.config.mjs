import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import { ion } from "starlight-ion-theme";

const deployTarget = process.env.PUBLIC_DEPLOY_TARGET;
const isGitHubPages = deployTarget === "github-pages";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] || "astro-sollin";
const repositoryOwner = process.env.GITHUB_REPOSITORY?.split("/")[0] || "Ryderwe";
const githubPagesBase = `/${repository}`;
const githubPagesSite = `https://${repositoryOwner.toLowerCase()}.github.io${githubPagesBase}`;

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? githubPagesSite : "https://sollinplayer.com",
  base: isGitHubPages ? githubPagesBase : "/",
  integrations: [
    starlight({
      title: "SollinPlayer",
      logo: {
        dark: "./src/assets/logo (1).png",
        light: "./src/assets/logo (1).png",
      },
      social: [
        {
          icon: "github",
          label: "GitHub 仓库",
          href: "https://github.com/Ryderwe/Sollin-Music-Desktop",
        },
      ],
      sidebar: [
        {
          label: "[home] 首页",
          link: "/",
        },
        {
          label: "[lucide:download] 下载地址",
          link: "/download/",
        },
        {
          label: "[lucide:sparkles] 软件功能",
          link: "/features/",
        },
        {
          label: "[lucide:play] 软件演示",
          link: "/demo/",
        },
        {
          label: "[lucide:smartphone] 手机端更新日志",
          link: "/changelog-mobile/",
        },
        {
          label: "[lucide:monitor] 电脑端更新日志",
          link: "/changelog-desktop/",
        },
        {
          label: "[lucide:shield-alert] 免责声明",
          link: "/disclaimer/",
        },
      ],
      customCss: [
        "@fontsource-variable/space-grotesk/index.css",
        "@fontsource/space-mono/400.css",
        "@fontsource/space-mono/700.css",
        "./src/styles/global.css",
      ],
      components: {
        Head: "./src/components/Head.astro",
      },
      lastUpdated: true,
      pagination: false,
      plugins: [
        ion({
          icons: {
            iconDir: "./src/icons",
          },
          footer: {
            text: "SollinPlayer 软件官网",
            links: [
              {
                text: "下载地址",
                href: "https://sollinplayer.com/download/",
              },
              {
                text: "手机端更新",
                href: "https://sollinplayer.com/changelog-mobile/",
              },
              {
                text: "免责声明",
                href: "https://sollinplayer.com/disclaimer/",
              },
              {
                text: "博客：月明星稀",
                href: "https://www.ymxx.net",
              },
            ],
            icons: [
              {
                name: "github",
                href: "https://github.com/Ryderwe/Sollin-Music-Desktop",
              },
            ],
          },
        }),
      ],
    }),
  ],
  output: "static",
});
