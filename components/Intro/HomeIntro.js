// นี่คือหน้า Home นะ
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Logo from './Logo'
import Button from './Button'
import Bg from '../Bg'
import { compose, withState } from 'recompose'
import MoveToLeft from '../PageTransition/MoveToLeft'

const state = withState('check', 'setCheck', false)

const setCheck = (callback, data) => callback(!data)


const Index = props => (
	<Bg>
		<div className="container-fluid" >
			<MoveToLeft check={props.check}>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<center><Logo /></center>
						<center>
							<a>
								<Button onClick={() => setCheck(props.setCheck, props.check)} href='../../pages/character.js'>
									ไปผจญภัยกัน!
								</Button>
							</a>
						</center>
					</div>
				</div>
			</MoveToLeft>
		</div>
	</Bg>
)

const Indexcompose = compose(state)(Index)

export default Indexcompose