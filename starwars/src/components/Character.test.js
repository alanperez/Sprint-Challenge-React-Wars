import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer';

import Character from './Character'

describe('<Character />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Character />).toJSON()

      expect(tree).toMatchSnapshot();
  })
})