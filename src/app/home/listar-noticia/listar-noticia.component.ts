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
      title: 'Opciones Noticia',
      message: 'Mensaje opcional',
      options: [
        { title: 'Compartir', style: ActionSheetButtonStyle.Default },
        { title: 'Opción 2', style: ActionSheetButtonStyle.Default },
        { title: 'Cancelar', style: ActionSheetButtonStyle.Cancel },
      ],
    };

    try {
      const result = await this.actionSheetService.showActions(options);
      console.log('Opción seleccionada:', result.index);

      if (result.index === 0) {
        await this.copyTextToClipboard();
      }

    } catch (error) {
      console.error('Error al mostrar el Action Sheet en el componente:', error);
    }
  }


  // OJITOOO
  async copyTextToClipboard() {
    const baseUrl = 'http://localhost:8100/home/'; // Cambia esto por la base de tu URL
    const noticiaUrl = `${baseUrl}${this.noticia.id}`; // Asegúrate de que 'id' sea el identificador correcto de tu noticia

    const textToCopy = `${this.noticia.titulo}\n${this.noticia.descripcion}\nMás información: \n${noticiaUrl}`;

    await this.clipboardService.copyToClipboard(textToCopy);
    console.log('Noticia copiada al portapapeles:', textToCopy);
  }
  // FIN OJITO

  ngOnInit() { }

}
