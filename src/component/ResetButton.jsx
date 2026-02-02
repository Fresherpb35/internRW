
const ResetButton = ({onReset, disabled}) => {
  return (
   <button
   
   onClick={onReset}
   disabled={disabled}
   className={`w-full py-3 px-6 font-bold text-white rounded-lg ${
    disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-teal-6000 hover:bg-teal-700'
   }`}
   
   >
    RESET

   </button>
  )
}

export default ResetButton
