import React from "react";
import "./App.css";
import './index';
import ImageList from './components/ImageList';

function App() {
  return (
    // const [date, setDate] = useState();

    <div className="App">
      {/* <Nasa_logo /> */}
      <div className="imageByDate">
        <ImageList />
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </div>
    </div>
  );
}

export default App;
