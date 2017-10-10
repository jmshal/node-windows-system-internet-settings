var matchLine = /^\s{4}(\w+(\s\w+)*?)\s{4}(\w+)\s{4}(.*)$/;

// This technique of parsing is fairly naive, but it works pretty well, so eh.
function parseSettings(str) {
  var lines = String(str).split('\n');
  var root = {};

  lines.forEach(function (line) {
    var key, type, value;

    var values = line.match(matchLine);
    if (!values) {
      return;
    }

    key = values[1];
    type = values[3];
    value = values[4];

    if (type === 'REG_DWORD') {
      value = value === '0x1';
    }

    root[key] = value;
  });

  return root;
}

module.exports = parseSettings;
