import React from "react";
import "./App.css";
import './index';
import ImageList from './components/Images/ImageList';
// import DateCard from './components/DatePicker';
import DatePicker from './components/DatePicker';


function App() {
  return (
    // const [date, setDate] = useState();

    <div className="App">
      {/* <Nasa_logo /> */}
      <div className="picker">
        {/* <DateCard /> */}
        <DatePicker selected={this.state.date} onChange={this.handleChange} />
      </div>
      <div className="imageByDate">
        <ImageList />
      </div>
    </div>
  );
}

export default App;
