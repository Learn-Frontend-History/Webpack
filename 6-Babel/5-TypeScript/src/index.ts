const MESSAGE: string = 'Hello typescript from babel!'

function send(message: string): void {
    message && alert(message)
}

send(MESSAGE)
