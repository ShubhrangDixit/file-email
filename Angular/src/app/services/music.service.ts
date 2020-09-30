import { Injectable } from '@angular/core';
import { AlbumModel } from '../album.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  albumList : AlbumModel[] = [];
  constructor() { }
    saveAlbum(album:AlbumModel)
    {
      this.albumList.push(album);
    }
   getList():AlbumModel[]
   {
    return this.albumList;
   }
  deleteAlbum(index:number)
  {
    return this.albumList.splice(index,1);
  }
}
