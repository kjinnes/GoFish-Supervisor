/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button, InputAdornment } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import dayjs from 'dayjs';
import uuid from 'react-uuid';
import NewMembers from './NewMembers';
import {
  WaterConditions, FlowType, Visibility, ViewingConditions,
} from '../../constants/conditions';
import { creekList } from '../../constants/creeknames.json';

const NewVisit = () => {
  const [visit, setVisit] = React.useState({
    creekName: '',
    date: dayjs(new Date()).format('YYYY-MM-DD'),
    flowType: '',
    visibility: '',
    waterCondition: '',
    viewCondition: '',
    comments: '',
    distance: '',
  });
  const [teamMembers, setTeamMembers] = React.useState([
    {
      name: '',
      teamLead: true,
    }, {
      name: '',
      teamLead: false,
    },
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formVal = document.getElementById('formVisit');
    console.log(formVal.reportValidity());
  };

  return (
    <div>
      <h2>Manual Entry of Field Data</h2>
      <form id="formVisit" onSubmit={submitHandler}>
        <h3>Details</h3>
        <div className="introStyle">
          <TextField
            className="inputStyle"
            label="Date of visit"
            type="date"
            value={visit.date}
            variant="outlined"
            onChange={(e) => setVisit({ ...visit, date: e.target.value })}
          />
          <Autocomplete
            className="inputStyle"
            options={creekList}
            inputValue={visit.creekName}
            onInputChange={(event, value) => setVisit({ ...visit, creekName: value })}
            renderInput={(params) => <TextField {...params} label="Creek Name" variant="outlined" />}
          />
          <TextField
            style={{ marginTop: 10 }}
            rows={2}
            label="Comments"
            multiline
            variant="outlined"
            value={visit.comments}
            onChange={(e) => setVisit({ ...visit, comments: e.target.value })}
          />
        </div>
        <h3>Conditions</h3>
        <div className="inputStyle">
          <div className="formGrid">
            <Autocomplete
              className="inputStyle"
              options={FlowType}
              inputValue={visit.flowType}
              onInputChange={(event, value) => setVisit({ ...visit, flowType: value })}
              getOptionLabel={(option) => option.detail}
              renderInput={(params) => <TextField {...params} label="Flow Type" variant="outlined" />}
            />
            <Autocomplete
              className="inputStyle"
              options={Visibility}
              inputValue={visit.visibility}
              onInputChange={(event, value) => setVisit({ ...visit, visibility: value })}
              getOptionLabel={(option) => option.detail}
              renderInput={(params) => <TextField {...params} label="Visibility" variant="outlined" />}
            />
            <Autocomplete
              className="inputStyle"
              options={WaterConditions}
              inputValue={visit.waterCondition}
              onInputChange={(event, value) => setVisit({ ...visit, waterCondition: value })}
              getOptionLabel={(option) => option.detail}
              renderInput={(params) => <TextField {...params} label="Water Condition" variant="outlined" />}
            />
            <Autocomplete
              className="inputStyle"
              options={ViewingConditions}
              inputValue={visit.viewCondition}
              onInputChange={(event, value) => setVisit({ ...visit, viewCondition: value })}
              getOptionLabel={(option) => option.detail}
              renderInput={(params) => <TextField {...params} label="View Condition" variant="outlined" />}
            />
            <TextField
              style={{ marginTop: 10 }}
              label="Distance Traveled"
              type="number"
              value={visit.distance}
              variant="outlined"
              onChange={(e) => setVisit({ ...visit, distance: e.target.value })}
              InputProps={{
                endAdornment: <InputAdornment position="end">Miles</InputAdornment>,
              }}
            />
          </div>
        </div>
        <h3>Team members</h3>
        <div className="inputStyle">
          <div className="checkStyle">
            <NewMembers
              teamMembers={teamMembers}
              setTeamMembers={setTeamMembers}
            />
          </div>
        </div>
        <Button
          form="formVisit"
          type="submit"
          variant="outlined"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NewVisit;
