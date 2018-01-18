// นี่คือหน้า Home นะ
import React from 'react'
// import Intro from '../components/Intro/'

import What from '../components/What/index'
import Who from '../components/Who/index'
import Where from '../components/Where/index'
import GameBut from '../components/Core/GameBut'
import Navbar from '../components/Core/Navbar'

const index = () => (
	<div>
		<Navbar/>                
		{/* <section>
			<Intro />
		</section> */}
		<section>        	
			<What />
		</section>
		<section>
			<Who />
		</section>
		<section>
			<Where/>
		</section>
	</div>
)

export default index
