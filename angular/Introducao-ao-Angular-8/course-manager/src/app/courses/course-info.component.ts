import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Course } from './course';
import { CourseService } from './course.service'

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
    
    course!: Course

    constructor(private activedRoute: ActivatedRoute, private couseService: CourseService){ }
    
    ngOnInit(): void {
        this.course = this.couseService.retrieveById(Number(this.activedRoute.snapshot.paramMap.get('id')))
    }

    save():void{
        this.couseService.save(this.course)
    }
}