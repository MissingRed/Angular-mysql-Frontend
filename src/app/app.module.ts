import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavigationComponent } from "./components/navigation/navigation.component";
import { GameFormComponent } from "./components/game-form/game-form.component";
import { ListComponent } from "./components/list/list.component";

import { FormsModule } from "@angular/forms";

import { GamesService } from "./services/games.service";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameFormComponent,
    ListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [GamesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
