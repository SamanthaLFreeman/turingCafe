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

  it('should update state name when handleChange is called', () => {
    const mockEvent = { target: { name: 'name', value: 'Sam' } };
    const expected = 'Sam';

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('name')).toEqual(expected);
  });
})