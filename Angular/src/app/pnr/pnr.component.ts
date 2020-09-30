import { Component } from '@angular/core';
import {PnrService} from 'src/app/services/pnr.service';
@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.css']
})
export class PnrComponent {
  pnrNo: number;
  data: any;
  constructor(private pnr: PnrService) { }

  checkStatus(){
    //alert("you entered "+ this.pnrNo);
    this.pnr.checkStatus(this.pnrNo).subscribe(response =>{
      this.data = response;
    });
  }


}
