# Everything a React Fresher Must Revise Before an Interview

This README is a last-minute React interview revision notebook.

Use it when you have:

- 1 hour before an interview
- 30 minutes before a viva
- A project discussion round
- Internship or placement preparation

The goal is simple:

- Answer React questions confidently
- Explain React projects clearly
- Revise important concepts quickly
- Speak in simple, practical English

---

# React Introduction

## Simple Definition

React is a JavaScript library used to build user interfaces, mainly for web applications.

## Why It Is Needed

It helps developers build fast, reusable, and interactive UI screens.

## Key Points

- Created by Meta
- Used for frontend development
- Based on components
- Updates UI efficiently
- Commonly used for single page applications

## Syntax

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

## Interview Answer

React is a JavaScript library for building UI. It uses components and state to create dynamic web applications.

## What Interviewer Expects You To Say

React is component-based, fast, reusable, and useful for building interactive frontend apps.

## Real Project Usage

Used to build dashboards, ecommerce sites, admin panels, portfolios, and form-based applications.

## Common Mistakes

- Calling React a framework
- Not knowing component meaning
- Confusing React with JavaScript itself

## Memory Trick

React reacts to data changes and updates the UI.

## One-Line Revision Note

React is a JavaScript library for building reusable and interactive user interfaces.

---

# Why React

## Simple Definition

React is used because it makes UI development easier, faster, and more organized.

## Why It Is Needed

It solves problems like repeated UI code, manual DOM updates, and complex state handling.

## Key Points

- Reusable components
- Fast UI updates
- Large community
- Easy to combine with libraries
- Good for projects and jobs

## Syntax

```jsx
<Button text="Login" />
<Button text="Register" />
```

## Interview Answer

React is used because it allows us to build reusable components, manage data easily, and update the UI efficiently.

## What Interviewer Expects You To Say

React improves code reuse, maintainability, and user experience.

## Real Project Usage

Used when the same UI parts like buttons, cards, forms, and modals are needed in many places.

## Common Mistakes

- Saying only "React is fast"
- Not explaining reusability
- Ignoring project benefits

## Memory Trick

React saves time by reusing UI blocks.

## One-Line Revision Note

React is chosen for reusable components, fast rendering, and clean UI development.

---

# Features of React

## Simple Definition

React features are the main abilities that make React useful for frontend development.

## Why It Is Needed

These features help build large and maintainable applications.

## Key Points

- Component-based architecture
- JSX
- Virtual DOM
- One-way data flow
- Hooks
- Strong ecosystem

## Syntax

```jsx
const element = <h1>React Feature</h1>;
```

## Interview Answer

Important React features include components, JSX, Virtual DOM, props, state, hooks, and one-way data flow.

## What Interviewer Expects You To Say

Mention components, Virtual DOM, JSX, hooks, and reusable UI.

## Real Project Usage

Features are used together to build pages, forms, routing, API screens, and dashboards.

## Common Mistakes

- Listing features without explaining
- Forgetting hooks
- Confusing JSX with HTML

## Memory Trick

Think CVJH: Components, Virtual DOM, JSX, Hooks.

## One-Line Revision Note

React features help create reusable, dynamic, and efficient user interfaces.

---

# Advantages of React

## Simple Definition

React advantages are the benefits developers get while building frontend apps.

## Why It Is Needed

Knowing advantages helps explain why React is used in real projects.

## Key Points

- Reusable code
- Better performance
- Easy debugging with dev tools
- Strong job demand
- Flexible with many libraries

## Syntax

```jsx
function Card({ title }) {
  return <div>{title}</div>;
}
```

## Interview Answer

React gives reusable components, faster rendering using Virtual DOM, simple data flow, and good ecosystem support.

## What Interviewer Expects You To Say

Explain benefits from a project point of view, not only theory.

## Real Project Usage

Reusable components reduce duplicate code in pages like product lists, user cards, and forms.

## Common Mistakes

- Saying React is always faster than everything
- Not mentioning maintainability
- Ignoring ecosystem

## Memory Trick

React helps write once and use many times.

## One-Line Revision Note

React makes frontend code reusable, maintainable, and efficient.

---

# SPA vs MPA

## Simple Definition

SPA loads one HTML page and updates content dynamically, while MPA loads a new page for every route.

## Why It Is Needed

It helps explain why React apps feel fast and smooth.

## Key Points

- SPA means Single Page Application
- MPA means Multi Page Application
- React is commonly used for SPAs
- SPA avoids full page reloads
- MPA reloads from server for each page

## Syntax

```jsx
<Routes>
  <Route path="/about" element={<About />} />
</Routes>
```

## Interview Answer

In SPA, only one HTML page is loaded and React updates the view without full reload. In MPA, every page request loads a new HTML page.

## What Interviewer Expects You To Say

SPA gives smoother navigation; MPA is traditional page-by-page loading.

## Real Project Usage

React Router is used to create SPA navigation in React projects.

## Common Mistakes

- Saying SPA has only one screen
- Forgetting routing
- Thinking React cannot make multiple pages

## Memory Trick

SPA changes content, MPA changes full page.

## One-Line Revision Note

React apps are usually SPAs where views change without full page reload.

---

# Virtual DOM

## Simple Definition

Virtual DOM is a lightweight copy of the real DOM kept by React in memory.

## Why It Is Needed

It helps React update only the required parts of the UI.

## Key Points

- Virtual representation of UI
- Faster comparison
- Reduces direct DOM manipulation
- React compares old and new Virtual DOM
- Final changes are applied to real DOM

## Syntax

```jsx
setCount(count + 1);
```

## Interview Answer

Virtual DOM is React's in-memory copy of the DOM. React compares changes and updates only the necessary real DOM elements.

## What Interviewer Expects You To Say

Mention diffing, efficient update, and real DOM update.

## Real Project Usage

When state changes in a counter, form, or list, React updates only affected UI parts.

## Common Mistakes

- Saying Virtual DOM is visible in browser
- Saying it replaces real DOM
- Not mentioning comparison

## Memory Trick

Virtual DOM is React's rough notebook before editing the real page.

## One-Line Revision Note

Virtual DOM helps React update UI efficiently.

---

# Real DOM vs Virtual DOM

## Simple Definition

Real DOM is the actual browser UI tree, while Virtual DOM is React's lightweight copy.

## Why It Is Needed

It explains how React improves UI update performance.

## Key Points

- Real DOM updates can be costly
- Virtual DOM updates happen in memory
- React compares Virtual DOM versions
- Only final required changes go to Real DOM

## Syntax

```jsx
const [name, setName] = useState("React");
```

## Interview Answer

Real DOM directly represents the browser page. Virtual DOM is a copy used by React to calculate minimum required changes.

## What Interviewer Expects You To Say

Virtual DOM makes updates more efficient by reducing direct real DOM operations.

## Real Project Usage

Used internally whenever components re-render due to state or props changes.

## Common Mistakes

- Saying Virtual DOM is always faster in every case
- Confusing DOM with JSX
- Not explaining real browser update

## Memory Trick

Real DOM is the final page; Virtual DOM is React's planning copy.

## One-Line Revision Note

Virtual DOM helps React decide what to update in the Real DOM.

---

# React Architecture

## Simple Definition

React architecture means how a React application is organized using components, data, routing, and state.

## Why It Is Needed

Good architecture makes projects easy to understand, scale, and maintain.

## Key Points

- App is divided into components
- Data flows from parent to child
- State manages changing data
- Router manages pages
- API layer handles backend calls
- Store manages global state when needed

## Syntax

```txt
src/
  components/
  pages/
  hooks/
  store/
  api/
```

## Interview Answer

React applications are built using reusable components. State, props, routing, APIs, and sometimes Redux are used to manage app flow.

## What Interviewer Expects You To Say

Explain project structure and data flow in simple terms.

## Real Project Usage

Used in admin panels, CRUD apps, ecommerce carts, and dashboards.

## Common Mistakes

- Putting all code in App.jsx
- No folder structure
- Mixing API logic everywhere

## Memory Trick

React architecture is like arranging files in proper rooms.

## One-Line Revision Note

React architecture organizes UI, data, routing, and state into clean parts.

---

# React Rendering Process

## Simple Definition

Rendering means React calls components and shows their UI in the browser.

## Why It Is Needed

It helps understand why UI changes when state or props change.

## Key Points

- Component returns JSX
- JSX becomes React elements
- React creates Virtual DOM
- React compares changes
- Browser UI updates

## Syntax

```jsx
root.render(<App />);
```

## Interview Answer

React renders components by converting JSX into React elements, comparing Virtual DOM changes, and updating the browser DOM.

## What Interviewer Expects You To Say

State or props change causes re-render.

## Real Project Usage

Search filters, form inputs, counters, and API results re-render when data changes.

## Common Mistakes

- Thinking full page reload happens
- Not knowing state causes render
- Confusing render with return only

## Memory Trick

Render means React shows the latest UI.

## One-Line Revision Note

React re-renders UI when state or props change.

---

# JSX

## Simple Definition

JSX is a syntax that lets us write HTML-like code inside JavaScript.

## Why It Is Needed

It makes React UI code easier to read and write.

## Key Points

- Looks like HTML
- Actually JavaScript syntax extension
- Must return one parent element
- Uses className instead of class
- Supports JavaScript expressions using {}

## Syntax

```jsx
const title = <h1>Hello JSX</h1>;
```

## Interview Answer

JSX is a JavaScript syntax extension used in React to write UI in an HTML-like format.

## What Interviewer Expects You To Say

JSX improves readability and is converted to JavaScript by build tools.

## Real Project Usage

Used in every React component to design UI structure.

## Common Mistakes

- Calling JSX pure HTML
- Using class instead of className
- Returning multiple elements without a wrapper

## Memory Trick

JSX means JavaScript plus XML-like UI.

## One-Line Revision Note

JSX lets us write HTML-like UI inside JavaScript.

---

# JSX Rules

## Simple Definition

JSX rules are the basic rules we must follow while writing JSX.

## Why It Is Needed

Rules prevent syntax errors and make components valid.

## Key Points

- Return one parent element
- Close every tag
- Use className
- Use htmlFor instead of for
- Write JavaScript expressions inside {}

## Syntax

```jsx
return (
  <>
    <label htmlFor="email">Email</label>
    <input id="email" />
  </>
);
```

## Interview Answer

JSX must have one parent, all tags must be closed, attributes use React naming like className, and JavaScript expressions are written inside braces.

## What Interviewer Expects You To Say

Mention one parent, closed tags, className, and expressions.

## Real Project Usage

Used while creating forms, lists, layouts, and components.

## Common Mistakes

- Forgetting closing tags
- Returning sibling elements directly
- Writing if statement directly inside JSX

## Memory Trick

JSX is strict HTML-like JavaScript.

## One-Line Revision Note

JSX follows strict rules because it is converted into JavaScript.

---

# Expressions in JSX

## Simple Definition

Expressions in JSX are JavaScript values written inside curly braces.

## Why It Is Needed

They help display dynamic data in UI.

## Key Points

- Use {}
- Can show variables
- Can call functions
- Can use ternary
- Cannot directly write statements like if or for

## Syntax

```jsx
<h1>Hello {name}</h1>
```

## Interview Answer

JSX expressions allow us to use JavaScript inside JSX by writing variables, function calls, or expressions in curly braces.

## What Interviewer Expects You To Say

Expressions display dynamic data.

## Real Project Usage

Used to show usernames, prices, status, errors, and API data.

## Common Mistakes

- Using double curly braces unnecessarily
- Writing if statements directly
- Forgetting braces around variables

## Memory Trick

Curly braces open the JavaScript door inside JSX.

## One-Line Revision Note

Use `{}` to display JavaScript expressions inside JSX.

---

# Fragments

## Simple Definition

Fragments let us group multiple JSX elements without adding extra HTML to the DOM.

## Why It Is Needed

They avoid unnecessary wrapper divs.

## Key Points

- Written as `<>...</>`
- No extra DOM node
- Useful for returning multiple elements
- Can use `<React.Fragment>` when key is needed

## Syntax

```jsx
return (
  <>
    <h1>Title</h1>
    <p>Text</p>
  </>
);
```

## Interview Answer

Fragment is used to wrap multiple JSX elements without creating an extra DOM element.

## What Interviewer Expects You To Say

Fragments prevent unnecessary divs.

## Real Project Usage

Used when a component returns headings, lists, or multiple layout parts.

## Common Mistakes

- Adding too many unnecessary divs
- Using short fragment when a key is required
- Forgetting one parent rule

## Memory Trick

Fragment groups without showing itself.

## One-Line Revision Note

Fragments return multiple elements without extra DOM nodes.

---

# Rendering Elements

## Simple Definition

Rendering elements means displaying React elements on the browser screen.

## Why It Is Needed

It is the starting point of showing a React app.

## Key Points

- React element describes UI
- ReactDOM renders app into root element
- Usually done in main.jsx
- App component is the root component

## Syntax

```jsx
createRoot(document.getElementById("root")).render(<App />);
```

## Interview Answer

React renders elements into a root DOM node using ReactDOM createRoot and render.

## What Interviewer Expects You To Say

React starts from root and renders the App component.

## Real Project Usage

Used in `main.jsx` or `index.jsx` to start the application.

## Common Mistakes

- Removing root div from HTML
- Rendering multiple apps accidentally
- Not importing App

## Memory Trick

Root is where React app enters the browser.

## One-Line Revision Note

React renders the App component inside the root DOM element.

---

# Components

## Simple Definition

Components are reusable pieces of UI in React.

## Why It Is Needed

They help split large UI into small, manageable parts.

## Key Points

- Main building blocks of React
- Can be reused
- Can receive props
- Can have state
- Usually written as functions

## Syntax

```jsx
function Header() {
  return <h1>Header</h1>;
}
```

## Interview Answer

A component is a reusable UI block that returns JSX. React apps are built by combining components.

## What Interviewer Expects You To Say

Components improve reusability and maintainability.

## Real Project Usage

Navbar, footer, button, card, modal, and form are common components.

## Common Mistakes

- Making one very large component
- Not reusing repeated UI
- Naming components with lowercase letters

## Memory Trick

Component means one UI part.

## One-Line Revision Note

Components are reusable UI blocks in React.

---

# Functional Components

## Simple Definition

Functional components are JavaScript functions that return JSX.

## Why It Is Needed

They are the modern and common way to write React components.

## Key Points

- Simple functions
- Return JSX
- Use hooks for state and lifecycle
- Easier than class components
- Must start with capital letter

## Syntax

```jsx
function Profile() {
  return <h2>User Profile</h2>;
}
```

## Interview Answer

A functional component is a function that returns JSX. Modern React mainly uses functional components with hooks.

## What Interviewer Expects You To Say

Functional components are simple and use hooks.

## Real Project Usage

Almost all new React project components are functional components.

## Common Mistakes

- Calling component as normal function in JSX
- Forgetting return
- Using lowercase component name

## Memory Trick

Function plus JSX equals functional component.

## One-Line Revision Note

Functional components are functions that return React UI.

