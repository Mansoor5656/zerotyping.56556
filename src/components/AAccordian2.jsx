


const numbers = [1,2,3,4,5,6,7,8,9]

const displayNumber =numbers?.map((number) =>(



<div key={number}>

{number}

</div>



)
)



const Accordian2 = () => {
  return (

    <div className='w-full flex flex-col '>

{displayNumber}

    </div>


     
  )}

  export default Accordian2