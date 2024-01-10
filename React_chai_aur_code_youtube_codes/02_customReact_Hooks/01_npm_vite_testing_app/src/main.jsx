import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "chai aur react"

const reactElement1 = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement ,
    'checking'
    // here anotherElement is the evaluated expression we can't write any code in that.
)

const reactElement2 = (
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google2',
    anotherElement ,
    'checking'
    // here anotherElement is the evaluated expression we can't write any code in that.
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
       {/* <MyApp /> ,  
       ReactElement,
       anotherElement,
       anotherUser,
       reactElement1, 
       reactElement2 */}
       <App />
    </>

)