---

# Component Structure

## Simple Definition

Component structure means how code inside a component is arranged.

## Why It Is Needed

Good structure makes components easy to read and debug.

## Key Points

- Imports at top
- State and hooks inside component
- Handler functions before return
- JSX inside return
- Export at end or during declaration

## Syntax

```jsx
function Login() {
  const [email, setEmail] = useState("");

  return <input value={email} onChange={(e) => setEmail(e.target.value)} />;
}
```

## Interview Answer

A component usually has imports, state, functions, JSX return, and export.

## What Interviewer Expects You To Say

Show that you can organize component code clearly.

## Real Project Usage

Useful in forms, pages, reusable cards, and API-based components.

## Common Mistakes

- Writing hooks conditionally
- Mixing too much logic in JSX
- Not separating reusable parts

## Memory Trick

Import, logic, return, export.

## One-Line Revision Note

A clean component structure improves readability and maintenance.

---

# Reusable Components

## Simple Definition

Reusable components are components used in multiple places with different data.

## Why It Is Needed

They reduce duplicate code and make UI consistent.

## Key Points

- Use props for dynamic values
- Keep component generic
- Avoid hardcoding too much
- Useful for buttons, cards, inputs

## Syntax

```jsx
function Button({ label }) {
  return <button>{label}</button>;
}
```

## Interview Answer

Reusable components are generic UI parts that accept props and can be used in different places.

## What Interviewer Expects You To Say

Props make components reusable.

## Real Project Usage

One Button component can be used for Login, Save, Submit, and Delete actions.

## Common Mistakes

- Hardcoding data
- Creating duplicate components
- Making reusable components too complex

## Memory Trick

Reusable means same design, different data.

## One-Line Revision Note

Reusable components reduce repetition by accepting props.

---

# Component Composition

## Simple Definition

Component composition means combining small components to create bigger UI.

## Why It Is Needed

It keeps code modular and flexible.

## Key Points

- Build UI by nesting components
- Parent can pass children
- Encourages small components
- Better than one huge component

## Syntax

```jsx
function Layout({ children }) {
  return <main>{children}</main>;
}
```

## Interview Answer

Component composition means creating complex UI by combining smaller reusable components.

## What Interviewer Expects You To Say

React apps are built by composing components.

## Real Project Usage

Dashboard layout may contain Sidebar, Header, Content, and Footer components.

## Common Mistakes

- Creating deeply confusing nesting
- Passing too many props
- Not using children when useful

## Memory Trick

Small blocks create a big page.

## One-Line Revision Note

Composition builds complex UI from small components.

---

# Props

## Simple Definition

Props are data passed from one component to another.

## Why It Is Needed

Props make components dynamic and reusable.

## Key Points

- Props are read-only
- Passed from parent to child
- Used like function parameters
- Can pass strings, numbers, arrays, objects, functions

## Syntax

```jsx
<User name="Ravi" />
```

## Interview Answer

Props are read-only inputs passed from a parent component to a child component.

## What Interviewer Expects You To Say

Props are used for parent-to-child data sharing.

## Real Project Usage

Used to pass product data to ProductCard or user data to ProfileCard.

## Common Mistakes

- Trying to modify props directly
- Confusing props with state
- Passing unnecessary props

## Memory Trick

Props are parameters for components.

## One-Line Revision Note

Props pass read-only data from parent to child.

---

# Passing Props

## Simple Definition

Passing props means sending data to a child component through attributes.

## Why It Is Needed

It allows one component to control what another component displays.

## Key Points

- Parent sends props
- Child receives props
- Props can be destructured
- Functions can also be passed

## Syntax

```jsx
<Card title="React" price={500} />
```

## Interview Answer

Props are passed like HTML attributes from parent component and received as an object in child component.

## What Interviewer Expects You To Say

You know parent-to-child communication.

## Real Project Usage

Used in product cards, table rows, profile cards, and form fields.

## Common Mistakes

- Forgetting curly braces for non-string values
- Passing too many props
- Not validating expected data

## Memory Trick

Parent gives, child receives.

## One-Line Revision Note

Props are passed as attributes to child components.

---

# Parent to Child Communication

## Simple Definition

Parent to child communication means sending data from a parent component to a child using props.

## Why It Is Needed

It keeps data flow predictable in React.

## Key Points

- Data flows downward
- Props carry data
- Child should not directly change parent state
- Functions can be passed for callbacks

## Syntax

```jsx
function Parent() {
  return <Child message="Hello" />;
}
```

## Interview Answer

In React, parent communicates with child by passing props. This follows one-way data flow.

## What Interviewer Expects You To Say

React data flow is from parent to child.

## Real Project Usage

Used when a page sends data to cards, forms, or reusable components.

## Common Mistakes

- Trying child-to-parent direct update
- Mutating props
- Ignoring callback props

## Memory Trick

React data falls down like a waterfall.

## One-Line Revision Note

Parent sends data to child through props.

---

# Props Destructuring

## Simple Definition

Props destructuring means extracting prop values directly from the props object.

## Why It Is Needed

It makes component code shorter and cleaner.

## Key Points

- Avoids repeated `props.name`
- Can destructure in parameters
- Improves readability
- Common in functional components

## Syntax

```jsx
function User({ name, age }) {
  return <p>{name} - {age}</p>;
}
```

## Interview Answer

Props destructuring means directly taking required values from props, usually in the function parameter.

## What Interviewer Expects You To Say

It is a clean JavaScript technique used in React components.

## Real Project Usage

Used in almost all reusable components.

## Common Mistakes

- Destructuring wrong prop names
- Forgetting default values
- Over-destructuring deeply nested objects

## Memory Trick

Destructuring opens the props box.

## One-Line Revision Note

Props destructuring makes prop usage cleaner.

---

# Default Props

## Simple Definition

Default props are fallback values used when a prop is not passed.

## Why It Is Needed

They prevent empty or undefined values in UI.

## Key Points

- Useful for optional props
- Can use default function parameters
- Helps avoid UI errors
- Good for reusable components

## Syntax

```jsx
function Button({ label = "Submit" }) {
  return <button>{label}</button>;
}
```

## Interview Answer

Default props provide default values to components when parent does not pass a prop.

## What Interviewer Expects You To Say

Default values make components safer and reusable.

## Real Project Usage

Used for button labels, image placeholders, status text, and optional settings.

## Common Mistakes

- Not handling missing props
- Using default values for required props
- Forgetting JavaScript default syntax

## Memory Trick

Default props are backup values.

## One-Line Revision Note

Default props handle missing prop values.

---

# State

## Simple Definition

State is data that belongs to a component and can change over time.

## Why It Is Needed

State helps React update UI when user actions or data changes happen.

## Key Points

- Managed using `useState`
- Changing state causes re-render
- State is local by default
- Never update state directly

## Syntax

```jsx
const [count, setCount] = useState(0);
```

## Interview Answer

State is mutable data managed inside a component. When state changes, React re-renders the component.

## What Interviewer Expects You To Say

State controls dynamic UI.

## Real Project Usage

Used for forms, counters, modals, filters, loading, errors, and API data.

## Common Mistakes

- Directly modifying state
- Thinking state updates immediately
- Creating unnecessary state

## Memory Trick

State means current condition of UI.

## One-Line Revision Note

State stores changing data in a component.

---

# Why State

## Simple Definition

State is needed to remember changing values in React UI.

## Why It Is Needed

Without state, React cannot update UI based on user interaction.

## Key Points

- Stores dynamic data
- Triggers UI update
- Keeps input values
- Tracks loading and errors
- Controls conditional UI

## Syntax

```jsx
const [isOpen, setIsOpen] = useState(false);
```

## Interview Answer

State is needed to manage changing data like form inputs, counters, API results, and UI visibility.

## What Interviewer Expects You To Say

State makes UI interactive.

## Real Project Usage

Used to open modals, submit forms, search lists, and display backend data.

## Common Mistakes

- Using normal variables instead of state
- Adding state for fixed data
- Mutating arrays or objects directly

## Memory Trick

If UI must remember it, use state.

## One-Line Revision Note

State is required for interactive and changing UI.

---

# State vs Props

## Simple Definition

State is internal changing data, while props are external read-only data passed from parent.

## Why It Is Needed

It helps decide where data should be stored and how it should move.

## Key Points

- State is managed inside component
- Props come from parent
- State can change
- Props should not be changed by child
- Both affect rendering

## Syntax

```jsx
const [count, setCount] = useState(0);
<Counter value={count} />
```

## Interview Answer

State is local and changeable data. Props are read-only data received from parent.

## What Interviewer Expects You To Say

Know ownership and mutability difference.

## Real Project Usage

Page stores product list in state and passes each product as props to ProductCard.

## Common Mistakes

- Updating props directly
- Storing props again in state unnecessarily
- Not knowing data owner

## Memory Trick

State is owned; props are given.

## One-Line Revision Note

State is internal and mutable; props are external and read-only.

---

# Updating State

## Simple Definition

Updating state means changing component data using its setter function.

## Why It Is Needed

It tells React to re-render UI with new data.

## Key Points

- Use setter function
- Do not mutate directly
- Use previous state when needed
- Arrays and objects need copies

## Syntax

```jsx
setCount((prev) => prev + 1);
```

## Interview Answer

State should be updated using the setter function from useState. React then schedules a re-render.

## What Interviewer Expects You To Say

Never update state directly.

## Real Project Usage

Used when adding items to cart, changing input values, and toggling UI.

## Common Mistakes

- `count = count + 1`
- Mutating arrays with push
- Depending on stale state

## Memory Trick

Setter is the only legal state updater.

## One-Line Revision Note

Always update state using its setter function.

---

# Re-rendering

## Simple Definition

Re-rendering means React runs a component again to update the UI.

## Why It Is Needed

It keeps the screen in sync with latest data.

## Key Points

- Happens when state changes
- Happens when props change
- Parent render can render child
- Does not always mean DOM changes

## Syntax

```jsx
setName("New Name");
```

## Interview Answer

Re-rendering happens when state or props change. React recalculates the UI and updates only what is necessary.

## What Interviewer Expects You To Say

Render is recalculation; DOM update happens only if needed.

## Real Project Usage

Used in search, filters, form typing, and API result display.

## Common Mistakes

- Thinking re-render always reloads page
- Creating infinite re-renders
- Setting state directly inside render

## Memory Trick

Re-render means React refreshes component output.

## One-Line Revision Note

React re-renders components when their data changes.

---

# Event Handling

## Simple Definition

Event handling means responding to user actions like click, typing, and submit.

## Why It Is Needed

It makes React applications interactive.

## Key Points

- Uses camelCase event names
- Pass function reference
- Receives synthetic event object
- Common events: onClick, onChange, onSubmit

## Syntax

```jsx
<button onClick={handleClick}>Click</button>
```

## Interview Answer

React handles events using camelCase props like onClick and onChange, where we pass handler functions.

## What Interviewer Expects You To Say

Events connect user actions to component logic.

## Real Project Usage

Used for buttons, forms, dropdowns, search bars, and modals.

## Common Mistakes

- Calling function immediately: `onClick={handleClick()}`
- Using lowercase event names
- Forgetting preventDefault in forms

## Memory Trick

Event means user did something.

## One-Line Revision Note

React events handle user interactions through handler functions.

---

# onClick

## Simple Definition

`onClick` runs a function when an element is clicked.

## Why It Is Needed

It handles button clicks and clickable UI actions.

## Key Points

- Used mostly on buttons
- Pass function reference
- Can update state
- Can call APIs or navigation

## Syntax

```jsx
<button onClick={handleSave}>Save</button>
```

## Interview Answer

onClick is a React event used to execute a function when the user clicks an element.

## What Interviewer Expects You To Say

It is used for click-based actions.

## Real Project Usage

Submit button, delete button, open modal, add to cart, logout.

## Common Mistakes

- Invoking function during render
- Putting too much logic inline
- Forgetting to pass required argument correctly

## Memory Trick

Click calls handler.

## One-Line Revision Note

Use `onClick` to run logic on click.

---

# onChange

## Simple Definition

`onChange` runs when an input value changes.

## Why It Is Needed

It is used to track form input values.

## Key Points

- Common with controlled inputs
- Uses event target value
- Updates state
- Works with input, textarea, select

## Syntax

```jsx
<input onChange={(e) => setName(e.target.value)} />
```

## Interview Answer

onChange is used to capture input changes and usually update state with the latest value.

## What Interviewer Expects You To Say

It is important for controlled components.

## Real Project Usage

Login forms, search fields, filters, profile edit forms.

## Common Mistakes

- Forgetting `e.target.value`
- Not binding value in controlled input
- Updating wrong state field

## Memory Trick

Change means input value changed.

## One-Line Revision Note

Use `onChange` to track input values.

---

# onSubmit

## Simple Definition

`onSubmit` runs when a form is submitted.

## Why It Is Needed

It handles form data submission in React.

## Key Points

- Used on form tag
- Usually calls preventDefault
- Can validate data
- Can send API request

## Syntax

```jsx
<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
```

## Interview Answer

onSubmit handles form submission. We usually call preventDefault to stop page reload.

## What Interviewer Expects You To Say

Mention form submit and preventDefault.

## Real Project Usage

Login, register, contact, checkout, and search forms.

## Common Mistakes

- Putting onClick only on submit button
- Forgetting preventDefault
- Not validating before API call

## Memory Trick

Submit means form final action.

## One-Line Revision Note

Use `onSubmit` to handle full form submission.

---

# Event Object

## Simple Definition

Event object contains information about the user event.

## Why It Is Needed

It helps read input values and control default browser behavior.

## Key Points

- Passed to event handler
- Often named `e` or `event`
- `e.target.value` gives input value
- `e.preventDefault()` stops default action

## Syntax

```jsx
function handleChange(e) {
  setEmail(e.target.value);
}
```

## Interview Answer

The event object gives details about the event, such as target element and input value.

## What Interviewer Expects You To Say

Know `target.value` and `preventDefault`.

## Real Project Usage

Used in form handling, input tracking, and submit control.

## Common Mistakes

- Forgetting parameter
- Using event after async logic incorrectly in old React knowledge
- Confusing target and currentTarget

## Memory Trick

Event object tells what happened.

## One-Line Revision Note

The event object provides details about user actions.

---

# preventDefault

## Simple Definition

`preventDefault` stops the browser's default behavior for an event.

## Why It Is Needed

It prevents form submission from reloading the page.

## Key Points

- Method on event object
- Commonly used in forms
- Stops default browser action
- Does not stop React code

## Syntax

```jsx
function handleSubmit(e) {
  e.preventDefault();
}
```

## Interview Answer

preventDefault is used to stop the default browser action, especially page reload during form submission.

## What Interviewer Expects You To Say

Mention form reload prevention.

## Real Project Usage

Used in login, registration, contact, and checkout forms.

## Common Mistakes

- Calling it without event object
- Forgetting parentheses
- Using it when not needed

## Memory Trick

Prevent default means stop browser's automatic behavior.

## One-Line Revision Note

Use `preventDefault` to stop default browser actions like form reload.

