import { Component, OnInit, Input } from '@angular/core';
import {Noticias} from './../../models/noticias';

@Component({
  selector: 'app-listar-noticia',
  templateUrl: './listar-noticia.component.html',
  styleUrls: ['./listar-noticia.component.scss'],
})
export class ListarNoticiaComponent  implements OnInit {

  @Input()
  public noticia!: Noticias;

  constructor() { }



  ngOnInit() {}

}
