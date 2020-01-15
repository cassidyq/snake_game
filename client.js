const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.13.4',
    port: 50541

  });
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
    setTimeout(() => {
      conn.write('Move: up');
    }, 500);
    
  });

  return conn;
}

module.exports = connect;