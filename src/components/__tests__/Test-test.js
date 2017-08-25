import React from 'react'
import {shallow} from 'enzyme'

import Test from '../Test'

const items = [
    {
        advert_name: 'test'
    }
]

describe('Test', () => {
    it('render', () => {
        shallow(<Test items={items}/>)
    })

})