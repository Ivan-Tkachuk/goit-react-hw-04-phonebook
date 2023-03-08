import React from 'react';
import PropTypes from 'prop-types';

import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by Name{' '}
    <Input type="text" value={value} onChange={onChange} />
  </Label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
