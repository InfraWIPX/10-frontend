import React from 'react'
import styled from 'styled-components'

import content from './content.json'
import Card from '../Core/Card'

const index =()=> (
    <Card img={content.imgL} text={content.text} />
)
export default index