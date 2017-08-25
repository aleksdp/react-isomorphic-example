import React from 'react'
import {shallow} from 'enzyme'

import TestFull from '../TestFull'

const item = {
    advert_name: 'test advert'
}

describe('TestFull', () => {
    it('render', () => {
        shallow(<TestFull item={item}/>)
    })
})