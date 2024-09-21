import Image from 'next/image'
import iconTask from '@/public/assets/education/icon_task.svg';
import iconNavigate from '@/public/assets/education/ic_round-navigate-next.svg';
import { getDetailEducation } from '@/constants/education';
import Link from 'next/link';

export default function page({ params }) {
    let educationDetail = getDetailEducation(params.id)

    return (
        <div className='flex flex-col gap-5 mt-10'>
            {educationDetail.material.sub_material.map((item, index) => (
                <Link href={`/education/${params.id}/material/${item.id}/${index + 1}/${item.content[0].id}`}>
                    <div key={index} className='w-full rounded-[20px] bg-[#232523] p-5 flex justify-between items-center'>
                        <div className='flex items-center gap-7'>
                            <div className='w-16 h-16 bg-[#363736] flex items-center justify-center rounded-xl'>
                                <Image
                                    src={iconTask}
                                    alt='icon task'
                                />
                            </div>
                            <h1 className='font-general-sans-semibold text-2xl'>{index + 1}. {item.chapter_title}</h1>
                        </div>
                        <div>
                            <Image
                                src={iconNavigate}
                                alt='icon navigate'
                            />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
