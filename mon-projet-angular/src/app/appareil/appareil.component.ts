import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getColor() {
      if(this.appareilStatus === 'allumé') {
        return 'green';
      } else if(this.appareilStatus === 'éteint') {
        return 'red';
      }
  }

  getStatus() {
    return this.appareilStatus;
  }

  OnSwitchOn() {
    this.appareilService.switchOnOne(this.index);
  }

  OnSwitchOff() {
    this.appareilService.switchOffOne(this.index);
  }
}
