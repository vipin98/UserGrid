import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Users: [{ id: 1, First_Name: "vipin", Last_Name: "pandey", Email: "pvipin907@gmail.com" },
    { id: 2, First_Name: "rahul", Last_Name: "shukla", Email: "Rshukla@gmail.com" },
    { id: 3, First_Name: "rishi", Last_Name: "shukla", Email: "rishi@gmail.com" },
    { id: 4, First_Name: "raj", Last_Name: "tiwari", Email: "raj@gmail.com" },
    { id: 5, First_Name: "nitin", Last_Name: "grag", Email: "nitin@gmail.com" },]
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCreateUser: (state, action) => {
            state.Users.push(action.payload);
        },
        setEditUser: (state, action) => {
            let Users = [...state.Users,];
            const index = state.Users.findIndex((item) => item.id === action.payload.id)
            if (index >= 0) {
                Users[index] = action.payload
            } else {
                console.log(`cant remove User id ${action.payload}`)
            }
            return { Users }
        },
        setDeletUser: (state, action) => {
            let Users = [...state.Users];
            const index = state.Users.findIndex((item) => item.id === action.payload.id)
            if (index >= 0) {
                Users.splice(index, 1)
            } else {
                console.log(`cant remove User id ${action.payload.id}`)
            }
            return { Users }
        },
    }
})

export const { setCreateUser, setEditUser, setDeletUser } = UserSlice.actions;

export const selectUser = (state) => state.user.Users;
export const selectUserId = (state) => state.user.ById;


export default UserSlice.reducer;