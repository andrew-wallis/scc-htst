function getParams(str) {
  if((str.indexOf('?') + 1) > 0) {
    var str = str.substring(str.indexOf('?') + 1);
    return str.split('&').reduce(function (params, param) {
      var paramSplit = param.split('=').map(function (value) {
          return decodeURIComponent(value.replace(/\+/g, ' '));
      });
      params[paramSplit[0]] = paramSplit[1];
      return params;
    }, {});
  } else {
    var params = {};
    return params;
  }
}