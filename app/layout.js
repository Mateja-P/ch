'use client'
import { useEffect, useState } from 'react'
import { FacebookPixel } from './components'
import Header from './components/Header'
import Footer from './components/Footer'
import "./global.css";
import Modal from './components/Modal';
import { usePathname } from 'next/navigation'
import AOS from 'aos'
import "aos/dist/aos.css";

export default function RootLayout({ children }) {
  const [openModal, setModal] = useState({
    purpose: null,
    open: false,
  })

  const path = usePathname()

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);


  useEffect(() => {
    setModal({
      purpose: null,
      open: false,
    })
  }, [path])

  return (
    <html lang="en">
      <style>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </style>
      <body>
        {path !== '/platform' && <Header setModal={setModal} />}
        {openModal.open == true && openModal.purpose !== null && path !== '/platform' && <Modal setModal={setModal} purpose={openModal.purpose} />}
        {children}
        <FacebookPixel />
        {path !== '/platform' && <Footer setModal={setModal} />}
      </body>
    </html>
  )
}
