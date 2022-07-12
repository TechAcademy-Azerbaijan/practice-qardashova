const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
  let n = parseInt(result.input);
  console.log(parseInt(n/100)*100 + parseInt((n%100)/20)*30 +((n%100)%20)*2);
  
});
