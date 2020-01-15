import React from 'react';
import { shallow } from 'enzyme';
import ReserveForm from './ReserveForm';

describe('ReserveForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ReserveForm />)
  })

  it('should match the snapshot with all of the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })
})