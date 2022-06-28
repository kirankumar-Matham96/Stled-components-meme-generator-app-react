import styled from 'styled-components'

export const MainHeading = styled.h1`
  color: #35469c;
  font-size: 26px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    font-size: 36px;
  }
`

export const BGContainer = styled.div`
  height: 100vh;
  padding: 16px;
  font-family: 'open sans';
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ResponsiveContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export const MainContainer = styled.div`
  height: 100vh;
  @media (min-width: 768px) {
    width: 800px;
    padding: 16px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 80%;
    margin-right: 30px;
  }
`

export const MemeContainer = styled.div`
  height: 250px;
  background-image: url('${props => props.bgImage}');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    order: 1;
    width: 100%;
  }
`

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 12px;
  outline: none;
  border: 1px solid #d7dfe9;
  background-color: #fff;
  color: #5a7184;
`

export const Label = styled.label`
  color: #7e858e;
  margin-bottom: 5px;
`

export const Select = styled.select`
  border: 1px solid #d7dfe9;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 12px;
`

export const Option = styled.option`
  color: #1e293b;
`

export const Description = styled.p`
  text-align: center;
  font-size: ${props => props.fontSize}px;
  padding: 0;
  margin: 0;
  color: #fff;
  font-weight: 500;
`
export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  background-color: #0b69ff;
  align-self: flex-start;
  padding: 10px 36px;
  border-radius: 5px;
  font-weight: 500;
`
