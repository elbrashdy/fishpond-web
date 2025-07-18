import { Injectable } from '@angular/core';
import Pusher from "pusher-js";
import {BehaviorSubject} from "rxjs";
import {Utility} from "../../shared/Utility";

@Injectable({
  providedIn: 'root'
})

export class SensorService {

  private pusherClient;
  private channel;

  private temperatureSubject = new BehaviorSubject<number>(0);
  private phSubject = new BehaviorSubject<number>(0);

  temperature$ = this.temperatureSubject.asObservable();
  ph$ = this.phSubject.asObservable();

  constructor() {
    this.pusherClient = new Pusher(Utility.apiUrl, {
      cluster: 'ap2'
    });

    this.channel = this.pusherClient.subscribe('sensor-channel');


    this.channel.bind('reading-updated', (data: any) => {
      this.temperatureSubject.next(data.reading.temperature);
      this.phSubject.next(data.reading.ph_value);
    });
  }
}
