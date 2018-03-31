import { Component, OnInit, Inject } from '@angular/core';
import { Team } from '../model/team.model';
import { Event } from '@angular/router';
import { Gallery } from '../model/gallery.model';
import { FileOperationService } from '../services/file-operation.service';
import {TEAM_JSON,EVENT_JSON,GALLERY_JSON} from '../constant';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  private teamList: Team[];
  private eventList: Event[];
  private galleryList: Gallery[];
  constructor(private fileOper: FileOperationService,
    @Inject('jsonurl') private jsonurl: string,
    @Inject('galleryurl') private galleryurl: string,
    @Inject('eventurl') private eventurl: string,
    @Inject('teamurl') private teamurl: string) { }

  ngOnInit() {
    this.fileOper.getJSON(this.jsonurl+TEAM_JSON).subscribe((res: any) => {
      this.teamList = res;
      console.log(res);
    },(err:any) => console.log(err));

    this.fileOper.getJSON(this.jsonurl+EVENT_JSON).subscribe((res: any) => {
      this.eventList = res;
      console.log(res);
    },(err:any) => console.log(err));

    this.fileOper.getJSON(this.jsonurl+GALLERY_JSON).subscribe((res: any) => {
      this.galleryList = res;
      console.log(res);
    },(err:any) => console.log(err));
  }

}
