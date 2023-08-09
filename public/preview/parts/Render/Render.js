const root = ReactDOM.createRoot(document.getElementById('app'))

export const render = (value) => {
  root.render(React.createElement('h1', null, [value]))
}
