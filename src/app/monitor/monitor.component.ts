import {Component, OnInit} from '@angular/core';
import {SensorService} from "./services/sensor.service";

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.css'
})
export class MonitorComponent implements OnInit {
  temperature = 0;
  ph = 0;

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    this.sensorService.temperature$.subscribe({
      next: (resp) => {
        console.log(resp)
        this.temperature = resp
      }
    });
    this.sensorService.ph$.subscribe(ph => this.ph = ph);
  }

  calcCircumference(): number {
    return 2 * Math.PI * 28;
  }

  calcOffset(ph: number): number {
    const maxPh = 14; // maximum ph value
    const circumference = this.calcCircumference();
    const progress = (ph / maxPh) * circumference;
    return circumference - progress;
  }

}
