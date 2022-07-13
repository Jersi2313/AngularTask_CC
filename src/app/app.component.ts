import { Component } from '@angular/core';
import { WordpressService } from './wordpress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tabsexample';

  //options: any[];
  //options2: any[];
  posts: any;
  posts2: any;

  constructor(private wp: WordpressService) {

    //this.options = [
    //{id: 1, icon:'icon', des:'Reach out to Williamson'},
    //{id: 2, icon:'icon', des:'Email to Mikes Cookies'},
    //{id: 3, icon:'icon', des:'Text to Rishis Bagels'}
    //];
    //this.options2 = [
    //{id: 1, icon:'icon', des:'Credit Review Rejected for Mikes Cookies'},
    //{id: 2, icon:'icon', des:'Past Close Date for Rishis Bagels'},
    //{id: 3, icon:'icon', des:'Email Newoffers to Cameron Williamson'}
    //];

    this.wp.getprosectingPosts().subscribe(
      (
        res: any) => {
          this.posts = res;
          console.log(res)
        }
        );

     this.wp.getpipelinePosts().subscribe(
      (
        res: any) => {
          this.posts2 = res;
          console.log(res)
        }
        );
  }

}
