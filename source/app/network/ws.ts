import url from "./config";

class Network {
  constructor(url: URL) {
    let socket = new WebSocket(url);
    console.log(socket);
    socket.onopen = function (e) {
      console.debug("[DEBUG] Соединение установлено");
      console.debug("Отправляем данные на сервер");
      socket.send("Меня зовут Джон");
    };

    socket.onmessage = function (event) {
      const parsed = JSON.parse(event.data);
      console.debug(parsed);
    };

    socket.onclose = function (event) {
      if (event.wasClean) {
        console.debug(
          `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
        );
      } else {
        console.debug("[close] Соединение прервано");
        setInterval(() => {
          let newsocket = new WebSocket(url);
          newsocket.onopen = () => {
            console.log("восстановлено");
          };
        }, 1000);
      }
    };

    socket.onerror = function (error) {
      console.debug(`[error]`);
    };
  }
}

export default Network;
