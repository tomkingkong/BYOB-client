import React from 'react';
import { shallow } from 'enzyme';
import { VineyardForm } from '.';

describe('VineyardForm', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<VineyardForm />);
    expect(wrapper).toMatchSnapshot();
  })
})