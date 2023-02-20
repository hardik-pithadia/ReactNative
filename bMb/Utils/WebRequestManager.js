export const postDataToServer = (url, params, jwtToken = '') => {
  return new Promise(resolve => {
    const header = {
      Accept: 'application/json',
      'Content-Type': 'text/plain',
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
          console.log('RESPONSE : ' + JSON.stringify(responseData));
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