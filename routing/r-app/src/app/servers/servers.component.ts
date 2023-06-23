import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,private router:Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  onReload(){
  this.router.navigate(['/servers'], {relativeTo: this.route} );
  }
  // unlike router link navigate method dont know on which page you are currently
  // to get  acces to current active route inject activated route

}
