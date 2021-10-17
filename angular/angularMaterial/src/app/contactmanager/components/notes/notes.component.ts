import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Note } from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input() notes!: Note[];

  displayedColumns: string[] = ['position', 'title', 'date'];
  dataSource!: MatTableDataSource<Note>;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Note>(this.notes)
  }

}
