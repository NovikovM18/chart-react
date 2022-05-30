import React from 'react';
import TextField from '@material-ui/core/TextField';
import Badge from '@material-ui/core/Badge';

function LabelInput(props) {
  const handleChange = (e) => {
    let arr = e.target.value.split(',');
    props.setLabels(arr.map(e => e.trim()));
  }

  return (
    <div className="input">
      <Badge badgeContent={props.labelsNum} color="primary">
        <TextField id="outlined-basic" label="Labels" variant="outlined" defaultValue={'Bayern, Real Madrid, Juventus, Liverpool, Milan'} onChange={handleChange}/>
      </Badge>
    </div>
  );
}

export default LabelInput;
