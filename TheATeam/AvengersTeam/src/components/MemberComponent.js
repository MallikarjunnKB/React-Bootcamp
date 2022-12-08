import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom'
import CardComponent from './CardComponent'

const MemberComponent = () =>{
    const {id} = useParams();

    const [memberInfo, setMemberInfo] = useState({})

    useEffect(()=>{
        getMemberInfo()
    },[])

    async function getMemberInfo(){
        const data = await fetch(`https://api.github.com/user/${id}`)
        const json = await data.json();
        console.log(json)
        setMemberInfo(json);
    }

    return (
      <CardComponent data={memberInfo}/>
    )
}

export default MemberComponent