import * as notesAPI from './notes-api';

export async function addNote(data) {
  const note = await notesAPI.addNote(data);
}