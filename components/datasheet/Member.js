import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Checkbox } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const Member = ({
  member,
  i,
  end,
  teamMembers,
  setTeamMembers,
}) => {
  const [oneMember, setOneMember] = React.useState(member);
  const handleMemberChange = (e, i) => {
    setOneMember({ ...oneMember, name: e.target.value });
    const temp = teamMembers;
    temp[i] = member;
    setTeamMembers(temp);
  };

  const addMember = () => {
    setTeamMembers([...teamMembers, {
      name: '',
      teamLead: false,
    }]);
  };
  console.log(oneMember);
  return (
    <div
      className="checkRowStyle"
      key={oneMember.name + oneMember.teamLead}
    >
      <TextField
        id={oneMember.name + oneMember.teamLead}
        style={{ marginTop: 10 }}
        variant="outlined"
        value={oneMember.name}
        onChange={(e) => handleMemberChange(e, i)}
      />
      <Checkbox
        id={`${oneMember.name}${oneMember.teamLead}check`}
        color="secondary"
        checked={oneMember.teamLead}
      />
      <RemoveCircleOutlineIcon />
      {end && (
      <AddCircleOutlineIcon
        onClick={addMember}
      />
      )}
    </div>
  );
};

Member.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    teamLead: PropTypes.bool.isRequired,
  }).isRequired,
  i: PropTypes.number.isRequired,
  end: PropTypes.bool.isRequired,
  teamMembers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    teamLead: PropTypes.bool.isRequired,
  })).isRequired,
  setTeamMembers: PropTypes.func.isRequired,
};

export default Member;
