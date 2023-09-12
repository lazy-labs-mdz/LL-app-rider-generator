import React from 'react'
import { Button } from "@/ui/button/Button";
import { Header } from "@/ui/header/Header"

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex min-h-[87vh] flex-col items-center justify-center p-10">
        <div>
          <h1 className='text-slate-950 text-[40px] text-center font-bold'>Diseñador de Riders</h1>
          <span className='text-gray-400'>Genera el diseño de tu planta de sonido fácil y rápido</span>
          <div className='flex justify-center mt-5'>
            <Button link={''}>
              Comenzar
            </Button>
          </div>
        </div>
      </div>
      <div className='justify-center flex items-end'>
        <span className='text-slate-900 font-bold'>By</span>&nbsp;
        <span className='text-slate-400'>Lazy</span><span className='text-pink-400'>Labs</span>
      </div>
    </main>
  )
}