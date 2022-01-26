export default{
    addcart(context,payload){
      return new Promise((resolve,reject) => {
        let oldproduct = context.state.cartList.find(item => item.iid === payload.iid)

        if(oldproduct){
            // oldproduct.count += 1
            context.commit('addCount',oldproduct)
            resolve('商品数量+1')
            
        }else{
            payload.count = 1
            context.commit('payloadCount',payload)
            resolve('加入购物车成功')
        }
      })
    },

    checked(context,payload){
        context.commit('check',payload)
    }
}