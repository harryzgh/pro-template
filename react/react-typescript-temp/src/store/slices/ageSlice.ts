import { createSlice } from '@reduxjs/toolkit'

export const ageSlice = createSlice({
    name: 'age',
    initialState: {
        age: 10
    },
    reducers: {
        incrementAge: state => {
            // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
            // 并不是真正的改变状态值，因为它使用了 Immer 库
            // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
            // 不可变的状态
            state.age += 1
        },
        setAge: state => {
            state.age = 20
        }
    }
})

export const { setAge, incrementAge } = ageSlice.actions
export default ageSlice.reducer