---

# if else

## Simple Definition

`if else` is used to choose between two or more UI outputs.

## Why It Is Needed

It helps display different UI based on conditions.

## Key Points

- Used outside JSX return mostly
- Good for larger conditions
- Can return different components
- Improves readability for complex logic

## Syntax

```jsx
if (isLoggedIn) {
  return <Dashboard />;
}
return <Login />;
```

## Interview Answer

Conditional rendering with if else means showing different UI depending on a condition.

## What Interviewer Expects You To Say

Use if else for clear condition-based rendering.

## Real Project Usage

Show login page or dashboard based on authentication.

## Common Mistakes

- Writing if directly inside JSX
- Making conditions too complex
- Forgetting fallback UI

## Memory Trick

If this is true, show this; else show that.

## One-Line Revision Note

Use if else to render different UI based on conditions.

---

# Ternary Operator

## Simple Definition

Ternary operator is a short way to write if else inside JSX.

## Why It Is Needed

It makes simple conditional UI concise.

## Key Points

- Syntax: condition ? trueUI : falseUI
- Works inside JSX
- Best for simple conditions
- Avoid nested ternaries

## Syntax

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

## Interview Answer

The ternary operator is used in JSX to render one UI when condition is true and another when false.

## What Interviewer Expects You To Say

Use ternary for simple two-way conditions.

## Real Project Usage

Show Login or Logout button, loading or data, active or inactive status.

## Common Mistakes

- Overusing nested ternary
- Forgetting false case
- Making JSX hard to read

## Memory Trick

Question mark chooses true; colon chooses false.

## One-Line Revision Note

Ternary is best for simple conditional rendering in JSX.

---

# Logical AND

## Simple Definition

Logical AND renders UI only when a condition is true.

## Why It Is Needed

It is useful when there is no else UI.

## Key Points

- Uses `&&`
- Renders right side only if left side is true
- Good for optional messages
- Avoid with values like 0 if not handled

## Syntax

```jsx
{error && <p>{error}</p>}
```

## Interview Answer

Logical AND is used to render something only when a condition is true.

## What Interviewer Expects You To Say

Use it for one-sided conditions.

## Real Project Usage

Show error message, loading text, notification badge, or admin button.

## Common Mistakes

- Using it when else UI is needed
- Accidentally rendering 0
- Making long conditions unreadable

## Memory Trick

Condition true means show UI.

## One-Line Revision Note

Use `&&` when you only need to show UI for a true condition.

---

# map()

## Simple Definition

`map()` is a JavaScript array method used to render lists in React.

## Why It Is Needed

It converts array data into JSX elements.

## Key Points

- Used for lists
- Returns a new array
- Each item should have a key
- Common with API data

## Syntax

```jsx
{users.map((user) => <li key={user.id}>{user.name}</li>)}
```

## Interview Answer

In React, map is used to loop over an array and return JSX for each item.

## What Interviewer Expects You To Say

Mention list rendering and keys.

## Real Project Usage

Product lists, user tables, todo items, menu items, API results.

## Common Mistakes

- Forgetting key
- Using map without return in braces
- Using index as key when list changes

## Memory Trick

Map data to UI.

## One-Line Revision Note

Use `map()` to render array data as JSX.

---

# Keys

## Simple Definition

Keys are unique identifiers given to list items in React.

## Why It Is Needed

They help React identify which list item changed, added, or removed.

## Key Points

- Must be unique among siblings
- Use stable IDs when possible
- Helps efficient rendering
- Required when rendering lists

## Syntax

```jsx
<li key={user.id}>{user.name}</li>
```

## Interview Answer

Keys help React track list items efficiently during updates.

## What Interviewer Expects You To Say

Use unique and stable keys, preferably IDs.

## Real Project Usage

Used in product cards, table rows, todos, and notifications.

## Common Mistakes

- Not using key
- Using random number as key
- Using index for dynamic lists

## Memory Trick

Key is identity card for list item.

## One-Line Revision Note

Keys help React identify list items correctly.

---

# Rendering Lists

## Simple Definition

Rendering lists means displaying multiple UI items from array data.

## Why It Is Needed

Most real apps display repeated data from arrays or APIs.

## Key Points

- Use map
- Add key
- Can render components
- Works with filtered data

## Syntax

```jsx
{products.map((product) => (
  <ProductCard key={product.id} product={product} />
))}
```

## Interview Answer

Lists are rendered using map, where each array item returns JSX and gets a unique key.

## What Interviewer Expects You To Say

Know map plus key combination.

## Real Project Usage

Product grids, orders, employee tables, comments, chat messages.

## Common Mistakes

- Missing key
- Rendering object directly
- Forgetting empty list handling

## Memory Trick

Array becomes UI list.

## One-Line Revision Note

Render lists using `map()` and unique keys.

---

# Controlled Components

## Simple Definition

Controlled components are form elements whose values are controlled by React state.

## Why It Is Needed

They make form data easy to validate, submit, and reset.

## Key Points

- Value comes from state
- onChange updates state
- React is source of truth
- Common in forms

## Syntax

```jsx
<input value={email} onChange={(e) => setEmail(e.target.value)} />
```

## Interview Answer

A controlled component is an input controlled by React state using value and onChange.

## What Interviewer Expects You To Say

React state controls the input value.

## Real Project Usage

Login forms, search bars, filters, profile edit forms.

## Common Mistakes

- Providing value without onChange
- Forgetting state initialization
- Mixing controlled and uncontrolled behavior

## Memory Trick

React controls the input.

## One-Line Revision Note

Controlled components use React state as the form source of truth.

---

# Uncontrolled Components

## Simple Definition

Uncontrolled components store form values in the DOM instead of React state.

## Why It Is Needed

They are useful for simple forms or direct DOM access with refs.

## Key Points

- DOM controls value
- Access using ref
- Less React state code
- Not ideal for complex validation

## Syntax

```jsx
const inputRef = useRef();
```

## Interview Answer

An uncontrolled component manages its own value in the DOM, and React can access it using refs.

## What Interviewer Expects You To Say

DOM is source of truth.

## Real Project Usage

File inputs, quick forms, or third-party form libraries.

## Common Mistakes

- Using uncontrolled forms for complex validation
- Mixing value and defaultValue incorrectly
- Forgetting ref

## Memory Trick

DOM controls the input.

## One-Line Revision Note

Uncontrolled components keep form value in the DOM.

---

# Form Handling

## Simple Definition

Form handling means collecting, validating, and submitting user input.

## Why It Is Needed

Forms are used in login, registration, search, and CRUD applications.

## Key Points

- Track values
- Validate inputs
- Handle submit
- Show errors
- Send data to API

## Syntax

```jsx
function handleSubmit(e) {
  e.preventDefault();
  console.log(formData);
}
```

## Interview Answer

In React, forms are handled using state, onChange, onSubmit, validation, and API calls.

## What Interviewer Expects You To Say

Mention controlled components and preventDefault.

## Real Project Usage

Login, signup, checkout, feedback, employee create forms.

## Common Mistakes

- No validation
- Forgetting preventDefault
- Not showing error messages

## Memory Trick

Input, validate, submit.

## One-Line Revision Note

React forms collect user data using state and events.

---

# Form Validation

## Simple Definition

Form validation checks whether user input is correct before submission.

## Why It Is Needed

It prevents wrong or incomplete data from being sent.

## Key Points

- Required fields
- Email format
- Password length
- Error messages
- Client and server validation both matter

## Syntax

```jsx
if (!email) {
  setError("Email is required");
}
```

## Interview Answer

Form validation ensures input data is correct before submitting it to the backend.

## What Interviewer Expects You To Say

Validation improves user experience and data quality.

## Real Project Usage

Used in login, register, payment, profile, and contact forms.

## Common Mistakes

- Only validating on frontend
- Showing unclear errors
- Not disabling submit during loading

## Memory Trick

Validate before send.

## One-Line Revision Note

Form validation checks input before submission.

---

# React Hook Form

## Simple Definition

React Hook Form is a popular library for handling forms in React.

## Why It Is Needed

It reduces boilerplate and improves form performance.

## Key Points

- Uses hooks
- Less state code
- Easy validation
- Good performance
- Provides register and handleSubmit

## Syntax

```jsx
const { register, handleSubmit } = useForm();
```

## Interview Answer

React Hook Form is a library that makes form handling and validation easier with less code.

## What Interviewer Expects You To Say

It simplifies form state, validation, and submission.

## Real Project Usage

Used in large login, signup, admin, and multi-field forms.

## Common Mistakes

- Mixing manual state unnecessarily
- Forgetting to register inputs
- Not reading errors from formState

## Memory Trick

React Hook Form removes form headache.

## One-Line Revision Note

React Hook Form simplifies form handling and validation.

---

# register

## Simple Definition

`register` connects an input field to React Hook Form.

## Why It Is Needed

It allows the library to track value and validation for that input.

## Key Points

- Comes from useForm
- Spread into input
- Can add validation rules
- Required for most fields

## Syntax

```jsx
<input {...register("email", { required: true })} />
```

## Interview Answer

register is used to connect input fields with React Hook Form and apply validation rules.

## What Interviewer Expects You To Say

Each input must be registered.

## Real Project Usage

Used for name, email, password, phone, and other form fields.

## Common Mistakes

- Misspelling field name
- Not spreading register
- Forgetting validation rules

## Memory Trick

Register means enroll input into the form.

## One-Line Revision Note

`register` connects inputs to React Hook Form.

---

# handleSubmit

## Simple Definition

`handleSubmit` handles valid form submission in React Hook Form.

## Why It Is Needed

It validates form data before calling submit logic.

## Key Points

- Comes from useForm
- Wraps submit function
- Runs validation
- Provides form data

## Syntax

```jsx
<form onSubmit={handleSubmit(onSubmit)}>
```

## Interview Answer

handleSubmit validates the form and then calls our submit function with form data.

## What Interviewer Expects You To Say

It manages validation before submit.

## Real Project Usage

Used to submit login, register, and admin forms.

## Common Mistakes

- Calling submit function directly
- Forgetting to pass handler
- Not handling errors

## Memory Trick

handleSubmit checks first, submits next.

## One-Line Revision Note

`handleSubmit` validates and submits React Hook Form data.

---

# watch

## Simple Definition

`watch` observes input values in React Hook Form.

## Why It Is Needed

It helps react to form value changes without manual state.

## Key Points

- Comes from useForm
- Watches one or many fields
- Useful for conditional UI
- Can show live preview

## Syntax

```jsx
const password = watch("password");
```

## Interview Answer

watch is used to observe form field values in React Hook Form.

## What Interviewer Expects You To Say

It helps build dynamic form behavior.

## Real Project Usage

Used for password confirmation, conditional fields, and live preview forms.

## Common Mistakes

- Watching too many fields unnecessarily
- Using watch instead of validation
- Forgetting default values

## Memory Trick

Watch means observe field changes.

## One-Line Revision Note

`watch` tracks form field values.

---

# formState

## Simple Definition

`formState` contains form status information in React Hook Form.

## Why It Is Needed

It helps show errors, loading state, dirty fields, and submit status.

## Key Points

- Contains errors
- Contains isSubmitting
- Contains isDirty
- Contains touchedFields
- Useful for UI feedback

## Syntax

```jsx
const { formState: { errors, isSubmitting } } = useForm();
```

## Interview Answer

formState gives information about current form status like errors, touched fields, and submitting state.

## What Interviewer Expects You To Say

It helps manage form UI feedback.

## Real Project Usage

Used to show validation messages and disable submit button while loading.

## Common Mistakes

- Not destructuring correctly
- Ignoring error messages
- Not using isSubmitting

## Memory Trick

formState tells the condition of the form.

## One-Line Revision Note

`formState` gives current form status.

---

# errors

## Simple Definition

`errors` stores validation errors in React Hook Form.

## Why It Is Needed

It helps show users what is wrong in the form.

## Key Points

- Comes from formState
- Field-specific errors
- Used to show messages
- Created by validation rules

## Syntax

```jsx
{errors.email && <p>Email is required</p>}
```

## Interview Answer

errors contains validation errors for form fields and is used to display error messages.

## What Interviewer Expects You To Say

Errors improve form feedback.

## Real Project Usage

Used in login, signup, checkout, and admin forms.

## Common Mistakes

- Not showing errors
- Showing generic error only
- Not checking field name correctly

## Memory Trick

Errors tell what field failed.

## One-Line Revision Note

`errors` displays validation problems in React Hook Form.

---

# isSubmitting

## Simple Definition

`isSubmitting` tells whether the form is currently submitting.

## Why It Is Needed

It prevents duplicate submits and shows loading feedback.

## Key Points

- Boolean value
- Comes from formState
- Useful for disabling button
- Useful for loading text

## Syntax

```jsx
<button disabled={isSubmitting}>Submit</button>
```

## Interview Answer

isSubmitting is a formState value that becomes true while the form submission is in progress.

## What Interviewer Expects You To Say

It avoids multiple submissions.

## Real Project Usage

Used to disable submit button during API call.

## Common Mistakes

- Not disabling submit button
- Not showing loading state
- Managing duplicate loading state unnecessarily

## Memory Trick

isSubmitting means form is busy.

## One-Line Revision Note

`isSubmitting` tracks form submission loading state.

---

# Hooks Overview

## Simple Definition

Hooks are functions that let functional components use React features like state and lifecycle.

## Why It Is Needed

Hooks allow modern React development without class components.

## Key Points

- Start with `use`
- Used inside functional components
- Examples: useState, useEffect, useRef
- Must follow hook rules

## Syntax

```jsx
const [value, setValue] = useState("");
```

## Interview Answer

Hooks are special React functions that allow functional components to use state, lifecycle behavior, refs, and optimization features.

## What Interviewer Expects You To Say

Hooks make functional components powerful.

## Real Project Usage

Used for state, API calls, forms, refs, memoization, and custom reusable logic.

## Common Mistakes

- Calling hooks outside components
- Calling hooks conditionally
- Forgetting dependency arrays

## Memory Trick

Hooks hook React features into functions.

## One-Line Revision Note

Hooks let functional components use React features.

---

# Rules of Hooks

## Simple Definition

Rules of Hooks are restrictions for using hooks correctly.

## Why It Is Needed

They keep hook order stable between renders.

## Key Points

- Call hooks only at top level
- Call hooks only in React functions or custom hooks
- Do not call hooks inside conditions
- Do not call hooks inside loops
- Custom hooks must start with `use`

## Syntax

```jsx
function App() {
  const [count, setCount] = useState(0);
}
```

## Interview Answer

Hooks must be called at the top level of functional components or custom hooks, not inside loops, conditions, or normal functions.

## What Interviewer Expects You To Say

Mention top-level and React function rule.

## Real Project Usage

Used whenever writing useState, useEffect, custom hooks, or form hooks.

## Common Mistakes

- Hook inside if condition
- Hook inside event handler
- Hook inside normal JavaScript function

## Memory Trick

Hooks stay at the top.

## One-Line Revision Note

Call hooks only at the top level of React functions.

