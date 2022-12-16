// Default handling of response
const defaultHandler = (promise, res) => {
    promise
        .then((data) => {
          // console.log("response", circularJSON.stringify(data));
          let dataArray = toArray(data);
          console.log(dataArray);
          res.status(200).send(dataArray);
        })
        .catch((err) => {
          // console.log("response error", circularJSON.stringify(err));
          res.status(400).send(err);
        });
  }

  module.exports = defaultHandler;