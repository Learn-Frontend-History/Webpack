class User {
  constructor(name, birthday) {
    this.name = name
    this.birthday = birthday
  }

  toString() {
    return `User ${JSON.stringify({
      name: this.name,
      birthday: this.birthday.toISOString()
    })}`
  }
}
