import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';

import { AwesomePipe }        from './pipe/awesome.pipe';

import { ContactComponent }   from './components/contact/contact.component';
import { ContactService }     from './services/contact.service';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  imports:      [ CommonModule, FormsModule, ContactRoutingModule ],
  declarations: [ ContactComponent, HighlightDirective, AwesomePipe ],
  providers:    [ ContactService ]
})
export class ContactModule { }
