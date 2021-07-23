function hello() {
    import("./lib").then(_ => _.hello())
}

talk.addEventListener('click', hello)
