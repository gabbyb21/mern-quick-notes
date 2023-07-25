import { useState } from 'react';
import AddNoteForm from "../../components/AddNoteForm/AddNoteForm";
import NotesList from '../../components/NotesList/NotesLIst';

export default function NotesPage() {
  const[notes, setNotes] = useState('');

  return (
    <>
    <h1>NotesPage</h1>
    <AddNoteForm />
    { notes ?
      <NotesList setNotes={notes}/>
      :
      <h3>No Notes Yet!</h3>
    }
    </>
  );
}