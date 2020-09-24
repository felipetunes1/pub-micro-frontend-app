import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerFormat'
})
export class TimerFormatPipe implements PipeTransform {

  transform(time: number, ...args: unknown[]): unknown {
    // let mil = time % 1000;
    // time = (time - mil) / 1000;
    let seconds = time % 60;
    time = (time - seconds) / 60;
    let minutes = time % 60;
    time = (time - minutes) / 60;
    let hours = time % 60;
    time = (time - hours) / 60;
    let days = time % 24;

    return `${days}d ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

}
