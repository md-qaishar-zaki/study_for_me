import React, { useState, useRef } from 'react'
import '../App.css'

export default function CardNameChanger() {
    const [cardtitle, Setcardtitle] = useState(null);

    const CardName = useRef();

    const submitHandel = () => {
        Setcardtitle(CardName.current.value);
        CardName.current.value = ''
    }

    return (
        <>
      <div class="card">
        <div class="card-image"></div>
        <div class="card-content">
          <h2 class="card-title">{cardtitle ?? 'Enter Name In Input'}</h2>
          <p class="card-text">Dies ist eine verbesserte interaktive Card-Komponente mit Gradienten-Design, Mikrointeraktionen und einem Bild.</p>
          <input type='text' ref={CardName} />
          <button class="card-button" onClick={submitHandel}>Mehr erfahren</button>
        </div>
      </div>
    </>
    )
}
