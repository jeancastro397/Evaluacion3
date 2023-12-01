import { Component, Input } from '@angular/core';
import { ActionSheetService, ShowActionsOptions, ActionSheetButtonStyle } from '../services/action-sheet.service';
import { ClipboardService } from '../services/clipboard.service';
import { Noticias } from './../models/noticias';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public noticias: Noticias[] = [

    {
      "id":1,
      "titulo": "Pokémon GO: Captura a Pikachu Bailarín en Edición Especial",
      "fecha": "2023-11-25",
      "categoria": "Realidad Aumentada",
      "descripcion": "Una versión única de Pikachu ha sido avistada en Pokémon GO, ¡esta vez bailando salsa en lugar de atacar con rayos! ¡Atrápalo antes de que cambie de estilo!",
      "fuente": "PokéExplorerMag"
    },
    {
      "id":2,
      "titulo": "Super Mario Kart: Nuevos Power-ups Incluyen Caparazón de Confeti y Plátano Resbaladizo",
      "fecha": "2023-11-24",
      "categoria": "Carreras",
      "descripcion": "Nintendo sorprende a los fanáticos de Mario Kart con power-ups divertidos. ¡Lanza caparazones de confeti y deja plátanos resbaladizos para una experiencia de carrera más colorida!",
      "fuente": "MushroomCircuitNews"
    },
    {
      "id":3,
      "titulo": "League of Legends: Nuevo Campeón 'Cantante de Ópera' Anunciado",
      "fecha": "2023-11-23",
      "categoria": "MOBA",
      "descripcion": "Riot Games presenta un campeón completamente diferente en League of Legends. ¡El 'Cantante de Ópera' deslumbrará a sus enemigos con arias mientras los derrota en el campo de batalla!",
      "fuente": "SummonersHerald"
    },
    {
      "id":4,
      "titulo": "Animal Crossing: Tom Nook Anuncia Planes para Construir una Autopista de Nook",
      "fecha": "2023-11-22",
      "categoria": "Simulación",
      "descripcion": "Tom Nook revela sus ambiciosos planes de construir una autopista de peaje en Animal Crossing. Los aldeanos podrán conducir autos con forma de hoja y pagar en bayas.",
      "fuente": "NookTimesDaily"
    },
    {
      "id":5,
      "titulo": "Call of Duty: Modo 'Broma de Cosquillas' Disponible en la Próxima Actualización",
      "fecha": "2023-11-21",
      "categoria": "FPS",
      "descripcion": "Activision introduce un nuevo modo en Call of Duty donde los jugadores deben derrotar a sus enemigos haciéndoles cosquillas en lugar de disparar. ¡Prepárate para la guerra más cómica!",
      "fuente": "WarComedyGazette"
    },
    {
      "id":6,
      "titulo": "The Sims 5: Ahora Puedes Crear Sims Hiperrealistas... ¡Demasiado Realistas!",
      "fecha": "2023-11-20",
      "categoria": "Simulación de Vida",
      "descripcion": "En la última actualización de The Sims, la opción de crear Sims hiperrealistas ha llevado a resultados inesperados. ¡Algunos jugadores están asustados por lo real que son!",
      "fuente": "SimLifeMagazine"
    },
    {
      "id":7,
      "titulo": "Overwatch: Nuevo Mapa 'Campo de Batalla de Almohadas' para el Modo de Siesta",
      "fecha": "2023-11-19",
      "categoria": "Shooter en Primera Persona",
      "descripcion": "Blizzard agrega un mapa único en Overwatch, donde los héroes combaten en un campo de batalla lleno de almohadas. ¡El objetivo es dormir al equipo contrario para la victoria!",
      "fuente": "OverwatchDreamer"
    },
    {
      "id":8,
      "titulo": "Fortnite: Skin de 'Bailarín Disco' Hace que los Enemigos Bailen en Lugar de Pelear",
      "fecha": "2023-11-18",
      "categoria": "Battle Royale",
      "descripcion": "Epic Games presenta una skin especial en Fortnite que, cuando la usas, hace que tus enemigos comiencen a bailar en lugar de disparar. ¡Haz que la pista de baile sea tu campo de batalla!",
      "fuente": "FortniteFunkyTimes"
    },
    {
      "id":9,
      "titulo": "Assassin's Creed: Nueva Habilidad 'Parkour Acuático' Permite a los Asesinos Nadar como Delfines",
      "fecha": "2023-11-17",
      "categoria": "Acción y Aventura",
      "descripcion": "Ubisoft sorprende a los jugadores de Assassin's Creed con una habilidad única. ¡Ahora los asesinos pueden realizar movimientos de parkour acuático y nadar como delfines en mares peligrosos!",
      "fuente": "CreedChronicle"
    },
    {
      "id":10,
      "titulo": "Minecraft Dungeons: Encuentra el Tesoro Escondido del 'Cubo de Queso'",
      "fecha": "2023-11-16",
      "categoria": "Aventura",
      "descripcion": "Los aventureros en Minecraft Dungeons se embarcan en una búsqueda épica para encontrar el legendario 'Cubo de Queso', un tesoro que otorga habilidades especiales relacionadas con los lácteos.",
      "fuente": "BlockQuestExplorer"
    },
    {
      "id":11,
      "titulo": "Dota 2: Nuevo Héroe 'Mago de la Pizza' Lanza Poderes con Sabor a Tomate",
      "fecha": "2023-11-15",
      "categoria": "MOBA",
      "descripcion": "Valve presenta un héroe único en Dota 2, el 'Mago de la Pizza'. Sus habilidades lanzan poderes con sabor a tomate y su ultimate invoca una avalancha de queso derretido. ¡Prepárate para un festín!",
      "fuente": "DotaDigest"
    },
    {
      "id":12,
      "titulo": "Cyberpunk 2078: Ahora Puedes Personalizar Tu Apartamento con Gatos Cibernéticos",
      "fecha": "2023-11-14",
      "categoria": "RPG de Acción",
      "descripcion": "CD Projekt RED añade una actualización que permite a los jugadores de Cyberpunk 2078 personalizar sus apartamentos con gatos cibernéticos. ¡Haz que tu hogar sea más futurista y peludo!",
      "fuente": "CyberLifeWeekly"
    },
    {
      "id":13,
      "titulo": "Super Smash Bros. Ultimate: Nuevo Luchador 'Abuela de la Repostería' con Ataques de Galletas",
      "fecha": "2023-11-13",
      "categoria": "Lucha",
      "descripcion": "Nintendo sorprende a los fanáticos",
      "fuente": "Nintendowo"
    },
  ]

  constructor() { }
}
