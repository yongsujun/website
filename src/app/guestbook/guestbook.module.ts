import { NgModule } from '@angular/core'
import { GuestBookListComponent } from './guestbooklist.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations:[
    GuestBookListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
        { path: 'guestbooks', component: GuestBookListComponent },
    ])
  ]
})

export class GuestbookModule{}
