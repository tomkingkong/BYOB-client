import React from 'react';
import { shallow } from 'enzyme';
import { SearchVineyards } from '.';

describe('SearchVineyards', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SearchVineyards />);
    expect(wrapper).toMatchSnapshot();
  })
})