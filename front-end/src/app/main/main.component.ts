import { Component, ViewChild, TemplateRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { OnInit } from '@angular/core';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


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
  title = 'front-end';
  clickShow(){
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
        msg:  "Đúng rồi nhé",
        timeout: 1000
      });
    }
    else {
      this.is_show = false
      if (this.check_alert) {
        this.alerts.push({
          type: 'danger',
          msg:  "Vẫn sai nhé",
          timeout: 1000
        });
        this.alert = "Vẫn sai nhé"
        this.check_alert = 0
      }
      else {
        this.alerts.push({
          type: 'danger',
          msg:  "Sai rồi nhé",
          timeout: 1000
        });
        this.alert = "Sai rồi nhé"
        this.check_alert = 1
      }
    }
  }
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template);
  }


  ngOnInit(): void {
  }

}
