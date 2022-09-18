import { FaUser } from 'react-icons/fa'
import { BsFillCreditCardFill } from 'react-icons/bs'
import checkIconMobile from '../../assets/mobile/checkpoint.svg'
function Content() {
    return (
        <section className='md:flex md:flex-row'>
            <div className='ml-[70px] mr-[54px] text-bold flex flex-col items-center shadow-md rounded-[24px] bg-gradient-to-b from-white/40 to-transparent md:w-[20%]'>
                <div className='mt-16 gap-8 flex items-start'>
                    <FaUser size={'22px'} className='mt-[8px]' />
                    <p className='text-26'>
                        10248
                        <p className='text-13 font-semibold mb-[36px] md:text-16'>Customers</p>
                    </p>
                </div>
                <div className='mb-16 gap-8 flex items-start'>
                    <BsFillCreditCardFill size={'22px'} className='mt-[8px]' />
                    <p className='text-26'>
                        12404
                        <p className='text-13 font-semibold md:text-16'> Cards Issued </p>
                    </p>
                </div>
            </div>
            <div className='text-13 flex flex-col w-[100%] mt-[90px] font-semibold md:w-[30%] md:mt-0 md:text-16 md:ml-[20%]'>
                <p className='check-content'>
                    <img src={checkIconMobile} alt="" />
                    <p> Card reports send to your phone every weeks </p>
                </p>
                <p className='check-content'>
                    <img src={checkIconMobile} alt="" />
                    <p> No external fees </p>
                </p>
                <p className='check-content'>
                    <img src={checkIconMobile} alt="" />
                    <p> Set spending limits and restrictions </p>
                </p>
            </div>
        </section>
    )
}
export default Content
