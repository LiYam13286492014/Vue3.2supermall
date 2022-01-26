export const backtop = {
    data() {
        return {
            isShow: false
        }
    },

    methods: {
        backtopclick(){
            this.$refs.Scroll.scrollTo(0,0,1000)
    },

}
}
