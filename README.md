# Folloze business ROI calculator

This project is a single page application(SPA) developed with React and Sass./
It is a survey toold that outputs results based on user answers.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The build folder can be used for deployement!

## Dependencies

- React 18 +
- Typescript
- Sass

## Survey

The survey is made of three groups of questions:\
`costs`(ids 0-9)\
`revenue`(ids 10-19)\
`productivity`(ids 20-29)

Each question has the following format:
- type: ('currency' | 'plain' | 'percentage') - if the answers requires plain numbers, % or $ values.
- question: (string) - Is the main text for the question
- description ({ text: string, link : boolean } []) - optional filed to provide more information regarding the question
- value (number) - used to calculate the final results
- id (number) - used on the results calculations





