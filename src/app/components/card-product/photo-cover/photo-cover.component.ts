import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-cover',
  templateUrl: './photo-cover.component.html',
  styleUrls: ['./photo-cover.component.css']
})
export class PhotoCoverComponent implements OnInit {

	@Input()
	photoCover:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
