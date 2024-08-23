import dayjs from 'dayjs';

export default function JobCard() {
    const skills = ["Javascript", "React", "NodeJS"];
    let dateNow = dayjs();
    const diffInDays = dateNow.diff('2024-08-20','day');
  return (
    <div className='mx-40 mb-4'>
        <div className='flex justify-between items-center px-6 py-4 border rounded-md shadow hover:translate-y-1'>
            <div className='flex flex-col items-start gap-3'>
                <p className='text-lg font-semibold'>Frontend Developer - Amazon</p>
                <p>Full Time • Fresher • In-Office </p>
                <div className='flex items-center gap-2'>
                    {skills.map(skill=>(
                        <p className='text-gray-500 px-2 py-1 rounded-md border border-gray-500'>{skill}</p>)
                    )}
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <p className='text-gray-400'>Posted {diffInDays} Days ago</p>
                <button className='border border-black px-8 py-2 rounded-md'>Apply</button>
            </div>
        </div>
    </div>
  )
}
