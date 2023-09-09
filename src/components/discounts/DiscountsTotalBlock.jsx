import {getImageUrl} from '@/utils/dynamicUrlImage.js'
import classNames from 'classnames';
import { AiOutlineArrowDown } from "react-icons/ai";

const Discounts = (props) => {
    return (
        <div className="container m-auto grid gap-[20px] grid-cols-12">
         {props.bannersTotalBlock.map((el,index) => <div key={`TotalBlock_${index}`} className={classNames(
            'relative',
            {'col-span-4': el.position <= 3},
            {'col-span-6': el.position > 3},

         )}>
            <img src={getImageUrl(el.poster)} className='rounded-xl' alt="" />
            <div className={classNames('absolute flex flex-col gap-[10px] text-white top-[64px] left-[20px]',
                {'!text-black left-[45%]': el.position >= 3},
                {'left-[45%]': el.position === 2},
            )}>
                <div className='text-[28px] font-bold'>{el.name}</div>
                <div className='text-sm font-bold'>{el.title}</div>
                <div className='text-lg font-semibold'>{el.discount}</div>
                <div className='animate-bounce m-[30px_0_40px_45px]'><AiOutlineArrowDown className='w-[33px] h-[30px]' /></div>
                <div className={classNames('p-[10px_15px] text-center font-medium text-xs w-[110px] rounded uppercase border-2',
                    {'border-[#3C4242]': el.position >= 3}
                )}>
                    <a href="#">shop now</a>
                 </div>
            </div>
       
         </div>)}
      </div>
    )
}

export default Discounts;