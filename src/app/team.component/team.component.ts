import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  templateUrl: './team.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'Ngudo Makuya',
      role: 'Founder & CEO',
      image: 'assets/owner.png',
      linkedin: '#',
      twitter: '#',
      facebook: '#'
    },
    {
      name: 'Sithagu Ndiambani',
      role: 'Architectural designer',
      image: 'assets/team2.jpg',
      linkedin: '#',
      twitter: '#',
      facebook: '#'
    },
    {
      name: 'Galane Sinethemba',
      role: 'Chief artisan plumber',
      image: 'assets/team3.jpg',
      linkedin: '#',
      twitter: '#',
      facebook: '#'
    }
  ];
}
