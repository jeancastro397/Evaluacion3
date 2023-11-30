import { Component } from '@angular/core';
import { ActionSheetService, ShowActionsOptions, ActionSheetButtonStyle } from '../services/action-sheet.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private actionSheetService : ActionSheetService,

  ) {}

  async mostrarActionSheet() {
    const options: ShowActionsOptions = {
      title: 'Funciona el ActionSheet',
      message: 'Mensaje opcional',
      options: [
        { title: 'Opción 1', style: ActionSheetButtonStyle.Default },
        { title: 'Opción 2', style: ActionSheetButtonStyle.Default },
        { title: 'Cancelar', style: ActionSheetButtonStyle.Cancel },
      ],
    };

    try {
      const result = await this.actionSheetService.showActions(options);
      console.log('Opción seleccionada:', result.index);
    } catch (error) {
      console.error('Error al mostrar el Action Sheet en el componente:', error);
    }
  }

}
