# Career Path app

## Purpose of the application

The purpose of this app is to test my React programming skills. While solving the tasks, I tried to use my experience gained <br> while creating other projects. I tried to perform them knowing that I am creating a more complicated system than what was<br> indicated in the task.
I used technologies that, in my opinion, should be used in larger projects.

## Special thanks to

- [Hello Roman](https://www.youtube.com/channel/UCq8XmOMtrUCb8FcFHQEd8_g) React course for supporters on YouTube
- [Study Buddy App](https://github.com/helloroman/hr-study-buddy) created in the above-mentioned course
- [Magic Navigation Menu Indicator](https://youtu.be/ArTVfdHOB-M)

## Technologies used

- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [Styled components](https://styled-components.com/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [React Modal](https://github.com/reactjs/react-modal)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [UUID](https://github.com/uuidjs/uuid)

## Changelog

# 0.2.0

1. The FormField component has been split into smaller components:

- FormField - default,
- SelectField - for selects,
- TextAreaField - for textareas,
- CheckboxField - for checkboxes,

2. Form validation has been enhanced with Yup Schema, errors are now passed from prop 'errors' and their display has been moved to the individual components.

3. Google Fonts are now imported in HTML file.

4. Added initialState for 'path' - Previously, it was the value of the 'industry'.

## ToDos

1. Add more tests

2. Think over how to pass options to select (via props?)
