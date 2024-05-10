export const StyledJsx = () => {
  return (
    <>
      <div>
        <p className='title'>CSS Modules</p>
        <button className='button'>FIGHT!!</button>
      </div>
      <style jsx>{`
        .title {
          color: #ef940b;
          font-weight: 600;
        }
        .button {
          background-color: #ef940b;
          border: none;
          border-radius: 5px;
          padding: 1rem 1.5rem;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}