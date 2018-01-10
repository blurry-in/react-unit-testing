import React from 'react';
import { shallow } from 'enzyme';
import ImageComponent from './ImageComponent';

const testData = {
  albumId: 1,
  id: 1,
  thumbnailUrl: 'thumbUrl',
  title: 'title',
  url: 'mainUrl',
};

const onDelete = jest.fn();

describe('Image Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ImageComponent data={testData} onDelete={onDelete} />);
  });

  it('Should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('Should call the callback', () => {
    wrapper = shallow(<ImageComponent data={testData} onDelete={onDelete} />);
    const button = wrapper.find('button');
    button.simulate('click');
    button.simulate('click');
    expect(onDelete).toBeCalledWith(testData);
    expect(onDelete).toHaveBeenCalledTimes(2);
  });
});