---

# useState

## Simple Definition

`useState` is a hook used to store and update local component state.

## Why It Is Needed

It makes functional components interactive.

## Key Points

- Returns state value and setter
- Initial value can be any type
- Setter triggers re-render
- State update is asynchronous-like

## Syntax

```jsx
const [count, setCount] = useState(0);
```

## Interview Answer

useState is a React hook that lets functional components store state and update UI when that state changes.

## What Interviewer Expects You To Say

Know value, setter, and re-render.

## Real Project Usage

Used for counters, forms, modals, filters, loading, and API data.

## Common Mistakes

- Mutating state directly
- Forgetting setter
- Using stale state

## Memory Trick

useState stores changing values.

## One-Line Revision Note

`useState` manages local component state.

---

# useEffect

## Simple Definition

`useEffect` is a hook used to run side effects in functional components.

## Why It Is Needed

It handles tasks that happen outside normal rendering, like API calls.

## Key Points

- Runs after render
- Used for API calls
- Used for subscriptions and timers
- Dependency array controls execution
- Can return cleanup function

## Syntax

```jsx
useEffect(() => {
  fetchData();
}, []);
```

## Interview Answer

useEffect runs side effects like API calls, timers, subscriptions, or DOM updates after component rendering.

## What Interviewer Expects You To Say

Mention side effects and dependency array.

## Real Project Usage

Used to fetch users when a page loads or update data when an ID changes.

## Common Mistakes

- Missing dependency array
- Adding wrong dependencies
- Creating infinite API calls

## Memory Trick

Effect means work after render.

## One-Line Revision Note

`useEffect` runs side effects after rendering.

---

# useRef

## Simple Definition

`useRef` stores a mutable value or directly references a DOM element.

## Why It Is Needed

It keeps values without causing re-render and can access DOM nodes.

## Key Points

- Returns an object with `.current`
- Value persists across renders
- Updating ref does not re-render
- Useful for focus, timers, previous values

## Syntax

```jsx
const inputRef = useRef(null);
```

## Interview Answer

useRef is used to access DOM elements or store mutable values that do not trigger re-render.

## What Interviewer Expects You To Say

Mention `.current` and no re-render.

## Real Project Usage

Used to focus input, store timer ID, or access file input.

## Common Mistakes

- Using ref instead of state for UI data
- Forgetting `.current`
- Overusing direct DOM access

## Memory Trick

Ref remembers without rendering.

## One-Line Revision Note

`useRef` stores mutable values and DOM references without re-rendering.

---

# useMemo

## Simple Definition

`useMemo` memoizes a calculated value.

## Why It Is Needed

It avoids recalculating expensive values on every render.

## Key Points

- Returns memoized value
- Runs when dependencies change
- Used for expensive calculations
- Performance optimization only

## Syntax

```jsx
const total = useMemo(() => calculateTotal(items), [items]);
```

## Interview Answer

useMemo caches the result of an expensive calculation and recalculates it only when dependencies change.

## What Interviewer Expects You To Say

It memoizes values, not functions.

## Real Project Usage

Used for filtering large lists, sorting data, and heavy calculations.

## Common Mistakes

- Using it everywhere
- Wrong dependency array
- Confusing it with useCallback

## Memory Trick

Memo means remember calculated value.

## One-Line Revision Note

`useMemo` caches calculated values.

---

# useCallback

## Simple Definition

`useCallback` memoizes a function.

## Why It Is Needed

It prevents unnecessary function recreation when passing callbacks to optimized child components.

## Key Points

- Returns memoized function
- Depends on dependency array
- Useful with React.memo
- Performance optimization only

## Syntax

```jsx
const handleClick = useCallback(() => {
  setCount((prev) => prev + 1);
}, []);
```

## Interview Answer

useCallback returns a memoized function and is useful when passing functions to child components to avoid unnecessary renders.

## What Interviewer Expects You To Say

It memoizes functions, not values.

## Real Project Usage

Used in large lists, memoized child components, and callback-heavy dashboards.

## Common Mistakes

- Using it for every function
- Missing dependencies
- Thinking it makes function run faster

## Memory Trick

Callback means remember function.

## One-Line Revision Note

`useCallback` caches function references.

---

# Custom Hooks

## Simple Definition

Custom hooks are reusable JavaScript functions that use React hooks.

## Why It Is Needed

They help reuse stateful logic across components.

## Key Points

- Name starts with `use`
- Can use built-in hooks
- Reuses logic, not UI
- Keeps components clean

## Syntax

```jsx
function useToggle() {
  const [open, setOpen] = useState(false);
  return [open, () => setOpen((value) => !value)];
}
```

## Interview Answer

A custom hook is a reusable function that starts with use and can use other hooks to share logic between components.

## What Interviewer Expects You To Say

Custom hooks reuse logic, components reuse UI.

## Real Project Usage

Used for API fetching, form logic, local storage, authentication, and toggles.

## Common Mistakes

- Not starting name with use
- Returning JSX from hook
- Calling hook conditionally

## Memory Trick

Custom hook means reusable logic.

## One-Line Revision Note

Custom hooks reuse React logic across components.

---

# Context API

## Simple Definition

Context API shares data globally without passing props through every level.

## Why It Is Needed

It solves prop drilling for simple global data.

## Key Points

- Built into React
- Uses createContext
- Uses Provider
- Accessed using useContext
- Best for small global state

## Syntax

```jsx
const ThemeContext = createContext();
```

## Interview Answer

Context API is used to share data across components without manually passing props at every level.

## What Interviewer Expects You To Say

Mention avoiding prop drilling.

## Real Project Usage

Used for theme, language, logged-in user, and simple settings.

## Common Mistakes

- Using Context for all complex state
- Not wrapping Provider
- Causing unnecessary re-renders

## Memory Trick

Context gives common data to many components.

## One-Line Revision Note

Context API shares global data without prop drilling.

---

# createContext

## Simple Definition

`createContext` creates a context object in React.

## Why It Is Needed

It is the first step to share data through Context API.

## Key Points

- Imported from React
- Creates context
- Used with Provider
- Consumed by useContext

## Syntax

```jsx
const AuthContext = createContext(null);
```

## Interview Answer

createContext creates a context object that can provide data to components through a Provider.

## What Interviewer Expects You To Say

It creates the shared data channel.

## Real Project Usage

Used in auth context, theme context, and language context.

## Common Mistakes

- Forgetting Provider
- Exporting wrongly
- Using context before wrapping component

## Memory Trick

createContext creates the common box.

## One-Line Revision Note

`createContext` creates a context for shared data.

---

# useContext

## Simple Definition

`useContext` reads data from a React context.

## Why It Is Needed

It allows components to access shared data directly.

## Key Points

- Imported from React
- Takes context object
- Avoids Consumer syntax
- Component must be inside Provider

## Syntax

```jsx
const user = useContext(AuthContext);
```

## Interview Answer

useContext is a hook used to access values provided by a Context Provider.

## What Interviewer Expects You To Say

It consumes context data.

## Real Project Usage

Used to access logged-in user, theme mode, or language preference.

## Common Mistakes

- Using outside Provider
- Confusing context with Redux
- Updating context too frequently

## Memory Trick

useContext uses shared context data.

## One-Line Revision Note

`useContext` reads values from Context API.

---

# Prop Drilling

## Simple Definition

Prop drilling means passing props through many components just to reach a deeply nested component.

## Why It Is Needed

Understanding prop drilling helps know when to use Context or Redux.

## Key Points

- Data passes through unnecessary levels
- Makes code harder to maintain
- Solved by Context API or state management
- Not always bad for small apps

## Syntax

```jsx
<Parent user={user}>
  <Child user={user}>
    <Profile user={user} />
  </Child>
</Parent>
```

## Interview Answer

Prop drilling happens when props are passed through multiple intermediate components that do not need them.

## What Interviewer Expects You To Say

Mention Context API as a solution.

## Real Project Usage

Happens when user or theme data is needed deep inside layout.

## Common Mistakes

- Using Redux for very small prop drilling
- Passing too many props
- Not grouping related data

## Memory Trick

Props drilling means props travel too deep.

## One-Line Revision Note

Prop drilling is unnecessary multi-level prop passing.

---

# React Router

## Simple Definition

React Router is a library used to create navigation and routes in React apps.

## Why It Is Needed

React does not include routing by default.

## Key Points

- Enables SPA routing
- Provides BrowserRouter, Routes, Route
- Supports Link and NavLink
- Supports route parameters
- Supports navigation by code

## Syntax

```jsx
<Route path="/about" element={<About />} />
```

## Interview Answer

React Router is used to manage navigation between different views in a React single page application.

## What Interviewer Expects You To Say

It changes views without full page reload.

## Real Project Usage

Used for home, login, dashboard, product details, and profile pages.

## Common Mistakes

- Using anchor tags for internal navigation
- Not wrapping app in BrowserRouter
- Forgetting route parameters

## Memory Trick

Router decides which page component to show.

## One-Line Revision Note

React Router handles navigation in React SPAs.

---

# BrowserRouter

## Simple Definition

BrowserRouter enables routing using browser history API.

## Why It Is Needed

It wraps the app so routing features can work.

## Key Points

- Usually wraps App
- Required for Routes and Link
- Uses clean URLs
- Comes from react-router-dom

## Syntax

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

## Interview Answer

BrowserRouter is a router component that enables client-side routing using browser history.

## What Interviewer Expects You To Say

Wrap app with BrowserRouter for routing.

## Real Project Usage

Used in main.jsx around App component.

## Common Mistakes

- Forgetting BrowserRouter
- Wrapping only some routes accidentally
- Using multiple routers unnecessarily

## Memory Trick

BrowserRouter gives routing power to the app.

## One-Line Revision Note

BrowserRouter enables React Router in the browser.

---

# Routes

## Simple Definition

`Routes` is a wrapper that contains multiple Route definitions.

## Why It Is Needed

It helps React Router choose the matching route.

## Key Points

- Contains Route components
- Renders best matching route
- Replaced Switch in newer versions
- Comes from react-router-dom

## Syntax

```jsx
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
```

## Interview Answer

Routes groups all Route components and renders the route that matches the current URL.

## What Interviewer Expects You To Say

Routes is the container for route definitions.

## Real Project Usage

Used in App.jsx to define all pages.

## Common Mistakes

- Using old Switch syntax
- Putting non-route elements directly without need
- Forgetting element prop

## Memory Trick

Routes holds all route choices.

## One-Line Revision Note

`Routes` groups route definitions.

---

# Route

## Simple Definition

`Route` maps a URL path to a React component.

## Why It Is Needed

It decides what component should show for a given URL.

## Key Points

- Uses path
- Uses element
- Can include dynamic params
- Must be inside Routes

## Syntax

```jsx
<Route path="/users" element={<Users />} />
```

## Interview Answer

Route defines which component should render for a particular URL path.

## What Interviewer Expects You To Say

Path plus component mapping.

## Real Project Usage

Used for login, dashboard, product, cart, and profile routes.

## Common Mistakes

- Using component prop in newer React Router
- Missing leading slash
- Not handling 404 route

## Memory Trick

Route connects URL to component.

## One-Line Revision Note

`Route` maps a path to UI.

---

# Link

## Simple Definition

`Link` is used for navigation without full page reload.

## Why It Is Needed

It keeps React SPA behavior smooth.

## Key Points

- Replaces anchor tag for internal routes
- Uses `to` prop
- Prevents full reload
- Comes from react-router-dom

## Syntax

```jsx
<Link to="/about">About</Link>
```

## Interview Answer

Link is used for internal navigation in React Router without reloading the page.

## What Interviewer Expects You To Say

Use Link instead of anchor for internal routes.

## Real Project Usage

Navbar links, sidebar links, product detail links.

## Common Mistakes

- Using href for internal navigation
- Wrong path in to prop
- Forgetting BrowserRouter

## Memory Trick

Link changes route without reload.

## One-Line Revision Note

`Link` navigates between routes without page refresh.

---

# NavLink

## Simple Definition

`NavLink` is like Link but can detect active route.

## Why It Is Needed

It helps style active navigation items.

## Key Points

- Uses `to` prop
- Provides active state
- Useful in menus
- Comes from react-router-dom

## Syntax

```jsx
<NavLink to="/home">Home</NavLink>
```

## Interview Answer

NavLink is used for navigation and provides active styling when its route matches the current URL.

## What Interviewer Expects You To Say

NavLink is useful for active menu links.

## Real Project Usage

Used in navbar and sidebar navigation.

## Common Mistakes

- Using NavLink everywhere unnecessarily
- Not styling active state correctly
- Confusing with Link

## Memory Trick

NavLink knows active route.

## One-Line Revision Note

`NavLink` is Link with active route styling.

---

# useNavigate

## Simple Definition

`useNavigate` is a hook used to navigate programmatically.

## Why It Is Needed

It redirects users after actions like login or logout.

## Key Points

- Comes from react-router-dom
- Used inside components
- Returns navigate function
- Useful after form submit

## Syntax

```jsx
const navigate = useNavigate();
navigate("/dashboard");
```

## Interview Answer

useNavigate is used to navigate to another route through JavaScript code.

## What Interviewer Expects You To Say

It is for programmatic navigation.

## Real Project Usage

Redirect after login, logout, create item, or payment success.

## Common Mistakes

- Calling outside component
- Forgetting BrowserRouter
- Navigating before async action completes

## Memory Trick

useNavigate moves user by code.

## One-Line Revision Note

`useNavigate` performs navigation from JavaScript logic.

---

# Route Parameters

## Simple Definition

Route parameters are dynamic values in the URL.

## Why It Is Needed

They help show details pages based on ID or slug.

## Key Points

- Defined using `:param`
- Read using useParams
- Common for details pages
- Value is string

## Syntax

```jsx
<Route path="/products/:id" element={<ProductDetails />} />
```

## Interview Answer

Route parameters allow dynamic URL values like product ID, which can be read using useParams.

## What Interviewer Expects You To Say

Use route params for dynamic details pages.

## Real Project Usage

Product details, user profile, order details, blog details.

## Common Mistakes

- Forgetting colon in route
- Not using useParams
- Assuming param is number automatically

## Memory Trick

Colon means dynamic URL value.

## One-Line Revision Note

Route parameters pass dynamic values through URL.

---

# API Calls

## Simple Definition

API calls are requests from frontend to backend to get or send data.

## Why It Is Needed

React apps need backend data for real projects.

## Key Points

- Can use fetch or Axios
- Usually inside useEffect or event handlers
- Need loading and error states
- Data is stored in state

## Syntax

```jsx
const response = await fetch("/api/users");
```

## Interview Answer

API calls connect React frontend with backend services to fetch, create, update, or delete data.

## What Interviewer Expects You To Say

Mention async/await, loading, error, and state.

## Real Project Usage

Used in user lists, login, products, orders, and CRUD apps.

## Common Mistakes

- No error handling
- No loading state
- Calling API repeatedly by wrong useEffect dependencies

## Memory Trick

API brings backend data to frontend.

## One-Line Revision Note

