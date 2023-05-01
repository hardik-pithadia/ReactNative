export const postDataToServer = (url, params, jwtToken = '') => {
  return new Promise(resolve => {
    const header = {
      Accept: 'application/json',
      // 'Content-Type': 'text/plain',
      'Content-Type': 'application/json',
    };
    console.log('URL : ' + url);

    //    const jwtHeaders = {
    //      Authorization: 'Bearer ' + jwtToken,
    //    };
    //    var finalHeader = Object.assign({}, header);

    //    console.log('HEADERS : ' + JSON.stringify(finalHeader));

    setTimeout(async () => {
      fetch(url, {
        method: 'POST',
        headers: header,
        body: params,
      })
        .then(response101 => response101.json())
        .then(responseData => {
          resolve({
            success: true,
            response: responseData,
          });
        })
        .catch(error => {
          console.error('Error Result : ' + error);
          resolve({
            success: false,
            response: null,
          });
        });
    });
  });
};

export const getDataFromServer = (url, jwtToken = '') => {
  return new Promise(resolve => {
    const header = {
      Accept: 'application/json',
      // 'Content-Type': 'text/plain',
      // 'Content-Type': 'application/json',
    };
    console.log('URL : ' + url);

    const jwtHeaders = {
      Authorization: jwtToken,
    };
    var finalHeader = Object.assign({}, jwtHeaders, header);

    console.log('HEADERS : ' + JSON.stringify(finalHeader));

    setTimeout(async () => {
      fetch(url, {
        method: 'GET',
        headers: jwtHeaders,
      })
        .then(response101 => response101.json())
        .then(responseData => {
          resolve({
            success: true,
            response: responseData,
          });
        })
        .catch(error => {
          console.error('Error Result : ' + error);
          resolve({
            success: false,
            response: null,
          });
        });
    });
  });
};
