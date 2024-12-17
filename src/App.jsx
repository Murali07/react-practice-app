// import Student from "./Student";
// import MyComponent from "./MyComponent";
// import Counter from "./useStateDemo/Counter";
// import HandlerDemo from "./onChangeDemo/HandlerDemo";
// import HookDemo from "./HookDemo";
// import List from "./List";

import ToDo from "./ToDoApp/ToDo";
import MyComponent from "./updateObjectUsingState/MyComponent";

function App() {
  
  // const vegetables = [{id: 1, name: "Onion", qty: 10},
  //   {id: 2, name: "Tomato", qty: 20},
  //   {id: 3, name: "Potato", qty: 15},
  //   {id: 4, name: "Cucumber", qty: 5},
  //   {id: 5, name: "Carrot", qty: 9},
  // ]
  
  // const fruits = [{id: 1, name: "Apple", qty: 10},
  //   {id: 2, name: "Banana", qty: 12},
  //   {id: 3, name: "Orange", qty: 15},
  //   {id: 4, name: "Mango", qty: 7},
  //   {id: 5, name: "Watermelon", qty: 9},
  // ]

  return (
    <>
    {/* <Student name="Murali" age={26} isStudent={true} />
    <Student name="Vignesh" age={20} isStudent={true} />      
    <Student name="Sarthak" age={30} isStudent={false} />
    <Student name="Ajith" age={29} isStudent={false} />
    <Student />
    <MyComponent /> */}

    {/* {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : ""}  */}
    {/* {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}    
    {fruits.length > 0 && <List items={fruits} category="Fruits" />} */}

    {/* <HookDemo />     */}
    {/* <Counter /> */}
    {/* <HandlerDemo /> */}
    {/* <ToDo /> */}
    <MyComponent />

    </>
  );
}

export default App;
