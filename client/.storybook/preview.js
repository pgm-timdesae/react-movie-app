export const parameters = {
  backgrounds: {
    values: [
      { name: 'dark mode', value: '#181818'},
      { name: 'light mode', value: '#FBFBFB'}
    ] 
  }
}

const GlobalWrapper = (Story) => {
  return <div style={{margin: '2rem'}}>
    <Story/>
  </div>
}

export const decorators = [GlobalWrapper];