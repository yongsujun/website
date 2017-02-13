import { NgModule } from '@angular/core'
import { PhotoListComponent } from './photolist.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations:[
    PhotoListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
        { path: 'photos', component: PhotoListComponent },
    ])
  ]
})

export class PhotoModule{}
