import React from 'react'

export default function FormPage() {

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
    console.log(usertoken)
    const response = await fetch("http://127.0.0.1:8080/api/sauce", usertoken);

    console.log(response);
  }


  return (
    <div>
      <div>FormPage</div>
      <button onClick={sendRequest}>Totally not suspicious button</button>
    </div>
  )
}