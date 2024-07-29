import Card from '../card/Card'
import './userPropertyList.scss'
import {listData} from '../../lib/dummy';

function UserPropertyList(){
  return (
    <div className='userPropertyList'>
        {listData.map(item => (
            <Card key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default UserPropertyList