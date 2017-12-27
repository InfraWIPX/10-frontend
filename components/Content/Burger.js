import react from 'react'
import { slide as Menu } from 'react-burger-menu'

class BurgerMenu extends React.Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-light">        
        <button className>
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
        <Menu>
          <a className="menu-item" href="#">หน้าแรก</a>
          <a className="menu-item" href="#">ค่ายของเรา</a>
          <a className="menu-item" href="#">เหมาะกับใคร</a>
          <a className="menu-item" href="#">สิ่งที่จะได้เรียนรู้</a>
          <a className="menu-item" href="#">เวลาและสถานที่</a>
          <a className="menu-item" href="#">คำถามที่พบบ่อย</a>
          <a className="menu-item" href="#">ติดต่อสอบถาม</a>
          <a className="menu-item" href="#">เกม</a>
        </Menu>
      </div>

    )
  }
}
export default BurgerMenu