API calls let React communicate with backend.

---

# Fetch API

## Simple Definition

Fetch API is a built-in browser method for making HTTP requests.

## Why It Is Needed

It allows React apps to call backend APIs without extra library.

## Key Points

- Built into browser
- Returns Promise
- Need `.json()` for JSON response
- Does not reject automatically for HTTP error status

## Syntax

```jsx
const res = await fetch(url);
const data = await res.json();
```

## Interview Answer

Fetch is a built-in JavaScript API used to make HTTP requests and handle responses using promises.

## What Interviewer Expects You To Say

Know fetch, await, and response.json.

## Real Project Usage

Used to load users, products, posts, and weather data.

## Common Mistakes

- Forgetting await res.json()
- Not checking response.ok
- No try catch

## Memory Trick

Fetch fetches data from server.

## One-Line Revision Note

Fetch API makes HTTP requests using built-in JavaScript.

---

# Axios

## Simple Definition

Axios is a popular JavaScript library for making HTTP requests.

## Why It Is Needed

It simplifies API calls and response handling.

## Key Points

- External library
- Automatically parses JSON
- Better error handling
- Supports interceptors
- Common in React projects

## Syntax

```jsx
const response = await axios.get("/api/users");
```

## Interview Answer

Axios is an HTTP client library used to make API requests with cleaner syntax and useful features.

## What Interviewer Expects You To Say

Axios is easier than fetch for many real projects.

## Real Project Usage

Used in CRUD apps, auth APIs, admin dashboards, and service files.

## Common Mistakes

- Forgetting to install axios
- Reading data incorrectly
- Not handling errors

## Memory Trick

Axios is a helper for API calls.

## One-Line Revision Note

Axios simplifies HTTP requests in React.

---

# GET

## Simple Definition

GET is an HTTP method used to read data from a server.

## Why It Is Needed

It loads data into React UI.

## Key Points

- Used for fetching data
- Should not modify server data
- Common with lists and details
- Can include query params

## Syntax

```jsx
axios.get("/users");
```

## Interview Answer

GET is used to fetch or read data from a backend API.

## What Interviewer Expects You To Say

GET reads data.

## Real Project Usage

Load products, users, posts, orders, and profile details.

## Common Mistakes

- Sending sensitive data in URL
- Using GET for creating data
- Not handling loading

## Memory Trick

GET gets data.

## One-Line Revision Note

GET reads data from server.

---

# POST

## Simple Definition

POST is an HTTP method used to create new data on a server.

## Why It Is Needed

It sends form or new item data to backend.

## Key Points

- Used for create operations
- Sends request body
- Common in forms
- Can return created data

## Syntax

```jsx
axios.post("/users", formData);
```

## Interview Answer

POST is used to send data to backend and create a new resource.

## What Interviewer Expects You To Say

POST creates data.

## Real Project Usage

Register user, create product, add comment, submit contact form.

## Common Mistakes

- Not sending body
- Not validating before POST
- Not handling duplicate submit

## Memory Trick

POST posts new data.

## One-Line Revision Note

POST creates new data on server.

---

# PUT

## Simple Definition

PUT is an HTTP method used to replace or update full data on a server.

## Why It Is Needed

It updates existing records.

## Key Points

- Used for full update
- Usually needs ID
- Sends complete updated object
- Common in edit forms

## Syntax

```jsx
axios.put(`/users/${id}`, updatedUser);
```

## Interview Answer

PUT is used to update an existing resource, usually by replacing it with new data.

## What Interviewer Expects You To Say

PUT updates full resource.

## Real Project Usage

Edit profile, update product, update employee details.

## Common Mistakes

- Confusing PUT and PATCH
- Not passing ID
- Sending incomplete data when full update expected

## Memory Trick

PUT puts full new version.

## One-Line Revision Note

PUT updates or replaces existing data.

---

# PATCH

## Simple Definition

PATCH is an HTTP method used to update part of existing data.

## Why It Is Needed

It updates only changed fields.

## Key Points

- Partial update
- Usually needs ID
- Sends only changed fields
- More efficient for small changes

## Syntax

```jsx
axios.patch(`/users/${id}`, { status: "active" });
```

## Interview Answer

PATCH is used to partially update an existing resource.

## What Interviewer Expects You To Say

PATCH updates selected fields.

## Real Project Usage

Change order status, toggle active user, update one profile field.

## Common Mistakes

- Using PATCH for full replace without reason
- Not passing correct field
- Confusing with PUT

## Memory Trick

PATCH patches only part.

## One-Line Revision Note

PATCH updates part of existing data.

---

# DELETE

## Simple Definition

DELETE is an HTTP method used to remove data from a server.

## Why It Is Needed

It supports delete operations in CRUD apps.

## Key Points

- Usually needs ID
- Removes resource
- Should confirm important deletes
- Update UI after success

## Syntax

```jsx
axios.delete(`/users/${id}`);
```

## Interview Answer

DELETE is used to remove an existing resource from the backend.

## What Interviewer Expects You To Say

DELETE removes data.

## Real Project Usage

Delete user, product, todo, comment, or cart item.

## Common Mistakes

- Not confirming delete
- Not updating frontend list
- Not handling API failure

## Memory Trick

DELETE deletes data.

## One-Line Revision Note

DELETE removes data from server.

---

# Async/Await

## Simple Definition

Async/await is JavaScript syntax for handling promises in a cleaner way.

## Why It Is Needed

It makes API code easier to read.

## Key Points

- async function returns Promise
- await waits for Promise result
- Use try catch for errors
- Common in API calls

## Syntax

```jsx
async function loadUsers() {
  const res = await axios.get("/users");
}
```

## Interview Answer

async/await is used to write asynchronous code like API calls in a readable synchronous-looking style.

## What Interviewer Expects You To Say

Mention promises and try catch.

## Real Project Usage

Used while fetching, submitting, updating, and deleting data.

## Common Mistakes

- Using await outside async
- No error handling
- Forgetting loading state

## Memory Trick

Await waits for result.

## One-Line Revision Note

Async/await makes promise-based API code readable.

---

# Loading State

## Simple Definition

Loading state tells whether data is currently being fetched or submitted.

## Why It Is Needed

It improves user experience during API delays.

## Key Points

- Usually boolean
- Show spinner or loading text
- Disable buttons during submit
- Set true before API, false after API

## Syntax

```jsx
const [loading, setLoading] = useState(false);
```

## Interview Answer

Loading state is used to show users that an API request or operation is in progress.

## What Interviewer Expects You To Say

It gives feedback and prevents duplicate actions.

## Real Project Usage

Used in page loaders, submit buttons, and table loading.

## Common Mistakes

- Not resetting loading on error
- No visual feedback
- Allowing multiple submissions

## Memory Trick

Loading means work is happening.

## One-Line Revision Note

Loading state shows progress during async operations.

---

# Error Handling

## Simple Definition

Error handling means managing failures in API calls or logic.

## Why It Is Needed

It prevents blank screens and gives useful feedback.

## Key Points

- Use try catch
- Store error in state
- Show user-friendly message
- Log technical details if needed
- Handle network and server errors

## Syntax

```jsx
try {
  await axios.get("/users");
} catch (error) {
  setError("Failed to load users");
}
```

## Interview Answer

Error handling catches failures and shows proper messages instead of breaking the UI.

## What Interviewer Expects You To Say

Good apps handle API errors gracefully.

## Real Project Usage

Used in login failure, network failure, form submit errors, and data loading errors.

## Common Mistakes

- Ignoring catch block
- Showing raw technical error to user
- Not clearing old errors

## Memory Trick

Error handling protects user experience.

## One-Line Revision Note

Handle errors with try catch and user-friendly messages.

---

# Component Lifecycle

## Simple Definition

Component lifecycle means the stages a component goes through: mount, update, and unmount.

## Why It Is Needed

It helps understand when to run effects and cleanup logic.

## Key Points

- Mounting: component appears
- Updating: data changes
- Unmounting: component is removed
- useEffect handles lifecycle behavior in functional components

## Syntax

```jsx
useEffect(() => {
  return () => {};
}, []);
```

## Interview Answer

React component lifecycle includes mounting, updating, and unmounting. In functional components, useEffect handles lifecycle-related work.

## What Interviewer Expects You To Say

Know lifecycle phases and useEffect mapping.

## Real Project Usage

API calls on mount, update page on ID change, cleanup timer on unmount.

## Common Mistakes

- Thinking lifecycle only exists in class components
- No cleanup
- Wrong dependency array

## Memory Trick

Born, changes, removed.

## One-Line Revision Note

Lifecycle means mount, update, and unmount phases.

---

# Mounting

## Simple Definition

Mounting means a component is created and added to the DOM.

## Why It Is Needed

It is the right time to load initial data.

## Key Points

- First render
- Component appears on screen
- Empty dependency useEffect runs after mount
- Good for initial API calls

## Syntax

```jsx
useEffect(() => {
  fetchUsers();
}, []);
```

## Interview Answer

Mounting is when a component first renders and appears in the DOM.

## What Interviewer Expects You To Say

Initial API calls often happen on mount.

## Real Project Usage

Load dashboard data when dashboard page opens.

## Common Mistakes

- Calling API directly in component body
- Missing dependency array
- Creating repeated fetches

## Memory Trick

Mount means component enters screen.

## One-Line Revision Note

Mounting is the first appearance of a component.

---

# Updating

## Simple Definition

Updating means a component re-renders because state or props changed.

## Why It Is Needed

It keeps UI synchronized with latest data.

## Key Points

- Triggered by state changes
- Triggered by prop changes
- useEffect can run on dependency change
- DOM updates only if needed

## Syntax

```jsx
useEffect(() => {
  fetchProduct(id);
}, [id]);
```

## Interview Answer

Updating happens when a component receives new props or state changes, causing React to re-render it.

## What Interviewer Expects You To Say

Updates happen due to data changes.

## Real Project Usage

Fetch new product details when product ID changes.

## Common Mistakes

- Updating state in a way that causes infinite loop
- Wrong dependencies
- Thinking update means page reload

## Memory Trick

Update means data changed, UI refreshes.

## One-Line Revision Note

Updating happens when state or props change.

---

# Unmounting

## Simple Definition

Unmounting means a component is removed from the DOM.

## Why It Is Needed

It is the time to clean timers, subscriptions, or listeners.

## Key Points

- Component leaves screen
- Cleanup runs from useEffect return
- Prevents memory leaks
- Important for timers and subscriptions

## Syntax

```jsx
useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
}, []);
```

## Interview Answer

Unmounting is when a component is removed from the UI. Cleanup logic runs during unmount.

## What Interviewer Expects You To Say

Mention cleanup function in useEffect.

## Real Project Usage

Clear intervals, remove event listeners, cancel subscriptions.

## Common Mistakes

- Not cleaning timers
- Leaving subscriptions active
- Setting state after unmount

## Memory Trick

Unmount means component exits screen.

## One-Line Revision Note

Unmounting removes component and runs cleanup.

---

# useEffect Lifecycle Mapping

## Simple Definition

useEffect can behave like lifecycle methods depending on dependency array.

## Why It Is Needed

It helps use effects correctly in functional components.

## Key Points

- `useEffect(fn, [])` runs after mount
- `useEffect(fn, [value])` runs on mount and value change
- Cleanup runs before next effect and on unmount
- No dependency array runs after every render

## Syntax

```jsx
useEffect(() => {
  return () => cleanup();
}, [dependency]);
```

## Interview Answer

useEffect maps lifecycle behavior: empty array for mount, dependencies for updates, and return function for cleanup or unmount.

## What Interviewer Expects You To Say

Dependency array controls effect execution.

## Real Project Usage

Fetch once, refetch on ID change, cleanup timers.

## Common Mistakes

- Ignoring dependency warnings
- Using no dependency array accidentally
- Forgetting cleanup

## Memory Trick

Dependency array is the effect controller.

## One-Line Revision Note

useEffect lifecycle behavior depends on its dependency array.

---

# Performance Optimization

## Simple Definition

Performance optimization means improving app speed and reducing unnecessary work.

## Why It Is Needed

It makes apps smoother and faster for users.

## Key Points

- Avoid unnecessary renders
- Memoize expensive calculations
- Lazy load large pages
- Split code
- Use proper keys

## Syntax

```jsx
const filtered = useMemo(() => filterItems(items), [items]);
```

## Interview Answer

React performance can be improved by avoiding unnecessary renders, using memoization, lazy loading, code splitting, and proper state management.

## What Interviewer Expects You To Say

Mention React.memo, useMemo, useCallback, lazy loading.

## Real Project Usage

Large tables, search filters, dashboards, product lists.

## Common Mistakes

- Optimizing too early
- Using memo hooks everywhere
- Ignoring actual bottleneck

## Memory Trick

Optimize only where work is heavy.

## One-Line Revision Note

Performance optimization reduces unnecessary rendering and loading.

---

# React.memo

## Simple Definition

React.memo prevents a component from re-rendering if its props have not changed.

## Why It Is Needed

It improves performance for pure child components.

## Key Points

- Higher-order component
- Memoizes component output
- Checks props shallowly
- Useful with stable props

## Syntax

```jsx
export default React.memo(UserCard);
```

## Interview Answer

React.memo is used to memoize a component and avoid re-rendering when its props remain the same.

## What Interviewer Expects You To Say

It works on props comparison.

## Real Project Usage

Used for list items, cards, and child components in heavy pages.

## Common Mistakes

- Using it everywhere
- Passing new objects/functions every render
- Expecting it to stop state-based renders

## Memory Trick

React.memo remembers component output.

## One-Line Revision Note

React.memo skips child re-render when props are unchanged.

---

# useMemo

## Simple Definition

`useMemo` stores the result of a calculation between renders.

## Why It Is Needed

It avoids repeating expensive calculations unnecessarily.

## Key Points

- Memoizes value
- Depends on dependency array
- Use for heavy calculation
- Not for side effects

## Syntax

```jsx
const sortedUsers = useMemo(() => sortUsers(users), [users]);
```

## Interview Answer

useMemo caches a computed value and recalculates it only when dependencies change.

## What Interviewer Expects You To Say

It is a performance hook for values.

## Real Project Usage

Used for expensive sorting, filtering, totals, and derived data.

## Common Mistakes

- Using for API calls
- Wrong dependencies
- Confusing with useCallback

## Memory Trick

useMemo remembers value.

## One-Line Revision Note

`useMemo` memoizes calculated values for performance.

---

# useCallback

## Simple Definition

`useCallback` stores the same function reference between renders.

## Why It Is Needed

It helps prevent unnecessary child re-renders when functions are passed as props.

## Key Points

- Memoizes function
- Useful with React.memo
- Depends on dependency array
- Does not execute function automatically

## Syntax

```jsx
const onDelete = useCallback((id) => {
  deleteUser(id);
}, []);
```

## Interview Answer

useCallback returns a memoized function reference that changes only when dependencies change.

## What Interviewer Expects You To Say

It is useful for function props.

## Real Project Usage

Used with memoized list rows and child components.

