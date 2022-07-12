const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
    let n = result.input;
  let arr = n.split(',');
  console.log(Math.max(...arr));
});
