const API = {
  endPoint: "https://opentdb.com/api.php?amount=50&category=18",
  get() {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open("GET", API.endPoint);
      request.onload = () => resolve(JSON.parse(request.responseText));
      request.onerror = () => reject(request.statusText);
      request.send();
    });
  }
};

export default API;
