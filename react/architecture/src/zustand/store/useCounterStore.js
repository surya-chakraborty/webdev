import { create } from 'zustand'

// zustand create a single global store to manage state and updater functions

const useCounterStore = create((set) => ({
    count: 0,

    increase: () => 
        set((state) => ({
            count: state.count + 1
        })),
    
    decrease: () => 
        set((state) => ({
            count: state.count - 1
        }))

}))

export default useCounterStore