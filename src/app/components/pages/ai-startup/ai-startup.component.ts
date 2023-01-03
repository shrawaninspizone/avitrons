import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { BlogService } from 'src/app/blog.service';


@Component({
  selector: 'app-ai-startup',
  templateUrl: './ai-startup.component.html',
  styleUrls: ['./ai-startup.component.scss']
})
export class AiStartupComponent implements OnInit {

  blogPosts: any;
	id!: string;
	errorMessage: any;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private titleService: Title,  
    private metaTagService: Meta 
   ) { }

    ngOnInit() {
 
      this.getPosts();
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
      )
        .subscribe(() => {
   
          var rt = this.getChild(this.activatedRoute)
   
          rt.data.subscribe(data => {
            console.log(data);
             })
           })
{

           this.titleService.setTitle("Home of SEO Meta Tag using Angular");  
    
           this.metaTagService.addTags([  
             { name: 'keywords', content: 'Angular SEO Title, Meta Description, Meta Keyword Example' },  
             { name: 'description', content: 'Example of SEO Meta Tag using Angular Example of SEO Meta Tag using Angular Example of SEO Meta Tag using Angular' },  
             { name: 'robots', content: 'index, follow' },  
             { charset: 'UTF-8' } , 
           ]); 
          }


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
   
    getChild(activatedRoute: ActivatedRoute) {
      if (activatedRoute.firstChild) {
        return this.getChild(activatedRoute.firstChild);
      } else {
        return activatedRoute;
      }
   
    }
  }








