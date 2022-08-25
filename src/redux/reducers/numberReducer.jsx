
const stateDefault = 10;

export const numberReducer = (state = 1, action) => {
    switch (action.type) {
        case 'TANG_SL': {
            //lay payload
            const { payload } = action;
            //thay doi state 
            state += Number(payload);
            //return ve state  moi
            return state;
        }

        default: {
            return state;
        }
    }
}