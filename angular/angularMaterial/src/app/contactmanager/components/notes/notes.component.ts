import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input() notes!: Note[];
  constructor() { }

  ngOnInit(): void {
  }

}
