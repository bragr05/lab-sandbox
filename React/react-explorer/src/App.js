import HelloPerson from "./components/HelloPerson";

function App() {
  let person = {
    name: "John",
    age: 23,
    favColor: "blue"
  };

  return (
    <div className="App">
      <HelloPerson personInfo={person} />
    </div>
  );
}

export default App;
