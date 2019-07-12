import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer';

import CharacterList from './CharacterList'

describe('<CharacterList />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<CharacterList />).toJSON()

      expect(tree).toMatchSnapshot();
  })
})