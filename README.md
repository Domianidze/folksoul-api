## Folksoul Api
 
An api made for a musical band Folksoul. You can visit the production version [here!](https://folksoul-api.sandro.redberryinternship.ge/)

### Table of Contents

* [Prerequisites](#prerequisites)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Project Structure](#project-structure)
* [Resources](#resources)

### Prerequisites

* <img src="./readme/assets/img/nodejs.png" height="15" style='padding-right: 10px'> *Node JS @16.14.2*
* <img src="./readme/assets/img/npm.png" height="15" style='padding-right: 10px'/> *npm 8.5.0*

### Tech Stack

* <img src="./readme/assets/img/typescript.png" height="15"  style='padding-right: 10px'> [Typescript @4.7.4](https://www.typescriptlang.org/) - programming language
* <img src="./readme/assets/img/express.png" height="15"  style='padding-right: 10px'> [Express @4.18.1](https://expressjs.com/) - nodejs framework
* <img src="./readme/assets/img/mongoose.png" height="15"  style='padding-right: 10px'> [Mongoose @6.3.6](https://mongoosejs.com/) - mongodb library
* <img src="./readme/assets/img/swagger.png" height="15"  style='padding-right: 10px'> [Swagger @4.4.0](https://swagger.io/) - rest api ui

### Getting Started

1\. First of all clone the repository from github:
```sh
git clone https://github.com/RedberryInternship/folksoul-api-Domianidze.git
```

2\. Secondly install all the dependencies:
```sh
npm install
```

3\. Thirdly create the config file and insert the data:
```sh
cp .env.example .env
```

4\. Then create a band:
```sh
npm run band:create
```

5\. And lastly start the dev server:
```sh
npm run dev
```

You can also create an user if needed:
```sh
npm run user:create
```

### Deployment

1\. First build the production version:
```sh
npm run build:prod
```

2\. Then start the server:
```sh
npm start
```

### Project Structure

```bash
├─── readme # readme assets
├─── public # public files
│   ├─── img # img files
│   ├───├─── img.png # img file
├─── src # source codes
│   ├─── bin # script files
│   ├───├─── script.ts # script file
│   ├─── config # config files
│   ├───├─── config.ts # config file
│   ├─── controllers # controller files
│   ├───├─── controller.ts # controller file
│   ├─── middleware # middleware files
│   ├───├─── middleware.ts # middleware file
│   ├───├─── index.ts # export all middlewares 
│   ├─── models # mongoose model files
│   ├───├─── model.ts # model file
│   ├───├─── index.ts # export all models 
│   ├─── routes # route files
│   ├───├─── route.ts # route file
│   ├───├─── index.ts # export all routes 
│   ├─── schemas # joi schema files 
│   ├───├─── schema.ts # schema file
│   ├───├─── index.ts # export all schemas 
│   ├─── types # interface files 
│   ├───├─── type.ts # interface file
│   ├───├─── index.ts # export all interfaces 
│   ├─── util # utility functions 
│   ├───├─── schema.ts # utility function file
│   ├───├─── index.ts # export utility functions
│   ├─── server.ts # nodejs server
- .env-example # config file example
- .gitignore # git ignore file
- .eslintrc.json # eslint config file
- .prettierrc.json # prettier config file
- tsconfig.json # typescript config file
- package.json # dependency manager configurations
- package-lock.json # dependency manager configurations
- README.md # readme file
```

### Resources

*  [Project Details](https://redberry.gitbook.io/assignment-iii-folksoul/)
*  [Git Commit Rules](https://redberry.gitbook.io/resources/git-is-semantikuri-komitebi)

