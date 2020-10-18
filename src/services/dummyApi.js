export default function dummyCallApi(status) {
  return new Promise((reject,resolve) => {
    if (status === 'success') {
      resolve({data: [1, 2, 3, 4]});
    } else {
      reject('Sorry an error has occured');
    }
  });
}