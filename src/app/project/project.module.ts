import { NgModule } from '@angular/core'
import { ProjectListComponent } from './projectlist.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations:[
    ProjectListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
        { path: 'projects', component: ProjectListComponent },
    ])
  ]
})

export class ProjectModule{}
