import React, {useId} from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
}, ref) {
  const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 
                    duration-200 border border-gray-200 w-full ${className}`}
        >
    {/* If options have no value then it will crash so better use options? in place of options. 
        we can also check the of options in if block.
        if (options.length > 0){ }
    */}
         
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}




export default React.forwardRef(Select)