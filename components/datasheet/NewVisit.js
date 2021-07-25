/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, InputAdornment } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import NewMembers from './NewMembers';
import {
  WaterConditions,
  FlowType,
  Visibility,
  ViewingConditions,
} from '../../constants/conditions';
import creekList from '../../constants/creeknames';

const NewVisit = () => {
  // const visit = useSelector((state) => state.visit);
  const [visit, setVisit] = useState({
    teamMembers: [
      { name: '', teamLead: true },
      { name: '', teamLead: false },
    ],
  });
  const dispatch = useDispatch();
  const handleMembers = (members) => setVisit({ ...visit, teamMembers: members });

  useEffect(() => {
    console.log('visit', visit);
  }, [visit]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitting', visit);
    setVisit({});
  };

  return (
    <div>
      <h2>Manual Entry of Field Data</h2>
      {visit.teamMembers && (
        <form id="formVisit" onSubmit={submitHandler}>
          <h3>Details</h3>
          <div className="introStyle">
            <TextField
              InputLabelProps={{ shrink: true }}
              className="inputStyle"
              label="Date of visit"
              type="date"
              required
              value={visit.date || ''}
              variant="outlined"
              // or local object
              onChange={(e) => {
                setVisit({ ...visit, date: e.target.value });
                console.log('visit', visit);
              }}
            />
            <Autocomplete
              className="inputStyle"
              options={creekList}
              inputValue={visit.creekName || ''}
              onInputChange={(event, value) => setVisit({ ...visit, creekName: value })}
              renderInput={(params) => (
                <TextField {...params} required label="Creek Name" variant="outlined" />
              )}
            />
            <TextField
              style={{ marginTop: 10 }}
              rows={3}
              label="Comments"
              multiline
              variant="outlined"
              value={visit.comments || ''}
              onChange={(e) => {
                setVisit({ ...visit, comments: e.target.value });
              }}
            />
          </div>
          <h3>Conditions</h3>
          <div className="inputStyle">
            <div className="formGrid">
              <Autocomplete
                className="inputStyle"
                options={FlowType}
                inputValue={visit.flowType || ''}
                onInputChange={(event, value) => setVisit({ ...visit, flowType: value })}
                getOptionLabel={(option) => option.detail}
                renderInput={(params) => (
                  <TextField {...params} required label="Flow Type" variant="outlined" />
                )}
              />
              <Autocomplete
                className="inputStyle"
                options={Visibility}
                inputValue={visit.visibility || ''}
                onInputChange={(event, value) => setVisit({ ...visit, visibility: value })}
                getOptionLabel={(option) => option.detail}
                renderInput={(params) => (
                  <TextField {...params} required label="Visibility" variant="outlined" />
                )}
              />
              <Autocomplete
                className="inputStyle"
                options={WaterConditions}
                inputValue={visit.waterCondition}
                onInputChange={(event, value) => setVisit({ ...visit, waterCondition: value })}
                getOptionLabel={(option) => option.detail}
                renderInput={(params) => (
                  <TextField {...params} required label="Water Condition" variant="outlined" />
                )}
              />
              <Autocomplete
                className="inputStyle"
                options={ViewingConditions}
                inputValue={visit.viewCondition || ''}
                onInputChange={(event, value) => setVisit({ ...visit, viewCondition: value })}
                getOptionLabel={(option) => option.detail}
                renderInput={(params) => (
                  <TextField {...params} required label="View Condition" variant="outlined" />
                )}
              />
              <TextField
                style={{ marginTop: 10 }}
                label="Distance Traveled"
                type="number"
                required
                value={visit.distance || ''}
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
              <NewMembers handleMembers={handleMembers} members={visit.teamMembers} />
            </div>
          </div>
          <Button form="formVisit" type="submit" variant="outlined">
            Submit
          </Button>
        </form>
      )}
    </div>
  );
};

export default NewVisit;
