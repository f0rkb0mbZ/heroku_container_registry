## Hello there!

This is a simple node app running on heroku!

<img src="https://camo.githubusercontent.com/9c24355bb3afbff914503b663ade7beb341079fa/68747470733a2f2f6e6f64656a732e6f72672f7374617469632f696d616765732f6c6f676f2d6c696768742e737667" alt="nodejs" style="zoom:25%;" />		<img src="https://www3.assets.heroku.com/assets/logo-purple-08fb38cebb99e3aac5202df018eb337c5be74d5214768c90a8198c97420e4201.svg" alt="Heroku!" style="width: 230px;" />



## Hosted App

This app is hosted here 👉 [herokudock.herokuapp.com](https://herokudock.herokuapp.com/)

## How to Deploy

1. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line).

2. Login 

   ```bash
   $ heroku login
   ```

3. Login to Container Registry

   You must have Docker set up locally to continue. You should see output when you run this command.

   ```bash
   $ docker ps
   ```

4. Now you can sign into Container Registry.

   ```bash
   $ heroku container:login
   ```

5. Push your Docker-based app

   Build the Dockerfile in the current directory and push the Docker image.

   ```bash
   $ heroku container:push web -a <your_heroku_app_name>
   ```

6. Deploy the changes

   Release the newly pushed images to deploy your app.

   ```bash
   $ heroku container:release web -a <your_heroku_app_name>
   ```

   

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.