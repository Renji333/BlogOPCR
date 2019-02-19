import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'BlogOpenCR';

  posts = [
    {
      title : 'Premier Post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
      loveIts: 0,
      created_at: new Date()
    }, {
      title: 'Deuxième Post',
      content: 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.',
      loveIts: 0,
      created_at: new Date()
    }, {
      title: 'Last Post',
      content: 'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire.',
      loveIts: 0,
      created_at: new Date()
    }
  ];

}
