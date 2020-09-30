import { Component, OnInit } from '@angular/core';
import { AlbumModel } from '../album.model';
import { Router } from '@angular/router';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: AlbumModel[] = [];
  
  constructor(private router : Router, private service : MusicService) { }

  ngOnInit() {
    this.list = this.service.getList();
  }

  delete(index : number) {
    var ans = confirm("Are you sure you want to delete?");
    if(ans) {
      this.service.deleteAlbum(index);
    }
  }

}
