import { Component, OnInit, HostBinding } from "@angular/core";
import { GamesService } from "../../services/games.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  @HostBinding("class") classes = "row";
  games: any = [];
  constructor(private gamesServices: GamesService) {}

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.gamesServices.getGames().subscribe(
      (res) => {
        this.games = res;
      },
      (err) => console.log(err)
    );
  }

  deleteGame(id: string) {
    this.gamesServices.deleteGame(id).subscribe(
      (res) => {
        console.log(res);
        this.getGames();
      },
      (err) => console.log(err)
    );
  }
}
