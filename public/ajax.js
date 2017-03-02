var ajax = {
  getRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  }
}

// var ajax = {
//   postRequest: function(url, callback){
//     var request = new XMLHttpRequest();
//     request.open('POST', url);
//     request.onload = callback;
//     request.send();
//   }
// }

// module.exports = ajax;