import { Component, OnInit } from '@angular/core';
// We want use services in this component then we must import that service
import { DataService } from '../data.service';
// hold data returned from API
import { Observable } from 'rxjs';
// show animation
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { User } from '../users/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
  
})
export class UsersComponent implements OnInit {
  // We will create property to hold data
  users$: User[];

  constructor(private data: DataService) { }

  // Angular lifecycle hooks - This will be executed after components load
  ngOnInit() {
    // access to property and methods in data, then must subscribe
    this.data.getUsers().subscribe((data) =>
      {
         this.users$ = data;
         console.log(data);
      }
      
    )
  }

}
