import './App.css';

function App() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      console.log("response :>> ", response);
      return response.json();
    })
    .then((result) => {
      console.log("result :>> ", result);

    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
  return (
   <h1>hello Rick and Morty</h1>
  );
}

export default App;
