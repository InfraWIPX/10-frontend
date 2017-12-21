import styled, { injectGlobal } from 'styled-components'
import Niramit from '../static/font/TH Niramit AS.ttf'


injectGlobal`
    @font-face{
        font-family: "Niramit";
        src : url('${Niramit}') format('opentype');
    }
    .Niramit{
        font-family:"Niramit";
    }
`

