import axios from 'axios'
import { config } from '../config';

export const signinUser = async ()=> {
  console.log(`${process.env.REACT_APP_BASE_URL}/auth/google`, 'redirect');
  try {
    const result = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}/auth/google`
    })
    return result
  } catch (error) {
    console.log(error);
    return error
  }
}

export const getAllMentors = async(email,  proficientLanguages)=>{
  let url = config.backendUrl + "/mentor/getMentor"
  try {
    const result = await axios({
      method: 'post',
      url: url,
      data: {
        "email": email,
        "proficientLanguages": proficientLanguages
      }
    })
    console.log(result)
    return result
  } catch (error) {
    console.log(error);
    return error
  }
}


export const updateMentor = async data => {
  try {
    const result = await axios({
      method: 'put',
      url: `${process.env.REACT_APP_BASE_URL}/users`,
      data
    })
    return result
  } catch (error) {
    return error
  }
}

export const loginUser = async data => {
  try {
    const result = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/login`,
      data
    })
    return result
  } catch (error) {
    console.log(error, 'this is the error')
    return error
  }
}



export const getUser= async id =>{ 
  try {
    const result = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}/users/${id}`
    })
    console.log(result, '*********');
    return result
  } catch (error) {
    console.log(error);
    return error.message
  }
}