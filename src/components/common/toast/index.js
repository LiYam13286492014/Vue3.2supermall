import Toast from './toast.vue'

const obj ={}

obj.install = function(Vue){
    const toastconst = Vue.extend(Toast)

    const toast = new toastconst()

    toast.$mount(document.createElement('div'))

    document.body.appendChild(toast.$el)

    Vue.prototype.$toast= toast
}


export default obj