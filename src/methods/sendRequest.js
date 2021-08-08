function sendRequest(method, url) {
  return fetch(url, {method})
  .then(response => {
    if (response.ok) {
      if (response.status === 202) {
        return "запись успешно создана"
      } else {
        return response.json()
      }
    };
    return response.json().then(err => {
      const e = new Error('Что-то пошло не так');
      e.data = err;
      throw e
    });
  })
};

export default sendRequest;