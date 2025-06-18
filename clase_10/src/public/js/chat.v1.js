const socket = io()


const input = document.getElementById("textoEntrada")
const logHbs = document.getElementById("log")


input.addEventListener('keyup', evt => {
    if (evt.key === "Enter") {
        socket.emit("message2", input.value)
        input.value = ''
    }
})


socket.on("log", data => {
    let logs = ''
    data.dataLogMessage.forEach(log => {
        logs += `<p>${log.id} dice: ${log.message}</p>`
    });
    logHbs.innerHTML = logs;
})