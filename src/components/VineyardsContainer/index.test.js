import React from 'react';
import { shallow } from 'enzyme';
import { VineyardsContainer } from '.';

describe('VineyardsContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<VineyardsContainer />);
    expect(wrapper).toMatchSnapshot();
  })
})