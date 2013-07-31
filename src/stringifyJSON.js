// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:


var stringifyJSON = function (obj) {
  var resultString = '';
  var updaterString = '';

  // string, bool or integer
  if (typeof obj === 'number' || typeof obj === 'boolean') {
  	// updaterString = '\"' + String(obj) + '\"';
  	updaterString = obj;
  	resultString = resultString.concat(updaterString);
  	return resultString;
  }
  // string
  else if (typeof obj === 'string') {
  	updaterString = '\"' + String(obj) + '\"';
  	resultString = resultString.concat(updaterString);
  	return resultString;
  }
  // undefined
  // else if (typeof obj === 'undefined') {
  else if (!obj) {
  	updaterString = null;
  	resultString = resultString.concat(updaterString);
  	return resultString;
  }

  // array
  else if (Object.prototype.toString.call(obj) === '[object Array]') {
  	updaterString = '[';
  	resultString = resultString.concat(updaterString);
  	var tempObject = [];
  	for (var i = 0; i < obj.length; i++) {
  		tempObject[i] = stringifyJSON(obj[i]);
  	}
  	updaterString = tempObject.join();
  	resultString = resultString + updaterString + ']' //comma removed
  	return resultString;
  }
  // object
  else if (Object.prototype.toString.call(obj) === '[object Object]') {
  	updaterString = '{';
  	resultString = resultString.concat(updaterString);
  	for (prop in obj) {
  		updaterString = stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]);
  		resultString = resultString.concat(updaterString) + ',';
  	}
  	if (resultString[resultString.length - 1] === ',') {
  		resultString = resultString.slice(0, -1);
  	}
  	resultString = resultString + '}';
  	return resultString;
  }
  return resultString;
};