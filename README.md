# Mantis Todo Example

✨ **This Nx workspace has been generated by [Mantis, your passport to a seamless full-stack project launch.](https://github.com/futurizeworld/mantis-cli)** ✨

## Getting started

1. Install dependencies

   - Run `npm install` to install all dependencies

2. Creating a mongo instance

   - If you don't already have a Mongo db instance you can use, follow the steps to [set up an instance with MongoDB Atlas (it's free)](https://www.mongodb.com/docs/atlas/getting-started/).

3. Create a config file in `apps/server` called `.env.local` i.e. `apps/server/.env.local`.
4. Place your mongo connection string in that file as the following environment variable

   ```shell
   # Example
   MONGODB_URI='mongodb+srv://<user>:<password>@<cluster-name>.mongodb.net/?retryWrites=true&w=majority'
   ```

> To learn more about how Nx loads environment variables, see [Definte Environment Variables](https://nx.dev/recipes/tips-n-tricks/define-environment-variables#define-environment-variables)

## Start the web app

To start the development servers run `npx nx run-many --target=serve --projects=web-client,mobile-client,server`. Open your browser and navigate to `http://localhost:4200/` to see the web app and `http://localhost:4300/` for the mobile app. Happy coding!

## Storybook

To start storybook for a client run `npx nx run <client>:storybook`.

For the web client, run `npx nx run web-client:storybook`, open your browser, and navigate to `http://localhost:5200`.
For the mobile client, run `npx nx run mobile-client:storybook`, open your browser, and navigate to `http://localhost:5300`.

## Testing

To run all of the unit tests, run `npx nx run-many --all --target=test`.

To run all of the unit tests with coverage, run `npx nx run-many --all --target=test --codeCoverage`. The coverage reports will be generated in the `coverage` folder at the root of this repo. You can view the reports in your browser by running `npx serve coverage/apps`.

To run all of the e2e tests, run `npx nx run server:serve` in one terminal window, then run `npx nx run-many --all --target=e2e`.

## Linting

To lint all projects, run `npx nx run-many --all --target=lint`.

## Generating code

This repo comes with some Nx plugins that can be leveraged to help you generate boilerplate.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```bash
nx <target> <project> <...options>
```

You can also run multiple targets:

```bash
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```bash
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Open this repo in [VS Code](https://code.visualstudio.com/) and install the recommended extensions.

We recommend the following extensions:

- [Nx Console](https://nx.dev/nx-console): Provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.
- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template): Provides a rich editing experience for Angular templates, both inline and external templates.
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Integrates [ESLint](https://eslint.org/) into VS Code.
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Integrates [Prettier](https://prettier.io/) into VS Code.
- [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner): Makes it easy to debug Jest tests within VS Code.
