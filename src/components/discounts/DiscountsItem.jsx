import {getImageUrl} from '@/utils/dynamicUrlImage.js'
const DiscountsItem = (props) => {
    const {id,title,name,discount,poster} = props.item;
    return (
          <div key={id} className="relative text-white mt-[130px]">
                <img className="w-[600px] h-[365px] rounded-xl" src={getImageUrl(poster)} alt={poster} />
                <div className='absolute left-[28px] top-[66px]'>
                    <h4 className='text-lg mb-6  font-extrabold'>{title}</h4>
                <div>
                    <div className='text-[34px] mb-[10px] font-extrabold'>{name}</div>
                    <div className='text-base font-medium mb-10'>{discount}</div>
                </div>
                <div className='text-xl font-extrabold'>Explore Items</div>
            </div>
        </div>
    )
}

export default DiscountsItem;