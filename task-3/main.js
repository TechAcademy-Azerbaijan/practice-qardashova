const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
    let n = result.input;
  let arr = n.split(',');
  for (let i = (arr.length - 1); i >= 0; i--) {
    console.log(arr[i]);  
  }
  console.log(arr);
  
});
