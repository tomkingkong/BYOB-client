import React from 'react';
import { shallow } from 'enzyme';
import { WineCard } from '.';

describe('WineCard', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<WineCard />);
    expect(wrapper).toMatchSnapshot();
  })
})