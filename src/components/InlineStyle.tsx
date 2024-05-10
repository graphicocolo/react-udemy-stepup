export const InlineStyle = () => {
  const titleStyle = {
    color: '#0358bc',
  }
  const buttonStyle = {
    backgroundColor: '#0358bc',
    border: 'none',
    padding: '1rem 1.5rem',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
  }
  return (
    <div>
      <p style={titleStyle}>Inline Style</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  )
}