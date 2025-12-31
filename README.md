# Getting Started

This section describes how you can get our documentation portal up and running on your machine.

Before you start make sure you have clone this repository and have installed docusaurus on your machine.

We recommend using pnpm, but you can also use yarn or npm.

## pnpm

**Install** dependencies of `easifem.github.io` by using following commands.

```sh
pnpm install # install dependencies
```

**Start the development server**: To preview your changes as you edit the files, you can run a local development server that will serve your website and reflect the latest changes.

```sh
pnpm run start
```

**Build the website**: Docusaurus is a modern static website generator so we need to build the website into a directory of static contents and put it on a web server so that it can be viewed. To build the website:

```sh
pnpm run build
```

Once it finishes, the static files will be generated within `build` directory. A docusaurus site is statically rendered, and it can generally work without JavaScript.

**Deploy the website**

Make sure you have build your website before deploying it.

Following parameters are required in `docusaurus.config.js` file:

- `url`: URL for your site. In this repository it is set to `https://www.easifem.com/`
- `baseUrl`: Base URL for your site. In this repository it is set to `/`

For example if you want to host your site at `https://example.com/mysite`, then baseUrl should be set to `/mysite/` and url should be set to `https://example.com/`.

It is important to test your build locally before deploying it for production. You can do this by running the following command:

```sh
pnpm run serve
```

Please follow the following steps for serving the website on GitHub Pages. We will deploy the website from the `gh-pages` branch. You can check that this repository has a `gh-pages` branch. We will push `build` folder to this branch from where it will be deployed.

- `main` branch of this repository contains the source of the website.
- `gh-pages` branch of this repository contains the static files of the website which we generate through build command as mentioned above.

Our website can be found at `https://easifem.github.io/`, but we want to use custom domain called `www.easifem.com` for our website. We can do this by creating a CNAME file in the `static` directory of this repository. Anything within the `static` directory will be copied to the root of the `build` directory for deployment. The CNAME file should contain the custom domain name, for example `www.easifem.com`.

We will use `deploy` command that helps you deploy your site from the source branch to the deployment branch in one command: clone, build, and commit.

First we need to configure our project by modyfing `docusaurus.config.js` file. We need to set the

- `organizationName`, The GitHub user or organization name.
- `projectName`, The name of the deployment repository.
- `deploymentBranch`, The name of the deployment branch. But default it is `gh-pages` for non-organization GitHub pages repositories (that is, `projectName` not ending in `.github.io`). Otherwise, it needs to be explicit as a config field or environment variable.

In this repository we have set the following parameters in `docusaurus.config.js` file:

```js
organizationName: "easifem",
projectName: "easifem.github.io",
deploymentBranch: "gh-pages",
```

Note that GitHub Pages adds a trailing slash to Docusaurus URLs by default. Therefore, we have set `trailingSlash` to `false` in `docusaurus.config.js` file. This is important for the website to work properly.

There is one more point that we should take care of. By default, GitHub Pages runs published files through Jekyll. Since Jekyll will ignore any files that begin with an underscore, we have disabled Jekyll by adding an empty file named `.nojekyll` file to `static` folder of this repository.

Now we need to set the environment variables.

- `USE_SSH`: Set this to `true` if you want to use SSH for deployment. This is useful if you have set up SSH keys for your GitHub account. If you do not set this variable, HTTPS will be used for deployment.
- `GIT_USER`: The username for a GitHub account that has push access to the deployment repo. For your own repositories, this will usually be your GitHub username. Required if not using SSH, and ignored otherwise.
- `GIT_USER`: Personal access token of the git user (specified by GIT_USER), to facilitate non-interactive deployment (e.g. continuous deployment)
- `CURRENT_BRANCH`: The source branch. Usually, the branch will be main or master, but it could be any branch except for gh-pages. If nothing is set for this variable, then the current branch from which docusaurus deploy is invoked will be used.
- `GIT_USER_NAME`: The `git config user.name` value to use when pushing to the deployment repo
- `GIT_USER_EMAIL`: The `git config user.email` value to use when pushing to the deployment repo

It seems there are several variables to set before deploying. But, if you are using git and GitHub on your system, you only have to set only `USE_SSH` variable to `true` if you want to use SSH for deployment. The other variables are taken as default from your current development.

```sh
USE_SSH=true pnpm deploy
```
