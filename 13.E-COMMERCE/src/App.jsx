import { useEffect, useState } from "react";
import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from "react-redux";
import { calculateBasket, setDrawer } from "./redux/slice/basketSlice";

function App() {
  const {products,drawer,totalAmount} = useSelector((store)=>store.basket)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateBasket())
  },[])

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer onClose={()=>dispatch(setDrawer()) } anchor="right" open={drawer}>
          {
            products && products.map((product, index) => {
              return (
              <div key={product.id}>
                  <div className="flex-row" style={{padding:"20px"}}>
                    <img style={{marginRight:"5px"}} src={product.image} width={50} height={50} />
                    <p style={{width:"200px",marginRight:"5px"}} > {product.title} ({product.count}) </p>
                    <p style={{fontWeight:"bold",marginRight:"10px",width:"60px"}} > {product.price} tl </p>
                    <button style={{ padding:"px",borderRadius:"5px",backgroundColor:"orange",border:"1px solid black",color:"white",width:"50px" }} >sil</button>
                  </div>
                </div>
              )
            })
          }
           <div>
            <p className="toplamTutar">Toplam Tutar : {totalAmount} </p>
          </div>
      </Drawer >
      </PageContainer>
    </div>
  );
}

export default App;
