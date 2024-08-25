import dayjs from 'dayjs';

export default function JobCard(props) {
   
    let dateNow = dayjs();
    const diffInDays = dateNow.diff(props.postedOn,'day');
  return (
    <div className='mx-52 mb-6'>
        <div className='flex justify-between items-center px-6 py-4 border rounded-md shadow hover:translate-y-1'>
            <div className='flex flex-col items-start gap-3'>
                <p className='text-lg font-semibold'>{props.title} - {props.company}</p>
                <p>{props.type} • {props.experience} • {props.location} </p>
                <div className='flex items-center gap-2'>
                    {props.skills.map(skill=>(
                        <p className='text-gray-500 px-2 py-1 rounded-md border border-gray-500'>{skill}</p>)
                    )}
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <p className='text-gray-400'>Posted {diffInDays} Days ago</p>
                <a href={props.jobLink} target="_blank">
                    <button className='border border-black px-8 py-2 rounded-md hover:bg-gray-500 hover:text-white'>Apply</button>
                </a>
                
            </div>
        </div>
    </div>
  )
}
