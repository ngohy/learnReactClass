const stateDefault = './img/red-car.jpg';

export const imgCarReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SELECT_COLOR_CAR': {
            const { payload } = action;
            state = payload;
            return state;
        }

        default: {
            return state
        }
    }
}