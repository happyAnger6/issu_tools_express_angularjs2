export class User {
  constructor (public id: number, public name: string, public jobno: string, public email: string,
               public passwd: string, public modules: string[], public team: string, public role: string) {}
}
