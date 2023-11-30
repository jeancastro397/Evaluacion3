import { Injectable } from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {
  constructor() {}

  // Copiar texto al portapapeles
  async copyToClipboard(text: string): Promise<void> {
    await Clipboard.write({
      string: text,
    });
  }

  // Obtener texto del portapapeles
  async getFromClipboard(): Promise<string> {
    const { value } = await Clipboard.read();
    return value || '';
  }
}
