import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function RadioInput(props) {
  const handleChange = (e) => {
    props.setRadioOption(e.target.value);
  }
  return (
    <div className="radio">
      <RadioGroup row aria-label="position" name="position" defaultValue="Bar" onChange={handleChange}>
        <FormControlLabel
          value="Line"
          control={<Radio color="primary" />}
          label="Line"
          labelPlacement="top"
          />
        <FormControlLabel
          value="Bar"
          control={<Radio color="primary" />}
          label="Bar"
          labelPlacement="top"
          />
        <FormControlLabel
          value="Pie"
          control={<Radio color="primary" />}
          label="Pie"
          labelPlacement="top"
          />
        <FormControlLabel 
          value="Doughnut" 
          control={<Radio color="primary" />} 
          label="Doughnut" 
          labelPlacement="top"
          />
        <FormControlLabel 
          value="PolarArea" 
          control={<Radio color="primary" />} 
          label="PolarArea" 
          labelPlacement="top"
          />
        <FormControlLabel 
          value="Radar" 
          control={<Radio color="primary" />} 
          label="Radar" 
          labelPlacement="top"
          />
      </RadioGroup>
    </div>
  );
}

export default RadioInput;
