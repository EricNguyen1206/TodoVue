# TodoVue

This project is a todo application built using Vite, VueJS, Typescript, and TailwindCSS.

## Project Description

The purpose of this project is to showcase how Vite, VueJS, Typescript, and TailwindCSS can be used together to build a modern and responsive web application. The application features several pages and components that demonstrate various features of each technology.

> [Try the demo](https://my-first-todo-vue.netlify.app/)

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory and run `npm install` or `yarn` to install the necessary dependencies.
3. Run `npm run dev` or `yarn dev` to start the development server.
4. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Technologies Used

This project uses the following technologies:

- Vite
- VueJS
- Typescript
- TailwindCSS
- Firebase (Cloud Firestore)
- VueX

## Project Structure

The project is structured as follows:

```markdown
├── public
│ ├── index.html
│ └── favicon.ico
├── src
│ ├── assets
│ ├── components
│ ├── constant
│ ├── router
│ ├── store
│ │ ├── module-name
│ │ │ ├── actions.js # module actions
│ │ │ ├── getters.js # module getters
│ │ │ ├── index.ts # module store
│ │ │ ├── mutations.ts # module mutations
│ │ │ └── typings.ts # module types declaration
│ │ ├── index.js # where we assemble modules and export the store
│ │ └── typings.js # root store type declaration
│ ├── utils
│ ├── views
│ ├── App.vue
│ └── main.ts
├── package.json
├── README.md
├── tailwind.config.json
├── tsconfig.json
└── vite.config.ts
```

The public directory contains the index.html file and the favicon.ico file.

The src directory contains the application source code, including the assets, components, constant, router, utils and views directories. The App.vue file is the root component of the application, and the main.ts file is the entry point for the application.

The tsconfig.json file contains the Typescript configuration for the project.

The package.json file contains the project dependencies and scripts.

## Contributing

If you would like to contribute to this project, please follow these steps:

- Fork the repository to your own GitHub account.
- Clone the repository to your local machine.
- Create a new branch for your changes.
- Make your changes and commit them to your branch.
- Push your changes to your forked repository.
- Create a pull request from your branch to the main repository.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
