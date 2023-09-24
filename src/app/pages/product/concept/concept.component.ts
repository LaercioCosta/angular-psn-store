import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/data/dataFake';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.css']
})
export class ConceptComponent implements OnInit {

	photoCover:string= ""
	gameTitle:string= ""
	nameDeveloper:string= ""
	ps4Console:string= ""
	ps5Console:string= ""
	versionGame:string= ""
	priceValue:string= ""
	private id:string | null = ''

  constructor(
		private route:ActivatedRoute
	) { }

  ngOnInit(): void {
		this.route.paramMap.subscribe(valor =>
			this.id = valor.get("id")
			)
			this.setarValordoComponent(this.id)
  }

	setarValordoComponent(id:string | null){
		const resultado = dataFake.filter(articule => articule.id == id)[0]

			console.log(resultado)
			this.gameTitle = resultado.gameName
			this.ps4Console = resultado.console.oldGen
			this.ps5Console = resultado.console.nextGen
			this.nameDeveloper = resultado.nameDeveloper
			this.priceValue = resultado.value
			this.photoCover = resultado.photoCover
			this.versionGame = resultado.gameVersion

	}


}
