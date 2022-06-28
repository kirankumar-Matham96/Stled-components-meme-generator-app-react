import {Component} from 'react'
import {
  BGContainer,
  MainHeading,
  MainContainer,
  FormContainer,
  MemeContainer,
  Input,
  Label,
  Select,
  Option,
  Description,
  Button,
  ResponsiveContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
    memeData: {},
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText, fontSize} = this.state
    const memeData = {
      imageUrl,
      topText,
      bottomText,
      fontSize,
    }
    this.setState({memeData})
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, memeData} = this.state
    return (
      <BGContainer url={imageUrl}>
        <MainContainer>
          <MainHeading>Meme Generator</MainHeading>
          <ResponsiveContainer>
            <MemeContainer data-testid="meme" bgImage={memeData.imageUrl}>
              <Description fontSize={memeData.fontSize}>
                {memeData.topText}
              </Description>
              <Description fontSize={memeData.fontSize}>
                {memeData.bottomText}
              </Description>
            </MemeContainer>
            <FormContainer onSubmit={this.handleSubmit}>
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                autoComplete="off"
                type="text"
                id="imageUrl"
                value={imageUrl}
                onChange={this.onChangeImageUrl}
              />
              <Label htmlFor="topText">Top Text</Label>
              <Input
                autoComplete="off"
                type="text"
                id="topText"
                value={topText}
                onChange={this.onChangeTopText}
              />
              <Label htmlFor="bottomText">Bottom Text</Label>
              <Input
                autoComplete="off"
                type="text"
                id="bottomText"
                value={bottomText}
                onChange={this.onChangeBottomText}
              />
              <Label htmlFor="fontSize">Font Size</Label>
              <Select
                id="fontSize"
                value={fontSize}
                onChange={this.onChangeFontSize}
              >
                {fontSizesOptionsList.map(eachOption => (
                  <Option value={eachOption.optionId} key={eachOption.optionId}>
                    {eachOption.displayText}
                  </Option>
                ))}
              </Select>
              <Button type="submit">Generate</Button>
            </FormContainer>
          </ResponsiveContainer>
        </MainContainer>
      </BGContainer>
    )
  }
}

export default MemeGenerator
