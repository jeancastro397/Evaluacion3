import { Injectable } from '@angular/core';
import { PluginListenerHandle } from '@capacitor/core';
import { ScreenReader, SpeakOptions, StateChangeListener } from '@capacitor/screen-reader';
import { Noticias } from '../models/noticias';

@Injectable({
  providedIn: 'root'
})
export class ScreenReaderService {

  constructor() { }

  public async habilitado(): Promise<boolean> {
    try {
      const estado = await ScreenReader.isEnabled();
      return estado.value;
    } catch (error) {
      console.error('Error al verificar el lector de pantalla', error);
      return false;
    }
  }

  public async hablar(opciones: SpeakOptions): Promise<void> {
    try {
      await ScreenReader.speak(opciones);
    } catch (error) {
      console.error('Error al hablar: ', error)
    }
  }

  public async leerNoticia(noticia: Noticias): Promise<void> {
    const opciones: SpeakOptions = {
      value: `${noticia.titulo}. ${noticia.descripcion}`,
      language: "es",
    };

    try {
      await this.hablar(opciones);
    } catch (error) {
      console.error('Error al leer la noticia:', error);
    }
  }

  private estadoCambiadoListener: StateChangeListener = ({ value }) => {
    console.log(`Cambio en el estado del lector de pantalla: ${value ? 'activado' : 'desactivado'}`);
  };

  public async agregarEscucha(): Promise<PluginListenerHandle> {
    try {
      const listener = await ScreenReader.addListener('stateChange', this.estadoCambiadoListener);

      return listener;
    } catch (error) {
      console.error('Error al agregar escucha:', error);
      throw error;
    }
  }

  public async removerEscuchas(): Promise<void> {
    try {
      await ScreenReader.removeAllListeners();
      console.log("Se removieron todas las escuchas");
    } catch (error) {
      console.error("Error al remover escuchas");
      throw error;
    }
  }
}
