import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import Member from './Member';

const NewMembers = (props) => {
  const { handleMembers, members } = props;
  const [teamMembers, setTeamMembers] = useState(members);
  console.log('memberss', handleMembers, members);
  useEffect(() => handleMembers(teamMembers), [teamMembers]);

  const changeHandler = (e, i) => {
    //    setTeamMembers(
    // teamMembers.map((member, idx) => (idx === i ? { ...member, name: e.target.value } : member)),
    //    );
    // mutate to prevent updating state
    teamMembers[i].name = e.target.value;
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
    setTeamMembers(teamMembers.filter((member, index) => index !== i));
  };

  const checkHandler = (i) => {
    setTeamMembers(
      teamMembers.map((member, idx) => (idx === i ? { ...member, teamLead: true } : { ...member, teamLead: false })),
    );
  };

  return teamMembers ? (
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
  ) : (
    <div />
  );
};

NewMembers.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      teamLead: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  setTeamMembers: PropTypes.func.isRequired,
  handleMembers: PropTypes.func.isRequired,
};

export default NewMembers;
