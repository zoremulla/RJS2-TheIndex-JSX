#### Introduction

You're given a project that displays the following:

![TheIndex Homepage](https://i.imgur.com/jytCNwR.png)

This page is displayed using just HTML, written in the `public/index.html` file. Your job is to recreate this page using JSX in the `src/App.js` file.

## Setup

1. Fork the [repository](https://github.com/JoinCODED/RJS2-TheIndex-JSX)
2. Clone it.
3. `cd` into the project directory.
4. Install the required packages for the task.

```bash
$ yarn install
```

_5._ Run the project

```shell
$ yarn start
```

_6._ After you make any changes, you don't need to do anything. The page will refresh automagically!

---

## Task

#### 1. HTML to JSX

1. Run the project, see what it looks like.
2. The `index.html` file has a `div` tag with `id="app"`. Your task is to copy all of the content within that `div` into the `App`'s component function in `App.js`.
3. Convert it to valid JSX.
4. You'll know when you're done if the page looks exactly the same as it did in step one and you have no errors or warnings in your console.

#### 2. Dynamic Data

You may have noticed that there's a file called `data.js` in your `src/` directory. This file exports an array called `authors`. Each element in that array contains the data for a single author.

1. Inspect the `authors` array in `src/data.js`, and familiarize yourself with its contents.
2. Import this array into your `App.js` file: `import authors from './data'`.
3. Currently, all the authors in `App.js` are being _hardcoded_. Replace the hardcoded text with values from the `authors` array.

---

#### Submission

1. Push your code to Github
