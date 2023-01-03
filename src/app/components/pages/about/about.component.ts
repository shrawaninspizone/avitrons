import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(  
    private titleService: Title,  
    private metaTagService: Meta  
  ) { }  
    

  ngOnInit() {  
    this.titleService.setTitle("Example of SEO Meta Tag using Angular");  
    
    this.metaTagService.addTags([  
      { name: 'keywords', content: 'Angular SEO Title, Meta Description, Meta Keyword Example' },  
      { name: 'description', content: 'Example of SEO Meta Tag using Angular Example of SEO Meta Tag using Angular Example of SEO Meta Tag using Angular' },  
      { name: 'robots', content: 'index, follow' },  
      { charset: 'UTF-8' } , 
    ]);  
        
  }  
}  