## Common Mistakes

- Using it everywhere
- Thinking it memoizes result
- Missing dependencies

## Memory Trick

useCallback remembers callback.

## One-Line Revision Note

`useCallback` memoizes functions for stable references.

---

# Lazy Loading

## Simple Definition

Lazy loading loads components only when they are needed.

## Why It Is Needed

It reduces initial bundle size and improves first load.

## Key Points

- Uses React.lazy
- Needs Suspense
- Good for routes
- Loads code on demand

## Syntax

```jsx
const Dashboard = React.lazy(() => import("./Dashboard"));
```

## Interview Answer

Lazy loading delays loading a component until it is required, improving initial app performance.

## What Interviewer Expects You To Say

Mention React.lazy and Suspense.

## Real Project Usage

Used for dashboard, admin pages, reports, and rarely visited pages.

## Common Mistakes

- Forgetting Suspense fallback
- Lazy loading tiny components unnecessarily
- Not handling loading UI

## Memory Trick

Lazy loading means load later.

## One-Line Revision Note

Lazy loading loads components only when needed.

---

# Code Splitting

## Simple Definition

Code splitting divides app code into smaller chunks.

## Why It Is Needed

It reduces the amount of JavaScript loaded at first.

## Key Points

- Improves initial load
- Often route-based
- Works with dynamic imports
- Used with lazy loading

## Syntax

```jsx
const Settings = lazy(() => import("./Settings"));
```

## Interview Answer

Code splitting breaks JavaScript bundle into smaller files so users load only what they need.

## What Interviewer Expects You To Say

It improves loading performance.

## Real Project Usage

Used in large apps with many pages and features.

## Common Mistakes

- Splitting too much
- No fallback UI
- Not checking bundle size

## Memory Trick

Split code, load less first.

## One-Line Revision Note

Code splitting reduces initial JavaScript load.

---

# Redux Introduction

## Simple Definition

Redux is a state management library for JavaScript apps.

## Why It Is Needed

It manages global state in large applications.

## Key Points

- Central store
- Predictable state updates
- Uses actions and reducers
- Useful when many components share state
- Commonly used with Redux Toolkit

## Syntax

```jsx
const count = useSelector((state) => state.counter.value);
```

## Interview Answer

Redux is used to manage global state in a predictable way using a central store.

## What Interviewer Expects You To Say

Redux is useful when state is shared across many components.

## Real Project Usage

Cart, authentication, user data, theme, filters, and dashboard state.

## Common Mistakes

- Using Redux for every small state
- Mutating state in old Redux style
- Confusing Redux with Context

## Memory Trick

Redux is a global state store.

## One-Line Revision Note

Redux manages shared application state globally.

---

# Redux Toolkit

## Simple Definition

Redux Toolkit is the official and recommended way to write Redux logic.

## Why It Is Needed

It reduces boilerplate and simplifies Redux setup.

## Key Points

- Official Redux tool
- Includes configureStore
- Includes createSlice
- Allows simpler immutable updates
- Reduces action/reducer boilerplate

## Syntax

```jsx
const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {}
});
```

## Interview Answer

Redux Toolkit is the recommended way to use Redux because it simplifies store setup, slices, actions, and reducers.

## What Interviewer Expects You To Say

RTK reduces boilerplate and is modern Redux.

## Real Project Usage

Used for cart, auth, product filters, user profile, and global data.

## Common Mistakes

- Writing old Redux boilerplate unnecessarily
- Forgetting Provider
- Not exporting actions

## Memory Trick

Redux Toolkit is Redux made easier.

## One-Line Revision Note

Redux Toolkit is the modern standard way to use Redux.

---

# Store

## Simple Definition

Store is the central place where Redux state is kept.

## Why It Is Needed

It allows different components to access shared state.

## Key Points

- Created using configureStore
- Holds global state
- Contains reducers
- Provided to React app using Provider

## Syntax

```jsx
const store = configureStore({
  reducer: { counter: counterReducer }
});
```

## Interview Answer

Store is the central container that holds the global Redux state of the application.

## What Interviewer Expects You To Say

Store keeps app-level shared state.

## Real Project Usage

Used to store cart items, logged-in user, auth token, or filters.

## Common Mistakes

- Creating multiple stores unnecessarily
- Not wrapping app with Provider
- Wrong reducer key names

## Memory Trick

Store stores global state.

## One-Line Revision Note

Redux store holds global application state.

---

# Slice

## Simple Definition

A slice is a section of Redux state with its reducers and actions.

## Why It Is Needed

It organizes Redux logic by feature.

## Key Points

- Created using createSlice
- Has name
- Has initialState
- Has reducers
- Auto-generates actions

## Syntax

```jsx
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {}
});
```

## Interview Answer

A slice contains state and reducers for one feature, and Redux Toolkit automatically creates actions from it.

## What Interviewer Expects You To Say

Slice groups feature state logic.

## Real Project Usage

cartSlice, authSlice, productSlice, userSlice.

## Common Mistakes

- Putting unrelated data in one slice
- Not exporting reducer
- Not exporting actions

## Memory Trick

Slice is one piece of global state.

## One-Line Revision Note

A slice groups Redux state, reducers, and actions for one feature.

---

# Reducer

## Simple Definition

A reducer defines how state changes based on actions.

## Why It Is Needed

It keeps state updates predictable.

## Key Points

- Receives state and action
- Updates state
- In RTK, can write mutable-looking code
- Should not contain API calls directly

## Syntax

```jsx
increment: (state) => {
  state.value += 1;
}
```

## Interview Answer

A reducer is a function that updates Redux state according to the action received.

## What Interviewer Expects You To Say

Reducer changes state predictably.

## Real Project Usage

Add item to cart, remove item, set user, update filters.

## Common Mistakes

- Doing async API calls inside reducer
- Returning wrong state shape
- Mutating state in non-RTK Redux

## Memory Trick

Reducer decides state change.

## One-Line Revision Note

Reducer updates Redux state based on actions.

---

# Action

## Simple Definition

An action is an object or generated function that describes what happened.

## Why It Is Needed

Redux uses actions to know which state update to perform.

## Key Points

- Has type
- Can have payload
- Dispatched using useDispatch
- RTK creates action creators automatically

## Syntax

```jsx
dispatch(addToCart(product));
```

## Interview Answer

An action describes an event or intention to update Redux state, often with payload data.

## What Interviewer Expects You To Say

Actions are dispatched to reducers.

## Real Project Usage

Login success, add to cart, remove item, change theme.

## Common Mistakes

- Not dispatching action
- Passing wrong payload
- Confusing action with reducer

## Memory Trick

Action tells what happened.

## One-Line Revision Note

Actions describe state changes in Redux.

---

# createSlice

## Simple Definition

`createSlice` creates Redux slice logic in Redux Toolkit.

## Why It Is Needed

It automatically creates action creators and reducer.

## Key Points

- Takes name, initialState, reducers
- Generates actions
- Generates reducer
- Reduces boilerplate

## Syntax

```jsx
const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {}
});
```

## Interview Answer

createSlice is a Redux Toolkit function that creates slice reducer logic and action creators automatically.

## What Interviewer Expects You To Say

It simplifies Redux feature creation.

## Real Project Usage

Used to create authSlice, cartSlice, productSlice, and counterSlice.

## Common Mistakes

- Missing name
- Wrong initialState
- Forgetting to export actions and reducer

## Memory Trick

createSlice creates Redux feature slice.

## One-Line Revision Note

`createSlice` creates reducers and actions for one Redux feature.

---

# configureStore

## Simple Definition

`configureStore` creates the Redux store in Redux Toolkit.

## Why It Is Needed

It sets up Redux store with good defaults.

## Key Points

- Official RTK store setup
- Adds middleware by default
- Enables Redux DevTools
- Combines reducers

## Syntax

```jsx
const store = configureStore({
  reducer: { cart: cartReducer }
});
```

## Interview Answer

configureStore creates the Redux store and sets up reducers, middleware, and dev tools automatically.

## What Interviewer Expects You To Say

It is the modern way to configure Redux store.

## Real Project Usage

Used in store.js before wrapping app with Provider.

## Common Mistakes

- Not passing reducer object
- Wrong import
- Not exporting store

## Memory Trick

configureStore configures Redux store.

## One-Line Revision Note

`configureStore` creates Redux store with recommended defaults.

---

# useSelector

## Simple Definition

`useSelector` reads data from Redux store.

## Why It Is Needed

It lets React components access global state.

## Key Points

- Comes from react-redux
- Takes selector function
- Re-renders component when selected state changes
- Used inside components

## Syntax

```jsx
const cartItems = useSelector((state) => state.cart.items);
```

## Interview Answer

useSelector is a hook used to read selected data from the Redux store inside React components.

## What Interviewer Expects You To Say

It reads Redux state.

## Real Project Usage

Show cart count, logged-in user, theme, and product filters.

## Common Mistakes

- Selecting wrong state path
- Returning new objects unnecessarily
- Using outside Provider

## Memory Trick

Selector selects store data.

## One-Line Revision Note

`useSelector` reads values from Redux store.

---

# useDispatch

## Simple Definition

`useDispatch` gives the dispatch function to send actions to Redux store.

## Why It Is Needed

It lets components update global state.

## Key Points

- Comes from react-redux
- Used inside components
- Dispatches actions
- Reducers handle dispatched actions

## Syntax

```jsx
const dispatch = useDispatch();
dispatch(addToCart(product));
```

## Interview Answer

useDispatch is a hook used to dispatch Redux actions from React components.

## What Interviewer Expects You To Say

It sends actions to update Redux state.

## Real Project Usage

Add cart item, logout user, update filter, remove todo.

## Common Mistakes

- Forgetting to call dispatch
- Dispatching wrong action
- Passing wrong payload

## Memory Trick

Dispatch sends action.

## One-Line Revision Note

`useDispatch` sends actions to Redux store.

---

# Redux Flow

## Simple Definition

Redux flow is the step-by-step process of updating global state.

## Why It Is Needed

It helps explain Redux clearly in interviews.

## Key Points

- Component dispatches action
- Reducer handles action
- Store updates state
- useSelector reads updated state
- Component re-renders

## Syntax

```txt
UI -> dispatch(action) -> reducer -> store -> UI
```

## Interview Answer

Redux flow starts when a component dispatches an action. The reducer updates store state, and components using that state re-render.

## What Interviewer Expects You To Say

Explain action, reducer, store, UI update.

## Real Project Usage

Click Add to Cart, dispatch action, cart reducer updates store, cart count changes in navbar.

## Common Mistakes

- Updating store directly
- Skipping action concept
- Not explaining useSelector

## Memory Trick

Action goes in, updated state comes out.

## One-Line Revision Note

Redux flow is dispatch, reducer, store update, UI re-render.

---

# Folder Structure

## Simple Definition

Folder structure means organizing files in a clean and logical way.

## Why It Is Needed

It makes the project easy to understand and maintain.

## Key Points

- Separate components
- Separate pages
- Separate hooks
- Separate API services
- Separate Redux store

## Syntax

```txt
src/
  components/
  pages/
  services/
  hooks/
  store/
```

## Interview Answer

A good React folder structure separates reusable components, pages, hooks, API services, and state management files.

## What Interviewer Expects You To Say

Organize by feature or responsibility.

## Real Project Usage

Used in every medium or large React project.

## Common Mistakes

- Keeping all files in src
- No naming convention
- Mixing API and UI logic

## Memory Trick

Clean folders mean clean project.

## One-Line Revision Note

Good folder structure improves project readability.

---

# Component Folder Organization

## Simple Definition

Component folder organization means keeping reusable UI components in a dedicated folder.

## Why It Is Needed

It makes components easy to find and reuse.

## Key Points

- Common components in components folder
- Feature components can stay near feature
- Use clear names
- Keep component-specific CSS nearby if project follows that style

## Syntax

```txt
components/
  Button/
  Navbar/
  ProductCard/
```

## Interview Answer

Reusable components should be organized in a components folder or feature folder with clear names.

## What Interviewer Expects You To Say

You know how to keep UI code maintainable.

## Real Project Usage

Buttons, modals, cards, loaders, navbars, tables.

## Common Mistakes

- Duplicate components
- Unclear filenames
- Overloading one component with too many responsibilities

## Memory Trick

Components live where they can be reused.

## One-Line Revision Note

Organized component folders make reuse easier.

---

# API Folder Structure

## Simple Definition

API folder structure means keeping API calling logic in separate files.

## Why It Is Needed

It avoids repeating API logic inside components.

## Key Points

- Keep base Axios instance
- Group API functions by feature
- Components call service functions
- Easier to maintain URLs

## Syntax

```txt
services/
  apiClient.js
  userApi.js
  productApi.js
```

## Interview Answer

API logic should be separated into service files so components stay clean and API code is reusable.

## What Interviewer Expects You To Say

Separate UI and API responsibility.

## Real Project Usage

Used in CRUD apps, dashboards, ecommerce, and auth systems.

## Common Mistakes

- Writing fetch calls everywhere
- Hardcoding base URL in many files
- No error handling strategy

## Memory Trick

API files talk to backend.

## One-Line Revision Note

API folders keep backend communication separate from UI.

---

# Custom Hooks Folder

## Simple Definition

Custom hooks folder stores reusable hook logic.

## Why It Is Needed

It keeps repeated logic out of components.

## Key Points

- Usually named hooks
- Hook names start with use
- Used for API, local storage, auth, debounce
- Reuses logic across components

## Syntax

```txt
hooks/
  useFetch.js
  useDebounce.js
```

## Interview Answer

Custom hooks are kept in a hooks folder to reuse logic like fetching, debounce, authentication, or local storage.

## What Interviewer Expects You To Say

Hooks folder contains reusable logic.

## Real Project Usage

Used for useFetch, useAuth, useLocalStorage, useDebounce.

## Common Mistakes

- Putting UI inside custom hooks
- Bad hook naming
- Duplicating logic instead of extracting hook

## Memory Trick

Hooks folder stores reusable behavior.

## One-Line Revision Note

Custom hooks folder keeps reusable React logic.

---

# Redux Folder Structure

## Simple Definition

Redux folder structure organizes store and slice files.

## Why It Is Needed

It keeps global state logic clean.

## Key Points

- store.js for configureStore
- slice files by feature
- Export actions and reducers
- Can organize by feature

## Syntax

```txt
store/
  store.js
  authSlice.js
  cartSlice.js
```

## Interview Answer

Redux files are usually organized with a store file and separate slice files for each feature.

## What Interviewer Expects You To Say

Feature-based slices are clean.

## Real Project Usage

Used in cart, auth, products, filters, and user modules.

## Common Mistakes

- One huge slice for everything
- Wrong reducer import
- Not connecting Provider

## Memory Trick

Each Redux feature gets its slice.

## One-Line Revision Note

Redux folder stores global state setup and slices.

---

# React Best Practices

## Simple Definition

Best practices are recommended ways to write clean React code.

## Why It Is Needed

They make projects maintainable, readable, and less buggy.

## Key Points

