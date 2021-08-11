import { Component, ViewChild, TemplateRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { OnInit } from '@angular/core';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild('formDelete') public formDelete: ModalDirective;
  public date = ''
  public is_show = false
  public alert = ''
  public check_alert = 0
  public src_video = ''
  public is_open= [0,0,0,0,0,0,0,0,0]
  urlSafe: SafeResourceUrl;
  public video_ = ['https://drive.google.com/file/d/1vLQYDcqvfBO4gO5jytWtmgZ_i--8_s8e/preview',
    'https://drive.google.com/file/d/1y_hSbeGm_r-kxDYSf5KA9OpzxGGrhZKT/preview',
    'https://drive.google.com/file/d/1-jUW1apxgeByG8lnJ8h7EJtVXf-uspgL/preview',
    'https://drive.google.com/file/d/1snGBVxFGXC9HxB-0BYTF1TXg8x90TMXT/preview',
    'https://drive.google.com/file/d/1Us38VbSmdNhP1MZtY5A2lUL4pOfT6glU/preview',
    'https://drive.google.com/file/d/134tyV6DcAmC1Gelbgz751evdDGj8xoWv/preview',
    'https://drive.google.com/file/d/1Z3GwFEjyMRei-oZ0yd0w7tQNjrlQr1xG/preview',
    'https://drive.google.com/file/d/16BkK03439aJXzXqiUERRaQO0AEGe4uB9/preview']
  title = 'front-end';
  clickShow(index: number) {
    this.src_video = this.video_[index]
    this.is_open[index] = 1
    console.log(this.src_video)
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.src_video);
    this.formDelete.show()
  }
  public alerts: any[] = [];
  onClosedAlert(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
  checkBirth() {
    var correct_date = '1999-08-13'
    if (this.date == correct_date) {
      this.is_show = true
      this.alert = "Đúng rồi nhé"
      this.alerts.push({
        type: 'success',
        msg: "Đúng rồi nhé",
        timeout: 1000
      });
    }
    else {
      this.is_show = false
      if (this.check_alert) {
        this.alerts.push({
          type: 'danger',
          msg: "Vẫn sai nhé",
          timeout: 1000
        });
        this.alert = "Vẫn sai nhé"
        this.check_alert = 0
      }
      else {
        this.alerts.push({
          type: 'danger',
          msg: "Sai rồi nhé",
          timeout: 1000
        });
        this.alert = "Sai rồi nhé"
        this.check_alert = 1
      }
    }
  }
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, public sanitizer: DomSanitizer) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.src_video);
  }

}
