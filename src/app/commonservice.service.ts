import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor() { }

  getinfo() {
    return {
      angular: [{ image:'./assets/Angularlogo.png', title: 'Angular', description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript.' }],
      javascript: [{ image:'./assets/javascriptlogo.png',title: 'JavaScript', description: 'JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive(e.g.clickable buttons, popup menus, etc.).' }],
      nodejs: [{ image:'./assets/nodejslogo.png',title: 'Node-js', description: 'Node. js (Node) is an open source development platform for executing JavaScript code server-side.' }],
    }
  }
}
