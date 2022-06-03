import React, {useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { fetchGreetingsFromApi } from '../redux/greetings/greetingReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  useSelector(state => state.greetings);

  useEffect(() => {
    dispatch(fetchGreetingsFromApi())
  },[]);

  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  )
}

export default Greeting
