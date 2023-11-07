
import { Button, Form } from 'react-bootstrap';
import style from './home.module.scss'
import SideMenu from '../../components/SideMenu';
import { useState } from 'react';




function Home() {
  const [numbers, setNumbers] = useState([]);
  const [quantity, setQuantity] = useState();
  const [selectedNum, setSelected] = useState();

  function getNumbers() {
    return (!numbers) ? null : (
      <tbody>
        {numbers.map((item) => {
          return (
            <tr>
              <td>{item.number}</td>
              <td>{item.repeat}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }

  function SelectNumber(num){

    numbers.map((n) => {
      if(n.number == num){
        n.repeat += 1
      }
    })
  }

  function ListRender(qtt) {
    const n = []

    for (let i = 0; i < qtt; i++) {
      const number = Math.floor(Math.random() * 10);
      const obj = {
        "number" : number,
        "repeat" : 0
      }
      n.push(obj)
    }
    setNumbers(n)
  }

  return (
    <>
      <SideMenu />
      <div className={style.home}>

        <div className={style.numbers}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="number" placeholder="Digite quantos numeros deseja: " onChange={e => setQuantity(e.target.value)} />
          </Form.Group>
          <Button type="submit" onClick={() => ListRender(quantity)}>Gerar Lista</Button>
        </div>

        <div className={style.numbers}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="number" placeholder="Selecione um numero: " onChange={e => setSelected(e.target.value)} />
          </Form.Group>
          <Button type="submit" onClick={() => SelectNumber(selectedNum)}>Selecionar Numero</Button>
        </div>
      </div>
      <div className={style.numberslist}>
        <table border="1">
          <tr>
            <td>Numero</td>
            <td>Repetido</td>
          </tr>
            {getNumbers()}
        </table>
      </div>


    </>
  );
}


export default Home;