import { Injectable } from '@angular/core';
import { ActionSheet } from '@capacitor/action-sheet';


@Injectable({
  providedIn: 'root'
})
export class ActionSheetService {

  constructor() { }

  async showActions(options: ShowActionsOptions): Promise<ShowActionsResult> {
    try {
      const result = await ActionSheet.showActions(options);
      return result;
    } catch (error) {
      console.error('Error al mostrar el Action Sheet:', error);
      throw error;
    }
  }
}

export interface ShowActionsOptions {
  title?: string;
  message?: string;
  options: ActionSheetButton[];
}

export enum ActionSheetButtonStyle {
  Default = 'DEFAULT',
  Destructive = 'DESTRUCTIVE',
  Cancel = 'CANCEL',
}

interface ActionSheetButton {
  title: string;
  style?: ActionSheetButtonStyle;
  icon?: string;
}

interface ShowActionsResult {
  index: number;
}
