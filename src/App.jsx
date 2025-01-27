import './App.css'

function App() {


  return (
    <>

<div className="w-60 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
  <div className="col-span-2 text-lg font-bold capitalize rounded-md">
    card title
  </div>
  <div className="col-span-2 rounded-md">
    Using Lorem ipsum to focus attention on graphic elements in a webpage design proposal · One of the earliest examples
    of the Lorem ipsum placeholder text on 1960s advertising...
  </div>
  <div className="col-span-1">
    <button className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </button>
  </div>


  </div>
    </>
  )
}

export default App
