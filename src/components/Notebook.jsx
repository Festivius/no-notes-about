import './Home.css'
function Notebook() {
    return (
        <div className="notebook-container">
        <button 
          className="nonotes-button" 
          onClick={() => window.location.href = 'https://no-notes.vercel.app'}
        >
          TRY NONOTESSSS!
        </button>
      </div>
    );
  }
  
  export default Notebook;