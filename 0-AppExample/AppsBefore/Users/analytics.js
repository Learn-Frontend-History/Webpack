function analytics() {
  let count = 0

  const counter = _ => count++

  document.addEventListener('click', counter)

  return {
    getCount() { return count },
    reset() { count = 0 }
  }
}

window.analitycs = analytics()
