const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.13.4',
    port: 50541

  });

  /**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
};

const handleUserInput = (key) => {
  if (key === '\u2190') {
    conn.write('Move: left');
  }
  if (key === '\u2191') {
    conn.write('Move: up');
  }
  if (key === '\u2192') {
    conn.write('Move: right');
  }
  if (key === '\u2193') {
    conn.write('Move: down');
  }
  if (key === '\u0003') {
    console.log('Thanks for playing!');
    process.exit();
  }
};


  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('data', data => {
    console.log(data);
  });
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: CRQ');
  });

  conn.on('connect', () => {
    setInterval(() => {
      // conn.write('Move: up');
    }, 50);
    
  });

  return conn;
}

module.exports = connect;