- Use small components
- Keep state close to usage
- Use proper keys
- Separate API logic
- Avoid duplicate code
- Handle loading and errors

## Syntax

```jsx
function ProductCard({ product }) {
  return <article>{product.name}</article>;
}
```

## Interview Answer

React best practices include reusable components, proper state management, clean folder structure, error handling, and performance awareness.

## What Interviewer Expects You To Say

Show practical project habits.

## Real Project Usage

Used in all production-level React projects.

## Common Mistakes

- Huge components
- No error handling
- Unclear names
- Direct state mutation

## Memory Trick

Clean code is interview confidence.

## One-Line Revision Note

React best practices make apps easier to maintain.

---

# Common Mistakes

## Simple Definition

Common mistakes are frequent errors beginners make while writing React code.

## Why It Is Needed

Avoiding them improves interview and project quality.

## Key Points

- Mutating state directly
- Missing keys in lists
- Wrong useEffect dependencies
- Calling functions immediately in events
- Not handling loading and errors
- Using Redux for everything

## Syntax

```jsx
// Wrong
onClick={handleClick()}

// Right
onClick={handleClick}
```

## Interview Answer

Common React mistakes include direct state mutation, missing keys, wrong dependencies, and poor component structure.

## What Interviewer Expects You To Say

You know practical beginner errors.

## Real Project Usage

Helps prevent bugs in forms, lists, APIs, and state updates.

## Common Mistakes

- Not testing UI flows
- Ignoring console warnings
- Copying code without understanding

## Memory Trick

React warnings are learning hints.

## One-Line Revision Note

Avoid direct mutation, missing keys, and wrong effect dependencies.

---

# Clean Code Tips

## Simple Definition

Clean code means code that is easy to read, understand, and change.

## Why It Is Needed

Interviewers often check whether your project code is maintainable.

## Key Points

- Use meaningful names
- Keep components small
- Avoid repeated code
- Separate logic from UI when needed
- Remove unused code
- Format code consistently

## Syntax

```jsx
const isUserLoggedIn = Boolean(user);
```

## Interview Answer

Clean React code uses clear names, small components, reusable logic, proper folders, and avoids unnecessary complexity.

## What Interviewer Expects You To Say

Readable code matters in team projects.

## Real Project Usage

Used when preparing projects for GitHub, viva, and company discussion.

## Common Mistakes

- Bad variable names
- Very long files
- Dead code
- Complex JSX

## Memory Trick

Code is read more than written.

## One-Line Revision Note

Clean code is simple, readable, and maintainable.

---

# Performance Tips

## Simple Definition

Performance tips are small practices that keep React apps fast.

## Why It Is Needed

Users dislike slow pages and laggy interactions.

## Key Points

- Avoid unnecessary state
- Use proper keys
- Memoize only when useful
- Lazy load large pages
- Avoid heavy work inside render
- Paginate large lists

## Syntax

```jsx
const visibleUsers = useMemo(() => users.filter(check), [users]);
```

## Interview Answer

React performance can be improved by reducing unnecessary renders, using memoization carefully, lazy loading, and handling large lists efficiently.

## What Interviewer Expects You To Say

Mention practical optimization, not only hooks.

## Real Project Usage

Large dashboards, tables, ecommerce product grids, analytics screens.

## Common Mistakes

- Using useMemo everywhere
- Rendering thousands of items directly
- Ignoring network performance

## Memory Trick

Fast UI does less unnecessary work.

## One-Line Revision Note

React performance improves by reducing unnecessary rendering and loading.

---

# Important Comparison Tables

## React vs JavaScript

| Point | JavaScript | React |
|---|---|---|
| Type | Programming language | JavaScript library |
| Main use | Logic and browser behavior | Building UI |
| DOM update | Manual DOM manipulation | React updates DOM |
| Structure | No component rule | Component-based |
| State handling | Manual | Built-in hooks/state |
| Project use | Used everywhere | Used for frontend UI |

## SPA vs MPA

| Point | SPA | MPA |
|---|---|---|
| Full form | Single Page Application | Multi Page Application |
| Page reload | No full reload after first load | Reloads for each page |
| Speed | Smooth navigation | Can be slower between pages |
| Routing | Client-side routing | Server-side page loading |
| React usage | Very common | Possible but less typical |
| Example | React dashboard | Traditional website |

## Real DOM vs Virtual DOM

| Point | Real DOM | Virtual DOM |
|---|---|---|
| Meaning | Actual browser DOM | Lightweight copy in memory |
| Speed | Direct updates can be costly | Comparison is faster |
| Managed by | Browser | React |
| Update | Updates real page | Calculates needed change |
| Visibility | Visible in browser | Not directly visible |
| Purpose | Shows UI | Optimizes UI updates |

## Props vs State

| Point | Props | State |
|---|---|---|
| Meaning | Data received from parent | Data owned by component |
| Mutability | Read-only | Changeable |
| Direction | Parent to child | Inside component |
| Update | Parent controls | Component setter controls |
| Use | Reusable data | Dynamic UI data |
| Example | title prop | count state |

## Controlled vs Uncontrolled Components

| Point | Controlled | Uncontrolled |
|---|---|---|
| Source of truth | React state | DOM |
| Value access | State variable | Ref |
| Validation | Easier | Less direct |
| Code | More React code | Less state code |
| Use case | Most forms | File input/simple forms |
| Example | value + onChange | ref |

## Fetch vs Axios

| Point | Fetch | Axios |
|---|---|---|
| Type | Built-in browser API | External library |
| JSON parsing | Manual `res.json()` | Automatic |
| Error handling | Need response.ok check | Better default error handling |
| Interceptors | Not built-in | Built-in support |
| Setup | No install | Need install |
| Use case | Simple requests | Larger projects |

## useMemo vs useCallback

| Point | useMemo | useCallback |
|---|---|---|
| Memoizes | Value/result | Function reference |
| Returns | Calculated value | Function |
| Use | Expensive calculations | Function props |
| Common pair | Filtering/sorting | React.memo children |
| Runs when | Dependencies change | Dependencies change |
| Mistake | Using for functions | Using for values |

## Context API vs Redux Toolkit

| Point | Context API | Redux Toolkit |
|---|---|---|
| Type | React built-in feature | State management library |
| Best for | Simple global data | Complex global state |
| Setup | Less setup | More structured setup |
| Examples | Theme, language, user | Cart, auth, large app data |
| Debugging | Basic | Strong DevTools |
| Boilerplate | Low | Low compared to old Redux |

---

# Top 100 React Interview Questions

## 1. What is React?

- Short Answer: React is a JavaScript library for building user interfaces.
- Interviewer's Expectation: Say component-based UI, reusable code, and dynamic rendering.

## 2. Is React a library or framework?

- Short Answer: React is a library.
- Interviewer's Expectation: It focuses mainly on UI; routing and state libraries are added separately.

## 3. Why do we use React?

- Short Answer: React helps build reusable, fast, and maintainable UI.
- Interviewer's Expectation: Mention components, Virtual DOM, and better project structure.

## 4. What are React components?

- Short Answer: Components are reusable UI blocks.
- Interviewer's Expectation: Say components return JSX and can receive props.

## 5. What is JSX?

- Short Answer: JSX lets us write HTML-like code inside JavaScript.
- Interviewer's Expectation: JSX is converted to JavaScript by build tools.

## 6. Is JSX mandatory in React?

- Short Answer: No, but it is commonly used.
- Interviewer's Expectation: React can be written without JSX, but JSX is cleaner.

## 7. What is Virtual DOM?

- Short Answer: It is React's lightweight in-memory copy of the DOM.
- Interviewer's Expectation: Mention diffing and efficient real DOM updates.

## 8. What is the difference between Real DOM and Virtual DOM?

- Short Answer: Real DOM is actual browser DOM; Virtual DOM is React's copy.
- Interviewer's Expectation: Virtual DOM helps reduce direct DOM updates.

## 9. What is state in React?

- Short Answer: State is changing data managed inside a component.
- Interviewer's Expectation: Changing state causes re-render.

## 10. What are props?

- Short Answer: Props are read-only data passed from parent to child.
- Interviewer's Expectation: Props make components reusable.

## 11. Difference between props and state?

- Short Answer: Props are external and read-only; state is internal and changeable.
- Interviewer's Expectation: Explain ownership and mutability.

## 12. Can we change props directly?

- Short Answer: No.
- Interviewer's Expectation: Props are read-only; parent controls them.

## 13. What is useState?

- Short Answer: useState is a hook for local component state.
- Interviewer's Expectation: It returns state value and setter.

## 14. What is useEffect?

- Short Answer: useEffect runs side effects after render.
- Interviewer's Expectation: Mention API calls, dependency array, and cleanup.

## 15. What is a side effect?

- Short Answer: Work outside rendering, like API call or timer.
- Interviewer's Expectation: Side effects should be handled in useEffect.

## 16. What is dependency array in useEffect?

- Short Answer: It controls when useEffect runs.
- Interviewer's Expectation: Empty array means run after first render.

## 17. What happens if useEffect has no dependency array?

- Short Answer: It runs after every render.
- Interviewer's Expectation: This can cause repeated work or loops.

## 18. How do you call API in React?

- Short Answer: Use fetch or Axios, usually inside useEffect or event handler.
- Interviewer's Expectation: Mention loading, error, and state.

## 19. What is conditional rendering?

- Short Answer: Showing UI based on a condition.
- Interviewer's Expectation: Mention if else, ternary, and logical AND.

## 20. How do you render lists in React?

- Short Answer: Use map and provide a key.
- Interviewer's Expectation: Key should be unique and stable.

## 21. Why are keys needed?

- Short Answer: Keys help React identify list items.
- Interviewer's Expectation: They improve correct and efficient list updates.

## 22. Why should index not always be used as key?

- Short Answer: It can cause wrong UI updates when list order changes.
- Interviewer's Expectation: Use unique IDs when available.

## 23. What is event handling in React?

- Short Answer: Handling user actions like click, change, and submit.
- Interviewer's Expectation: React uses camelCase event props.

## 24. What is preventDefault?

- Short Answer: It stops default browser behavior.
- Interviewer's Expectation: Commonly used to prevent form reload.

## 25. What is controlled component?

- Short Answer: An input controlled by React state.
- Interviewer's Expectation: Uses value and onChange.

## 26. What is uncontrolled component?

- Short Answer: An input controlled by the DOM.
- Interviewer's Expectation: Access value using ref.

## 27. What are hooks?

- Short Answer: Hooks let functional components use React features.
- Interviewer's Expectation: Examples include useState, useEffect, useRef.

## 28. Rules of hooks?

- Short Answer: Call hooks only at top level and only in React functions.
- Interviewer's Expectation: Not inside loops, conditions, or normal functions.

## 29. What is useRef?

- Short Answer: useRef stores mutable values or DOM references.
- Interviewer's Expectation: Updating ref does not cause re-render.

## 30. What is useMemo?

- Short Answer: useMemo memoizes calculated values.
- Interviewer's Expectation: Used for expensive calculations.

## 31. What is useCallback?

- Short Answer: useCallback memoizes function references.
- Interviewer's Expectation: Useful when passing callbacks to memoized children.

## 32. Difference between useMemo and useCallback?

- Short Answer: useMemo returns value; useCallback returns function.
- Interviewer's Expectation: Both are performance tools.

## 33. What is React.memo?

- Short Answer: It prevents child re-render when props are unchanged.
- Interviewer's Expectation: It uses shallow prop comparison.

## 34. What is prop drilling?

- Short Answer: Passing props through many unnecessary component levels.
- Interviewer's Expectation: Context API can solve it.

## 35. What is Context API?

- Short Answer: It shares data globally without prop drilling.
- Interviewer's Expectation: Good for theme, user, language.

## 36. What is useContext?

- Short Answer: It reads data from a context.
- Interviewer's Expectation: Component must be inside Provider.

## 37. What is React Router?

- Short Answer: A library for routing in React apps.
- Interviewer's Expectation: It enables SPA navigation.

## 38. What is BrowserRouter?

- Short Answer: It enables routing using browser history.
- Interviewer's Expectation: Usually wraps App.

## 39. Difference between Link and NavLink?

- Short Answer: NavLink can show active route styling; Link is simple navigation.
- Interviewer's Expectation: Use NavLink in nav menus.

## 40. What is useNavigate?

- Short Answer: A hook for programmatic navigation.
- Interviewer's Expectation: Used after login, logout, or submit.

## 41. What are route parameters?

- Short Answer: Dynamic values in URL.
- Interviewer's Expectation: Read them using useParams.

## 42. What is SPA?

- Short Answer: A single page app updates views without full reload.
- Interviewer's Expectation: React is commonly used for SPAs.

## 43. What is Redux?

- Short Answer: Redux is a global state management library.
- Interviewer's Expectation: Used when many components share state.

## 44. What is Redux Toolkit?

- Short Answer: Official recommended way to write Redux.
- Interviewer's Expectation: Reduces boilerplate with slices and configureStore.

## 45. What is store in Redux?

- Short Answer: Central place for global state.
- Interviewer's Expectation: Created using configureStore.

## 46. What is slice?

- Short Answer: A feature-based part of Redux state with reducers and actions.
- Interviewer's Expectation: Created using createSlice.

## 47. What is reducer?

- Short Answer: A function that updates state based on action.
- Interviewer's Expectation: Reducers define state changes.

## 48. What is action?

- Short Answer: An object or creator that describes what happened.
- Interviewer's Expectation: Actions are dispatched to reducers.

## 49. What is useSelector?

- Short Answer: Hook to read data from Redux store.
- Interviewer's Expectation: It selects state and re-renders on changes.

## 50. What is useDispatch?

- Short Answer: Hook to dispatch Redux actions.
- Interviewer's Expectation: Used to update global state.

## 51. Explain Redux flow.

- Short Answer: UI dispatches action, reducer updates store, UI reads new state.
- Interviewer's Expectation: Clear action -> reducer -> store -> UI flow.

## 52. When should you use Redux?

- Short Answer: When state is shared across many components or logic is complex.
- Interviewer's Expectation: Do not use Redux for simple local state.

## 53. Context API vs Redux?

- Short Answer: Context is for simple global data; Redux is for complex state.
- Interviewer's Expectation: Mention DevTools and predictable state in Redux.

## 54. What is React Hook Form?

- Short Answer: A library for easy form handling and validation.
- Interviewer's Expectation: Reduces form boilerplate.

## 55. What is register in React Hook Form?

- Short Answer: It connects input to the form.
- Interviewer's Expectation: Used with validation rules.

## 56. What is handleSubmit in React Hook Form?

- Short Answer: It validates and submits form data.
- Interviewer's Expectation: Wrap submit function with it.

## 57. What is formState?

- Short Answer: It contains form status like errors and isSubmitting.
- Interviewer's Expectation: Used for validation feedback.

## 58. What is Axios?

- Short Answer: Axios is an HTTP client for API requests.
- Interviewer's Expectation: It simplifies API calls and JSON handling.

## 59. Fetch vs Axios?

