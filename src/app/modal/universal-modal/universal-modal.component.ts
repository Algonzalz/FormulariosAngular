import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-universal-modal',
  templateUrl: './universal-modal.component.html',
  styleUrls: ['./universal-modal.component.css']
})
export class UniversalModalComponent implements OnInit {
  @Input() name;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }


  modalClose() {
    this.modalService.dismissAll();
  }
}
