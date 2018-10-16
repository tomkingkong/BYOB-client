import React from 'react';
import { shallow } from 'enzyme';
import { VineyardCard } from '.';

describe('VineyardCard', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<VineyardCard />);
    expect(wrapper).toMatchSnapshot();
  })
})