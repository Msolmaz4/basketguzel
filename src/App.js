import data from './data'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product';
import { useState ,useEffect} from 'react';
import Basket from './Basket';

function App() {

  //map ve product ayarladiktan sonra basket constunu olusrurduk
  //sonra bunu productt gonderdik
  const [ basket,setBasket] = useState([])

//enson olarak hesap zaptitiruy ilk basta console kontrol edriz sonra onu yoruma liriz
//sonra yeniden cost atariz

const [cost,setCost]= useState()

//basket degisince bunu yapariz
useEffect(() => {
  //console.log(basket)
  const totalPrice =basket.reduce((pre,basket)=>pre+(basket.amount*basket.price),0)
  setCost(totalPrice)



}, [basket]);


//en son olarak toplam hesap yapilir


  return (
    <div className="App">
      {
        data.map((er)=>(
          <Product
          basket={basket}
          setBasket={setBasket}
          er={er}
         
       
          />
        ))
      }
      <Basket 
      cost={cost}
      basket={basket}
      />

   </div>
  );
}

export default App;
