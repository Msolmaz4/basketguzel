import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";



//buraya gelince once add foksizonu zapariy 
//burada once urun var mi yok muyu if dongisuyle kontrol ederiz


function Product({
  er,

  basket,
  setBasket,
}) {


//burada tiklanan sayiyi yazdiralim
const basketPro = basket.find(item=>item.id === er.id)

//burada once urun var mi yok muyu if dongisuyle kontrol ederiz
  const add = () => {
    //burada varasa onu once sileriz sonra geri yukeriz
    const addFind = basket.find((el) => el.id === er.id);
    if (addFind) {
      addFind.amount += 1;
      setBasket([
        ...basket.filter((em) => em.id !== er.id),
        {
          id: er.id,
          name: er.name,
          img: er.img,
          price:er.price,
          amount: addFind.amount,
        },
      ]);
    } else {
      //burada yoksa ona gore yapariz
      setBasket([
        ...basket,
        {
          id: er.id,
          name: er.name,
          img: er.img,
          price:er.price,
          amount: 1,
        },
      ]);
    }
  };






  const remove=()=>{
  
    const remo= basket.find(ty=>ty.id === er.id)
    remo.amount -=1
    if(remo.amount=== 0){
      setBasket([...basket(item=>item.id !== er.id)])

    }

    else{
      setBasket([...basket.filter(item =>item.id !== er.id),
      {
        id:er.id,
        name:er.name,
        img:er.img,
        price:er.price,
        amount:remo.amount
      }])
    }
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={er.img} />
      <Card.Body>
        <Card.Title>{er.name}</Card.Title>
        <Card.Text>{er.price}</Card.Text>
        <Button variant="primary" onClick={add}>
          EKLE
        </Button>
        { basketPro && basketPro.amount || 0}
        <Button variant="primary" disabled={!basketPro}  onClick={remove}>CIKAR</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
