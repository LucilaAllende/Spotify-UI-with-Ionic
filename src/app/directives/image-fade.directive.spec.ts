import { Renderer2 } from '@angular/core';
import { ImageFadeDirective } from './image-fade.directive';
import { DomController } from '@ionic/angular';

describe('ImageFadeDirective', () => {
  it('should create an instance', () => {
    const rendererMock = {} as Renderer2;
    const domCtrlMock = {} as DomController;
    const directive = new ImageFadeDirective(rendererMock, domCtrlMock);
    expect(directive).toBeTruthy();
  });
});
