import React from 'react';

const URL = 'http://localhost/cakefactory/save_order.php';

interface Response {
  status: string,
  msg: string,
}

export const saveOrder = async (email: string, phone: string, cake_name: string, callback: boolean): Promise<Response> => {
  try {
    let requestData = {
      email: email,
      phone: phone,
      cake_name: cake_name,
      callback: callback,
    }

    let response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(requestData)
    })

    const { data } =  await response.json()
    return data
  } catch (error: any) {
    return {
      status: 'error',
      msg: error.message
    }
  }
}