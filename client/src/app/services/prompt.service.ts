import { Injectable } from '@angular/core';
import {Prompt} from "../models/prompt";

@Injectable()
export class PromptService {

  Prompts: string[] = [
    "请关注此信息",
    "B70D001版本反馈今天结束，请抓紧!",
    "V9版本 issu工具马上就要发布了"
  ];
  constructor() { }

  getPrompts(): string[] {
    return this.Prompts;
  }

  addPrompt(content: string) {
    this.Prompts.push(content);
  }

  updatePrompt(id: number, content: string) {
    this.Prompts[id] = content;
  }

  deletePrompt(id: number) {
    this.Prompts.splice(id, 1);
  }
}
