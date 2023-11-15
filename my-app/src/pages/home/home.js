
import { Button, Form } from 'react-bootstrap';
import style from './home.module.scss'
import SideMenu from '../../components/SideMenu';
import { useState } from 'react';




function Home() {
  const [indexes, setIndexes] = useState([]);
  const [quantity, setQuantity] = useState();
  const [selectedNum, setSelected] = useState();
  const [numsList, setNums] = useState([]);
  const [percent, setPercent] = useState();

  function getIndexes() {
    return (!indexes) ? null : (
      <tbody>
        {indexes.map((item) => {
          return (
            <tr>
              <td>{item.index}</td>
              <td>{item.number}</td>
              <td>{item.repeat}</td>
              <td>{item.pct}%</td>
            </tr>
          );
        })}
      </tbody>
    )
  }

  function SelectNumber(num) {
    var splittedNums = num.split(",")
    var nums = []

    splittedNums.forEach(nm => {
      setIndexes(prev => prev.map((n) => {
        if (n.number === Number(nm)) {
          n.repeat += 1
          n.pct *= n.pct
          nums.push(nm)
        }
        else{
          n.number = Math.floor(Math.random() * 10);
          n.repeat = 0
          n.pct = percent
        }
        setNums(nums)
        return n
      }))
    });
  }

  function ListRender(qtt) {
    var n = []

    for (let i = 0; i < qtt; i++) {
      const number = Math.floor(Math.random() * 10);
      const obj = {
        "index": i + 1,
        "number": number,
        "repeat": 0,
        "pct": percent
      }

      n.push(obj)
    }
    setIndexes(n)
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
            <Form.Control type="text" placeholder="Selecione um numero: " onChange={e => setSelected(e.target.value)} />
          </Form.Group>
          <Button type="submit" onClick={() => SelectNumber(selectedNum)}>Selecionar Numero</Button>
        </div>

        <div className={style.numbers}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Escreva a Porcentagem: " onChange={e => setPercent((e.target.value)/100)} />
          </Form.Group>
        </div>

      </div>
      <div className={style.numberslist}>
        <table border="1">
          <tr>
            <th>Index</th>
            <th>Numero</th>
            <th>Repetido</th>
            <th>Porcentagem</th>
          </tr>
          {getIndexes()}
        </table>
      </div>


    </>
  );
}


export default Home;