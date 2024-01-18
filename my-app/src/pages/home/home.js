
import { Button, Form } from 'react-bootstrap';
import style from './home.module.scss'
import SideMenu from '../../components/SideMenu';
import { useState } from 'react';




function Home() {
  const [indexes, setIndexes] = useState([]);
  const [quantity, setQuantity] = useState();
  const [selectedNum, setSelected] = useState();
  const [percent, setPercent] = useState();


  function SortNumbers(num) {
    setIndexes(prev => prev.map((n) => {
      return n
    }).sort(function (a, b) {
      return a.nonrepeat - b.nonrepeat
    }))
  }


  function GetIndexes() {
    var a = 0


    return (!indexes) ? null : (
      <tbody>
        {indexes.map((item) => {
          a += 1
          return (
            <tr>
              <td>{a}</td>
              <td>{item.linha}</td>
              <td>{item.repeat}</td>
              <td>{item.nonrepeat}</td>
              <td>{item.number}</td>
              <td>{item.pct}%</td>
            </tr>
          );
        })}
      </tbody>
    )
  }

  function SelectNumber(num) {
    var splittedNums = num.split(",")

    splittedNums.forEach(nm => {
      setIndexes(prev => prev.map((n) => {
        if (n.number === Number(nm)) {
            n.repeat += 1
            n.pct = 0.01
            n.nonrepeat = 0
        }
        else {
          n.pct += (n.pct * percent)
          n.nonrepeat += 1
        }
        return n
      }))
    })
    SortNumbers()
  }

  function ListRender(qtt) {
    let n = []
    for (let i = 0; i < qtt; i++) {
      const number = Math.floor(Math.random() * 25) + 1;
      const obj = {
        "index": i + 1,
        "linha": i + 1,
        "number": number,
        "repeat": 0,
        "nonrepeat": 0,
        "pct": 0.01
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
            <Form.Control type="number" placeholder="Digite quantas linhas: " onChange={e => setQuantity(e.target.value)} />
          </Form.Group>
          <Button type="submit" onClick={() => ListRender(quantity)}>Gerar Lista</Button>
        </div>

        <div className={style.numbers}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Selecione um numero: " onChange={e => setSelected(e.target.value)} />
          </Form.Group>
          {/* <Button className={style.button} type="submit" onClick={() => SelectNumber(selectedNum)}>Sel e ord por Posição</Button> */}
          <Button className={style.button} type="submit" onClick={() => SelectNumber(selectedNum)}>Select Number</Button>
        </div>

        <div className={style.numbers}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Escreva a Porcentagem: " onChange={e => setPercent((e.target.value) / 100)} />
          </Form.Group>
        </div>

      </div>
      <div className={style.numberslist}>
        <table border="1">
          <tr>
            <th>Posição</th>
            <th>Linha</th>
            <th>Repetido</th>
            <th>Não Repetido</th>
            <th>Numero</th>
            <th>Porcentagem</th>
          </tr>
          {GetIndexes()}
        </table>
      </div>


    </>
  );
}


export default Home;