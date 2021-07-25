import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const Member = ({
  member, i, end, changeHandler, addHandler, subtractHandler, checkHandler,
}) => {
  const [oneMember, setOneMember] = useState(member);
  const handleMemberChange = (e) => {
    setOneMember({
      ...oneMember,
      name: e.target.value,
    });
    changeHandler(e, i);
  };

  const lastStyle = () => (end ? { marginBottom: 10 } : { marginBottom: 0 });

  const handleTeamLeadChange = () => {
    setOneMember({
      ...oneMember,
      teamLead: !oneMember.teamLead,
    });
    checkHandler(i);
  };
  return (
    <div style={lastStyle()} className="checkRowGrid">
      <TextField
        style={{ marginTop: 10 }}
        type="text"
        required
        variant="outlined"
        value={oneMember.name}
        onChange={(e) => handleMemberChange(e)}
      />
      <div className="checkRowStyle">
        <Checkbox color="secondary" checked={oneMember.teamLead} onClick={handleTeamLeadChange} />
      </div>
      <div className="checkRowStyle">
        <RemoveCircleOutlineIcon onClick={() => subtractHandler(i)} />
      </div>
      <div className="checkRowStyle">
        {end ? <AddCircleOutlineIcon onClick={addHandler} /> : <div />}
      </div>
    </div>
  );
};

export default Member;
