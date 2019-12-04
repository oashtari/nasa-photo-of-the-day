import React from "react";
import DatePicker from "react-datepicker";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import './index';
import ImageList from './components/Images/ImageList';
import TheTitleCard from './components/TitleCardFolder/TheTitle';
import ExplanationText from './components/Explanation/ExplanationText';
import NasaLogo from './components/Nasa/NasaLogo';

function App() {
  return (
    // const [date, setDate] = useState();

    <div className="App">
      <NasaLogo />
      <div className="picker">
        {/* <DateCard /> */}
        {/* <DatePicker selected={this.state.date} onChange={this.handleChange} /> */}
      </div>
      <div className="imageByDate">
        <TheTitleCard />
        <ExplanationText />
        <ImageList />
      </div>
      {/* <div className="datePicker">
        class Example extends React.Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {
        return (
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
            />
        );
    }
}
      </div> */}

    </div>
  );
}

export default App;
