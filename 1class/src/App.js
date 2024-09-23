import React from 'react'
import CardNameChanger from './Components/CardNameChanger';
import TimeChalenger from './Components/TimeChalenger';

export default function App() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <CardNameChanger />
        <TimeChalenger title={'EASY'} TargetTime={'10'} />
        <TimeChalenger title={'High'} TargetTime={'12'}  />
        <TimeChalenger title={'Pro'} TargetTime={'32'}  />
      </div>
    </>
  )
}
