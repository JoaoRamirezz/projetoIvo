
import { Button, Form } from 'react-bootstrap';
import style from './home.module.scss'
import SideMenu from '../../components/SideMenu';
import Title from '../../components/Title';
import { useState } from 'react';




function Home() {
  const [numbers, setNumbers] = useState([]);
  const [quantity, setQuantity] = useState();
  const showList = numbers.map((num) => 
  <li>{num}</li>
  )

  function ListRender(qtt) {
    const n = []

    for (let i = 0; i < qtt; i++) {
      const number = Math.floor(Math.random() * 10);
      n.push(number)
    }
    setNumbers(n)
    console.log(numbers)
  }

  return (
    <>
      <header className={style.Appheader}>
        <Title />
      </header>
      <div className={style.home}>
        <SideMenu />

        <div className={style.numbers}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Digite quantos numeros deseja: " onChange={e => setQuantity(e.target.value)}/>
          </Form.Group>
          <Button type="submit" onClick={() => ListRender(quantity)}>Gerar Lista</Button>
        </div>
        <div className={style.numberslist}>
          {showList}
        </div>

      </div>


    </>
  );
}


export default Home;