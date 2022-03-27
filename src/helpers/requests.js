import React from 'react';

const URL = 'http://localhost/cakefactory/save_order.php';

export const saveOrder = async (email, phone, cake_name, callback) => {
  try {
    let data = {
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
      body: JSON.stringify(data)
    })

    return await response.json()
  } catch (error) {
    console.log(error.message)
  }
}