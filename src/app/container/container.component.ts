import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  showSecret = false;
  mylogs = []; // add array of logs
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  onDisplaySecret(event: Event){
    this.counter = this.counter + 1;

    this.showSecret = !this.showSecret;
    event.srcElement.innerHTML = this.showSecret
      ? "Hide Secret"
      : "Show Secret";

    // this.mylogs.push(this.counter + ": changed to - " + event.srcElement.innerHTML);
    //this.mylogs.push(this.mylogs.length + 1);
    this.mylogs.push(new Date());
    console.log(this.mylogs);
  }

  getColor(){
    return this.counter >= 5 ? "blue" : "white";
  }
}
