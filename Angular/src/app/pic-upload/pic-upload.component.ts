import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-pic-upload',
  templateUrl: './pic-upload.component.html',
  styleUrls: ['./pic-upload.component.css']
})
export class PicUploadComponent implements OnInit {

  customerId: any;
  profilePic: any;
  filePath: string = "g:/uploads/";
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerId = localStorage.getItem('custId');
  }

  onFileSelection(event){
    this.profilePic = event.target.files[0];
  }
  upload(){
    let formData: FormData = new FormData();
    formData.append('custId', this.customerId);
    formData.append('profilePic', this.profilePic);

    this.customerService.uploadPic(formData).subscribe(data =>{
      alert(JSON.stringify(data));
      this.filePath = this.filePath+data.statusMessage;
    });

  }

}
