import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";
import { CourseListComponent } from "./course-list.component";
import { CourseOptionsComponent } from "./course-options.component";
import { StarModule } from "../shared/component/stars/stars.module";

@NgModule({
    declarations:[
        CourseListComponent,
        CourseOptionsComponent,
    ],
    imports: [
        CommonModule,
        StarModule,
        AppPipeModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
        
            {
                path: 'courses/info/:id', component: CourseOptionsComponent
            },
    ])
    
    ]
})

export class CourseModule {

}