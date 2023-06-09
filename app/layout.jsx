import '@styles/globals.css';

export const metadata = {
    title: "PromptAI",
    description: 'Discover & Share Prompts for AI'
}

const RootLayout = ({children}) => {
  return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient'/>                    
              </div>
              
              <main className='app'>
                  {children}
                  
              </main>
            </body>            
            
        </html>
    )
}

export default RootLayout;