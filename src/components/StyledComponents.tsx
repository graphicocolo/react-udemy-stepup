import styled from "styled-components"

export const StyledComponents
 = () => {
  return (
    <>
      <div>
        <Title>Styled components</Title>
        <Button>FIGHT!!</Button>
      </div>
    </>
  )
}

const Title = styled.p`
  color: #d8ba00;
  font-weight: 600;
`

const Button = styled.button`
  background-color: #d8ba00;
  border: none;
  border-radius: 5px;
  padding: 1rem 1.5rem;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`