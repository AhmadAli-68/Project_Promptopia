import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metaData = {
    title: "Promptopia",
    description: 'Discover & share AI Prompts'
}

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>

                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}