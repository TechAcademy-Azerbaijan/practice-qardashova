const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
    let n = parseInt(result.input);  
  for (let i = 1; i < n; i++) {
    if (i*i < n) {
      console.log(i*i);
    }
  }
  
});
