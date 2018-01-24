import { Component, OnInit } from '@angular/core';
import { PromptService } from "../../../../services/prompt.service";

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {

  prompts: string[];
  editPrompt: string;
  oper: number;
  index: number;
  constructor(private promptService: PromptService) { this.oper = 0; }

  ngOnInit() {
    this.prompts = this.promptService.getPrompts();
  }

  onAddNew() {
    this.oper = 1;
    this.editPrompt = "";
  }

  onEdit(index: number, prompt: string) {
    this.oper = 2;
    this.index = index;
    this.editPrompt = prompt;
  }

  onSubmit(): void {
    if (this.oper == 2) {
      this.promptService.updatePrompt(this.index, this.editPrompt);
    }
    else if (this.oper === 1) {
      this.promptService.addPrompt(this.editPrompt);
    }
    this.prompts = this.promptService.getPrompts(); //update all prompts after edit.
  }

}
