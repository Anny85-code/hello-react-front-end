import axios from "axios"

const FETCH_GREETINGS = 'hello-react-front-end/greetings/FETCH_GREETINGS'

const getGreetings = (payload) => ({
  type: FETCH_GREETINGS,
  payload,
})


const initialState = []


export const fetchGreetingsFromApi = () => async (dispatch) => {
    const result = await axios.get('localhost:3000/api/v1/greetings',{mode: 'no-cors'});
    
    const data = await result
    dispatch(getGreetings(data));

    // const req = await fetch('http://localhost:3000/api/v1/greetings', {
    //   mode: 'no-cors'
    // });
    // const res = await req.json();
    // dispatch(getGreetings(res));
    // console.log('Hi bright',res);
  };

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer
