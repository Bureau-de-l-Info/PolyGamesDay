import { Component } from "@angular/core";
import { Landing } from "./1.landing/landing";
import { Summary } from "./2.summary/summary";
import { Games } from "./3.games/games";
import { Planning } from "./4.planning/planning";
import { Sponsors } from "./5.sponsors/sponsors";
import { Team } from "./6.team/team";


@Component({
    templateUrl: "home.html",
    imports: [Landing, Summary, Games, Planning, Sponsors, Team]
})
export class Home {}