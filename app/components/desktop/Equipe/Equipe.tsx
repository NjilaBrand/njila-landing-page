import Image from 'next/image'
import profile1 from '../../../assets/Rectangle 30.png'
import profile2 from '../../../assets/Rectangle 31.png'

export default function Equipe() {
    // const data:any = EquipeNjila()
    // console.log(data)

    return (
      <div></div>
    )
  } 
  
  const EquipeNjila = () => {
    const equipe: any[] = [
        {
            "id": 1,
            "name": "Garcia Pedro",
            "cargo": "CTO",
            "image": profile1,
            "desc": "Lorem Ipsum jgfsjgoijog"
        },
        {
            "id": 2,
            "name": "Maurício Mbala",
            "cargo": "FrontEnd Developer",
            "image": profile2,
            "desc": "Lorem Ipsum jgfsjgoijog"
        },
        {
            "id": 3,
            "name": "Paulo Sanguli",
            "cargo": "BackEnd Developer",
            "image": profile2,
            "desc": "Lorem Ipsum jgfsjgoijog"
        },
        {
            "id": 3,
            "name": "Lourenço Cardoso",
            "cargo": "FrontEnd Developer",
            "image": profile1,
            "desc": "Lorem Ipsum jgfsjgoijog"
        },
        {
            "id": 4,
            "name": "Petter",
            "cargo": "FrontEnd Developer",
            "image": profile1,
            "desc": "Lorem Ipsum jgfsjgoijog"
        }
    ]

    return equipe
  }