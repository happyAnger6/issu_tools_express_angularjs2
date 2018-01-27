export class User {
  constructor (public _id: number, public Name: string, public JobNo: string, public Email: string,
               public Passwd: string, public Modules: string[], public Team: string, public Role: string) {}
}
