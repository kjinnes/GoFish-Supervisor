import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import Member from './Member';

const NewMembers = ({
  teamMembers,
  setTeamMembers,
}) => {
  const changeHandler = (e, i) => {
    const temp = teamMembers;
    temp[i].name = e.target.value;
    setTeamMembers(temp);
  };

  const addHandler = () => {
    setTeamMembers([
      ...teamMembers,
      {
        name: '',
        teamLead: false,
      },
    ]);
  };

  const subtractHandler = (i) => {
    const temp = teamMembers.filter((member, index) => index !== i);
    setTeamMembers(temp);
  };

  const checkHandler = (i, change) => {
    const temp = teamMembers;
    if (change === false) {
      temp[i].teamLead = false;
    } else {
      temp.map((member) => ({
        ...member,
        teamLead: false,
      }))
    }
    setTeamMembers(temp);
  };
  console.log(teamMembers);
  return (
    <>
      <div className="checkRowGrid">
        <h5>Member Name</h5>
        <h5 style={{ textAlign: 'center' }}>Team Lead</h5>
        <h5 style={{ textAlign: 'center' }}>Remove</h5>
        <h5 style={{ textAlign: 'center' }}>Add</h5>
      </div>
      {teamMembers.map((member, i) => (
        <Member
          key={uuid()}
          member={member}
          i={i}
          end={i === teamMembers.length - 1}
          changeHandler={changeHandler}
          addHandler={addHandler}
          subtractHandler={subtractHandler}
          checkHandler={checkHandler}
        />
      ))}
    </>
  );
};
NewMembers.propTypes = {
  teamMembers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    teamLead: PropTypes.bool.isRequired,
  })).isRequired,
  setTeamMembers: PropTypes.func.isRequired,
};

export default NewMembers;
