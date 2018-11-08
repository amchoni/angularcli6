import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
// access to url
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) { 
    // we need to get the id from parameters in the url, params.id we set in routing file app-routing path: 'details/:id'
    this.route.params.subscribe( params => this.user$ = params.id );
  }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data 
    );
  }

}
