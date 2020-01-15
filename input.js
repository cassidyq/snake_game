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

module.exports = setupInput;