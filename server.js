const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/calculateWinner') {
    if('botChoice' in params){
       let random = Math.random()
       let botItem = "paper"
       if (random < .2){
         botItem = "scissors"
       }else if(random < .4){
       		botItem = "rock";
       	}else if(random < .6){
        		botItem = "spock";
        	}else if(random < .8){
          		botItem = "lizard";
          	}
            return botItem;
          }

          let response;

          if((botItem === "rock" && playerChoice === "lizard") ||
             (botItem === "rock" && playerChoice === "scissors") ||
             (botItem === "scissors" && playerChoice === "paper") ||
             (botItem === "scissors" && playerChoice === "lizard") ||
             (botItem === "paper" && playerChoice === "spock") ||
             (botItem === "paper" && playerChoice === "rock") ||
             (botItem === "spock" && playerChoice === "scissors") ||
             (botItem === "spock" && playerChoice === "rock") ||
             (botItem === "lizard" && playerChoice === "paper") ||
             (botItem === "lizard" && playerChoice === "spock")){
      

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(JSON.stringify(response));
    }
  }else if(page == '/css/style.css'){
      fs.readFile('css/style.css', function(err, data) {
        res.write(data);
        res.end();
      });
    }else if (page == '/js/main.js'){
      fs.readFile('js/main.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
    }else{
      figlet('404!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.write(data);
        res.end();
      });
    };
})
  server.listen(8000);
