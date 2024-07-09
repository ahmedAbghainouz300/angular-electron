// clients.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Client {
  id: number;
  name: string;
  telephone: string;
  natureDeTier: string;
}

interface Fournisseur {
  id: number;
  name: string;
  telephone: string;
  natureDeTier: string;
}

@Component({
  standalone: true,
  imports: [ CommonModule ],
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [
    { id: 1, name: 'Client A', telephone: '123456789', natureDeTier: 'Regular' },
    { id: 2, name: 'Client B', telephone: '987654321', natureDeTier: 'VIP' },
    // Add more clients as needed
  ];

  fournisseurs: Fournisseur[] = [
    { id: 1, name: 'Fournisseur A', telephone: '123456789', natureDeTier: 'Regular' },
    { id: 2, name: 'Fournisseur B', telephone: '987654321', natureDeTier: 'VIP' },
    // Add more fournisseurs as needed
  ];

  isClientView: boolean = true; 

  constructor() { }

  ngOnInit(): void { }

  // Method to toggle between clients and fournisseurs view
  showClients(): void {
    this.isClientView = true;
  }

  showFournisseurs(): void {
    this.isClientView = false;
  }
}
