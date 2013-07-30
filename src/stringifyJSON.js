// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

/*
var stringifyJSON = function (obj) {
  var resultString = '';
  var updaterString = '';
  for (prop in obj) {
  	// string, bool or integer
  	if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === 'null') {
  		updaterString = '\"' + prop + '\"' + ':' + '\"' + String(obj) + '\"';
  		resultString = resultString.concat(updaterString) + ',';
  	}
  	// array
  	else if (Object.prototype.toString.call(obj) === '[object Array]') {
  		updaterString = '\"' + prop + '\"' + ':' + '[';
  		resultString = resultString.concat(updaterString);
  		for (var i = 0; i < obj.length; i++) {
  			resultString = resultString.concat(String(obj[i]));
  		}
  		resultString = resultString + '],'
  	}
  	// object
  	else if (Object.prototype.toString.call(obj) === '[object Object]') {
  		updaterString = stringifyJSON(obj);
  		resultString = resultString.concat(updaterString);
  	}
  }
  if (resultString[resultString.length - 1] === ',') {
  	resultString = resultString.slice(0, -1);
  }
  resultString = '{' + resultString + '}';
  //console.log(resultString);
  return resultString;
};

*/

var stringifyJSON = function (obj) {
  var resultString = '';
  var updaterString = '';

  // string, bool or integer
  if (typeof obj === 'number' || typeof obj === 'boolean') {
  	// updaterString = '\"' + String(obj) + '\"';
  	updaterString = obj;
  	resultString = resultString.concat(updaterString) + ',';
  }
  // string
  else if (typeof obj === 'string') {
  	updaterString = '\"' + String(obj) + '\"';
  	resultString = resultString.concat(updaterString) + ',';
  }
  // undefined
  else if (typeof obj === 'undefined') {
  	updaterString = null;
  	resultString = resultString.concat(updaterString) + ',';
  }

  // array
  else if (Object.prototype.toString.call(obj) === '[object Array]') {
  	updaterString = '[';
  	resultString = resultString.concat(updaterString);
  	for (var i = 0; i < obj.length; i++) {
  		resultString = resultString.concat(String(obj[i]));
  	}
  	resultString = resultString + '],'
  }
  // object
  else if (Object.prototype.toString.call(obj) === '[object Object]') {
  	updaterString = stringifyJSON(obj);
  	resultString = resultString.concat(updaterString);
  }
 
  if (resultString[resultString.length - 1] === ',') {
  	resultString = resultString.slice(0, -1);
  }
  // resultString = '{' + resultString + '}';
  // console.log(resultString);
  return resultString;
};