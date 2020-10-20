This project was bootstrapped and ejected with [Create React App](https://github.com/facebook/create-react-app).

# React-training

This is a pet project is used to practice for developers.

Currenty this project contains:

1. How to use react-i18next in reactjs project.
2. How to implement <b>redux code splitting</b>.
3. How to implement <b>redux code splitting</b> with [redux-persist](https://github.com/rt2zz/redux-persist)

## 1. How to use react-i18next.

You can visit [react-i18next](https://react.i18next.com/) homepage to see the details.
In this project, just show how to implement react-i18next with dynamic loading translations.
## 2. How to implement redux code splitting

The principle for this implementation, you can read at [redux-code-splitting](https://redux.js.org/recipes/code-splitting).

1. Why do I need redux code splitting?
    * Without redux code splitting, your site not only load redux codes for `/homepage` (`homepageReducer` for example), but also load all of redux codes for of all of other pages, that means the site user is landing on waste more time to load. 
    
        ex: The user is reaching to `/homepage`, without redux code splitting, then the site need to download all of codes of redux for others site like `/about` (with `aboutReducer` for example),  or `/user` (with `userReducer` for example), and that is not necessary at that moment.
    
    * With <b>redux code splitting</b> we can only load `homepageReducer` for `/homepage`.

2. When can i use it?

     * Your project MUST implement code-splitting for loading sites, that means if user visit `homepage` then the website should download only `homepage`. 
     * You care about performance.
     
3. How do i verify that the redux code splitting works (in this project)?
    * First of all, this project has separated into 3 routes with `/`, `/about`, and `/users`
    * `homepage` and `about` routes are `static reducer` which mean these are reducers need to be used in all of sites.
    * only `user` route is using redux dynamic loading which mean the reducer only avaible when user reach on `/users`
    
    Inspect the page after running this project at port `4000`, you can view sources in the chrome developer tool if you are using chrome.
    
    * If you are at route `/` or `/about` then the source code only contains `about` or `home` folder (contains reducer and actions for these pages).
    * If you are at route `/users` after visiting `/` or `/about`, then you will see 1 more folder named `user`, that means the `user` page has dymanic loading when user reaching route `/users`
    * If you visit `/users` and you didn't visit `/` or `/about`, you will see at least 3 folders named `about`, `home`, and `user`. The `user` folder here of course because we are at `/users`, `about` and `home` existing here because we are using `static reducer` for those.

## 3. How to implement <b>redux code splitting</b>
   You can checkout [redux-persist](https://github.com/NhanHoang8195/react-training/tree/redux-persist) branch, this branch combines how to implement redux-persist and redux-saga

## 4. Questions
   Don't hestiate to contact me if you have any questions.
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.
