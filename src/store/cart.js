
let cart = {
    state:{
        cartlist:[]
    },
    getters:{
       cartlength(state){
          return state.cartlist.length;
       },
       totalPrice(state){     
          return Number(state.cartlist.reduce((prev,item)=>{
            // if(item.selected){
              return prev+item.price*item.qty*item.selected;
            // }
          },0)).toFixed(2)
          
       },
       saleGoods(state){
          return state.cartlist.map(item=>{
              item.price *= 0.5;
              return item;
          })
       }
       
    },
  
    mutations:{
      // state: store中的state
      // payload：调用mutaion时传入的参数
        add2cart(state,goods){
          state.cartlist.unshift(goods);
        },
        removeFromCart(state,id){
          state.cartlist = state.cartlist.filter(item=>item.id!=id);
        },
        clearCart(state){
          state.cartlist = [];
        },
        changeQty(state,{id,qty}){
          state.cartlist.forEach(item=>{
              if(item.id === id){
                  item.qty = qty;
              }
          })
        }
    },
    // actions:{
    //   async changeQtyAsync(context,{id,qty}){
    //     // context: 类似与store的对象
    //     // payload: 调用action时传入的参数
    //     // 获取库存数量kucun，然后与传入的qty进行对比
    //     // 如qty<=kucun， 放行（操作mutation）
    //     // 如果qty>kucun，提示库存不足
  
    //     let {data} = await axios.get('http://localhost:1907/goods/kucun')
    //     console.log('kucun:',data);
    //     let kucun = data.data;
    //     if(qty<=kucun){
    //       context.commit('changeQty',{id,qty})
    //     }else{
    //       // 库存不足
    //       Message.error('当前商品库存不足');
    //       context.commit('changeQty',{id,qty:kucun})
    //     }
    //   }
    // }
}

export default cart;