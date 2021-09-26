import { Component, EventEmitter, Output } from '@angular/core';
import { UnexpectedError } from '../../../../model/error/unexpected-error';

@Component({
  selector: 'image-resize-kun-resize-range-slider-component',
  templateUrl: 'resize-range-slider.component.html',
})
export class ResizeRangeSliderComponent {
  @Output() public resizeRange: EventEmitter<number> =
    new EventEmitter<number>();
  public readonly RANGE_MAX = 6;
  public readonly RANGE_MIN = 2;

  public async onChangeRange(event: Event) {
    if (event.target == null) {
      throw new UnexpectedError('event.target is null.');
    }
    const inputElement = event.target as HTMLInputElement;
    const range = Number.parseInt(inputElement.value, 10);
    if (Number.isNaN(range)) {
      throw new UnexpectedError('range must be numeric.');
    }
    this.resizeRange.emit(range);
  }
}
