# Akeneo Design System

<p style={{textAlign: "center"}}>
  <img style={{ width: '75%', margin: '0 auto 2em auto', maxWidth: '450px'}} src="./Introduction.png" alt="Akeneo design system introduction illustration"/>
</p>

## What is a design system?

### Meet designer's best friend

Welcome to the Akeneo Design System. This comprehensive guide and resource library contains everything you'll need to design with us. The use of the system reduces design debt, accelerates the design process, and builds bridges between teams working in concert to bring products to life in their best visual form.

But why it's so important?

### Avoid the Tower of Babel of design.

As teams grow, it's common for designers to concentrate on discrete areas of an app and solve problems individually and not systematically. It can lead to a fragmented and not consistent visual language.

### Access to a single source of truth.

We created this library to manage all brand and UX components to keep internal and external Akeneo designers and engineers informed and easier to work processes.

### Design at Scale.

Empower your process to create delightful and consistent user experiences across every product and collaborator - Everyone gets the building blocks to contribute right away on every topic.
The aim of Akeneo Design System is to help Akeneo designers and developers deliver work faster and better.

## How to see components and guidelines?
This project uses Storybook (https://storybook.js.org/) to display components and guidelines.

**Preview**

Latest version is available here: https://dsm.akeneo.com

**Locally**

You should execute the following commands:
```shell
npm install && \
npm run storybook:start
```

Then open http://localhost:6006 on your browser.
You don't have to relaunch the command at each time you create or update a component.

## Using Akeneo Design System component in my project

To add Akeneo Design System to your React application, run:
```shell
npm add akeneo-design-system
```

Once the package installed, you should provide the theme related to your project at the top of your application:
```tsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
{/* change with your theme path */}
import { connectorTheme } from "akeneo-design-system";

const App = () => {
  return (
    <>
      <ThemeProvider theme={connectorTheme}>
        {/* All your application*/}
      </ThemeProvider>
    </>
  )
};
```

After you can include and render all needed components in your application:
```tsx
import { Badge } from 'akeneo-design-system'

const MyHomePage = () => (
  <div>
    <Badge level="primary">Hello Word!</Badge>
  </div>
)
```

To know the props of each component, visit the dedicated page of the component here: https://dsm.akeneo.com. You can edit all properties and click on "Show code" in the playground section available for each components.

## Play around with an hello world react App example

The [DSM repository](https://github.com/akeneo/akeneo-design-system) contains an example folder with a minimal React App already configured to be used with the Akeneo Design System.

Go into the example directory
```shell
cd example
```
Install dependencies
```shell
npm install
```
Run the dev server
```shell
npm run dev
```

Feel free to adapt the `example/src/App.tsx` file and integrate other components of the DSM.

## Contribution

This project has been automatically extracted from the following mono-repository: https://github.com/akeneo/pim-community-dev.
If you want to contribute please create a pull request in this repository.

### What can go in the Akeneo Design System?

This repository contains:
- Simple and complex (composition) components used several times in multiple products
- Illustrations used several times in multiple products
- Icons used by components in this repository
- Basic React hooks
- Specific themes of Akeneo products (PIM, Onboarder, Shared Catalogs)

### What cannot go in the Akeneo Design System?

- Specific views: each project can specify specific components for specific UI logic.
- Code relative to infrastructure (fetchers translation, routing, validation ...)
- Logic specific to the domain

### How to contribute?

We have collected notes on how to contribute to this project in CONTRIBUTING.md.

## Testing instructions

There is two type of tests, unit and visual tests.

### Unit tests

Unit tests can be launched with the following commands:
```shell
# Launch only one time
npm run test:unit:run

# Launch in watch mode
npm run test:unit:watch
```

Unit test should validate all component behaviors => coverage of 100% is required for component in this project.
Unit tests are in the same directory of the component.

### Visual tests

All components in Storybook are automatically tested visually through snapshot comparison.
Normally, stories should describe all possible states, adding manually visual test should be an exception.

#### Running visual tests in CI

Visual tests are typically run in the continuous integration environment to ensure consistent rendering across all platforms.
When you create a new story or modify the visual of a component, you have to generate the snapshots.

#### Generating snapshots

To generate visual snapshots, you can use Docker to ensure consistent rendering:

1. **Build Storybook static files**:
   ```shell
   cd front/akeneo-design-system
   npm run storybook:build
   ```

2. **Install Puppeteer's Chromium in Docker**:
   ```shell
   docker compose run --rm -e PUPPETEER_SKIP_CHROMIUM_DOWNLOAD= node sh -c "cd /srv/pim/front/akeneo-design-system && node node_modules/puppeteer/install.js"
   ```

3. **Install system dependencies for Chromium** (first time only):
   ```shell
   docker compose run --rm --user root node sh -c "apt-get update && apt-get install -y ca-certificates fonts-liberation libappindicator3-1 libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils"
   ```

4. **Generate or update snapshots**:
   ```shell
   # Update all snapshots
   docker compose run --rm -e CI=false -e PUPPETEER_SKIP_CHROMIUM_DOWNLOAD= node sh -c "cd /srv/pim/front/akeneo-design-system && npm run test:visual:update"

   # Or update a specific snapshot
   docker compose run --rm -e CI=false -e PUPPETEER_SKIP_CHROMIUM_DOWNLOAD= node sh -c "cd /srv/pim/front/akeneo-design-system && npx jest --config ./jest.visual.config.js -u --testNamePattern='YourStoryName'"
   ```

**Note**: Snapshots are stored in `src/__image_snapshots__/` and should be committed with your changes.
