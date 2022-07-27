# React Beta Docs Notes

## React Installation 

For a local installation you can do one of the following: 

1. Use a standalone index.html with content: https://raw.githubusercontent.com/reactjs/reactjs.org/main/static/html/single-file-example.html
2. Add it to an existing site https://beta.reactjs.org/learn/add-react-to-a-website
3. Use a toolchain to create an entire standalone react project &Rightarrow; Must famous (but not best for production ready code) is using npx create-react-app. The downside of this is that it cannot handel server-side features like dynamic routing and server-side logic (and has worse performance) (For that frameworks exist, e.g. next.js).
   1. Install node.js
   2. Run `npx create-react-app my-app`
   3. `cd my-app && npm start`

## Quick start

* **Components** are JS funktions that return markup (HTML Code or JSX for convenience)
* They must start with a **capital letter** and can be **nested** into other components like `<MyComponent />`
* `export default` keyword specifies the main component 
* **JSX is the main markup language** in react and is stricter than html, for example it forces all tags to be closed (yes also `<br/>`) and can only return one parent, so that you have to wrap multiple html tags isnide a div ar an empty `<> ... <>` wrapper
* Add **CSS** for any tag using the `className` attribute. Then write the class in a seperate css files which you need to import in your html files
### JSX And Data displaying

* If you escape the markup inside your jsx like

   return(
      <h1>
      {user.name}
      </h1>
   );

* then you can write javascript code inside the curly brackets so that you can **add data** to your component
* You can also add a style agrument to a tag with double braces `style={{}}`
* * If you ever need to convert a html project to jsx you can use online converters
* 
### **Condtional rendering**

Either in Javascript 

```js
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);
```

or using the `conditional ?`operator 

```js
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```

### List rendering

Lists can be rendered by using a for loop or array `map()`function


```js
const prods = [
   {title: 'Cabbage', id: 1},
   {title: 'Garlic', id: 2}
]
// Inside component 
const = listItems = products.map(product =>
<li key={product.id}>
   {product.title}
</li>
);
return (
   <ul>{listItems}</ul>
)
```

In react you need to pass the key item to a list element so that react can rely on them if you later insert, delete or reorder items.

### Handling events

For interactivity react offer event handler, which can be added inside a component as a function.

```js
function MyButton(){
   function handleClick(){
      alert('You clicked me!');
   }
   return(
      <button onClick={handleClick}>
         Click me
      </button>
   );
}
```
### Updating the screen

Often it is neccessary that the component "remembers" some information and displays it. This is handled by `useState` from react

```js
import { useState } from 'react';

function MyButton() {
   const [count, setCount] = useState(0);

   function handleClick(){
      setCount(count + 1)
   }
   return(
      <button onClick={handleClick}>
         Clicked {count} times
      </button>
   );
}
```

`useState` returns the current state (`count`), and the function that lets you update it (`setCount`), they could have any name but convention is `[something, setSomething]`

Functions starting with `use` are called hook. You can programm you own hooks or use the ones provided by react. Hooks must be defined at the toplevel of the component (or other hooks). If you want to use `useState` in a condition of loop, extract a new component and put it there. 

### Sharing data between components

* Sometimes it is neccessary that components share data
* A component can share data if they are both integrated in a top level component
* To get them using the same data we need to use so called props and lift the state of the component "upwards" to the parent component

```js
import {useState} from 'react';

function MyButton({count, onClick}) {
   return(
      <button onClick={onClick}>
         Clicked {count} times
      </button>
   );
}

export default function MyApp(){
   const [count, setCount] = useState(0);

   function handleClick(){
      setCount(count + 1)
   }

   return(
      <div>
         <h1>Counter update together</h1>
         <MyButton count={count} onClick={handleClick} />
         <MyButton count={count} onClick={handleClick} />
      </div>
   )
}
```

## Thinking in react

The react documentation describes several steps to successfully buidling an react app

1. Start with a **mockup**. This means that you should write down your app using pencil and paper or a mockup app (e.g. pencil in linux or figma for payed developers)
2. Break the Ui into a **component hierachy**. Draw containers around each of your components and give them a name. Depending on your background you may think of it from differenent perspectives:
   1. **Programming**: Following the *single responsibility principe* a function or an object should do one thing. If it does more things it should be broken up into subfucntions/objects (or react component :wink:)
   2. **CSS**: consider a class selector (components are a bit less granular)
   3. **Design**: consider organizing designin layers &Rightarrow; 

&Rightarrow; with a well structured data model this usually step is intuitive because the same principles that apply to the data architecture apply to react components. 

3. Build a **static** version of your app first. Without any interactivy the main focus is on rendering the data model. Thus, you want to build components that nest other components and use props. (Dont use state in this step)
4. Find **minimal but complete** representation of the state of the ui. In this step you want to find the minimal but complete set of state that your app needs to remember. The most important principle (D)ont (re)peat (y)ourself. E.g. if you want to render a shopping list kept in an array and have to display one item keep the item as a state. If you need to additionally render the count of all items read the length of the array

### Building the example app from thinking react

#### 0. Data model 

```js
[
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]
```

#### 1. Mockup 

<img src="../search-fruits/bilder/s_thinking-in-react_ui.png" width=300 height=300>

#### 2. Break the UI into pieces

1. **FilterableProductTable**: Entire Table 
2. **SearchBar**: Search button and toggle 
3. **ProductTable**: All products
4. **ProductCategoryRow**: One category 
5. **ProductRow**: 

#### 3. Build a static version


# Next.js
