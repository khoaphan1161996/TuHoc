const initialState = [
    {
        id:1,
        name:'Iphone 6s Plus',
        price:400,
        status:true
    },
    {
        id:2,
        name:'Samsung Galaxy S7 Edge',
        price:700,
        status:false
    },
    {
        id:3,
        name:'Oppo F1s',
        price:300,
        status:false
    }
]

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state]
    }
}

export default products;