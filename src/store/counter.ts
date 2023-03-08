import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', {
     state: () => {
        return{
            count: 10
        }
     },

     actions: {
        increment(val:number){
            this.count += val  
        },
    
      decrement(val:number){
        this.count -= val 

      },   
      async waitAndAdd() {
        setTimeout(() => {
            this.count++
        }, 3000)
      }
     
    },

    getters: {
        doubleCount: (state) => state.count * 2
    },
})

   
 
    