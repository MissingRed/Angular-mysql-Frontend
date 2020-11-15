import { Component, OnInit, HostBinding } from "@angular/core";
import { Game } from "src/app/models/Game";
import { GamesService } from "../../services/games.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-game-form",
  templateUrl: "./game-form.component.html",
  styleUrls: ["./game-form.component.css"],
})
export class GameFormComponent implements OnInit {
  @HostBinding("class") classes = "row";

  game: Game = {
    id: 0,
    titulo: "",
    descripcion: "",
    imagen: "",
    fecha: new Date(),
  };

  edit: boolean = false;
  constructor(
    private gameService: GamesService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.gameService.getGame(params.id).subscribe(
        (res) => {
          console.log(res);
          console.log(this.game);
          this.game = res;
          this.edit = true;
          console.log(this.game);
        },
        (err) => console.error(err)
      );
    }
  }

  saveNewGame() {
    delete this.game.fecha;
    delete this.game.id;
    this.gameService.saveGame(this.game).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(["/games"]);
      },
      (err) => console.error(err)
    );
  }

  updateGame() {
    delete this.game.fecha;
    console.log(this.game);
    this.gameService.updateGame(this.game.id, this.game).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(["/games"]);
      },
      (err) => console.error(err)
    );
  }
}
