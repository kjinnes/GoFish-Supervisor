/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, InputAdornment } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { updateVisit, newVisit } from '../../redux/actions/visitActions';
import NewMembers from './NewMembers';
import {
  WaterConditions, FlowType, Visibility, ViewingConditions,
} from '../../constants/conditions';
import creekList from '../../constants/creeknames';

const NewVisit = () => {
  const visit = useSelector((state) => state.visit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newVisit());
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const formVal = document.getElementById('formVisit');
    console.log(formVal.reportValidity());
  };

  return (
    <div>
      <h2>Manual Entry of Field Data</h2>
      {visit && (
      <form id="formVisit" onSubmit={submitHandler}>
        <h3>Details</h3>
        <div className="introStyle">
          <TextField
            className="inputStyle"
            label="Date of visit"
            type="date"
            value={visit.date}
            variant="outlined"
            onChange={(e) => dispatch(updateVisit({ date: e.target.value }))}
          />
          <Autocomplete
            className="inputStyle"
            options={creekList}
            inputValue={visit.creekName}
            onInputChange={(event, value) => dispatch(updateVisit({ creekName: value }))}
            renderInput={(params) => <TextField {...params} label="Creek Name" variant="outlined" />}
          />
          <TextField
            style={{ marginTop: 10 }}
            rows={3}
            label="Comments"
            multiline
            variant="outlined"
            value={visit.comments}
            onChange={(e) => dispatch(updateVisit({ comments: e.target.value }))}
          />
        </div>
        <h3>Conditions</h3>
        <div className="inputStyle">
          <div className="formGrid">
            <Autocomplete
              className="inputStyle"
              options={FlowType}
              inputValue={visit.flowType}
              onInputChange={(event, value) => dispatch(updateVisit({ flowType: value }))}
              getOptionLabel={(option) => option.detail}
              renderInput={(params) => <TextField {...params} label="Flow Type" variant="outlined" />}
            />
            <Autocomplete
              className="inputStyle"
              options={Visibility}
              inputValue={visit.visibility}
              onInputChange={(event, value) => dispatch(updateVisit({ visibility: value }))}
              getOptionLabel={(option) => option.detail}
              renderInput={(params) => <TextField {...params} label="Visibility" variant="outlined" />}
            />
            <Autocomplete
              className="inputStyle"
              options={WaterConditions}
              inputValue={visit.waterCondition}
              onInputChange={(event, value) => dispatch(updateVisit({ waterCondition: value }))}
              getOptionLabel={(option) => option.detail}
              renderInput={(params) => <TextField {...params} label="Water Condition" variant="outlined" />}
            />
            <Autocomplete
              className="inputStyle"
              options={ViewingConditions}
              inputValue={visit.viewCondition}
              onInputChange={(event, value) => dispatch(updateVisit({ viewCondition: value }))}
              getOptionLabel={(option) => option.detail}
              renderInput={(params) => <TextField {...params} label="View Condition" variant="outlined" />}
            />
            <TextField
              style={{ marginTop: 10 }}
              label="Distance Traveled"
              type="number"
              value={visit.distance}
              variant="outlined"
              onChange={(e) => dispatch(updateVisit({ distance: e.target.value }))}
              InputProps={{
                endAdornment: <InputAdornment position="end">Miles</InputAdornment>,
              }}
            />
          </div>
        </div>
        <h3>Team members</h3>
        <div className="inputStyle">
          <div className="checkStyle">
            <NewMembers />
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
      )}
    </div>
  );
};

export default NewVisit;
