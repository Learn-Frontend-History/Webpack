import { User } from './User'

const users = [
  ['Ivan', new Date('1987-01-01')],
  ['Alex', new Date('1986-04-07')],
  ['Vika', new Date('1997-12-17')]
].map(data => new User(...data));

for (let user of users) {
  console.log(user.toString());
}
