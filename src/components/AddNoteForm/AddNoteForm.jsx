import { Component } from 'react';
import { addNote } from '../../utilities/notes-service';

export default class AddNoteForm extends Component{
  state = {
    notes: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {notes} = this.state;
      const formData = {notes};
      const note = await addNote(formData);
  } catch {
      this.setState({ error: 'Add Note failed' });
  }
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Notes</label>
          <textarea type="text" name="notes" value={this.state.notes} onChange={this.handleChange} required/>
          <button type="submit">Add Note</button>
        </form>
      </div>
  )
}
}