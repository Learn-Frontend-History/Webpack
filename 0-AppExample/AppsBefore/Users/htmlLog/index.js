function htmlLog() {
  const logElement = document.createElement('div')
  logElement.id = 'htmlLogDisplay'
  document.body.append(logElement)

  return {
    add(message) {
      const parser = new DOMParser()

      logElement.append(parser.parseFromString(
        `<div class="row"><span class="message">${message}</span><span class="timestamp">${(new Date()).toISOString()}</span></div>`,
        'text/html'
      ).body.firstChild)
    },
    clear() { logElement.innerHTML = '' },

    log(...args) {
      args.forEach(this.add);
    }
  }
}

window.console = htmlLog()
