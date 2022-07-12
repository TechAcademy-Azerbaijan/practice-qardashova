const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
    let n = parseInt(result.input);
  let fibo = 0;
  if (n == 1 || n==0) {
    console.log(1);
  }
  else{
    fibo = fibo + n-1 + n-2;
    console.log(fibo);
  }
  
});
