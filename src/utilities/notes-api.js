const BASE_URL = '/api/notes';

export async function addNote(data) {
  const res = await fetch(BASE_URL, {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
}