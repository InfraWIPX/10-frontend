import react from 'react'
import Content from '../OurCamp/ContentOurCamp'
import Button from '../OurCamp/ButtonCon'
import RegisBut from '../Content/RegisBut'
import BgStory from '../Content/BgStory'
import Menu from '../Content/Burger'
 
const HomeOurCamp = () => (
    <BgStory>
        <Menu/>        
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Content />
                </div>
            </div>
        </div>
        <Button />
        <RegisBut />
    </BgStory>
)
export default HomeOurCamp