- Short Answer: Fetch is built-in; Axios is external and has extra features.
- Interviewer's Expectation: Mention JSON parsing and error handling.

## 60. What is GET request?

- Short Answer: It fetches data from server.
- Interviewer's Expectation: GET should not modify data.

## 61. What is POST request?

- Short Answer: It sends data to create a resource.
- Interviewer's Expectation: Used in form submissions.

## 62. PUT vs PATCH?

- Short Answer: PUT updates full resource; PATCH updates partial resource.
- Interviewer's Expectation: Know full vs partial update.

## 63. What is DELETE request?

- Short Answer: It removes data from server.
- Interviewer's Expectation: Update UI after successful delete.

## 64. What is loading state?

- Short Answer: A state showing async operation progress.
- Interviewer's Expectation: Improves user experience.

## 65. What is error handling?

- Short Answer: Handling failures using try catch and messages.
- Interviewer's Expectation: Never leave user with blank UI.

## 66. What is async/await?

- Short Answer: Syntax to handle promises cleanly.
- Interviewer's Expectation: Used in API calls with try catch.

## 67. What is component lifecycle?

- Short Answer: Mounting, updating, and unmounting phases.
- Interviewer's Expectation: useEffect handles lifecycle in functional components.

## 68. What is mounting?

- Short Answer: Component appears on screen for first time.
- Interviewer's Expectation: Initial API calls can run after mount.

## 69. What is updating?

- Short Answer: Component re-renders because state or props changed.
- Interviewer's Expectation: UI updates with latest data.

## 70. What is unmounting?

- Short Answer: Component is removed from screen.
- Interviewer's Expectation: Cleanup should happen here.

## 71. What is cleanup in useEffect?

- Short Answer: Function returned from useEffect to clean timers/listeners.
- Interviewer's Expectation: Prevent memory leaks.

## 72. What causes re-render?

- Short Answer: State change, props change, or parent render.
- Interviewer's Expectation: Re-render does not always mean DOM update.

## 73. How to avoid unnecessary re-renders?

- Short Answer: Use proper state, React.memo, useMemo, and useCallback where needed.
- Interviewer's Expectation: Optimize only when needed.

## 74. What is lazy loading?

- Short Answer: Loading components only when needed.
- Interviewer's Expectation: Use React.lazy and Suspense.

## 75. What is code splitting?

- Short Answer: Splitting app bundle into smaller chunks.
- Interviewer's Expectation: Improves initial load.

## 76. What is Suspense?

- Short Answer: It shows fallback UI while lazy component loads.
- Interviewer's Expectation: Used with React.lazy.

## 77. What is fragment?

- Short Answer: It groups JSX without adding extra DOM node.
- Interviewer's Expectation: Written as `<>...</>`.

## 78. Why use className instead of class?

- Short Answer: JSX uses className because class is a JavaScript keyword.
- Interviewer's Expectation: Know JSX attribute differences.

## 79. Why components start with capital letter?

- Short Answer: React treats capitalized tags as components.
- Interviewer's Expectation: Lowercase is treated like HTML tag.

## 80. Can a component return multiple elements?

- Short Answer: Yes, but they need one parent or fragment.
- Interviewer's Expectation: JSX must return one parent wrapper.

## 81. What is children prop?

- Short Answer: It passes nested content into a component.
- Interviewer's Expectation: Useful for layout and reusable wrappers.

## 82. What is lifting state up?

- Short Answer: Moving state to common parent to share between children.
- Interviewer's Expectation: Used for sibling communication.

## 83. How child sends data to parent?

- Short Answer: Parent passes callback function as prop.
- Interviewer's Expectation: Child calls callback with data.

## 84. What is one-way data flow?

- Short Answer: Data flows from parent to child in React.
- Interviewer's Expectation: Makes data predictable.

## 85. What is reusable component?

- Short Answer: A generic component used in many places with props.
- Interviewer's Expectation: Button, Card, Input examples.

## 86. What is component composition?

- Short Answer: Building big UI by combining small components.
- Interviewer's Expectation: Core React design idea.

## 87. What is custom hook?

- Short Answer: Reusable hook function that starts with use.
- Interviewer's Expectation: Reuses logic, not UI.

## 88. What is useParams?

- Short Answer: Hook to read route parameters.
- Interviewer's Expectation: Used in dynamic detail pages.

## 89. What is protected route?

- Short Answer: Route accessible only after authentication.
- Interviewer's Expectation: Check login state before rendering page.

## 90. How do you store login state?

- Short Answer: Local state, Context, Redux, or storage depending on project.
- Interviewer's Expectation: Mention security and auth token carefully.

## 91. What is localStorage usage in React?

- Short Answer: Store simple persistent browser data.
- Interviewer's Expectation: Use carefully; do not store highly sensitive data casually.

## 92. What is Vite?

- Short Answer: A fast frontend build tool commonly used with React.
- Interviewer's Expectation: It helps run and build React apps quickly.

## 93. What is npm?

- Short Answer: Node package manager used to install libraries.
- Interviewer's Expectation: React projects use npm packages.

## 94. What is package.json?

- Short Answer: Project file containing dependencies and scripts.
- Interviewer's Expectation: Know start, dev, build scripts.

## 95. What is build in React?

- Short Answer: Optimized production files generated from source code.
- Interviewer's Expectation: Build is used for deployment.

## 96. What is deployment?

- Short Answer: Making app available online.
- Interviewer's Expectation: Can mention Vercel, Netlify, or hosting server.

## 97. How do you explain a React project?

- Short Answer: Explain problem, features, components, state, APIs, routing, and challenges.
- Interviewer's Expectation: Clear project flow, not memorized theory.

## 98. Why should we not mutate state?

- Short Answer: React may not detect changes correctly.
- Interviewer's Expectation: Use setter with copied arrays/objects.

## 99. What is reconciliation?

- Short Answer: React's process of comparing old and new UI trees.
- Interviewer's Expectation: It decides minimal DOM updates.

## 100. What is the best way to prepare React for interview?

- Short Answer: Revise components, props, state, hooks, routing, API, forms, and Redux.
- Interviewer's Expectation: Explain with project examples.

---

# React Viva Questions

## Most Common Viva Questions With Answers

1. What is React?
   - React is a JavaScript library for building user interfaces.

2. What is a component?
   - A reusable UI block that returns JSX.

3. What is JSX?
   - HTML-like syntax written inside JavaScript.

4. What is state?
   - Changing data inside a component.

5. What are props?
   - Read-only data passed from parent to child.

6. What hook is used for state?
   - `useState`.

7. What hook is used for API calls?
   - Usually `useEffect`.

8. Why do we use keys in lists?
   - To help React identify each list item.

9. What is React Router?
   - A library for navigation in React apps.

10. What is Redux Toolkit?
    - The recommended modern way to use Redux.

11. What is a controlled input?
    - Input whose value is controlled by React state.

12. What is useRef?
    - A hook for DOM references or mutable values.

13. What is Context API?
    - A way to share data without prop drilling.

14. What is an API call?
    - A frontend request to backend for data.

15. What is Axios?
    - A library for HTTP requests.

16. What is useSelector?
    - A hook to read Redux state.

17. What is useDispatch?
    - A hook to dispatch Redux actions.

18. What is lazy loading?
    - Loading components only when needed.

19. What is one-way data flow?
    - Data flows from parent to child.

20. What is prop drilling?
    - Passing props through many levels unnecessarily.

---

# React Project Discussion Questions

## Explain Your Project

- Start with project name and problem.
- Explain main users.
- Explain main features.
- Explain pages and routing.
- Explain important components.
- Explain API usage.
- Explain state management.
- Explain one challenge and solution.

Interview answer:

My project is a React application built to solve a specific user problem. I divided the UI into reusable components, used state for dynamic data, used React Router for pages, and connected APIs for backend data. For shared state, I used Context or Redux depending on the requirement.

## Why React?

- Reusable components
- Fast UI updates
- Easy SPA routing
- Large ecosystem
- Good for interactive UI

Interview answer:

I used React because the project needed reusable UI components, dynamic data updates, and smooth navigation without full page reload.

## Why useState?

- To store changing component data
- To update UI after user actions
- To handle forms, loading, filters, and modals

Interview answer:

I used useState to manage local data like form inputs, loading status, selected values, and UI toggles.

## Why useEffect?

- To run API calls
- To react to dependency changes
- To run side effects after render

Interview answer:

I used useEffect to fetch data when the component loaded and to update data when required values changed.

## Why Redux Toolkit?

- To manage shared state globally
- To avoid prop drilling
- To organize state by slices
- To simplify Redux code

Interview answer:

I used Redux Toolkit because multiple components needed the same state, such as cart or authentication data. Redux Toolkit made the logic clean using slices and store.

## Why Axios?

- Cleaner API syntax
- Automatic JSON handling
- Better error handling
- Useful for service files

Interview answer:

I used Axios to make API calls because it gives clean syntax, handles JSON easily, and works well with centralized API service files.

## Why React Hook Form?

- Less form boilerplate
- Easy validation
- Better performance
- Built-in form state

Interview answer:

I used React Hook Form to manage form values, validation errors, and submit state with less code.

## Explain Project Flow

Common flow:

1. User opens app.
2. Router shows correct page.
3. Component loads.
4. useEffect calls API if needed.
5. Data is stored in state or Redux.
6. UI renders list, form, or details.
7. User performs action.
8. Event handler updates state or dispatches Redux action.
9. API request is sent if needed.
10. UI updates with success or error message.

Interview answer:

The project flow starts from routing. Each page is made from reusable components. Data is fetched from API and stored in local state or Redux. User actions trigger event handlers, update state, call APIs, and then React re-renders the UI.

---

# React Cheat Sheet

## One-Line Definitions

- React: JavaScript library for building UI.
- Component: Reusable UI block.
- JSX: HTML-like syntax inside JavaScript.
- Props: Read-only data from parent to child.
- State: Changing data inside component.
- useState: Hook for local state.
- useEffect: Hook for side effects.
- useRef: Hook for DOM reference or mutable value.
- useMemo: Memoizes calculated value.
- useCallback: Memoizes function reference.
- React.memo: Memoizes component rendering.
- Fragment: Groups JSX without extra DOM.
- Event: User action like click or change.
- Controlled Component: Input controlled by React state.
- Uncontrolled Component: Input controlled by DOM.
- Context API: Shares data without prop drilling.
- Redux: Global state management library.
- Redux Toolkit: Modern official Redux approach.
- Store: Central Redux state container.
- Slice: Feature-based Redux state section.
- Reducer: Function that updates Redux state.
- Action: Description of state change.
- useSelector: Reads Redux state.
- useDispatch: Dispatches Redux action.
- React Router: Routing library for React.
- BrowserRouter: Enables browser-based routing.
- Routes: Groups route definitions.
- Route: Maps URL path to component.
- Link: Navigates without reload.
- NavLink: Link with active styling.
- useNavigate: Navigates using code.
- useParams: Reads URL parameters.
- API Call: Request to backend.
- Fetch: Built-in HTTP request API.
- Axios: HTTP request library.
- GET: Read data.
- POST: Create data.
- PUT: Replace/update full data.
- PATCH: Update partial data.
- DELETE: Remove data.
- Loading State: Tracks async progress.
- Error State: Stores failure message.
- Lifecycle: Mount, update, unmount.
- Mounting: Component first appears.
- Updating: Component re-renders.
- Unmounting: Component is removed.
- Cleanup: Removes timers/listeners.
- Lazy Loading: Loads component when needed.
- Code Splitting: Splits bundle into smaller chunks.
- Prop Drilling: Passing props through many levels.
- Custom Hook: Reusable hook logic.
- One-Way Data Flow: Data flows parent to child.
- Re-render: Component runs again due to data change.

---

# 30 Minute Revision

## Only Important Concepts

- React is a UI library, not a framework.
- React apps are built using components.
- JSX lets you write UI inside JavaScript.
- Props pass data from parent to child.
- State stores changing component data.
- useState updates state and causes re-render.
- useEffect runs side effects like API calls.
- Dependency array controls useEffect execution.
- Lists are rendered using map.
- Keys uniquely identify list items.
- Controlled forms use value and onChange.
- preventDefault stops form reload.
- Context API solves simple prop drilling.
- React Router handles SPA navigation.
- Link navigates without page reload.
- useNavigate redirects by code.
- API calls need loading and error states.
- Redux Toolkit manages complex global state.
- Store holds global state.
- Slice contains reducers and actions.
- useSelector reads Redux state.
- useDispatch sends Redux actions.
- useMemo memoizes values.
- useCallback memoizes functions.
- React.memo avoids child re-render when props do not change.
- Lazy loading improves initial load.

---

# 15 Minute Revision

## Only Interview Essentials

- React = JavaScript library for UI.
- Component = reusable UI block.
- JSX = HTML-like JavaScript syntax.
- Props = parent to child read-only data.
- State = local changing data.
- State change causes re-render.
- useState = local state hook.
- useEffect = side effect hook.
- Empty dependency array = run once after mount.
- map renders lists.
- key helps React track list items.
- Controlled input = state controls value.
- React Router = navigation without reload.
- Context = avoids prop drilling.
- Redux Toolkit = global state for larger apps.
- Axios/fetch = API calls.
- Loading and error states are important.
- useMemo and useCallback are performance hooks.

---

# 10 Minute Revision

## Only Frequently Asked Concepts

- React is component-based.
- Props are read-only.
- State is changeable.
- Hooks work in functional components.
- useEffect is used for API calls.
- Dependency array matters.
- Lists need keys.
- Forms need onChange and onSubmit.
- preventDefault stops reload.
- React Router gives pages in SPA.
- Redux Toolkit uses store, slice, reducer, action.
- useSelector reads; useDispatch updates.
- Context is for simple global data.
- Redux is for complex global state.
- API calls need try catch.

---

# 5 Minute Revision

## Final Rapid-Fire Notes

- React builds UI.
- Component returns JSX.
- JSX uses className.
- Props come from parent.
- State belongs to component.
- Never mutate state directly.
- useState manages state.
- useEffect handles side effects.
- map renders lists.
- key must be unique.
- onClick handles clicks.
- onChange handles input.
- onSubmit handles forms.
- Controlled input uses value and onChange.
- Context avoids prop drilling.
- Router changes views.
- Link avoids reload.
- API brings backend data.
- Loading shows progress.
- Error shows failure.
- Redux stores global data.
- Slice groups Redux logic.
- Dispatch sends action.
- Selector reads state.
- Memo hooks optimize only when needed.

---

# Final Interview Mindset

Do not answer like a textbook.

Answer like this:

- Define the concept simply.
- Say why it is needed.
- Give one project example.
- Mention one common mistake if useful.

Best answer pattern:

```txt
Concept -> Need -> Project usage -> Small example
```

Example:

```txt
useEffect is a React hook used for side effects like API calls.
In my project, I used it to fetch data when the page loaded.
I also used loading and error states to improve user experience.
```

Final one-line confidence note:

React interviews mostly test whether you can explain components, props, state, hooks, routing, API calls, forms, and state management with real project examples.
