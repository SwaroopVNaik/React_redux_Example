# React Complete Guide for Freshers

Beginner to internship, placement, and React developer interview ready.

This README is written in simple English. It is meant for a college student or fresher who wants to learn React from zero and then explain React confidently in interviews.

Official docs checked on 30 May 2026:

- React docs: https://react.dev
- React Hooks reference: https://react.dev/reference/react/hooks
- React Router docs: https://reactrouter.com
- Redux Toolkit docs: https://redux-toolkit.js.org
- React Redux docs: https://react-redux.js.org

---

## Table of Contents

1. [How To Study This README](#how-to-study-this-readme)
2. [React Mental Model](#react-mental-model)
3. [React Fundamentals](#react-fundamentals)
4. [JSX](#jsx)
5. [Components](#components)
6. [Props](#props)
7. [State](#state)
8. [Event Handling](#event-handling)
9. [Conditional Rendering](#conditional-rendering)
10. [Lists and Keys](#lists-and-keys)
11. [Forms](#forms)
12. [React Hooks](#react-hooks)
13. [Context API](#context-api)
14. [React Router](#react-router)
15. [API Calls](#api-calls)
16. [Performance Optimization](#performance-optimization)
17. [Lifecycle Concepts](#lifecycle-concepts)
18. [Redux Toolkit](#redux-toolkit)
19. [Project Structure](#project-structure)
20. [React Interview Preparation](#react-interview-preparation)
21. [React Coding Interview Questions](#react-coding-interview-questions)
22. [React Best Practices](#react-best-practices)
23. [Common Mistakes](#common-mistakes)
24. [React Cheat Sheet](#react-cheat-sheet)
25. [React Revision Notes](#react-revision-notes)
26. [React Roadmap 2026](#react-roadmap-2026)
27. [How To Become Job Ready In React](#how-to-become-job-ready-in-react)
28. [30-Minute Interview Revision Guide](#30-minute-interview-revision-guide)

---

## How To Study This README

Use this order:

```text
HTML/CSS/JS basics
        |
        v
JSX -> Components -> Props -> State -> Events
        |
        v
Lists -> Forms -> Hooks -> API Calls
        |
        v
Router -> Context -> Redux Toolkit
        |
        v
Projects -> Interview Questions -> Revision
```

Memory trick:

```text
React basics = C P S E

C = Components
P = Props
S = State
E = Events
```

For every important topic, you will see:

1. Simple definition
2. Why it is needed
3. Real-world analogy
4. Syntax
5. Example code
6. Line-by-line explanation
7. Common mistakes
8. Interview explanation
9. One-line revision note

---

## React Mental Model

React is a JavaScript library for building user interfaces.

The most important formula:

```text
UI = f(state)
```

Meaning:

```text
Your screen = a function of current data
```

If data changes, React shows a new UI.

```text
User action
    |
    v
State changes
    |
    v
Component re-renders
    |
    v
React compares old UI and new UI
    |
    v
Only needed DOM updates happen
```

Memory trick:

```text
React thinks in SNAP

S = State stores data
N = New UI is calculated
A = Algorithm compares UI
P = Page updates
```

---

# React Fundamentals

## What Is React?

### Simple Definition

React is a JavaScript library used to build fast, reusable, and interactive user interfaces.

### Why It Is Needed

Without React, a large web app becomes hard to manage because you must manually update many DOM elements. React lets you split the UI into small parts called components.

### Real-World Analogy

Think of a food delivery app. It has many parts:

- Header
- Restaurant card
- Search bar
- Cart
- Login form

React lets you build each part separately and combine them like building blocks.

### Syntax

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

### Example Code

```jsx
// A simple React component
function Welcome() {
  // The component returns the UI to show on the screen.
  return <h1>Welcome to React</h1>;
}

// The component is exported so another file can import and use it.
export default Welcome;
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `function Welcome() {` | Creates a React functional component named `Welcome`. |
| `return <h1>Welcome to React</h1>;` | Returns JSX, which tells React what to show. |
| `}` | Ends the component function. |
| `export default Welcome;` | Makes this component available to other files. |

### Common Mistakes

- Thinking React is a full framework. It is mainly a UI library.
- Forgetting that component names must start with a capital letter.
- Trying to update the DOM manually instead of using state.

### Interview Explanation

React is a JavaScript library created by Meta for building component-based user interfaces. It helps developers create reusable UI parts and efficiently update the screen when data changes.

### One-Line Revision Note

React builds UI using reusable components and updates the screen when data changes.

---

## Why React Was Created

### Simple Definition

React was created to make large, dynamic user interfaces easier to build and maintain.

### Why It Is Needed

Traditional DOM manipulation becomes messy when many parts of the page change often.

### Real-World Analogy

Imagine updating marks for 100 students on a notice board. Instead of rewriting the whole board, you update only the changed marks. React follows a similar idea.

### Syntax

```text
Old way: manually find element -> manually change element
React way: change state -> React updates UI
```

### Example Code

```jsx
import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button onClick={() => setLikes(likes + 1)}>
      Likes: {likes}
    </button>
  );
}

export default LikeButton;
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `import { useState } from "react";` | Imports the Hook used to store changing data. |
| `function LikeButton() {` | Creates a component. |
| `const [likes, setLikes] = useState(0);` | Creates a state value `likes` starting at `0`. |
| `<button ...>` | Shows a button on the screen. |
| `onClick={() => setLikes(likes + 1)}` | When clicked, increases likes by 1. |
| `Likes: {likes}` | Shows the current value from state. |
| `export default LikeButton;` | Exports the component. |

### Common Mistakes

- Updating HTML manually with `document.querySelector`.
- Storing UI data in normal variables instead of state.
- Thinking React updates the whole page every time.

### Interview Explanation

React was created to solve the problem of complex UI updates. It uses a component model and a virtual DOM approach so developers can describe the UI and let React update the actual DOM efficiently.

### One-Line Revision Note

React was created to simplify complex UI updates in large applications.

---

## SPA vs MPA

### Simple Definition

SPA means Single Page Application. MPA means Multi Page Application.

### Why It Is Needed

This helps you understand how React apps usually navigate without fully reloading the page.

### Real-World Analogy

- SPA: A notebook with tabs. You stay in the same notebook and switch sections.
- MPA: Different books. You close one book and open another.

### Syntax

```text
SPA navigation: /home -> /about without full page reload
MPA navigation: /home -> server sends full /about page
```

### Example Code

```jsx
import { BrowserRouter, Link, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

Note: React Router v7 examples use `react-router`. In older React Router v6 projects, the same APIs are commonly imported from `react-router-dom`.

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `import ...` | Imports routing tools. |
| `<BrowserRouter>` | Enables browser URL based routing. |
| `<Link to="/">Home</Link>` | Navigates without full page reload. |
| `<Routes>` | Holds all route definitions. |
| `<Route path="/" ... />` | Shows Home UI for `/`. |
| `<Route path="/about" ... />` | Shows About UI for `/about`. |

### Common Mistakes

- Using normal `<a href="">` for internal navigation and causing page reload.
- Forgetting to wrap routes with `BrowserRouter`.
- Confusing SPA with a website that has only one screen.

### Interview Explanation

In an SPA, the browser loads one HTML file and JavaScript changes views on the client side. In an MPA, each route usually asks the server for a new HTML page.

### One-Line Revision Note

SPA changes views without full page reload; MPA loads a new page from the server.

### SPA vs MPA Table

| Feature | SPA | MPA |
|---|---|---|
| Page reload | Usually no full reload | Full reload often happens |
| Speed after first load | Fast | Depends on server |
| SEO | Needs care | Usually easier |
| Example | Gmail-like app | Traditional blog |
| React usage | Very common | Can also be used partly |

---

## Virtual DOM

### Simple Definition

The Virtual DOM is a lightweight JavaScript representation of the actual DOM.

### Why It Is Needed

Direct DOM updates can be slow and hard to manage. React first calculates changes in memory, then updates only the required real DOM parts.

### Real-World Analogy

Before renovating a room, you first make a drawing. You compare the old plan and the new plan, then change only what is needed.

### Syntax

```text
State change -> new Virtual DOM -> compare with old Virtual DOM -> update Real DOM
```

### Example Code

```jsx
import { useState } from "react";

function Message() {
  const [text, setText] = useState("Hello");

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setText("Hello React")}>Change</button>
    </div>
  );
}

export default Message;
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `useState("Hello")` | Stores the current message. |
| `<p>{text}</p>` | Shows the current state value. |
| `setText("Hello React")` | Changes state. |
| React re-renders | React creates a new Virtual DOM. |
| React compares | React finds only the text changed. |
| DOM update | React updates only the paragraph text. |

### Common Mistakes

- Saying Virtual DOM is always faster. It is not magic; it is a strategy.
- Thinking Virtual DOM is visible in the browser.
- Updating the real DOM manually in normal React UI.

### Interview Explanation

The Virtual DOM is an in-memory representation of the UI. When state changes, React creates a new Virtual DOM, compares it with the previous one using reconciliation, and updates only the necessary real DOM nodes.

### One-Line Revision Note

Virtual DOM helps React calculate minimum real DOM changes.

---

## Real DOM vs Virtual DOM

### Simple Definition

The Real DOM is the actual browser document. The Virtual DOM is React's JavaScript copy of the UI structure.

### Why It Is Needed

Knowing the difference helps you explain React performance clearly.

### Real-World Analogy

- Real DOM: Real house.
- Virtual DOM: House blueprint.

### Syntax

```text
Real DOM: document.getElementById("root")
Virtual DOM: React element tree created from JSX
```

### Example Code

```jsx
const element = <h1>Hello</h1>;
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `const element` | Creates a JavaScript value. |
| `<h1>Hello</h1>` | JSX becomes a React element object. |
| React element | This is part of the Virtual DOM idea, not the actual browser node yet. |

### Common Mistakes

- Saying JSX directly creates HTML.
- Saying Virtual DOM replaces the Real DOM.
- Saying React never touches the Real DOM.

### Interview Explanation

The Real DOM is managed by the browser and directly affects the screen. The Virtual DOM is managed by React and is used to calculate what real DOM changes are needed.

### One-Line Revision Note

Real DOM is browser UI; Virtual DOM is React's memory version of UI.

### Diagram

```text
JSX
 |
 v
React Element Tree
 |
 v
Virtual DOM comparison
 |
 v
Real DOM update
 |
 v
Browser screen
```

---

## React Architecture

### Simple Definition

React architecture means how a React app is organized into components, data flow, state, routing, and external APIs.

### Why It Is Needed

A good architecture keeps code easy to read, test, reuse, and scale.

### Real-World Analogy

A college has departments, teachers, students, and admin. Each part has a responsibility. A React app also has separate responsibilities.

### Syntax

```text
App
 |-- Layout
 |-- Pages
 |-- Components
 |-- Hooks
 |-- Services/API
 |-- Store
```

### Example Code

```jsx
function App() {
  return (
    <main>
      <Header />
      <ProductList />
      <Footer />
    </main>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `function App()` | Main component of the app. |
| `<main>` | Main HTML container. |
| `<Header />` | Reusable header component. |
| `<ProductList />` | Component responsible for products. |
| `<Footer />` | Reusable footer component. |

### Common Mistakes

- Putting all code inside `App.jsx`.
- Mixing API calls, UI, and business logic randomly.
- Creating too many folders before the app needs them.

### Interview Explanation

React apps are usually built as a tree of components. Data flows down through props, events flow up through callback functions, and shared state can be handled using Context, Redux, or other state tools.

### One-Line Revision Note

React architecture is component tree plus data flow plus state management.

---

## React Features

### Simple Definition

React features are the main abilities that make React useful for UI development.

### Why It Is Needed

Interviewers ask features to check if you understand why React is popular.

### Real-World Analogy

React is like a toolbox. Components, JSX, Hooks, and Virtual DOM are tools inside it.

### Syntax

```text
Feature examples: JSX, Components, Props, State, Hooks, Virtual DOM
```

### Example Code

```jsx
function UserCard({ name }) {
  return <h2>Hello, {name}</h2>;
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `function UserCard` | Shows component feature. |
| `{ name }` | Shows props feature. |
| `<h2>...</h2>` | Shows JSX feature. |
| `{name}` | Shows JavaScript expression in JSX. |

### Common Mistakes

- Listing features without explaining them.
- Saying React is only fast because of Virtual DOM.
- Forgetting Hooks in modern React answers.

### Interview Explanation

Important React features include component-based architecture, JSX, props, state, Hooks, declarative UI, one-way data flow, Virtual DOM, and strong ecosystem support.

### One-Line Revision Note

React features help build reusable, declarative, and interactive UIs.

---

## React Advantages

### Simple Definition

React advantages are the benefits developers get by using React.

### Why It Is Needed

You must explain why a company would choose React.

### Real-World Analogy

Using React is like using reusable Lego blocks instead of making every shape from clay again and again.

### Syntax

```text
Benefit = reusable components + easy updates + strong ecosystem
```

### Example Code

```jsx
function Button({ text }) {
  return <button>{text}</button>;
}

function App() {
  return (
    <>
      <Button text="Save" />
      <Button text="Cancel" />
    </>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `function Button({ text })` | Creates one reusable button. |
| `<button>{text}</button>` | Displays text passed from parent. |
| `<Button text="Save" />` | Reuses the button for Save. |
| `<Button text="Cancel" />` | Reuses the same button for Cancel. |

### Common Mistakes

- Thinking React automatically makes bad code good.
- Overusing third-party libraries.
- Ignoring accessibility and performance.

### Interview Explanation

React improves development by offering reusable components, declarative rendering, efficient updates, a large ecosystem, strong community support, and compatibility with many tools.

### One-Line Revision Note

React makes UI code reusable, maintainable, and easier to scale.

---

# JSX

## What Is JSX?

### Simple Definition

JSX is a syntax that lets us write HTML-like code inside JavaScript.

### Why It Is Needed

It makes React UI easier to read and write.

### Real-World Analogy

JSX is like writing English mixed with small math expressions. The sentence is readable, and the calculation happens inside it.

### Syntax

```jsx
const title = <h1>Hello React</h1>;
```

### Example Code

```jsx
const name = "Asha";

function Greeting() {
  return <h1>Hello, {name}</h1>;
}

export default Greeting;
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `const name = "Asha";` | Creates a normal JavaScript variable. |
| `function Greeting()` | Creates a React component. |
| `return <h1>Hello, {name}</h1>;` | Returns JSX and inserts the variable using `{}`. |
| `export default Greeting;` | Exports the component. |

### Common Mistakes

- Using `class` instead of `className`.
- Returning two sibling elements without a wrapper.
- Forgetting to close tags like `<img />`.

### Interview Explanation

JSX is a JavaScript syntax extension used in React to describe UI. It looks like HTML but gets compiled to JavaScript calls that create React elements.

### One-Line Revision Note

JSX is HTML-like syntax inside JavaScript used to describe React UI.

---

## Rules Of JSX

### Simple Definition

JSX rules are the rules you must follow so React can understand your UI.

### Why It Is Needed

JSX is not pure HTML. It becomes JavaScript, so it has stricter rules.

### Real-World Analogy

Like exam answer sheets, JSX has formatting rules. If you ignore them, the evaluator cannot read your answer.

### Syntax

```jsx
return (
  <>
    <h1 className="title">Hello</h1>
    <img src="/logo.png" alt="Logo" />
  </>
);
```

### Example Code

```jsx
function Profile() {
  return (
    <>
      <h1 className="name">Ravi</h1>
      <p>Frontend Developer</p>
    </>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `return (` | Parentheses make multi-line JSX readable. |
| `<>` | Fragment groups elements without adding extra DOM node. |
| `className="name"` | JSX uses `className`, not `class`. |
| `<p>...</p>` | Normal paragraph element. |
| `</>` | Closes the fragment. |

### Common Mistakes

| Mistake | Correct |
|---|---|
| `<div class="box">` | `<div className="box">` |
| `<input>` | `<input />` |
| `return <h1>A</h1><p>B</p>` | Wrap with `<>...</>` |
| `<button onclick="">` | `<button onClick={handleClick}>` |

### Interview Explanation

Important JSX rules are: return one parent element, close every tag, use `className`, use camelCase event names, and write JavaScript expressions inside curly braces.

### One-Line Revision Note

JSX rule memory trick: One parent, close tags, camelCase, JS in braces.

---

## Expressions In JSX

### Simple Definition

Expressions in JSX are JavaScript values or calculations written inside `{}`.

### Why It Is Needed

They help show dynamic data in the UI.

### Real-World Analogy

A certificate template has blank spaces for name and marks. JSX expressions fill those blanks.

### Syntax

```jsx
<h1>{userName}</h1>
<p>{age >= 18 ? "Adult" : "Minor"}</p>
```

### Example Code

```jsx
function Result() {
  const marks = 82;

  return (
    <p>
      Result: {marks >= 40 ? "Pass" : "Fail"}
    </p>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `const marks = 82;` | Stores marks. |
| `<p>` | Starts paragraph. |
| `{marks >= 40 ? "Pass" : "Fail"}` | Runs a ternary expression and prints result. |

### Common Mistakes

- Writing statements like `if` directly inside JSX.
- Forgetting curly braces for variables.
- Putting objects directly in JSX.

### Interview Explanation

JSX supports JavaScript expressions inside curly braces. Expressions return a value, so they can be rendered. Statements like `if` do not directly return a value, so they should be used outside JSX or replaced with ternary logic.

### One-Line Revision Note

Use `{}` in JSX when you want JavaScript to calculate or display a value.

---

## Fragments

### Simple Definition

A Fragment lets you return multiple JSX elements without adding an extra HTML element to the DOM.

### Why It Is Needed

React components must return one parent value. Fragments provide a clean invisible wrapper.

### Real-World Analogy

A transparent folder holds multiple papers together but does not become part of the printed content.

### Syntax

```jsx
return (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);
```

### Example Code

```jsx
function Student() {
  return (
    <>
      <h2>Meena</h2>
      <p>Computer Science</p>
    </>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `<>` | Starts a short Fragment. |
| `<h2>Meena</h2>` | First element. |
| `<p>Computer Science</p>` | Second element. |
| `</>` | Ends the Fragment. |

### Common Mistakes

- Using unnecessary `<div>` wrappers everywhere.
- Forgetting that `<>...</>` cannot receive a `key`.
- Returning multiple elements without wrapper.

### Interview Explanation

Fragments group multiple JSX elements without creating extra DOM nodes. They are useful when a component must return siblings but you do not want extra HTML.

### One-Line Revision Note

Fragment is an invisible JSX wrapper.

---

## Rendering Elements

### Simple Definition

Rendering means showing React elements on the browser screen.

### Why It Is Needed

React code must be connected to a real HTML root element.

### Real-World Analogy

Writing a movie script is not enough. You need a screen to show the movie. React needs a root to show the UI.

### Syntax

```jsx
createRoot(document.getElementById("root")).render(<App />);
```

### Example Code

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `import { StrictMode } from "react";` | Imports a helper that checks React problems in development. |
| `import { createRoot } ...` | Imports the modern React DOM rendering API. |
| `import App ...` | Imports the main app component. |
| `document.getElementById("root")` | Finds the root element in `index.html`. |
| `.render(...)` | Tells React what component tree to show. |
| `<App />` | Shows the main component. |

### Common Mistakes

- Missing `<div id="root"></div>` in HTML.
- Importing `createRoot` from the wrong package.
- Rendering more than one root without need.

### Interview Explanation

React renders elements by creating a root using `createRoot` and calling `render` with the app component. React then controls the UI inside that root element.

### One-Line Revision Note

Rendering connects React component tree to the browser DOM root.

---

# Components

## Functional Components

### Simple Definition

A functional component is a JavaScript function that returns JSX.

### Why It Is Needed

Components split UI into small reusable pieces.

### Real-World Analogy

A laptop is made from keyboard, screen, battery, and motherboard. A React app is made from components.

### Syntax

```jsx
function ComponentName() {
  return <h1>UI</h1>;
}
```

### Example Code

```jsx
function Header() {
  return <header>My React App</header>;
}

export default Header;
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `function Header()` | Creates a component named `Header`. |
| `return <header>...` | Returns JSX for header UI. |
| `export default Header;` | Allows other files to use this component. |

### Common Mistakes

- Naming component `header` instead of `Header`.
- Forgetting to return JSX.
- Calling component as `Header()` inside JSX instead of `<Header />`.

### Interview Explanation

Functional components are JavaScript functions that accept props and return JSX. Modern React mainly uses functional components with Hooks.

### One-Line Revision Note

Functional component = function + JSX.

---

## Component Structure

### Simple Definition

Component structure is the way we organize imports, logic, and JSX inside a component file.

### Why It Is Needed

Clean structure makes code easy to read and debug.

### Real-World Analogy

A well-written exam answer has heading, explanation, diagram, and conclusion. A component also needs order.

### Syntax

```jsx
import something

function Component() {
  logic
  return JSX
}

export default Component
```

### Example Code

```jsx
import "./UserCard.css";

function UserCard() {
  const name = "Nisha";

  return (
    <article className="user-card">
      <h2>{name}</h2>
      <p>React learner</p>
    </article>
  );
}

export default UserCard;
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `import "./UserCard.css";` | Loads component-specific styles. |
| `function UserCard()` | Creates the component. |
| `const name = "Nisha";` | Keeps local data for rendering. |
| `<article ...>` | Semantic container for card content. |
| `{name}` | Displays JavaScript variable. |
| `export default UserCard;` | Exports the component. |

### Common Mistakes

- Mixing many unrelated components in one file.
- Placing exports in the middle of the file without reason.
- Keeping very large JSX in one component.

### Interview Explanation

A good component file usually has imports at top, component logic inside the function, JSX in the return, and export at the end.

### One-Line Revision Note

Clean component structure makes React code readable.

---

## Reusable Components

### Simple Definition

A reusable component is a component that can be used many times with different data.

### Why It Is Needed

It reduces duplicate code and keeps UI consistent.

### Real-World Analogy

One stamp design can print many ID cards with different names.

### Syntax

```jsx
<Button label="Save" />
<Button label="Delete" />
```

### Example Code

```jsx
function Button({ label, type = "button" }) {
  return <button type={type}>{label}</button>;
}

function Toolbar() {
  return (
    <div>
      <Button label="Save" />
      <Button label="Submit" type="submit" />
    </div>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `function Button({ label, type = "button" })` | Receives props and gives `type` a default value. |
| `<button type={type}>` | Uses the prop as button type. |
| `{label}` | Shows different text each time. |
| `<Button label="Save" />` | Reuses component for Save. |
| `<Button label="Submit" type="submit" />` | Reuses component with another type. |

### Common Mistakes

- Making components too specific.
- Passing too many props instead of composing children.
- Duplicating same UI in many places.

### Interview Explanation

Reusable components accept data through props and render common UI. This improves maintainability and avoids repetition.

### One-Line Revision Note

Reusable component = same UI pattern, different props.

---

## Component Composition

### Simple Definition

Component composition means building bigger components by combining smaller components.

### Why It Is Needed

It keeps components simple and flexible.

### Real-World Analogy

A thali is made by combining rice, dal, curry, roti, and sweet. Each item is separate but together forms a meal.

### Syntax

```jsx
<Card>
  <UserInfo />
</Card>
```

### Example Code

```jsx
function Card({ children }) {
  return <section className="card">{children}</section>;
}

function Profile() {
  return (
    <Card>
      <h2>Anil</h2>
      <p>Frontend intern</p>
    </Card>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `function Card({ children })` | Receives nested JSX through `children`. |
| `<section className="card">` | Creates a wrapper UI. |
| `{children}` | Places whatever is written inside `<Card>`. |
| `<Card>...</Card>` | Uses composition. |
| `<h2>` and `<p>` | Become children of `Card`. |

### Common Mistakes

- Not using `children` when wrapper components need flexible content.
- Passing JSX as strings.
- Creating one giant component instead of composing small ones.

### Interview Explanation

Composition is a React pattern where components are combined together. It is often preferred over inheritance because it keeps UI flexible and reusable.

### One-Line Revision Note

Composition means small components join to make bigger UI.

---

# Props

## What Are Props?

### Simple Definition

Props are data passed from a parent component to a child component.

### Why It Is Needed

Props make components reusable and dynamic.

### Real-World Analogy

Props are like information written on an order slip. The kitchen receives the order and prepares food based on it.

### Syntax

```jsx
<User name="Priya" />
```

### Example Code

```jsx
function User({ name }) {
  return <h2>Hello, {name}</h2>;
}

function App() {
  return <User name="Priya" />;
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `function User({ name })` | Child component receives `name` prop. |
| `{name}` | Displays the prop value. |
| `<User name="Priya" />` | Parent passes data to child. |

### Common Mistakes

- Trying to change props inside the child.
- Forgetting curly braces for non-string props.
- Passing wrong prop names.

### Interview Explanation

Props are read-only inputs passed from parent to child components. They help make components reusable and support one-way data flow.

### One-Line Revision Note

Props are read-only data from parent to child.

---

## Passing Data Using Props

### Simple Definition

Passing data using props means sending values into a component through attributes.

### Why It Is Needed

It allows one component design to display many different values.

### Real-World Analogy

A printer template can print different certificates when given different names.

### Syntax

```jsx
<Product title="Laptop" price={55000} />
```

### Example Code

```jsx
function Product({ title, price }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Price: Rs {price}</p>
    </div>
  );
}

function App() {
  return <Product title="Laptop" price={55000} />;
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `function Product({ title, price })` | Receives two props. |
| `<h3>{title}</h3>` | Shows product title. |
| `<p>Price: Rs {price}</p>` | Shows price. |
| `price={55000}` | Sends a number using curly braces. |

### Common Mistakes

- Writing `price="55000"` when you need a number.
- Misspelling props.
- Passing too much unrelated data.

### Interview Explanation

Data is passed to components through props using JSX attributes. String props can use quotes, while numbers, arrays, objects, and booleans use curly braces.

### One-Line Revision Note

Use props to send dynamic data into components.

---

## Parent To Child Communication

### Simple Definition

Parent to child communication means the parent sends data to a child using props.

### Why It Is Needed

The parent often owns data and children display it.

### Real-World Analogy

A teacher gives instructions to students. Students act based on the teacher's instructions.

### Syntax

```jsx
<Child message={parentMessage} />
```

### Example Code

```jsx
function Child({ message }) {
  return <p>{message}</p>;
}

function Parent() {
  const parentMessage = "Study React daily";

  return <Child message={parentMessage} />;
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `function Child({ message })` | Child receives data. |
| `<p>{message}</p>` | Child displays data. |
| `const parentMessage ...` | Parent owns the data. |
| `<Child message={parentMessage} />` | Parent passes data to child. |

### Common Mistakes

- Trying to directly access parent variables inside child.
- Passing data in wrong direction.
- Mutating prop values.

### Interview Explanation

React follows one-way data flow. Parent components pass data down to child components using props.

### One-Line Revision Note

Parent sends data down through props.

---

## Props Destructuring

### Simple Definition

Props destructuring means extracting prop values directly from the props object.

### Why It Is Needed

It makes code shorter and cleaner.

### Real-World Analogy

Instead of carrying a whole bag every time, you take out only the book and pen you need.

### Syntax

```jsx
function User({ name, age }) {
  return <p>{name} - {age}</p>;
}
```

### Example Code

```jsx
function Student({ name, branch }) {
  return (
    <p>
      {name} studies {branch}
    </p>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `{ name, branch }` | Destructures props in function parameter. |
| `{name}` | Uses the extracted `name`. |
| `{branch}` | Uses the extracted `branch`. |

### Common Mistakes

- Destructuring a prop name that was never passed.
- Confusing object destructuring with array destructuring.
- Over-destructuring deeply nested data.

### Interview Explanation

Props are received as an object. Destructuring allows us to directly access specific prop values, making the component cleaner.

### One-Line Revision Note

Destructuring extracts prop values from the props object.

---

## Default Props

### Simple Definition

Default props are fallback values used when a prop is not provided.

### Why It Is Needed

They prevent missing data from breaking the UI.

### Real-World Analogy

If a student does not choose a lunch option, the canteen gives the default meal.

### Syntax

```jsx
function Button({ label = "Click" }) {
  return <button>{label}</button>;
}
```

### Example Code

```jsx
function Badge({ text = "New" }) {
  return <span>{text}</span>;
}

function App() {
  return (
    <>
      <Badge />
      <Badge text="Popular" />
    </>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `{ text = "New" }` | Sets default value for `text`. |
| `<Badge />` | Uses default text. |
| `<Badge text="Popular" />` | Overrides default text. |

### Common Mistakes

- Using default props for required data.
- Thinking default value applies when prop is `null`.
- Forgetting that `undefined` triggers default, but `null` does not.

### Interview Explanation

Default props provide fallback values for missing props. In functional components, default values are commonly set using parameter destructuring.

### One-Line Revision Note

Default props protect UI when props are missing.

---

# State

## What Is State?

### Simple Definition

State is data that belongs to a component and can change over time.

### Why It Is Needed

React must remember changing values like input text, counter value, selected tab, or login status.

### Real-World Analogy

A fan has a current speed. The speed can change from 0 to 1 to 2 to 3. That current speed is like state.

### Syntax

```jsx
const [value, setValue] = useState(initialValue);
```

### Example Code

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `import { useState } ...` | Imports state Hook. |
| `function Counter()` | Creates component. |
| `const [count, setCount] = useState(0);` | Creates state value and update function. |
| `<button ...>` | Creates clickable button. |
| `setCount(count + 1)` | Updates state. |
| `{count}` | Displays current state. |

### Common Mistakes

- Changing state directly like `count = count + 1`.
- Expecting state update to be immediately visible on the next line.
- Storing values in state that can be calculated from props or other state.

### Interview Explanation

State is local component data that can change. When state changes, React re-renders the component to show updated UI.

### One-Line Revision Note

State is component memory.

---

## Why State Is Needed

### Simple Definition

State is needed when UI must change because of user actions, API responses, timers, or other events.

### Why It Is Needed

Normal variables do not trigger re-render in React.

### Real-World Analogy

A scoreboard must update when a team scores. If it does not remember score, viewers see wrong information.

### Syntax

```jsx
setStateFunction(newValue);
```

### Example Code

```jsx
function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <p>Hello student</p>}
    </div>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `isVisible` | Stores whether text should show. |
| `setIsVisible(!isVisible)` | Changes true to false or false to true. |
| `{isVisible && ...}` | Shows paragraph only when state is true. |

### Common Mistakes

- Using normal variable for UI that changes.
- Hiding elements with DOM manipulation instead of state.
- Creating too many states for derived values.

### Interview Explanation

State is needed because React re-renders components when state changes. This keeps UI synchronized with data.

### One-Line Revision Note

Use state when a component needs to remember changing data.

---

## State vs Props

### Simple Definition

Props are passed from parent. State is owned and updated by the component.

### Why It Is Needed

This is one of the most common interview questions.

### Real-World Analogy

- Props: Your college ID information given by college.
- State: Your current mood, which changes inside you.

### Syntax

```jsx
function Child({ title }) {
  const [count, setCount] = useState(0);
}
```

### Example Code

```jsx
function ScoreCard({ teamName }) {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h2>{teamName}</h2>
      <button onClick={() => setScore(score + 1)}>
        Score: {score}
      </button>
    </div>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `{ teamName }` | Prop from parent. |
| `score` | State owned by `ScoreCard`. |
| `setScore` | Updates local state. |
| `{teamName}` | Displays prop. |
| `{score}` | Displays state. |

### Common Mistakes

- Trying to update props.
- Copying props into state without a reason.
- Confusing parent-owned data and component-owned data.

### Interview Explanation

Props are read-only inputs passed to a component, while state is mutable data managed inside a component. Props help communication; state helps interactivity.

### One-Line Revision Note

Props come from outside; state lives inside.

### State vs Props Table

| Point | Props | State |
|---|---|---|
| Ownership | Parent owns | Component owns |
| Change | Read-only in child | Can be updated |
| Purpose | Pass data | Remember data |
| Causes render | Yes, when parent passes new props | Yes, when state updates |

---

## Updating State

### Simple Definition

Updating state means changing state using its setter function.

### Why It Is Needed

React needs setter functions to know data changed and UI must re-render.

### Real-World Analogy

To update bank balance, you must use the bank system. You should not overwrite the record manually.

### Syntax

```jsx
setCount(count + 1);
setCount((previousCount) => previousCount + 1);
```

### Example Code

```jsx
function SafeCounter() {
  const [count, setCount] = useState(0);

  function increaseTwice() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return <button onClick={increaseTwice}>{count}</button>;
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `useState(0)` | Starts count at 0. |
| `function increaseTwice()` | Creates event handler. |
| `setCount((prev) => prev + 1)` | Safely updates based on previous state. |
| Called twice | Count increases by 2. |
| `onClick={increaseTwice}` | Runs function on click. |

### Common Mistakes

- Direct mutation: `state.value = 10`.
- Using old state when next state depends on previous state.
- Mutating arrays with `push` and objects with direct assignment.

### Interview Explanation

State should be updated using setter functions. When the new value depends on the previous value, use the functional updater form.

### One-Line Revision Note

When new state depends on old state, use functional update.

---

# Event Handling

## onClick

### Simple Definition

`onClick` runs a function when the user clicks an element.

### Why It Is Needed

Buttons, cards, menus, and icons need click behavior.

### Real-World Analogy

Pressing a doorbell triggers a sound. Clicking a button triggers a function.

### Syntax

```jsx
<button onClick={handleClick}>Click</button>
```

### Example Code

```jsx
function ClickExample() {
  function handleClick() {
    alert("Button clicked");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `function handleClick()` | Defines what should happen on click. |
| `alert(...)` | Shows browser alert. |
| `onClick={handleClick}` | Passes function reference to React. |

### Common Mistakes

- Writing `onClick={handleClick()}` and calling immediately.
- Using lowercase `onclick`.
- Doing too much logic directly inside JSX.

### Interview Explanation

React events use camelCase names like `onClick`. We pass a function reference, and React calls it when the event happens.

### One-Line Revision Note

Use `onClick={functionName}`, not `onClick={functionName()}`.

---

## onChange

### Simple Definition

`onChange` runs when input value changes.

### Why It Is Needed

Forms need to track what the user types.

### Real-World Analogy

A teacher watches students write answers and notices every change.

### Syntax

```jsx
<input value={name} onChange={(event) => setName(event.target.value)} />
```

### Example Code

```jsx
function NameInput() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(event) => setName(event.target.value)}
      placeholder="Enter name"
    />
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `useState("")` | Stores input text. |
| `value={name}` | Makes input value controlled by state. |
| `onChange={(event) => ...}` | Runs on every typing change. |
| `event.target.value` | Gets latest input value. |
| `setName(...)` | Updates state. |

### Common Mistakes

- Using `value` without `onChange`.
- Reading input value from DOM manually.
- Forgetting to initialize state as empty string.

### Interview Explanation

`onChange` is used to handle input changes. In controlled components, input value is stored in React state and updated using `onChange`.

### One-Line Revision Note

`onChange` keeps form input and React state in sync.

---

## onSubmit

### Simple Definition

`onSubmit` runs when a form is submitted.

### Why It Is Needed

Login, signup, search, and contact forms need submit handling.

### Real-World Analogy

Filling a form is writing data. Submitting is handing it to the office.

### Syntax

```jsx
<form onSubmit={handleSubmit}>...</form>
```

### Example Code

```jsx
function LoginForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Email:", email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(event) => setEmail(event.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `email` state | Stores typed email. |
| `handleSubmit(event)` | Receives submit event. |
| `event.preventDefault()` | Stops browser page refresh. |
| `console.log(...)` | Shows submitted email. |
| `<form onSubmit=...>` | Connects form submit to handler. |
| `<button type="submit">` | Submits the form. |

### Common Mistakes

- Forgetting `preventDefault`.
- Putting submit logic only on button `onClick`.
- Missing `type="submit"`.

### Interview Explanation

`onSubmit` handles form submission. In React, we usually call `event.preventDefault()` to stop the browser from reloading the page.

### One-Line Revision Note

Use `onSubmit` for forms and `preventDefault` to stop reload.

---

## Event Object

### Simple Definition

The event object contains information about the event that happened.

### Why It Is Needed

It helps read input value, clicked element, key pressed, form data, and more.

### Real-World Analogy

A delivery receipt tells what was delivered, where, and when. Event object tells what event happened.

### Syntax

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

### Example Code

```jsx
function CityInput() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return <input onChange={handleChange} />;
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `handleChange(event)` | React passes event object automatically. |
| `event.target` | The input element that triggered event. |
| `event.target.value` | Current text inside input. |
| `onChange={handleChange}` | Registers handler. |

### Common Mistakes

- Trying to use `event.target.value` outside the handler without storing it.
- Confusing `target` and `currentTarget`.
- Forgetting event parameter.

### Interview Explanation

React event handlers receive an event object that contains details about the event. For form inputs, `event.target.value` is commonly used to read the current value.

### One-Line Revision Note

Event object tells details about what happened.

---

## Prevent Default

### Simple Definition

`preventDefault()` stops the browser's default behavior.

### Why It Is Needed

Forms normally reload the page on submit. React apps usually handle submit without reload.

### Real-World Analogy

It is like telling a driver, "Do not take the usual route; I will guide you."

### Syntax

```jsx
event.preventDefault();
```

### Example Code

```jsx
function SearchForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Search without reload");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Search" />
      <button type="submit">Search</button>
    </form>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `handleSubmit(event)` | Receives submit event. |
| `event.preventDefault()` | Stops full page reload. |
| `console.log(...)` | Runs custom submit logic. |
| `<form onSubmit=...>` | Uses React submit handler. |

### Common Mistakes

- Calling `preventDefault` outside event handler.
- Forgetting parentheses: `event.preventDefault`.
- Using it when default behavior is actually useful.

### Interview Explanation

`preventDefault()` is used to stop default browser behavior, such as form submission reload, so React can handle the logic on the client side.

### One-Line Revision Note

`preventDefault()` stops browser default action.

---

# Conditional Rendering

## if else

### Simple Definition

Conditional rendering means showing different UI based on a condition.

### Why It Is Needed

Apps show different screens for login, loading, errors, permissions, and data.

### Real-World Analogy

If it rains, take an umbrella. Else, wear sunglasses.

### Syntax

```jsx
if (isLoggedIn) {
  return <Dashboard />;
}
return <Login />;
```

### Example Code

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back</h1>;
  }

  return <h1>Please login</h1>;
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `{ isLoggedIn }` | Receives condition as prop. |
| `if (isLoggedIn)` | Checks condition. |
| `return <h1>Welcome back</h1>` | Shows logged-in UI. |
| `return <h1>Please login</h1>` | Shows fallback UI. |

### Common Mistakes

- Writing `if` directly inside JSX return.
- Forgetting a fallback return.
- Making conditions too complex inside JSX.

### Interview Explanation

Conditional rendering allows React to show different UI based on state or props. `if else` is useful when branches are larger or need early returns.

### One-Line Revision Note

Use `if else` for bigger UI decisions.

---

## Ternary Operator

### Simple Definition

Ternary operator is a short way to choose between two values.

### Why It Is Needed

It is useful inside JSX for small conditions.

### Real-World Analogy

Exam result: marks >= 40 ? pass : fail.

### Syntax

```jsx
condition ? trueUI : falseUI
```

### Example Code

```jsx
function Result({ marks }) {
  return (
    <p>
      {marks >= 40 ? "Pass" : "Fail"}
    </p>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `{ marks }` | Receives marks as prop. |
| `marks >= 40` | Checks condition. |
| `"Pass"` | Shows when true. |
| `"Fail"` | Shows when false. |

### Common Mistakes

- Nesting too many ternaries.
- Forgetting the `:` part.
- Using ternary when `if else` is clearer.

### Interview Explanation

The ternary operator is commonly used in JSX to render one of two outputs based on a condition.

### One-Line Revision Note

Ternary is best for simple either-or UI.

---

## Logical AND

### Simple Definition

Logical AND renders something only when a condition is true.

### Why It Is Needed

It is useful when there is no else UI.

### Real-World Analogy

If you have a coupon, show discount. If not, show nothing.

### Syntax

```jsx
{condition && <Component />}
```

### Example Code

```jsx
function Notification({ message }) {
  return (
    <div>
      {message && <p>{message}</p>}
    </div>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `{ message }` | Receives message prop. |
| `{message && ...}` | Renders paragraph only if message exists. |
| `<p>{message}</p>` | Shows the message. |

### Common Mistakes

- Using numbers with `&&` and accidentally rendering `0`.
- Using `&&` when you need an else case.
- Making condition unclear.

### Interview Explanation

Logical AND is used in JSX for conditional rendering when we only want to render something if the condition is truthy.

### One-Line Revision Note

Use `&&` when false means "show nothing".

---

# Lists and Keys

## map()

### Simple Definition

`map()` converts an array into a new array. In React, we use it to convert data into JSX elements.

### Why It Is Needed

Most apps display lists like products, todos, users, messages, and posts.

### Real-World Analogy

A teacher takes a list of student names and creates one ID card for each student.

### Syntax

```jsx
items.map((item) => <li>{item}</li>)
```

### Example Code

```jsx
function StudentList() {
  const students = ["Asha", "Ravi", "Meena"];

  return (
    <ul>
      {students.map((student) => (
        <li key={student}>{student}</li>
      ))}
    </ul>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `const students = ...` | Creates an array. |
| `<ul>` | List container. |
| `students.map(...)` | Loops through students. |
| `<li key={student}>` | Creates one list item with key. |
| `{student}` | Shows student name. |

### Common Mistakes

- Forgetting `return` inside `{}` callback.
- Forgetting `key`.
- Using `forEach` instead of `map` for rendering.

### Interview Explanation

In React, `map()` is used to render lists by converting each array item into a JSX element.

### One-Line Revision Note

Use `map()` to turn arrays into UI.

---

## Keys

### Simple Definition

Keys are special values that help React identify list items.

### Why It Is Needed

Keys help React update, add, remove, and reorder list items correctly.

### Real-World Analogy

Students may have the same name, but roll numbers identify them uniquely.

### Syntax

```jsx
<li key={item.id}>{item.name}</li>
```

### Example Code

```jsx
function ProductList() {
  const products = [
    { id: 1, name: "Phone" },
    { id: 2, name: "Laptop" },
  ];

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `products` | Array of objects. |
| `product.id` | Unique id for each product. |
| `key={product.id}` | Helps React track the item. |
| `{product.name}` | Shows product name. |

### Common Mistakes

- Using array index as key for changing lists.
- Making keys random with `Math.random()`.
- Putting key inside child component instead of mapped element.

### Interview Explanation

Keys help React identify which list items changed, were added, or removed. Stable unique IDs are the best keys.

### One-Line Revision Note

Keys are stable IDs for list items.

---

## Rendering Collections

### Simple Definition

Rendering collections means displaying arrays of data as repeated UI.

### Why It Is Needed

Real apps receive arrays from APIs and databases.

### Real-World Analogy

An e-commerce page receives many products and prints one card for each.

### Syntax

```jsx
array.map((item) => <Component key={item.id} item={item} />)
```

### Example Code

```jsx
function UserCard({ user }) {
  return (
    <article>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </article>
  );
}

function Users() {
  const users = [
    { id: 1, name: "Asha", email: "asha@example.com" },
    { id: 2, name: "Ravi", email: "ravi@example.com" },
  ];

  return (
    <section>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `UserCard({ user })` | Reusable component for one user. |
| `users` | Collection of user objects. |
| `users.map(...)` | Creates one card for each user. |
| `key={user.id}` | Gives stable key. |
| `user={user}` | Passes full user object as prop. |

### Common Mistakes

- Rendering object directly like `{user}`.
- Missing empty state for no data.
- Using unstable keys.

### Interview Explanation

Collections are rendered by mapping arrays to JSX. Each repeated element needs a stable key so React can update efficiently.

### One-Line Revision Note

Collection rendering = array data + map + key.

---

# Forms

## Controlled Components

### Simple Definition

A controlled component is a form element whose value is controlled by React state.

### Why It Is Needed

It gives React full control over form data, validation, and submit behavior.

### Real-World Analogy

A teacher watches every answer as the student writes it.

### Syntax

```jsx
<input value={name} onChange={(e) => setName(e.target.value)} />
```

### Example Code

```jsx
function ControlledName() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <p>Name: {name}</p>
    </div>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `useState("")` | Stores input value. |
| `value={name}` | Input displays state value. |
| `onChange=...` | Updates state when user types. |
| `<p>Name: {name}</p>` | Shows live state. |

### Common Mistakes

- Providing `value` without `onChange`.
- Initializing value as `undefined`.
- Updating DOM manually.

### Interview Explanation

In controlled components, form values are stored in React state and updated through event handlers. React becomes the single source of truth.

### One-Line Revision Note

Controlled input value comes from state.

---

## Uncontrolled Components

### Simple Definition

An uncontrolled component stores its value in the DOM instead of React state.

### Why It Is Needed

It is useful for simple forms, file inputs, or when you only need the value on submit.

### Real-World Analogy

Instead of watching every word while a student writes, the teacher checks the paper at the end.

### Syntax

```jsx
const inputRef = useRef(null);
```

### Example Code

```jsx
import { useRef } from "react";

function UncontrolledName() {
  const nameRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nameRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `useRef(null)` | Creates ref to access DOM input. |
| `handleSubmit(event)` | Handles form submit. |
| `event.preventDefault()` | Stops page reload. |
| `nameRef.current.value` | Reads DOM input value. |
| `<input ref={nameRef} />` | Connects input to ref. |

### Common Mistakes

- Using uncontrolled input when live validation is needed.
- Reading ref before element exists.
- Overusing refs instead of state.

### Interview Explanation

Uncontrolled components keep form data in the DOM. React accesses the value using refs when needed.

### One-Line Revision Note

Uncontrolled input value lives in the DOM.

---

## Form Handling

### Simple Definition

Form handling means storing, validating, and submitting user input.

### Why It Is Needed

Almost every real app has login, signup, search, checkout, or contact forms.

### Real-World Analogy

A college admission form collects data, checks it, and then submits it.

### Syntax

```jsx
<form onSubmit={handleSubmit}>
  <input name="email" value={form.email} onChange={handleChange} />
</form>
```

### Example Code

```jsx
function SignupForm() {
  const [form, setForm] = useState({ name: "", email: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <button type="submit">Create Account</button>
    </form>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `form` state | Stores all form fields in one object. |
| `handleChange(event)` | Runs when any input changes. |
| `{ name, value }` | Reads input name and value. |
| `{ ...form, [name]: value }` | Keeps old fields and updates changed field. |
| `handleSubmit` | Handles final form submit. |
| `onSubmit={handleSubmit}` | Connects submit handler. |
| `name="name"` | Matches object key. |
| `value={form.name}` | Controlled input value. |

### Common Mistakes

- Forgetting computed property `[name]`.
- Replacing entire form object with one field.
- Not preventing default submit reload.

### Interview Explanation

React forms are commonly handled using controlled components. Input values are stored in state, updated through `onChange`, and submitted through `onSubmit`.

### One-Line Revision Note

Form handling = state + onChange + onSubmit.

---

## Form Validation

### Simple Definition

Form validation checks whether user input is correct before submission.

### Why It Is Needed

It prevents wrong, empty, or unsafe data from being submitted.

### Real-World Analogy

An exam form is checked for name, roll number, and signature before acceptance.

### Syntax

```jsx
if (!email.includes("@")) {
  setError("Invalid email");
}
```

### Example Code

```jsx
function EmailForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    console.log("Submitted:", email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(event) => setEmail(event.target.value)} />
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `email` state | Stores user email. |
| `error` state | Stores validation error. |
| `preventDefault()` | Stops reload. |
| `!email.includes("@")` | Checks invalid email. |
| `setError(...)` | Shows error message. |
| `return` | Stops submit when invalid. |
| `setError("")` | Clears error when valid. |
| `{error && <p>...` | Shows error only when it exists. |

### Common Mistakes

- Validating only after API call.
- Not showing helpful error messages.
- Forgetting to stop submit after validation failure.

### Interview Explanation

Form validation checks user input before submit. In React, validation errors are usually stored in state and displayed conditionally.

### One-Line Revision Note

Validation protects the app from bad input.

---

# React Hooks

## What Are Hooks?

### Simple Definition

Hooks are special functions that let functional components use React features like state, effects, context, refs, and performance optimization.

### Why It Is Needed

Before Hooks, class components were used for state and lifecycle methods. Hooks make functional components powerful.

### Real-World Analogy

Hooks are plug points. You plug into React features whenever your component needs them.

### Syntax

```jsx
const [state, setState] = useState(initialValue);
useEffect(() => {}, []);
```

### Example Code

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `import { useState } ...` | Imports a Hook. |
| `useState(0)` | Uses React state feature. |
| `setCount(...)` | Updates state. |

### Common Mistakes

- Calling Hooks inside loops or conditions.
- Calling Hooks in normal JavaScript functions.
- Forgetting Hooks must start with `use`.

### Interview Explanation

Hooks are functions introduced to let functional components use React features such as state, effects, context, refs, and memoization without writing class components.

### One-Line Revision Note

Hooks let functions use React powers.

---

## Rules Of Hooks

### Simple Definition

Rules of Hooks are required rules for using Hooks correctly.

### Why It Is Needed

React depends on the order of Hook calls to remember state correctly.

### Real-World Analogy

If students sit in fixed roll number order, attendance is easy. If they randomly change order, attendance becomes wrong.

### Syntax

```jsx
// Good
function App() {
  const [count, setCount] = useState(0);
}

// Bad
if (loggedIn) {
  const [count, setCount] = useState(0);
}
```

### Example Code

```jsx
function GoodComponent({ isLoggedIn }) {
  const [name, setName] = useState("");

  if (!isLoggedIn) {
    return <p>Please login</p>;
  }

  return <input value={name} onChange={(e) => setName(e.target.value)} />;
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `useState` at top | Hook is called before any condition return. |
| `if (!isLoggedIn)` | Conditional logic happens after Hook call. |
| `return <input ...>` | Uses state normally. |

### Common Mistakes

- Calling Hooks inside `if`.
- Calling Hooks inside `map`.
- Calling Hooks inside event handlers.

### Interview Explanation

Hooks must be called at the top level of React components or custom Hooks. They should not be called inside loops, conditions, nested functions, or normal JavaScript functions.

### One-Line Revision Note

Hooks rule: top level only, React functions only.

---

## useState

### Definition

`useState` is a Hook used to add state to a functional component.

### Why It Is Needed

It lets components remember changing data.

### Real-World Analogy

It is like a notebook page where a component writes its current value.

### Syntax

```jsx
const [value, setValue] = useState(initialValue);
```

### Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      Count: {count}
    </button>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `import { useState }` | Imports Hook. |
| `const [count, setCount]` | `count` is state, `setCount` updates it. |
| `useState(0)` | Initial value is 0. |
| `setCount((prev) => prev + 1)` | Updates using previous value safely. |
| `{count}` | Shows current count. |

### Use Cases

- Counter
- Input field
- Toggle menu
- Selected tab
- Loading flag

### Common Mistakes

- Directly mutating state.
- Keeping derived values in state.
- Not using functional update when needed.

### Interview Questions

| Question | Short Answer |
|---|---|
| What is `useState`? | A Hook to store local component state. |
| Does state update immediately? | React schedules updates; do not depend on immediate mutation. |
| When use functional update? | When next state depends on previous state. |

### Interview Explanation

`useState` lets a functional component store local state. It returns the current state and a setter function. Calling the setter triggers a re-render.

### One-Line Revision Note

`useState` gives component memory.

---

## useEffect

### Definition

`useEffect` is a Hook used to synchronize a component with external systems.

### Why It Is Needed

Components often need to fetch data, set timers, subscribe to events, or update document title.

### Real-World Analogy

After a shop opens, the owner turns on lights, starts music, and connects payment machine. These are side effects after the shop is ready.

### Syntax

```jsx
useEffect(() => {
  // side effect
  return () => {
    // cleanup
  };
}, [dependencies]);
```

### Example

```jsx
import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `useEffect` import | Imports side-effect Hook. |
| `users` state | Stores API data. |
| `useEffect(() => { ... }, [])` | Runs effect once after first render. |
| `fetch(...)` | Calls external API. |
| `response.json()` | Converts response to JavaScript data. |
| `setUsers(data)` | Stores users in state. |
| `users.map(...)` | Renders fetched users. |

### Use Cases

- Fetch API data
- Subscribe to events
- Start and clear timers
- Sync document title
- Connect to external widgets

### Common Mistakes

- Missing dependency array.
- Adding wrong dependencies.
- Using `useEffect` for calculations that can happen during render.
- Forgetting cleanup for subscriptions or timers.

### Interview Questions

| Question | Short Answer |
|---|---|
| What is `useEffect`? | A Hook for side effects and external synchronization. |
| What does `[]` mean? | Run once after mount. |
| Why cleanup? | To remove timers, listeners, or subscriptions on unmount or before rerun. |

### Interview Explanation

`useEffect` runs after render and is used to synchronize React components with external systems such as APIs, browser events, timers, or subscriptions.

### One-Line Revision Note

`useEffect` is for outside-world work.

---

## useContext

### Definition

`useContext` reads data from a React Context.

### Why It Is Needed

It avoids passing props through many levels.

### Real-World Analogy

College Wi-Fi password is shared through campus notice. Every student can use it without asking each classroom monitor.

### Syntax

```jsx
const value = useContext(MyContext);
```

### Example

```jsx
import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function ThemeLabel() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeLabel />
    </ThemeContext.Provider>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `createContext("light")` | Creates context with default value. |
| `useContext(ThemeContext)` | Reads nearest context value. |
| `<ThemeContext.Provider value="dark">` | Provides value to children. |
| `<ThemeLabel />` | Consumes context indirectly. |

### Use Cases

- Theme
- Logged-in user
- Language
- Small shared settings

### Common Mistakes

- Using Context for every state.
- Forgetting Provider.
- Updating context too often and causing many re-renders.

### Interview Questions

| Question | Short Answer |
|---|---|
| What is `useContext`? | A Hook to read Context value. |
| Does it replace Redux? | No. It solves prop drilling, not all complex state needs. |
| What happens when context changes? | Consumers re-render. |

### Interview Explanation

`useContext` lets a component read the nearest value from a Context Provider without passing props through every intermediate component.

### One-Line Revision Note

`useContext` reads shared data without prop drilling.

---

## useReducer

### Definition

`useReducer` is a Hook for managing complex state using a reducer function.

### Why It Is Needed

It is useful when state updates have many action types or complex logic.

### Real-World Analogy

A bank cashier receives actions like deposit and withdraw, then updates balance based on the action.

### Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### Example

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `function reducer(state, action)` | Function decides next state. |
| `switch (action.type)` | Checks action type. |
| `increment` | Returns increased count. |
| `decrement` | Returns decreased count. |
| `useReducer(reducer, { count: 0 })` | Connects reducer and initial state. |
| `dispatch({ type: "increment" })` | Sends action to reducer. |

### Use Cases

- Complex forms
- Shopping cart
- State with many actions
- State transitions

### Common Mistakes

- Mutating state directly in reducer.
- Forgetting default case.
- Using `useReducer` for very simple state.

### Interview Questions

| Question | Short Answer |
|---|---|
| What is `useReducer`? | A Hook for reducer-based state updates. |
| When use it over `useState`? | When state logic is complex or has many actions. |
| What is dispatch? | A function that sends actions to reducer. |

### Interview Explanation

`useReducer` manages state through a reducer function. It is useful when the next state depends on action types and previous state.

### One-Line Revision Note

`useReducer` = state update by actions.

---

## useRef

### Definition

`useRef` stores a mutable value that does not cause re-render when changed.

### Why It Is Needed

It is useful for accessing DOM elements or storing values like timer IDs.

### Real-World Analogy

A bookmark remembers a page, but changing the bookmark does not rewrite the book.

### Syntax

```jsx
const ref = useRef(initialValue);
```

### Example

```jsx
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `useRef(null)` | Creates a ref object. |
| `inputRef.current` | Holds DOM input after render. |
| `.focus()` | Calls browser focus method. |
| `<input ref={inputRef} />` | Connects DOM input to ref. |

### Use Cases

- Focus input
- Store timer ID
- Read DOM size
- Keep previous value

### Common Mistakes

- Using ref instead of state for visible UI data.
- Reading `ref.current` before mount.
- Mutating ref during render for UI behavior.

### Interview Questions

| Question | Short Answer |
|---|---|
| What is `useRef`? | A Hook for mutable values and DOM references. |
| Does ref update re-render? | No. |
| Common use? | Focus input or store timer ID. |

### Interview Explanation

`useRef` returns a mutable object with a `.current` property. Updating it does not trigger re-render. It is commonly used to access DOM nodes.

### One-Line Revision Note

`useRef` remembers values without re-render.

---

## useMemo

### Definition

`useMemo` caches the result of an expensive calculation.

### Why It Is Needed

It avoids recalculating heavy values on every render.

### Real-World Analogy

If you solved a hard math problem, you write the answer down and reuse it unless the numbers change.

### Syntax

```jsx
const memoizedValue = useMemo(() => calculateValue(a, b), [a, b]);
```

### Example

```jsx
import { useMemo, useState } from "react";

function ProductSearch({ products }) {
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [products, query]);

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {filteredProducts.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `useMemo` import | Imports memoization Hook. |
| `query` state | Stores search text. |
| `useMemo(() => { ... }, [products, query])` | Recalculates only when products or query changes. |
| `products.filter(...)` | Filters products. |
| `filteredProducts.map(...)` | Renders filtered list. |

### Use Cases

- Expensive filtering
- Sorting large arrays
- Heavy calculations
- Stable derived values for memoized children

### Common Mistakes

- Using `useMemo` everywhere.
- Missing dependencies.
- Memoizing cheap calculations.

### Interview Questions

| Question | Short Answer |
|---|---|
| What is `useMemo`? | It memoizes calculated value. |
| Does it prevent component render? | No, it prevents recalculation of value. |
| When use it? | For expensive calculations or referential stability. |

### Interview Explanation

`useMemo` caches the result of a calculation and recalculates it only when dependencies change. It is a performance optimization, not a default requirement.

### One-Line Revision Note

`useMemo` caches values.

---

## useCallback

### Definition

`useCallback` caches a function definition between renders.

### Why It Is Needed

It helps when passing functions to memoized child components.

### Real-World Analogy

Instead of printing a new instruction sheet every time, you reuse the same sheet until instructions change.

### Syntax

```jsx
const memoizedFunction = useCallback(() => {
  // logic
}, [dependencies]);
```

### Example

```jsx
import { memo, useCallback, useState } from "react";

const SaveButton = memo(function SaveButton({ onSave }) {
  return <button onClick={onSave}>Save</button>;
});

function Editor() {
  const [text, setText] = useState("");

  const handleSave = useCallback(() => {
    console.log("Saved:", text);
  }, [text]);

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SaveButton onSave={handleSave} />
    </>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `memo(...)` | Prevents child re-render when props are same. |
| `useCallback(() => ..., [text])` | Keeps same function until `text` changes. |
| `console.log("Saved:", text)` | Uses latest text. |
| `<SaveButton onSave={handleSave} />` | Passes stable function to child. |

### Use Cases

- Passing callbacks to `React.memo` children
- Stable function dependencies in custom hooks
- Avoiding unnecessary child renders

### Common Mistakes

- Using it for every function.
- Missing dependencies.
- Thinking it makes the function execute faster.

### Interview Questions

| Question | Short Answer |
|---|---|
| What is `useCallback`? | It memoizes a function. |
| Difference from `useMemo`? | `useMemo` caches value; `useCallback` caches function. |
| When use it? | When function identity matters. |

### Interview Explanation

`useCallback` returns a memoized function. It is useful when a function is passed to a memoized child or used as a stable dependency.

### One-Line Revision Note

`useCallback` caches functions.

---

## useLayoutEffect

### Definition

`useLayoutEffect` is like `useEffect`, but it runs before the browser paints the screen.

### Why It Is Needed

It is useful when you must measure layout or update DOM before the user sees it.

### Real-World Analogy

Before opening a shop to customers, you quickly adjust the display shelf so customers do not see the messy layout.

### Syntax

```jsx
useLayoutEffect(() => {
  // measure or update layout
}, []);
```

### Example

```jsx
import { useLayoutEffect, useRef, useState } from "react";

function BoxHeight() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const box = boxRef.current;
    setHeight(box.getBoundingClientRect().height);
  }, []);

  return (
    <div>
      <div ref={boxRef}>Measure my height</div>
      <p>Height: {height}px</p>
    </div>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `boxRef` | Stores DOM element reference. |
| `height` state | Stores measured height. |
| `useLayoutEffect` | Runs before browser paint. |
| `boxRef.current` | Gets real DOM node. |
| `getBoundingClientRect().height` | Measures height. |
| `setHeight(...)` | Updates height before user sees final paint. |

### Use Cases

- Measure DOM size
- Prevent visual flicker
- Position tooltips
- Layout calculations

### Common Mistakes

- Using it instead of `useEffect` for normal API calls.
- Doing heavy work and blocking paint.
- Forgetting it can hurt performance.

### Interview Questions

| Question | Short Answer |
|---|---|
| Difference from `useEffect`? | `useLayoutEffect` runs before paint; `useEffect` after paint. |
| When use it? | Layout measurement or preventing flicker. |
| Should it be common? | No, use rarely. |

### Interview Explanation

`useLayoutEffect` runs synchronously after DOM updates but before the browser paints. It should be used only for layout-related work.

### One-Line Revision Note

`useLayoutEffect` is for before-paint layout work.

---

## Custom Hooks

### Definition

A custom Hook is a reusable function that uses React Hooks and starts with `use`.

### Why It Is Needed

It extracts repeated logic from components.

### Real-World Analogy

Instead of writing the same lab procedure every time, you create one reusable practical manual.

### Syntax

```jsx
function useSomething() {
  // use built-in Hooks
  return value;
}
```

### Example

```jsx
import { useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}

function WidthDisplay() {
  const width = useWindowWidth();
  return <p>Width: {width}</p>;
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `function useWindowWidth()` | Custom Hook name starts with `use`. |
| `useState(window.innerWidth)` | Stores current width. |
| `useEffect` | Sets up resize listener. |
| `handleResize` | Updates width when browser resizes. |
| `addEventListener` | Subscribes to browser event. |
| `return () => ...` | Cleanup removes listener. |
| `return width` | Hook exposes width to components. |
| `useWindowWidth()` | Component uses custom Hook. |

### Use Cases

- Fetching reusable data
- Local storage logic
- Window size
- Authentication state
- Form logic

### Common Mistakes

- Naming it without `use`.
- Calling it outside React component or another Hook.
- Returning too much unrelated data.

### Interview Questions

| Question | Short Answer |
|---|---|
| What is a custom Hook? | A reusable function that uses Hooks. |
| Why start with `use`? | So React lint rules can check Hook usage. |
| Can custom Hooks share state automatically? | No, each call has its own state unless using shared external store/context. |

### Interview Explanation

Custom Hooks let us reuse stateful logic between components. They follow the same Rules of Hooks and must start with `use`.

### One-Line Revision Note

Custom Hook = reusable Hook logic.

---

# Context API

## What Is Context API?

### Simple Definition

Context API is React's built-in way to share data with many components without passing props manually at every level.

### Why It Is Needed

It avoids prop drilling for global-like values.

### Real-World Analogy

A college notice board shares information with all students without each teacher repeating it class by class.

### Syntax

```jsx
const MyContext = createContext(defaultValue);
```

### Example Code

```jsx
import { createContext, useContext } from "react";

const UserContext = createContext(null);

function ProfileName() {
  const user = useContext(UserContext);
  return <h2>{user.name}</h2>;
}

function App() {
  const user = { name: "Kiran" };

  return (
    <UserContext.Provider value={user}>
      <ProfileName />
    </UserContext.Provider>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `createContext(null)` | Creates context. |
| `useContext(UserContext)` | Reads context value. |
| `const user = ...` | Data to share. |
| `<Provider value={user}>` | Makes data available to children. |
| `<ProfileName />` | Child reads data without prop. |

### Common Mistakes

- Using Context for rapidly changing large data.
- Forgetting Provider.
- Not splitting contexts when unrelated data changes.

### Interview Explanation

Context API provides a way to pass data through the component tree without manually passing props at every level. It is useful for values like theme, language, and logged-in user.

### One-Line Revision Note

Context shares data with many nested components.

---

## Props Drilling

### Simple Definition

Props drilling means passing props through many components that do not actually need them, only to reach a deeply nested child.

### Why It Is Needed

You must know this problem to understand why Context exists.

### Real-World Analogy

A message from principal passes through HOD, teacher, monitor, and then student, even when only the student needs it.

### Syntax

```jsx
<A user={user} />
<B user={user} />
<C user={user} />
```

### Example Code

```jsx
function App() {
  const user = { name: "Divya" };
  return <Layout user={user} />;
}

function Layout({ user }) {
  return <Sidebar user={user} />;
}

function Sidebar({ user }) {
  return <Profile user={user} />;
}

function Profile({ user }) {
  return <p>{user.name}</p>;
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `App` | Owns user data. |
| `Layout` | Receives user but does not use it. |
| `Sidebar` | Receives user but only passes it. |
| `Profile` | Finally uses user. |

### Common Mistakes

- Calling all prop passing prop drilling. It is only a problem when intermediate components do not need the prop.
- Using Context too early for simple parent-child props.
- Passing many unrelated props through many levels.

### Interview Explanation

Props drilling is passing data through multiple intermediate components just to reach a nested component. Context API can reduce this problem.

### One-Line Revision Note

Props drilling is unnecessary prop passing through middle components.

---

## createContext, Provider, Consumer, useContext

### Simple Definition

These are the main parts of Context API.

### Why It Is Needed

They create, provide, and read shared data.

### Real-World Analogy

- `createContext`: Create notice board.
- `Provider`: Put notice on board.
- `Consumer/useContext`: Read notice.

### Syntax

```jsx
const ThemeContext = createContext("light");

<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

const theme = useContext(ThemeContext);
```

### Example Code

```jsx
const ThemeContext = createContext("light");

function ThemeButton() {
  const theme = useContext(ThemeContext);
  return <button>{theme}</button>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeButton />
    </ThemeContext.Provider>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `createContext("light")` | Creates context with default value. |
| `useContext(ThemeContext)` | Reads current theme. |
| `<button>{theme}</button>` | Displays theme. |
| `<Provider value="dark">` | Provides `dark` to all children. |

### Common Mistakes

- Consuming outside Provider and getting default value unexpectedly.
- Placing Provider too low in tree.
- Passing new object values every render without thinking about re-renders.

### Interview Explanation

`createContext` creates a context object, `Provider` supplies the value, and `useContext` reads the value. `Consumer` is the older render-prop style and is less common in modern functional components.

### One-Line Revision Note

Context flow: create -> provide -> consume.

---

## Consumer

### Simple Definition

`Consumer` is the older Context API component used to read a context value with a render function.

### Why It Is Needed

You may see it in older React codebases or interview questions, even though `useContext` is preferred in modern functional components.

### Real-World Analogy

If `Provider` is a notice board, `Consumer` is a student who reads the notice and then acts based on it.

### Syntax

```jsx
<ThemeContext.Consumer>
  {(theme) => <p>{theme}</p>}
</ThemeContext.Consumer>
```

### Example Code

```jsx
import { createContext } from "react";

const ThemeContext = createContext("light");

function ThemeText() {
  return (
    <ThemeContext.Consumer>
      {(theme) => <p>Theme: {theme}</p>}
    </ThemeContext.Consumer>
  );
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeText />
    </ThemeContext.Provider>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `createContext("light")` | Creates context with default value. |
| `<ThemeContext.Consumer>` | Reads the nearest Provider value. |
| `{(theme) => ...}` | Render function receives context value. |
| `<p>Theme: {theme}</p>` | Displays the value. |
| `<Provider value="dark">` | Supplies `dark` to children. |

### Common Mistakes

- Using Consumer unnecessarily in new functional components.
- Forgetting that Consumer expects a function as its child.
- Reading outside Provider and getting default value.

### Interview Explanation

`Consumer` is a Context API component that reads context using a render-prop function. In modern functional components, `useContext` is usually cleaner.

### One-Line Revision Note

Consumer is the older render-prop way to read context.

---

# React Router

## Why Routing?

### Simple Definition

Routing shows different components for different URLs.

### Why It Is Needed

Apps need pages like Home, Login, Profile, Products, and Details.

### Real-World Analogy

A mall map sends you to different shops based on the shop number.

### Syntax

```jsx
<Route path="/about" element={<About />} />
```

### Example Code

```jsx
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `BrowserRouter` | Enables client-side routing. |
| `Routes` | Groups route definitions. |
| `Route path="/"` | Shows Home at root URL. |
| `Route path="/login"` | Shows Login at `/login`. |

### Common Mistakes

- Forgetting `BrowserRouter`.
- Using wrong import package for your Router version.
- Using normal anchor tags for app navigation.

### Interview Explanation

Routing maps URLs to React components. It lets a single page app display page-like views without full page reload.

### One-Line Revision Note

Routing connects URL paths to components.

---

## BrowserRouter, Routes, Route

### Simple Definition

`BrowserRouter` manages URL history, `Routes` chooses the matching route, and `Route` defines a path-component pair.

### Why It Is Needed

Together they create page navigation in React.

### Real-World Analogy

`BrowserRouter` is the city road system, `Routes` is the route table, and `Route` is one specific road-to-place mapping.

### Syntax

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/path" element={<Page />} />
  </Routes>
</BrowserRouter>
```

### Example Code

```jsx
function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `Home` | Component for homepage. |
| `About` | Component for about page. |
| `<BrowserRouter>` | Wraps app routes. |
| `<Routes>` | Looks for matching route. |
| `<Route ...>` | Defines what to show for path. |

### Common Mistakes

- Using `component` prop from old React Router versions.
- Placing routes outside router.
- Forgetting `element={<Component />}` syntax.

### Interview Explanation

In modern React Router, `BrowserRouter` enables routing, `Routes` contains route definitions, and each `Route` maps a URL path to an element.

### One-Line Revision Note

Router trio: BrowserRouter wraps, Routes selects, Route maps.

---

## Link and NavLink

### Simple Definition

`Link` navigates without page reload. `NavLink` is like `Link` but can know if it is active.

### Why It Is Needed

They provide SPA navigation.

### Real-World Analogy

`Link` is a road sign. `NavLink` is a road sign that lights up when you are on that road.

### Syntax

```jsx
<Link to="/about">About</Link>
<NavLink to="/about">About</NavLink>
```

### Example Code

```jsx
function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `<nav>` | Navigation area. |
| `<Link to="/">` | Goes to home without reload. |
| `<NavLink to="/profile">` | Goes to profile and can style active state. |

### Common Mistakes

- Using `<a href>` for internal routes.
- Forgetting `to` prop.
- Not styling active NavLink correctly.

### Interview Explanation

`Link` is used for client-side navigation. `NavLink` does the same but also provides active state information useful for navigation menus.

### One-Line Revision Note

Use `Link` for navigation and `NavLink` for active menu links.

---

## useNavigate

### Simple Definition

`useNavigate` is a Hook used to navigate programmatically.

### Why It Is Needed

Sometimes navigation must happen after login, form submit, or button click.

### Real-World Analogy

After paying at a counter, staff guides you to the delivery area automatically.

### Syntax

```jsx
const navigate = useNavigate();
navigate("/dashboard");
```

### Example Code

```jsx
function LoginButton() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }

  return <button onClick={handleLogin}>Login</button>;
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `useNavigate()` | Gets navigate function. |
| `handleLogin()` | Function runs after login action. |
| `navigate("/dashboard")` | Changes route programmatically. |
| `onClick={handleLogin}` | Runs function on button click. |

### Common Mistakes

- Calling `useNavigate` outside Router.
- Calling navigate during render accidentally.
- Using it where `Link` is better.

### Interview Explanation

`useNavigate` returns a function that allows route changes from code, useful after events like login, logout, or form submission.

### One-Line Revision Note

`useNavigate` moves user by code.

---

## Dynamic Routes and Route Parameters

### Simple Definition

Dynamic routes are routes with variable parts. Route parameters are values read from the URL.

### Why It Is Needed

Product details, user profiles, and blog posts need IDs in the URL.

### Real-World Analogy

Room `/hostel/204` means hostel room number is 204.

### Syntax

```jsx
<Route path="/users/:id" element={<UserDetails />} />
const { id } = useParams();
```

### Example Code

```jsx
function UserDetails() {
  const { id } = useParams();

  return <h1>User ID: {id}</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `path="/users/:id"` | `:id` is dynamic part. |
| `useParams()` | Reads route parameters. |
| `{ id }` | Extracts id from URL. |
| `User ID: {id}` | Displays parameter. |

### Common Mistakes

- Forgetting colon in route path.
- Calling `useParams` outside routed component.
- Treating URL params as numbers without converting.

### Interview Explanation

Dynamic routes allow variable URL segments. `useParams` reads those values inside the routed component.

### One-Line Revision Note

Dynamic route `:id` becomes data through `useParams`.

---

# API Calls

## Fetch API

### Simple Definition

Fetch API is a built-in browser tool used to make HTTP requests.

### Why It Is Needed

React apps often need data from backend servers.

### Real-World Analogy

The frontend is a waiter, the backend is the kitchen, and fetch is the waiter carrying the order.

### Syntax

```jsx
const response = await fetch(url);
const data = await response.json();
```

### Example Code

```jsx
import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data.slice(0, 5));
    }

    loadPosts();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `posts` state | Stores API result. |
| `useEffect(..., [])` | Loads posts once after mount. |
| `async function loadPosts()` | Creates async function because effect callback itself should not be async. |
| `await fetch(...)` | Sends GET request. |
| `await response.json()` | Converts response body to data. |
| `setPosts(...)` | Saves first 5 posts. |
| `posts.map(...)` | Renders posts. |

### Common Mistakes

- Making the effect function directly `async`.
- Not handling errors.
- Forgetting loading state.

### Interview Explanation

Fetch API is used to make network requests. In React, API calls are often made inside `useEffect`, and results are stored in state.

### One-Line Revision Note

Fetch gets server data; state shows it in UI.

---

## Axios

### Simple Definition

Axios is a popular third-party HTTP client for making API requests.

### Why It Is Needed

Axios gives a simpler API, automatic JSON parsing, interceptors, and better error handling helpers.

### Real-World Analogy

Fetch is a basic bike. Axios is a bike with extra features like storage, horn, and speedometer.

### Syntax

```jsx
const response = await axios.get(url);
setData(response.data);
```

### Example Code

```jsx
import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    }

    loadUsers();
  }, []);

  return users.map((user) => <p key={user.id}>{user.name}</p>);
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `import axios` | Imports Axios package. |
| `users` state | Stores API users. |
| `axios.get(...)` | Sends GET request. |
| `response.data` | Axios puts parsed data here. |
| `setUsers(...)` | Saves users to state. |
| `users.map(...)` | Shows each user. |

### Common Mistakes

- Forgetting to install Axios.
- Mixing fetch response handling with Axios.
- Not handling loading and error states.

### Interview Explanation

Axios is an HTTP client library. Unlike fetch, Axios automatically parses JSON and exposes response data through `response.data`.

### One-Line Revision Note

Axios is a convenient HTTP client for API calls.

---

## Loading State and Error Handling

### Simple Definition

Loading state shows that data is being fetched. Error state shows when something failed.

### Why It Is Needed

Users should not see a blank page while waiting or when an API fails.

### Real-World Analogy

When ordering food, you see "preparing", "delivered", or "failed payment" status.

### Syntax

```jsx
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
```

### Example Code

```jsx
function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error("Failed to load products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return products.map((product) => <p key={product.id}>{product.name}</p>);
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `products` | Stores successful data. |
| `loading` | Tracks waiting status. |
| `error` | Stores failure message. |
| `try` | Runs risky API code. |
| `!response.ok` | Checks HTTP failure. |
| `throw new Error(...)` | Moves to catch block. |
| `setProducts(data)` | Saves data. |
| `catch` | Handles failure. |
| `finally` | Stops loading in both success and failure. |
| `if (loading)` | Shows loading UI. |
| `if (error)` | Shows error UI. |

### Common Mistakes

- Showing empty UI while loading.
- Not checking `response.ok` with fetch.
- Not clearing old errors on retry.

### Interview Explanation

API calls should usually handle three states: loading, success, and error. This improves user experience and makes UI predictable.

### One-Line Revision Note

API UI needs loading, success, and error states.

---

# Performance Optimization

## React.memo

### Simple Definition

`React.memo` skips re-rendering a component when its props have not changed.

### Why It Is Needed

It can reduce unnecessary child renders.

### Real-World Analogy

If the teacher has not changed homework instructions, students do not need a new announcement.

### Syntax

```jsx
const MemoComponent = memo(Component);
```

### Example Code

```jsx
import { memo, useState } from "react";

const Child = memo(function Child({ name }) {
  console.log("Child rendered");
  return <p>{name}</p>;
});

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Child name="Asha" />
    </>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `memo(...)` | Wraps child component. |
| `Child({ name })` | Child depends on name prop. |
| `Parent` count state | Parent re-renders when count changes. |
| `<Child name="Asha" />` | Prop stays same, so memo can skip child render. |

### Common Mistakes

- Wrapping every component with `memo`.
- Passing new objects/functions each render and expecting memo to help.
- Ignoring actual performance measurement.

### Interview Explanation

`React.memo` memoizes a component output and re-renders it only when props change by shallow comparison.

### One-Line Revision Note

`React.memo` skips child render when props are same.

---

## useMemo and useCallback In Performance

### Simple Definition

`useMemo` caches values. `useCallback` caches functions.

### Why It Is Needed

They help avoid expensive recalculations and unstable props.

### Real-World Analogy

`useMemo` saves an answer. `useCallback` saves an instruction.

### Syntax

```jsx
const value = useMemo(() => calculate(), [deps]);
const fn = useCallback(() => run(), [deps]);
```

### Example Code

```jsx
const total = useMemo(() => cart.reduce((sum, item) => sum + item.price, 0), [cart]);

const clearCart = useCallback(() => {
  setCart([]);
}, []);
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `useMemo` | Recalculates total only when cart changes. |
| `cart.reduce(...)` | Expensive or repeated calculation. |
| `useCallback` | Keeps same clear function. |
| `setCart([])` | Clears cart. |

### Common Mistakes

- Using them before there is a performance problem.
- Missing dependencies.
- Thinking memoization is free.

### Interview Explanation

`useMemo` and `useCallback` are performance hooks. `useMemo` memoizes values, while `useCallback` memoizes functions.

### One-Line Revision Note

Memoize only when it helps.

---

## Lazy Loading and Code Splitting

### Simple Definition

Lazy loading loads a component only when needed. Code splitting divides the bundle into smaller files.

### Why It Is Needed

It improves initial page load performance.

### Real-World Analogy

You do not carry all books every day. You carry only the books needed for today's classes.

### Syntax

```jsx
const Page = lazy(() => import("./Page"));
```

### Example Code

```jsx
import { lazy, Suspense } from "react";

const About = lazy(() => import("./About"));

function App() {
  return (
    <Suspense fallback={<p>Loading page...</p>}>
      <About />
    </Suspense>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `lazy` | Enables lazy component loading. |
| `Suspense` | Shows fallback while loading. |
| `import("./About")` | Dynamically imports component. |
| `fallback` | Temporary UI while code downloads. |

### Common Mistakes

- Forgetting `Suspense`.
- Lazy loading tiny components unnecessarily.
- Lazy loading above-the-fold essential UI badly.

### Interview Explanation

Lazy loading and code splitting reduce the initial JavaScript bundle by loading parts of the app only when required.

### One-Line Revision Note

Lazy loading delays code until needed.

---

# Lifecycle Concepts

## Mounting, Updating, Unmounting

### Simple Definition

Lifecycle means the stages of a component: appearing, changing, and disappearing.

### Why It Is Needed

It helps understand when effects run and cleanup happens.

### Real-World Analogy

A student joins college, attends semesters, and graduates.

### Syntax

```text
Mount -> Update -> Unmount
```

### Diagram

```text
Component created
      |
      v
Mounting: appears on screen
      |
      v
Updating: props/state change
      |
      v
Unmounting: removed from screen
```

### Example Code

```jsx
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return <p>{seconds}</p>;
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `useState(0)` | Stores seconds. |
| `useEffect(..., [])` | Runs once after mounting. |
| `setInterval(...)` | Starts timer. |
| `setSeconds(...)` | Updates state every second. |
| `return () => clearInterval(id)` | Cleanup runs on unmount. |
| `<p>{seconds}</p>` | Shows timer. |

### Common Mistakes

- Forgetting cleanup.
- Creating timers during render.
- Confusing render phase and effect phase.

### Interview Explanation

Mounting is when a component is added to the DOM, updating happens when state or props change, and unmounting is when it is removed. Hooks like `useEffect` handle lifecycle-like behavior in functional components.

### One-Line Revision Note

Lifecycle = mount, update, unmount.

---

## Mapping Lifecycle To Hooks

| Class Lifecycle | Hook Equivalent | Meaning |
|---|---|---|
| `componentDidMount` | `useEffect(() => {}, [])` | Run after first render |
| `componentDidUpdate` | `useEffect(() => {}, [value])` | Run when value changes |
| `componentWillUnmount` | cleanup function in `useEffect` | Run before remove |
| `getSnapshotBeforeUpdate` | `useLayoutEffect` | Read layout before paint |

Memory trick:

```text
Effect dependency decides timing:

No array       -> after every render
[]             -> after first mount
[x]            -> after mount and when x changes
return cleanup -> before rerun and unmount
```

---

# Redux Toolkit

## State Management

### Simple Definition

State management means organizing and updating application data.

### Why It Is Needed

Large apps have shared state like auth user, cart, filters, theme, and notifications.

### Real-World Analogy

A college admin office stores official data. Every department reads from the same source.

### Syntax

```text
Component -> dispatch action -> reducer updates store -> component reads state
```

### Flowchart

```text
User clicks button
       |
       v
Component dispatches action
       |
       v
Reducer calculates new state
       |
       v
Store saves new state
       |
       v
UI re-renders with useSelector
```

### Example Code

```jsx
dispatch(increment());
const count = useSelector((state) => state.counter.value);
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `dispatch(increment())` | Sends action to Redux store. |
| `useSelector(...)` | Reads data from Redux store. |

### Common Mistakes

- Using Redux for small local state.
- Mutating Redux state outside reducers.
- Not understanding data flow.

### Interview Explanation

State management controls how app data is stored, updated, and shared across components. Redux Toolkit is the recommended modern way to write Redux logic.

### One-Line Revision Note

State management keeps shared app data predictable.

---

## Redux Basics: Store, Actions, Reducers, Dispatch

### Simple Definition

- Store: Global state container.
- Action: Plain object that describes what happened.
- Reducer: Function that calculates next state.
- Dispatch: Function used to send actions.

### Why It Is Needed

These are the core building blocks of Redux.

### Real-World Analogy

- Store: Bank account record.
- Action: Deposit slip.
- Reducer: Bank rule that updates balance.
- Dispatch: Submitting the slip.

### Syntax

```jsx
dispatch({ type: "counter/increment" });
```

### Example Code

```jsx
const action = { type: "counter/increment" };
dispatch(action);
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `action` | Describes what happened. |
| `type` | Name of action. |
| `dispatch(action)` | Sends action to store. |

### Common Mistakes

- Calling reducer directly from component.
- Putting non-serializable values in actions.
- Thinking action itself updates state.

### Interview Explanation

Redux follows a predictable flow: components dispatch actions, reducers calculate new state, store saves it, and components read updated state.

### One-Line Revision Note

Redux flow: dispatch action -> reducer -> store -> UI.

---

## configureStore

### Simple Definition

`configureStore` creates a Redux store with good default settings.

### Why It Is Needed

It reduces boilerplate and automatically sets up useful middleware and Redux DevTools.

### Real-World Analogy

Buying a ready-to-use laptop is easier than assembling every chip manually.

### Syntax

```jsx
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

### Example Code

```jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `configureStore` | Imports RTK store creator. |
| `counterReducer` | Imports reducer from slice. |
| `configureStore({ ... })` | Creates store. |
| `reducer: { counter: counterReducer }` | Adds counter state branch. |
| `export const store` | Exports store for Provider. |

### Common Mistakes

- Forgetting to pass reducer object.
- Importing from `redux` instead of `@reduxjs/toolkit`.
- Not wrapping app with Provider.

### Interview Explanation

`configureStore` is Redux Toolkit's standard store setup API. It combines reducers, adds middleware, enables development checks, and connects Redux DevTools by default.

### One-Line Revision Note

`configureStore` creates Redux store with good defaults.

---

## createSlice

### Simple Definition

`createSlice` creates reducer logic and action creators together.

### Why It Is Needed

It reduces Redux boilerplate.

### Real-World Analogy

A slice is one department of state, like the cart department or user department.

### Syntax

```jsx
const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});
```

### Example Code

```jsx
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `createSlice` | Imports slice creator. |
| `name: "counter"` | Prefix for generated action types. |
| `initialState` | Starting state. |
| `reducers` | State update functions. |
| `increment` | Action reducer for increasing value. |
| `state.value += 1` | Looks mutating, but RTK uses Immer internally to create immutable updates. |
| `counterSlice.actions` | Generated action creators. |
| `counterSlice.reducer` | Generated reducer for store. |

### Common Mistakes

- Mutating state outside slice reducers.
- Forgetting to export actions.
- Forgetting to add reducer to store.

### Interview Explanation

`createSlice` combines action creators and reducer logic for one state feature. Redux Toolkit uses Immer, so reducer code can look mutable while remaining immutable internally.

### One-Line Revision Note

`createSlice` creates actions and reducer in one place.

---

## Provider, useSelector, useDispatch

### Simple Definition

`Provider` gives the Redux store to React. `useSelector` reads store data. `useDispatch` sends actions.

### Why It Is Needed

React components need a way to connect with Redux.

### Real-World Analogy

Provider is the electricity connection, `useSelector` reads the meter, and `useDispatch` presses a switch.

### Syntax

```jsx
<Provider store={store}>
  <App />
</Provider>

const value = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
```

### Example Code

```jsx
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import { increment } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(increment())}>
      Count: {count}
    </button>
  );
}

function Root() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `Provider` | Makes store available to components. |
| `useSelector` | Reads Redux state. |
| `useDispatch` | Gets dispatch function. |
| `increment` | Action creator from slice. |
| `state.counter.value` | Selects count value. |
| `dispatch(increment())` | Sends increment action. |
| `<Provider store={store}>` | Connects store to React tree. |

### Common Mistakes

- Using `useSelector` outside Provider.
- Selecting wrong state path.
- Dispatching action creator without calling it: `dispatch(increment)` instead of `dispatch(increment())`.

### Interview Explanation

React Redux connects React and Redux. `Provider` supplies the store, `useSelector` subscribes to store data, and `useDispatch` dispatches actions.

### One-Line Revision Note

Provider gives store, selector reads, dispatch writes.

---

# Project Structure

## Small Projects

### Simple Definition

A small project structure keeps files simple and close together.

### Why It Is Needed

Beginners should not over-engineer small apps.

### Real-World Analogy

For one subject, one notebook is enough.

### Syntax

```text
src/
  App.jsx
  main.jsx
  components/
  hooks/
  styles/
```

### Example

```text
src/
  main.jsx
  App.jsx
  components/
    Counter.jsx
    TodoItem.jsx
  hooks/
    useLocalStorage.js
  styles/
    global.css
```

### Line-By-Line Explanation

| Path | Explanation |
|---|---|
| `main.jsx` | React entry file. |
| `App.jsx` | Main app component. |
| `components/` | Reusable UI pieces. |
| `hooks/` | Custom Hooks. |
| `styles/` | CSS files. |

### Common Mistakes

- Creating too many folders for a tiny app.
- Naming folders inconsistently.
- Putting all code in `App.jsx`.

### Interview Explanation

For small apps, keep structure simple: components, hooks, styles, and main app files. Scale only when complexity grows.

### One-Line Revision Note

Small apps need simple folders.

---

## Large Projects

### Simple Definition

A large project structure organizes code by features or modules.

### Why It Is Needed

It helps teams work without confusion.

### Real-World Analogy

A university has separate departments for CSE, ECE, accounts, library, and exam cell.

### Syntax

```text
src/
  app/
  features/
  shared/
  services/
```

### Example

```text
src/
  app/
    store.js
    router.jsx
  features/
    auth/
      LoginPage.jsx
      authSlice.js
      authApi.js
    products/
      ProductList.jsx
      ProductDetails.jsx
      productApi.js
  shared/
    components/
      Button.jsx
      Modal.jsx
    hooks/
      useDebounce.js
    utils/
      formatCurrency.js
  styles/
    global.css
```

### Line-By-Line Explanation

| Path | Explanation |
|---|---|
| `app/` | App-level setup like store and router. |
| `features/` | Business features grouped together. |
| `auth/` | Login and auth-related code. |
| `products/` | Product-related code. |
| `shared/` | Reusable common code. |
| `services/` | API clients or external services. |

### Common Mistakes

- Grouping by file type only in large apps.
- Creating circular imports.
- Mixing shared and feature-specific code.

### Interview Explanation

Large React apps are often organized by feature. This keeps related UI, state, API, and tests close together and improves maintainability.

### One-Line Revision Note

Large apps scale better with feature-based folders.

---

## Folder Organization Best Practices

| Practice | Reason |
|---|---|
| Keep reusable components in `shared/components` | Avoid duplication |
| Keep feature code together | Easier maintenance |
| Use clear names | Better readability |
| Avoid very deep nesting | Easier imports |
| Separate API logic from UI | Cleaner components |
| Add tests near features | Easier ownership |

Memory trick:

```text
Folder rule = CAFE

C = Clear names
A = Avoid deep nesting
F = Feature grouping
E = Extract shared code
```

---

# React Interview Preparation

## Interview Answer Formula

Use this structure:

```text
Definition -> Why needed -> Example -> Common pitfall
```

Example:

```text
Props are read-only inputs passed from parent to child. They are needed to make components reusable. For example, a Button component can receive label as a prop. A common mistake is trying to modify props inside the child.
```

---

## Top 100 React Interview Questions

### Beginner Questions

| No | Question | Interview-Ready Answer |
|---|---|---|
| 1 | What is React? | React is a JavaScript library for building component-based user interfaces. |
| 2 | Who created React? | React was created by Facebook, now Meta. |
| 3 | Is React a framework? | React is mainly a UI library, not a full framework. |
| 4 | What is a component? | A component is a reusable piece of UI. |
| 5 | What is JSX? | JSX is HTML-like syntax inside JavaScript used to describe UI. |
| 6 | Why use JSX? | JSX makes UI code readable and lets us use JavaScript expressions inside UI. |
| 7 | What is a functional component? | A JavaScript function that returns JSX. |
| 8 | Why component name starts with capital? | React treats lowercase as HTML tags and uppercase as custom components. |
| 9 | What are props? | Props are read-only data passed from parent to child. |
| 10 | What is state? | State is component data that can change and cause re-render. |
| 11 | Props vs state? | Props come from parent and are read-only; state is owned and updated by component. |
| 12 | What is Virtual DOM? | A lightweight in-memory representation of UI used by React. |
| 13 | What is Real DOM? | The actual browser document object model. |
| 14 | What is reconciliation? | React's process of comparing old and new UI trees to update the DOM. |
| 15 | What is one-way data flow? | Data flows from parent to child through props. |
| 16 | What is event handling? | Running functions when users interact with UI. |
| 17 | Why use `className`? | JSX uses `className` because `class` is reserved in JavaScript. |
| 18 | What is Fragment? | A wrapper that groups elements without adding extra DOM node. |
| 19 | What is conditional rendering? | Showing different UI based on conditions. |
| 20 | How render lists? | Use `map()` to convert array items into JSX elements. |
| 21 | What are keys? | Stable identifiers that help React track list items. |
| 22 | Why not use index as key? | Index can break UI when list order changes. |
| 23 | What is controlled component? | Form input controlled by React state. |
| 24 | What is uncontrolled component? | Form input whose value is stored in the DOM. |
| 25 | What is `preventDefault`? | It stops default browser behavior like form reload. |

### Intermediate Questions

| No | Question | Interview-Ready Answer |
|---|---|---|
| 26 | What are Hooks? | Functions that let functional components use React features. |
| 27 | Rules of Hooks? | Call Hooks only at top level and only in React components or custom Hooks. |
| 28 | What is `useState`? | Hook for local component state. |
| 29 | What is `useEffect`? | Hook for side effects and external synchronization. |
| 30 | What does dependency array do? | Controls when an effect runs. |
| 31 | What does empty dependency array mean? | Run effect once after mount. |
| 32 | What is cleanup in `useEffect`? | Function that runs before effect rerun or unmount. |
| 33 | What is `useContext`? | Hook to read context value. |
| 34 | What is Context API? | React API for passing data deeply without prop drilling. |
| 35 | What is props drilling? | Passing props through many components that do not need them. |
| 36 | What is `useReducer`? | Hook for complex state managed by reducer actions. |
| 37 | `useState` vs `useReducer`? | Use `useState` for simple state, `useReducer` for complex action-based state. |
| 38 | What is `useRef`? | Hook for mutable values or DOM references that do not cause re-render. |
| 39 | Does changing ref re-render? | No. |
| 40 | What is `useMemo`? | Hook to cache calculated values. |
| 41 | What is `useCallback`? | Hook to cache function references. |
| 42 | `useMemo` vs `useCallback`? | `useMemo` caches value; `useCallback` caches function. |
| 43 | What is `React.memo`? | Higher-order component that skips render when props are same. |
| 44 | What is lazy loading? | Loading components only when needed. |
| 45 | What is `Suspense`? | Component that shows fallback while lazy content loads. |
| 46 | What is code splitting? | Splitting bundle into smaller chunks. |
| 47 | What is React Router? | Library for routing in React apps. |
| 48 | What is `BrowserRouter`? | Router that uses browser history API. |
| 49 | What is `Route`? | Mapping between path and element. |
| 50 | What is `Link`? | Component for client-side navigation. |
| 51 | What is `NavLink`? | Link that knows active route. |
| 52 | What is `useNavigate`? | Hook for programmatic navigation. |
| 53 | What is dynamic route? | Route with variable URL segment like `/users/:id`. |
| 54 | What is `useParams`? | Hook to read route parameters. |
| 55 | Where do API calls go? | Commonly inside `useEffect` or custom data hooks. |
| 56 | What states should API UI have? | Loading, success, and error. |
| 57 | Fetch vs Axios? | Fetch is built-in; Axios is third-party with convenience features. |
| 58 | What is lifting state up? | Moving shared state to nearest common parent. |
| 59 | What is derived state? | Data calculated from existing props or state. |
| 60 | Why avoid unnecessary state? | It can create bugs and extra synchronization. |

### Advanced and Scenario-Based Questions

| No | Question | Interview-Ready Answer |
|---|---|---|
| 61 | What causes re-render? | State change, parent render, context change, or external store update. |
| 62 | How optimize slow list? | Stable keys, memoization, pagination/windowing, avoid heavy render work. |
| 63 | Why is immutability important? | React and Redux detect changes using references. |
| 64 | How update object state? | Create new object using spread or immutable helper. |
| 65 | How update array state? | Use non-mutating methods like `map`, `filter`, spread. |
| 66 | What is stale closure? | Function uses old state/props captured from previous render. |
| 67 | How fix stale state in setter? | Use functional update form. |
| 68 | Why keys must be stable? | Stable keys preserve correct component identity. |
| 69 | What is an error boundary? | Component that catches render errors in child tree. |
| 70 | Can Hooks be used in class components? | No, Hooks are for functional components and custom Hooks. |
| 71 | What is StrictMode? | Development tool that highlights potential issues. |
| 72 | Why effect runs twice in development? | StrictMode may intentionally remount to detect unsafe effects. |
| 73 | How handle forms in React? | Controlled components with state, validation, and submit handler. |
| 74 | How avoid prop drilling? | Use composition, Context, or state management library. |
| 75 | When use Redux? | For complex shared state across many parts of app. |
| 76 | What is Redux store? | Global state container. |
| 77 | What is Redux action? | Object or action creator describing what happened. |
| 78 | What is Redux reducer? | Pure function that returns next state. |
| 79 | What is dispatch? | Function that sends action to store. |
| 80 | What is Redux Toolkit? | Official recommended way to write Redux with less boilerplate. |
| 81 | What is `configureStore`? | API that creates store with good defaults. |
| 82 | What is `createSlice`? | API that creates reducers and action creators together. |
| 83 | What is `useSelector`? | React Redux Hook to read store state. |
| 84 | What is `useDispatch`? | React Redux Hook to dispatch actions. |
| 85 | Why reducers should be pure? | Same input should produce same output without side effects. |
| 86 | Can Redux reducers mutate state? | In RTK slice reducers, code can look mutating because Immer handles immutability. |
| 87 | Context vs Redux? | Context passes data; Redux manages complex predictable state. |
| 88 | How handle authentication state? | Store user/token carefully, protect routes, clear on logout. |
| 89 | How protect a route? | Check auth state and redirect unauthenticated users. |
| 90 | How handle search input efficiently? | Controlled input, derived filtered list, optional debounce. |
| 91 | How handle large forms? | Use controlled state, validation helpers, or form libraries if needed. |
| 92 | How prevent unnecessary API calls? | Correct dependencies, debounce, caching, and abort requests. |
| 93 | What is custom Hook? | Reusable function that uses Hooks. |
| 94 | What is `useLayoutEffect`? | Effect that runs before browser paint for layout work. |
| 95 | When not use `useEffect`? | When data can be calculated during render or handled in event. |
| 96 | What is component composition? | Combining small components to build larger UI. |
| 97 | What is children prop? | Special prop for nested JSX. |
| 98 | How pass data child to parent? | Pass callback function from parent to child. |
| 99 | How debug React app? | React DevTools, console, breakpoints, network tab. |
| 100 | What makes a React app production-ready? | Clean structure, good UX, error handling, performance, accessibility, tests, deployment. |

---

# React Coding Interview Questions

## Counter App

### Problem

Build a counter with increment, decrement, and reset.

### Code

```jsx
import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <section>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </section>
  );
}

export default CounterApp;
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `useState(0)` | Creates count state. |
| `increment` | Adds 1 using previous state. |
| `decrement` | Subtracts 1 using previous state. |
| `reset` | Sets count to 0. |
| `<h1>{count}</h1>` | Displays count. |
| `onClick={...}` | Connects buttons to handlers. |

### Common Mistakes

- Using `setCount(count + 1)` multiple times where functional update is safer.
- Calling handler immediately.
- Not disabling decrement when negative values are not allowed.

### Interview Explanation

This tests `useState`, event handling, and state updates. I use functional updates because next count depends on previous count.

### One-Line Revision Note

Counter = state + click handlers.

---

## Todo App

### Problem

Build a todo app with add, complete, and delete.

### Code

```jsx
import { useState } from "react";

function TodoApp() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo(event) {
    event.preventDefault();

    if (!text.trim()) {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setText("");
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <section>
      <form onSubmit={addTodo}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoApp;
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `text` | Stores input value. |
| `todos` | Stores todo list. |
| `preventDefault()` | Stops form reload. |
| `!text.trim()` | Blocks empty todos. |
| `Date.now()` | Creates simple unique id for demo. |
| `setTodos((prev) => [...prev, newTodo])` | Adds todo immutably. |
| `setText("")` | Clears input. |
| `toggleTodo` | Updates matching todo. |
| `map` | Creates updated array. |
| `filter` | Deletes selected todo. |
| `key={todo.id}` | Stable list key. |

### Common Mistakes

- Mutating array with `push`.
- Using index as key.
- Not preventing empty todos.

### Interview Explanation

This tests controlled forms, array state updates, list rendering, keys, conditional styling, and event handling.

### One-Line Revision Note

Todo app = form + array state + map/filter.

---

## Search Filter

### Problem

Filter a list based on search input.

### Code

```jsx
import { useMemo, useState } from "react";

const users = [
  { id: 1, name: "Asha" },
  { id: 2, name: "Ravi" },
  { id: 3, name: "Meena" },
];

function SearchFilter() {
  const [query, setQuery] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <section>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />

      {filteredUsers.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </section>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `query` | Stores search text. |
| `users` | Data to search. |
| `useMemo` | Caches filtered result. |
| `filter` | Keeps matching users. |
| `toLowerCase()` | Makes search case-insensitive. |
| `includes` | Checks if name contains query. |
| `map` | Renders matching users. |

### Common Mistakes

- Mutating original array.
- Forgetting case-insensitive search.
- Using `useMemo` unnecessarily for tiny lists, though acceptable in interviews if explained.

### Interview Explanation

Search filter uses controlled input and derived data. The filtered list can be calculated from query and original list.

### One-Line Revision Note

Search filter = query state + filtered derived list.

---

## Form Validation

### Problem

Validate name and email before submit.

### Code

```jsx
import { useState } from "react";

function ValidationForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      nextErrors.email = "Valid email is required";
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log("Submitted", form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} />
      {errors.name && <p>{errors.name}</p>}

      <input name="email" value={form.email} onChange={handleChange} />
      {errors.email && <p>{errors.email}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `form` | Stores input values. |
| `errors` | Stores validation messages. |
| `handleChange` | Updates field by name. |
| `validate` | Creates error object. |
| `name.trim()` | Checks empty name. |
| `email.includes("@")` | Simple email check. |
| `Object.keys(...).length` | Checks if errors exist. |
| Conditional error JSX | Shows errors only when present. |

### Common Mistakes

- Not stopping submit on validation failure.
- Replacing whole form incorrectly.
- Showing errors before user interaction without design reason.

### Interview Explanation

This tests controlled inputs, object state, computed property names, validation logic, and conditional rendering.

### One-Line Revision Note

Validation = check input + store errors + block submit.

---

## Theme Switcher

### Problem

Build light/dark theme switcher using Context.

### Code

```jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `createContext(null)` | Creates theme context. |
| `ThemeProvider` | Wrapper component for shared theme. |
| `theme` state | Stores current theme. |
| `toggleTheme` | Switches light/dark. |
| `Provider value={{...}}` | Shares theme and function. |
| `useContext` | Reads context. |
| `onClick={toggleTheme}` | Toggles theme. |

### Common Mistakes

- Using Context before Provider.
- Forgetting to pass `children`.
- Recreating large context values unnecessarily.

### Interview Explanation

This tests Context API, state, custom Provider pattern, and shared state without prop drilling.

### One-Line Revision Note

Theme switcher = Context + state + toggle.

---

## CRUD Application

### Problem

Create, read, update, and delete items.

### Code

```jsx
import { useState } from "react";

function CrudApp() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      return;
    }

    if (editingId) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === editingId ? { ...item, name } : item
        )
      );
      setEditingId(null);
    } else {
      setItems((prev) => [...prev, { id: Date.now(), name }]);
    }

    setName("");
  }

  function editItem(item) {
    setName(item.name);
    setEditingId(item.id);
  }

  function deleteItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">{editingId ? "Update" : "Add"}</button>
      </form>

      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => editItem(item)}>Edit</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </section>
  );
}
```

### Line-By-Line Explanation

| Line | Explanation |
|---|---|
| `name` | Input state. |
| `items` | List data. |
| `editingId` | Tracks item being edited. |
| `preventDefault` | Stops reload. |
| `if (editingId)` | Chooses update mode. |
| `map` | Updates matching item. |
| `setEditingId(null)` | Leaves edit mode. |
| `else` | Add mode. |
| `filter` | Deletes item. |
| Button text ternary | Shows Add or Update. |

### Common Mistakes

- Not clearing edit mode after update.
- Mutating item directly.
- Using duplicate IDs.

### Interview Explanation

CRUD tests all important beginner skills: controlled input, array state, conditional logic, add, edit, delete, and list rendering.

### One-Line Revision Note

CRUD = create, read, update, delete with state.

---

# React Best Practices

| Best Practice | Why It Matters |
|---|---|
| Keep components small | Easier to read and test |
| Use meaningful names | Code explains itself |
| Use props for inputs | Reusable components |
| Use state only when needed | Avoid bugs |
| Derive values during render | Avoid duplicate state |
| Use stable keys | Correct list updates |
| Handle loading and errors | Better user experience |
| Clean up effects | Avoid memory leaks |
| Split API logic | Cleaner components |
| Use custom Hooks for repeated logic | Reuse behavior |
| Prefer composition | Flexible UI |
| Keep accessibility in mind | Better for all users |
| Test important behavior | Confidence |
| Use ESLint | Catch mistakes early |

Memory trick:

```text
Good React = SMALL

S = Small components
M = Meaningful names
A = Avoid duplicate state
L = Lists need keys
L = Load/error states
```

---

# Common Mistakes

| Mistake | Why It Is Bad | Fix |
|---|---|---|
| Directly mutating state | React may not detect change correctly | Use setter with new object/array |
| Calling Hook conditionally | Breaks Hook order | Call Hooks at top level |
| Using index as key always | Breaks changing lists | Use stable IDs |
| Missing effect dependencies | Causes stale data bugs | Include all reactive values |
| Overusing `useEffect` | Makes code harder | Calculate during render when possible |
| Using Redux for everything | Adds complexity | Use local state first |
| Forgetting loading/error states | Bad UX | Track loading and error |
| Huge components | Hard to maintain | Split by responsibility |
| Passing too many props | Hard to use | Compose or group data carefully |
| Not cleaning timers/listeners | Memory leaks | Return cleanup from effect |
| Using `onClick={fn()}` | Runs immediately | Use `onClick={fn}` |
| Rendering objects directly | React error | Render object properties |
| Not handling empty lists | Blank UI | Show empty state |
| Ignoring accessibility | Poor usability | Use labels, buttons, alt text |
| Copying props into state | Sync bugs | Use props directly unless editing local copy |

---

# React Cheat Sheet

## Component

```jsx
function Hello() {
  return <h1>Hello</h1>;
}
```

## Props

```jsx
function User({ name }) {
  return <p>{name}</p>;
}

<User name="Asha" />;
```

## State

```jsx
const [count, setCount] = useState(0);
```

## Event

```jsx
<button onClick={handleClick}>Click</button>
```

## Input

```jsx
<input value={name} onChange={(e) => setName(e.target.value)} />
```

## Conditional

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
{error && <p>{error}</p>}
```

## List

```jsx
items.map((item) => <li key={item.id}>{item.name}</li>);
```

## Effect

```jsx
useEffect(() => {
  // run side effect
  return () => {
    // cleanup
  };
}, [dependency]);
```

## Context

```jsx
const ThemeContext = createContext("light");
const theme = useContext(ThemeContext);
```

## Router

```jsx
<Routes>
  <Route path="/about" element={<About />} />
</Routes>
```

## Redux Toolkit

```jsx
const slice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});
```

---

# React Revision Notes

## Must Remember

- React builds UI using components.
- JSX looks like HTML but is JavaScript syntax.
- Props are read-only and flow parent to child.
- State is component memory and causes re-render.
- Events use camelCase like `onClick`.
- Lists need stable keys.
- Controlled forms store input in state.
- Hooks must be called at top level.
- `useEffect` is for side effects, not normal calculations.
- Context solves prop drilling for shared values.
- Router maps URL to components.
- Redux Toolkit manages complex shared state.

## Memory Tricks

```text
JSX Rules = OCC
O = One parent
C = Close all tags
C = CamelCase attributes
```

```text
Hooks Rules = TR
T = Top level
R = React functions only
```

```text
API UI = LSE
L = Loading
S = Success
E = Error
```

```text
Redux Flow = DARS
D = Dispatch
A = Action
R = Reducer
S = Store
```

---

# React Roadmap 2026

## Phase 1: Web Basics

- HTML semantic tags
- CSS flexbox and grid
- JavaScript variables, functions, arrays, objects
- ES6 modules
- Promises and async/await
- DOM basics

## Phase 2: React Basics

- What React is
- JSX
- Components
- Props
- State
- Events
- Conditional rendering
- Lists and keys
- Forms

## Phase 3: Hooks

- `useState`
- `useEffect`
- `useContext`
- `useReducer`
- `useRef`
- `useMemo`
- `useCallback`
- `useLayoutEffect`
- Custom Hooks

## Phase 4: Real App Skills

- API calls with fetch and Axios
- Loading and error states
- React Router
- Protected routes
- Form validation
- File and folder structure
- Environment variables

## Phase 5: State Management

- Lifting state up
- Context API
- Redux Toolkit
- React Redux Hooks
- Async state patterns
- Optional: RTK Query or TanStack Query for server state

## Phase 6: Quality

- ESLint
- React DevTools
- Debugging
- Accessibility
- Performance optimization
- Testing with Vitest/Jest and React Testing Library
- Deployment with Vercel/Netlify

## Phase 7: Job-Ready Extras

- TypeScript basics
- Git and GitHub
- Resume projects
- Interview practice
- System design basics for frontend
- Basic Next.js awareness
- React 19+ awareness such as modern docs, Actions, Server Components concepts, and React Compiler awareness

Roadmap diagram:

```text
JS basics
   |
   v
React basics
   |
   v
Hooks + Forms + API
   |
   v
Router + Context + Redux Toolkit
   |
   v
Projects + Testing + Deployment
   |
   v
Interview ready
```

---

# How To Become Job Ready In React

## Build These Projects

| Level | Project | Skills |
|---|---|---|
| Beginner | Counter | State and events |
| Beginner | Todo App | Forms, lists, CRUD |
| Beginner | Weather App | API calls, loading, error |
| Intermediate | Movie Search | Search, API, routing |
| Intermediate | E-commerce Cart | Props, state, Context/Redux |
| Intermediate | Blog App | CRUD, router, forms |
| Advanced Fresher | Dashboard | Charts, filters, auth UI |
| Advanced Fresher | Full-stack MERN mini app | React + backend integration |

## What Recruiters Like

- Deployed project link
- Clean GitHub README
- Good folder structure
- Responsive UI
- Error handling
- Real API integration
- Form validation
- Authentication flow
- Clear commit history

## Weekly Plan

| Week | Focus |
|---|---|
| 1 | JSX, components, props, state |
| 2 | Events, forms, lists, conditional rendering |
| 3 | Hooks and API calls |
| 4 | Router and Context |
| 5 | Redux Toolkit |
| 6 | Projects and deployment |
| 7 | Interview questions |
| 8 | Mock interviews and resume polish |

## Fresher Interview Strategy

```text
When asked a concept:

1. Define simply
2. Explain why needed
3. Give a small example
4. Mention a common mistake
5. Connect to a project you built
```

Example:

```text
useEffect is a Hook used for side effects like API calls and timers. It is needed because such work happens outside normal rendering. In my weather app, I used useEffect to call the weather API when the city changed. I also handled loading and errors.
```

---

# 30-Minute Interview Revision Guide

## Minute 0-5: Core React

Revise:

- React is a UI library.
- Component is reusable UI.
- JSX is HTML-like JavaScript.
- Props are parent-to-child read-only data.
- State is changing component memory.

Say out loud:

```text
React builds UI with components. Data flows down through props. State stores changing data. When state changes, React re-renders the component.
```

## Minute 5-10: Rendering And Forms

Revise:

- Conditional rendering: `if`, ternary, `&&`
- Lists: `map()`
- Keys: stable IDs
- Controlled input: `value` + `onChange`
- Form submit: `onSubmit` + `preventDefault`

Say out loud:

```text
For lists, I use map and stable keys. For forms, I keep input values in state and update them with onChange.
```

## Minute 10-18: Hooks

Revise:

- `useState`: local state
- `useEffect`: side effects
- `useContext`: read context
- `useReducer`: complex state
- `useRef`: DOM or mutable value without render
- `useMemo`: cache value
- `useCallback`: cache function
- `useLayoutEffect`: layout before paint
- Custom Hook: reusable Hook logic

Say out loud:

```text
Hooks must be called at the top level of React components or custom Hooks. useEffect is for syncing with external systems.
```

## Minute 18-23: Router, API, Performance

Revise:

- Router maps paths to components.
- `Link` navigates without reload.
- `useNavigate` navigates by code.
- `useParams` reads dynamic route values.
- API UI needs loading, success, error.
- `React.memo`, `useMemo`, and `useCallback` are optimizations.
- Lazy loading improves initial load.

Say out loud:

```text
I handle API calls with loading and error states. I optimize only when needed using memoization or lazy loading.
```

## Minute 23-27: Redux Toolkit

Revise:

- Store holds global state.
- Action describes what happened.
- Reducer calculates next state.
- Dispatch sends action.
- `configureStore` creates store.
- `createSlice` creates reducers and actions.
- `Provider` gives store.
- `useSelector` reads.
- `useDispatch` writes.

Say out loud:

```text
Redux flow is dispatch action, reducer updates state, store saves state, UI reads with useSelector.
```

## Minute 27-30: Final Confidence Round

Answer these quickly:

1. React vs plain JS?
2. Props vs state?
3. Why keys?
4. `useEffect` dependency array?
5. Controlled component?
6. Context vs Redux?
7. `useMemo` vs `useCallback`?
8. How do you handle API errors?
9. What projects have you built?
10. What was your hardest React bug?

Final one-minute speech:

```text
I know React fundamentals like components, JSX, props, state, events, lists, and forms. I can use Hooks such as useState, useEffect, useContext, useReducer, useRef, useMemo, and useCallback. I can build routed apps, call APIs with loading and error handling, and manage shared state with Context or Redux Toolkit. I have practiced common apps like counter, todo, search filter, validation form, theme switcher, and CRUD.
```

---

## Final Memory Map

```text
React
 |
 |-- JSX
 |-- Components
 |     |-- Props
 |     |-- State
 |     |-- Events
 |
 |-- Rendering
 |     |-- Conditional
 |     |-- Lists + Keys
 |     |-- Forms
 |
 |-- Hooks
 |     |-- useState
 |     |-- useEffect
 |     |-- useContext
 |     |-- useReducer
 |     |-- useRef
 |     |-- useMemo
 |     |-- useCallback
 |     |-- Custom Hooks
 |
 |-- App Skills
 |     |-- Router
 |     |-- API Calls
 |     |-- Context
 |     |-- Redux Toolkit
 |
 |-- Job Ready
       |-- Projects
       |-- Testing
       |-- Deployment
       |-- Interviews
```

You are interview-ready when you can explain every box in this map with:

```text
Definition + Why needed + Example + Common mistake
```
"# React_redux_Example" 
