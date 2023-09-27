import { Component, Input, OnInit } from "@angular/core";
import { PhotoService } from "../../photo/photo.service";
import { PhotoComment } from "../../photo/photo-comment";
import { Observable } from "rxjs";

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit{
    @Input() photoId: number;
    comments$: Observable<PhotoComment[]>;
    constructor(private photoService: PhotoService){}

    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId);
    }
}