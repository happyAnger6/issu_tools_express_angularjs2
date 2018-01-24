export class Branch {
  constructor(public id: number, public name: string, public parentId: number, public childIDs: number[], public feedbackFlag: number) {}
}
