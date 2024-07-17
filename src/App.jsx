import Student from "./Student";
import MyComponent from "./MyComponent";

function App() {
  return (
    <>
    <Student name="Murali" age={26} isStudent={true} />
    <Student name="Vignesh" age={20} isStudent={true} />      
    <Student name="Sarthak" age={30} isStudent={false} />
    <Student name="Ajith" age={29} isStudent={false} />
    <Student />
    <MyComponent />
    </>
  );
}

export default App;
