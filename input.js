let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
};

const handleUserInput = (key) => {
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'f') {
    connection.write('Say: ssssssssssss!!');
  }
  if (key === '\u0003') {
    console.log('Thanks for playing!');
    process.exit();
  }
};

module.exports = setupInput;