function foo() {
    for (let i = 0; i < 10; i++) {
        setTimeout(_ => console.log(i), 1000)
    }
}

foo();
