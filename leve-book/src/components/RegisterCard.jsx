import React from 'react'

const backgroundStyle = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    backgroundColor: 'rgb(0,0,0,0.7)',
    zIndex: '1000'
}

const cardStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '150px',
    backgroundColor: '#ffff',
    borderRadius: '18px'
}

export default function RegisterCard({isOpen}) {
  
    if(isOpen) {
        return (
        <div style={backgroundStyle}>
            <div style={cardStyle}>dsdsdsshaksjkaghkdhshdhajhg,jschjsdvchxdmjjh</div>
        </div>
        ) 
    }

    return null
}
