
import { Button, Form } from 'react-bootstrap';
import style from './home.module.scss'
import SideMenu from '../../components/SideMenu';
import { useState } from 'react';




function Home() {
  const [indexes, setIndexes] = useState([]);
  const [quantity, setQuantity] = useState();
  const [selectedNum, setSelected] = useState();
  const [percent, setPercent] = useState();
  const [indexesList, setList] = useState();


  function SearchIndex(num){
    setIndexes(prev => prev.map((n) => {
      if (n.linha === num) {
        n.number = Math.floor(Math.random() * 10);
        n.repeat += 1
        n.pct = 0.01
      }
      else {
        n.number = Math.floor(Math.random() * 10);
        n.pct += (n.pct * percent)
      }
      return n
    }).sort(function(a,b){
      return b.repeat - a.repeat
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
    var index = 0
    
    splittedNums.forEach(nm => {
      setIndexes(prev => prev.map((n) => {
        index +=1
        if (n.number === Number(nm)) {
          SearchIndex(index)
        }
        else {
          n.number = Math.floor(Math.random() * 10);
          n.pct += (n.pct * percent)
        }
        return n
      }))
    });
    
    
  }

  function ListRender(qtt) {
    let n = []
    for (let i = 0; i < qtt; i++) {
      const number = Math.floor(Math.random() * 10);
      const obj = {
        "index": i + 1,
        "linha": i + 1,
        "number": number,
        "repeat": 0,
        "pct": 0.01
      }
      n.push(obj)
    }

    const listObj ={
      "number": indexesList.lenght + 1,
      "list":n
    }

    setIndexes(n)
    setList(listObj)
    
    console.log()
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