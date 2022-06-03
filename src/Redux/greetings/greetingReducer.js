const FETCH_GREETINGS = 'hello-react-front-end/greetings/FETCH_GREETINGS';

const getGreetings = (payload) => ({
  type: FETCH_GREETINGS,
  payload,
});

const initialState = [];

export const fetchGreetingsFromApi = () => async (dispatch) => {
  const req = await fetch('http://localhost:3000/api/v1/greetings');
  const res = await req.json();
  dispatch(getGreetings(res));
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
