import axios from 'axios';
import React from 'react';
import { AxiosContext } from 'react-axios/lib/components/AxiosProvider';
import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';

axios.defaults.withCredentials = true;

export default function FormPage() {
  const [cookies, setCookie] = useCookies(['USERTOKEN']);

  function makeid() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 20; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  async function sendRequest() {
    const usertoken = makeid();
    //setCookie('USERTOKEN', usertoken);

    const cookies = new Cookies();

    cookies.set('USERTOKEN', usertoken, { path: '/api', sameSite: 'none', secure: true });

    console.log(usertoken)

    const response = await axios('http://localhost:8080/api/sauce', {
      method: 'post',
      data: {
        usertoken
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      withCredentials: true
    });

    console.log(response);
  }


  return (
    <div>
      <div>FormPage</div>
      <button onClick={sendRequest}>Totally not suspicious button</button>
    </div>
  )
}