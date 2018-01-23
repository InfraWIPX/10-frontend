
import react from 'react'
import styled from 'styled-components'

const ImgLefe = styled.img`
  width:20%;
  margin-left:15vw;
  right: 0;
`
const ImgRight = styled.img`
  width:20%;
  margin-right:15vw;
  right: 0;
`

const Box = styled.div`
  width: 46vw;
  height: 35hw;    
  padding: 1vw;
  background-color:#FBFBEF;
  opecity:0.8;
  margin-top:1vw;
	margin-bottom:1vw;
	border-radius: 10px;
`
const Content = () => (
	<div className="container-fluid">
		<div className="row d-flex">
			<div className="col img-responesive align-self-center">
				<ImgLefe src="/static/image/question.svg" />
			</div>
			<div className="col-6">
				<Box>ถามสิ่</Box>
			</div>
			<div className="col">
			</div>
		</div>
		<div className="row d-flex">
			<div className="col">
			</div>
			<div className="col-6">
				<Box>ตอบสิ่</Box>
			</div>
			<div className="col img-responesive align-self-center">
				<ImgRight src="/static/image/question.svg" />
			</div>
		</div>
	</div>
)
export default Content