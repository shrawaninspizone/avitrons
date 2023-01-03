import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  id!: string;
  singlePost:  any;
  errorMessage: any;
  slug: any;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
 
  ) {}

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug') as string;
    console.log(this.slug);

    this.getSinglePost();
  }

  getSinglePost() {
   
    this.blogService.getSinglePost(this.slug).subscribe(
      (data) => {
        // Try to run this code
        this.singlePost = data;

        console.log(this.singlePost);
        
      },
      (error) => {
        // if any error, Code throws the error
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');
      
      }
    );
  }

}
