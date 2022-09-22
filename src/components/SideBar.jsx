import Search from './Search';
import "../App.css"
const Sidebar = ({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
    handleSearchNote
  }) => {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  
    return (
      <div className="app-sidebar">
        <div className="app-sidebar-header">
          <h1>Заметки</h1>
          <button onClick={onAddNote}>Добавить</button>
        </div>
        <Search handleSearchNote={handleSearchNote}/>
        <div className="app-sidebar-notes">
          {sortedNotes.map(({ id, title, body, lastModified }, i) => (
            <div
              className={`app-sidebar-note ${id === activeNote && "active"}`}
              onClick={() => setActiveNote(id)}
            >
              <div className="sidebar-note-title">
                <strong>{title}</strong>
                <button onClick={(e) => onDeleteNote(id)}>Удалить</button>
              </div>
  
              <p>{body && body.substr(0, 100) + "..."}</p>
              <small className="note-meta">
                Последнее обновление: {" "}
                {new Date(lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Sidebar;