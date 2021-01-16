export const reducer = (state, action) => {
    switch (action.type) {
        case "toggle_button":
            return {
                ...state,
                active: !state.active
            }
      
        default:
            return state
    }
}
  
export const initialState = {
    active: false,
    data: [{"id":"japan","color":"hsl(345, 70%, 50%)","data":[{"x":"plane","y":186},{"x":"helicopter","y":234},{"x":"boat","y":126},{"x":"train","y":227},{"x":"subway","y":158},{"x":"bus","y":104},{"x":"car","y":226},{"x":"moto","y":287},{"x":"bicycle","y":17},{"x":"horse","y":11},{"x":"skateboard","y":187},{"x":"others","y":27}]},{"id":"france","color":"hsl(304, 70%, 50%)","data":[{"x":"plane","y":5},{"x":"helicopter","y":90},{"x":"boat","y":237},{"x":"train","y":114},{"x":"subway","y":13},{"x":"bus","y":200},{"x":"car","y":166},{"x":"moto","y":287},{"x":"bicycle","y":68},{"x":"horse","y":259},{"x":"skateboard","y":77},{"x":"others","y":80}]},{"id":"us","color":"hsl(65, 70%, 50%)","data":[{"x":"plane","y":254},{"x":"helicopter","y":201},{"x":"boat","y":196},{"x":"train","y":18},{"x":"subway","y":122},{"x":"bus","y":291},{"x":"car","y":179},{"x":"moto","y":85},{"x":"bicycle","y":164},{"x":"horse","y":1},{"x":"skateboard","y":136},{"x":"others","y":263}]},{"id":"germany","color":"hsl(226, 70%, 50%)","data":[{"x":"plane","y":129},{"x":"helicopter","y":92},{"x":"boat","y":36},{"x":"train","y":102},{"x":"subway","y":276},{"x":"bus","y":93},{"x":"car","y":252},{"x":"moto","y":220},{"x":"bicycle","y":263},{"x":"horse","y":34},{"x":"skateboard","y":233},{"x":"others","y":277}]},{"id":"norway","color":"hsl(299, 70%, 50%)","data":[{"x":"plane","y":178},{"x":"helicopter","y":61},{"x":"boat","y":287},{"x":"train","y":41},{"x":"subway","y":210},{"x":"bus","y":83},{"x":"car","y":195},{"x":"moto","y":281},{"x":"bicycle","y":7},{"x":"horse","y":241},{"x":"skateboard","y":234},{"x":"others","y":14}]}]
}
