import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

	blogPosts: any;
	id!: string;
	errorMessage: any;
  
  constructor(
   private blogService: BlogService,
  ) { }

  ngOnInit() {
    this.getPosts();
  }
  
  getPosts() {
   
    this.blogService.getPosts().subscribe(
      (data) => {
        this.blogPosts = data;
        console.log(this.blogPosts);
       
      },
      (error) => {
        // if any error, Code throws the error
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');
        
      }
    );
  }
  
  
}
