import React from 'react'
import banner from './banner.png'
import styles from './Banner.module.scss'

export default function Banner() {
  return (
    <div className={styles.imagem}>
      <h1>A galeria mais completa do espeço</h1>
      <img src={banner} alt="A imagem da terra vista do espaço" />
    </div>
  )
}
