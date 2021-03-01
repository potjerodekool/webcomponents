import  { Component, Event, EventEmitter, h, Prop } from  '@stencil/core';
import { DuoListModel } from '../../DuoListModel';
import { Option } from '../../Option';

@Component({
  tag: 'duo-list',
  styleUrl: 'duo-list.css',
  shadow: true
})
export class DuoList  {
  @Prop({mutable: true}) value: DuoListModel = {
      leftOptions: Array<Option>(),
      rightOptions: Array<Option>(),
  };

  @Prop({mutable: true}) size = 10;

  @Event(
    {
      eventName: 'value-change',
      bubbles: true,
      cancelable: true,
      composed: true
    }
  ) valuechange : EventEmitter<DuoListModel>;

  private handleLeftListKeyboardEvent = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      const select = e.target as HTMLSelectElement

      for (let i = select.selectedOptions.length - 1; i > -1; i--) {
         this.moveOptionToRightList(select.selectedOptions[i].index)
      }
    }
  }

  private handleLeftListMouseEvent = (e: MouseEvent) => {
    if (e.type === 'click') {
      const option = e.target as HTMLOptionElement
      this.moveOptionToRightList(option.index);
    }
  }

  private moveOptionToRightList(index: number) {
    const option = this.value.leftOptions[index]
    const leftOptions = this.value.leftOptions.filter( (_, i) => i != index )
    const rightOptions = [...this.value.rightOptions, option];
    this.value = {...this.value, rightOptions: rightOptions, leftOptions: leftOptions };
    this.emitChangeEvent();
  }

  private handleRightListKeyboardEvent = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      const select = e.target as HTMLSelectElement

      for (let i = select.selectedOptions.length - 1; i > -1; i--) {
         this.moveOptionToLeftList(select.selectedOptions[i].index)
      }
    }
  }

  private handleRightListMouseEvent = (e: MouseEvent) => {
    if (e.type === 'click') {
      const option = e.target as HTMLOptionElement
      this.moveOptionToLeftList(option.index);
    }
  }

  private moveOptionToLeftList(index: number) {
    const option = this.value.rightOptions[index]
    const rightOptions = this.value.rightOptions.filter( (_, i) => i != index )
    const leftOptions = [...this.value.leftOptions, option];
    this.value = {...this.value, rightOptions: rightOptions, leftOptions: leftOptions };
    this.emitChangeEvent();
  }

  private emitChangeEvent() {
    this.valuechange.emit(this.value);
  }

  render() {
    return  (
      <div class="duo-list">
        <select size={this.size} class="list"
          onKeyDown={this.handleLeftListKeyboardEvent}>
          {
            this.value.leftOptions.map(option =>
              <option class="duo-list-option" onClick={this.handleLeftListMouseEvent} value={option.value}>{option.text}</option>
            )
          }
        </select>
        <select size={this.size}
          class="list"
          onKeyDown={this.handleRightListKeyboardEvent}>
          {
            this.value.rightOptions.map(option =>
              <option class="duo-list-option" onClick={this.handleRightListMouseEvent} value={option.value}>{option.text}</option>
            )
          }
        </select>
      </div>
    );
  }
}
