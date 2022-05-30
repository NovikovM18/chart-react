import React from 'react';
import TextField from '@material-ui/core/TextField';
import Badge from '@material-ui/core/Badge';

function DataInput(props) {
  const handleChange = (e) => {
    let arr = e.target.value.split(',');
    props.setData(arr.map(e => e.trim()));
  }
  
  return (
    <div className="input">
      <Badge badgeContent={props.dataNum} color="primary">
        <TextField id="outlined-basic" label="Data" variant="outlined" defaultValue={'6, 14, 2, 6, 7'} onChange={handleChange}/>
      </Badge>
    </div>
  );
}

export default DataInput;
