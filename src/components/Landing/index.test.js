import React from 'react';
import { shallow } from 'enzyme';
import { Landing } from '.';

describe('Landing', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper).toMatchSnapshot();
  })
})