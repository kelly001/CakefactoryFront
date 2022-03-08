import React from 'react';
import cookie from 'react-cookies';

const SYNC = _sync();
const API_URL = 'https://api.somesite.com/';

export const showSubscribeModal = async (email, type = 'avia', timeout = 3000) => {
  const cookie_name = cookie.get('is_subscribed')
  let isSubscribed = false;

  if (email != null && email !== '') {

    let response = await fetch(API_URL);

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
                       // получаем тело ответа (см. про этот метод ниже)
      let json = await response.json();
      let result = JSON.parse(json)
      isSubscribed = result.is_subscribed ? result.is_subscribed : false;
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }

  if (!isSubscribed && !cookie.load(cookie_name)) {
    //some code
  }
}