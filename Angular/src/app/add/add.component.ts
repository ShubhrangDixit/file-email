import { Component, OnInit } from '@angular/core';
import { AlbumModel } from '../album.model';
import { Router } from '@angular/router';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  album= new AlbumModel;
  constructor(private router : Router, private service : MusicService) { 
  }

  ngOnInit() {
  }
  saveAlbum()
  {
    // Logic to save album
    this.service.saveAlbum(this.album);
    this.router.navigate(['list']);
  }

}
