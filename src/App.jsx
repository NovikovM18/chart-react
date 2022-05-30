import React, { useState } from "react";
import LabelInput from './components/LabelInput';
import DataInput from './components/DataInput';
import RadioInput from './components/RadioInput';
import Charts from './components/Charts';

function App() {
  const [labels, setLabels] = useState(['Bayern', 'Real Madrid', 'Juventus', 'Liverpool', 'Milan']);
  const [data, setData] = useState([6, 14, 2, 6, 7]);
  const [radioOption, setRadioOption] = useState('Bar');
  const dataNum = data.length;
  const labelsNum = labels.length;

  return (
    <div className="App">
      <LabelInput setLabels={setLabels} labelsNum={labelsNum}/>
      <DataInput setData={setData} dataNum={dataNum}/>
      <Charts radioOption={radioOption} labels={labels} data={data}/>
      <RadioInput setRadioOption={setRadioOption}/>
    </div>
  );
}

export default App;
