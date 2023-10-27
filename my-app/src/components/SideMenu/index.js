import style from "./sidemenu.module.scss"
import { Button } from 'react-bootstrap';



export default function SideMenu(){
    return (
      <div className={style.sidemenu}>
        <div className={style.usericon}>
        </div>
        <div className={style.button}>
          <Button type="submit">HOME</Button>{' '}
        </div>
        <div className={style.button}>
          <Button type="submit">HOME</Button>{' '}
        </div>
      </div>
      
    
    );
    }