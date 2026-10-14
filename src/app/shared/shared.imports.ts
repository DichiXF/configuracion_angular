import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

/**
 * SHARED IMPORTS
 * ----------------------------------------
 * Colección de modulos/directicas reutilizables en
 * componentes standalone.
 * Se importa así:
 * imports: [...SHARED_IMPORTS, headerApp,FooterApp]
 */

export const SHARED_IMPORTS = [
  /**
   * Angular Material
   */
  MatButtonModule,
  MatDividerModule,
  MatIconModule,

];
