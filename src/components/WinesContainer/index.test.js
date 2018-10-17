import React from 'react';
import { shallow } from 'enzyme';
import { WinesContainer } from '.';

describe('WinesContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<WinesContainer wines={[]}/>);
    expect(wrapper).toMatchSnapshot();
  })
})