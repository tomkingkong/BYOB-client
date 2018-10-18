import React from 'react';
import { shallow } from 'enzyme';
import { WineForm } from '.';

describe('WineForm', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<WineForm />);
    expect(wrapper).toMatchSnapshot();
  })
})