import { Component, OnInit, Input } from '@angular/core';
import { Noticias } from './../../models/noticias';
import { ClipboardService } from '../../services/clipboard.service';
import { ActionSheetService, ShowActionsOptions, ActionSheetButtonStyle } from '../../services/action-sheet.service';


@Component({
  selector: 'app-listar-noticia',
  templateUrl: './listar-noticia.component.html',
  styleUrls: ['./listar-noticia.component.scss'],
})
export class ListarNoticiaComponent implements OnInit {

  @Input()
  public noticia!: Noticias;

  constructor(
    private actionSheetService: ActionSheetService,
    private clipboardService: ClipboardService,
    ) { }


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

  
// OJITOOO
  async copyTextToClipboard() {
    const textToCopy = '¡Hola, mundo!';
    await this.clipboardService.copyToClipboard(textToCopy);
  }

  async pasteTextFromClipboard() {
    const copiedText = await this.clipboardService.getFromClipboard();
    console.log('Texto copiado:', copiedText);
  }
// FIN OJITO

  ngOnInit() { }

}
