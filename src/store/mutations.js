export default{
    addCount(state,payload){
        payload.count += 1
        console.log('in');
    },
    payloadCount(state,payload){
        payload.checked = true
        state.cartList.push(payload)
        console.log('out');
    },
    check(state,payload){
        payload.checked = !payload.checked
        
    }
}