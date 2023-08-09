export const render = (value) => {
  const root = ReactDOM.createRoot(document.getElementById('app'))
  root.render(React.createElement('h1', null, [value]))
}
