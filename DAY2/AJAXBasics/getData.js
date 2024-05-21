function GetData() {
  // AJAX request to fetch the data
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/postsss"); // config settings

  // when ready state changes 0 -> 1 -> 2 - > 3 -> 4
  xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
      console.log(xmlHttpReq.responseText);
    } else if (xmlHttpReq.readyState == 4 && xmlHttpReq.status !== 200) {
      console.log("Something went wrong !", xmlHttpReq.status);
    }
  };
  xmlHttpReq.send(); // places the async request
}
