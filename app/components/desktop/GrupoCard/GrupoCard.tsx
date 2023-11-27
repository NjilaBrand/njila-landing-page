// "use client"
import './GrupoCard.scss'

export const GrupoCard = async() => {
    const cards: number[] = [1, 2, 3, 4, 5, 6]
    
  return (
    <div className='GrupoCard'>
        {cards.map((card) => (
            <div key={card}></div>
        ))}
    </div>
  )
}
