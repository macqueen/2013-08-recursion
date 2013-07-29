// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

var stringifyJSON = function (obj) {
  var resultString = '';
  var updaterString = '';
  for (prop in obj) {
  	// string, bool or integer
  	if (typeof obj[prop] === 'string' || typeof obj[prop] === 'number' || typeof obj[prop] === 'boolean') {
  		updaterString = '\"' + prop + '\"' + ':' + '\"' + String(obj[prop]) + '\"';
  		resultString = resultString.concat(updaterString) + ',';
  	}
  	// array
  	else if (Object.prototype.toString.call(obj[prop]) === '[object Array]') {
  		updaterString = '\"' + prop + '\"' + ':' + '[';
  		resultString = resultString.concat(updaterString);
  		for (var i = 0; i < obj[prop].length; i++) {
  			resultString = resultString.concat(String(obj[prop][i]));
  		}
  		resultString = resultString + '],'
  	}
  	// object
  	else if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
  		stringifyJSON(obj[prop]);
  	}
  }
  if (resultString[resultString.length - 1] === ',') {
  	resultString = resultString.slice(0, -1);
  }
  resultString = '{' + resultString + '}';
  console.log(resultString);
  return resultString;
};
