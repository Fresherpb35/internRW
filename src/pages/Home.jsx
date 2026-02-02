import React, { useState } from 'react'
import ResetButton from '../component/ResetButton'

const Home = () => {


    const [bill, setBill] = useState("")
    const [tip, setTip] = useState(0)
    const [custom, setCustom] = useState("")
    const [people, setPeople] = useState("")

    const billAmount = Number(bill) || 0
    const noofPeople = Number(people) || 0
    const tipPercent = custom ? Number(custom) : tip
    const tipAmount = billAmount * (tipPercent / 100)

    const totalAmount = billAmount + tipAmount
    const tipPerperson = noofPeople > 0 ? tipAmount / noofPeople : 0
    const totalPerPerson = noofPeople > 0 ? totalAmount / noofPeople : 0
    const canReset = bill !== '' || tipPercent > 0 || people !== ''
    function selectTip(value) {

        setTip(value)
        setCustom("")
    }
    function resetEveryThing() {
        setBill("")
        setTip(0)
        setCustom('')
        setPeople('')
    }
    function showMoney(num) {
        return num.toFixed(2)
    }






    return (

            <div className='min-h-screen bg-cyan-50 flex flex-col items-center pt-10 px-4 md:px-6'>
                <h1 className='text-4xl md:text-5xl font-bold text-teal-700 '>SPLT<span>TTER</span></h1>



                <div className='mt-10 w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2'>


                    {/* left input */}
                    <div className='p-8 md:p-10 bg-teal-50/40'>


                        {/* Bill */}
                        <div className='md-8 '>

                            <label className='block text-teal-800 font-medium mb-2'>Bill</label>
                            <div className='relative'>
                                <span className='absolute left-4 top-1/2 -translate-y-1/2 text-teal-700 text-2xl font-bold'>$</span>
                                <input
                                    type='number'
                                    value={bill}
                                    onChange={(e) => {
                                        const val = e.target.value
                                        if (val === '' || Number(val) > 0) setBill(val)
                                    }}
                                    className='w-full pl-10 pr-4 py-3 bg-white border-teal-200 rounded-lg text-right text-2xl text-teal-900 focus:outline-none focus:border-teal-500 focus:ring-teal-500 '
                                />
                            </div>
                        </div>



                        {/* select tip */}


                        <div className='mb-8'>
                            <label className='block text-teal-800 font-medium mb-3'>SelectTip%</label>
                            <div className='grid grid-cols-3 gap-4'>
                                {[5, 10, 15].map((pct) => (
                                    <button

                                        key={pct}
                                        onClick={() => selectTip(pct)}
                                        className={`py-3 px-4 rounded-lg font-bold text-white transition-colors ${tip === pct && custom === "" ? 'bg-teal-700 ' : 'bg-teal-600 hover:bg-teal-500'
                                            }`}

                                    >

                                        {pct}%
                                    </button>


                                ))}


                            </div>

                            <div className='grid grid-cols-3 gap-4 mt-4 '>
                                {[25, 50].map((pct) => (


                                    <button
                                        key={pct}
                                        onClick={() => selectTip(pct)}
                                        className={`py-3 px-4 rounded-lg font-bold text-white transition-colors ${tip === pct && custom === "" ? 'bg-teal-700' : 'bg-teal-600 hover:bg-teal-500'
                                            }`}
                                    >
                                        {pct}%
                                    </button>
                                ))}
                                <input
                                    type='number'
                                    placeholder="custom"
                                    value={custom}
                                    onChange={(e) => {
                                        const val = e.target.value
                                        if (val === '' || Number(val) >= 0) {
                                            setCustom(val)
                                            setTip(0)
                                        }
                                    }}
                                    className='py-3 px-4 text-center bg-white border-teal-200 rounded-lg text-teal-900 focus:outline-none focus:border-teal-500'
                                />



                            </div>
                        </div>

                        {/* Number of people */}
                        <div>
                            <label className='block text-teal-800 font-medium mb-2'>Number of People</label>
                            <div className='relative'>
                                <span className='absolute left-4 top-1/2 -translate-y-1/2 text-teal-700 text-2xl'>
                                    M
                                </span>
                                <input
                                    type='number'
                                    value={people}
                                    onChange={(e) => {
                                        const val = e.target.value
                                        if (val === '' || Number(val) >= 0) setPeople(val)
                                    }}
                                    className={`w-full pl-12 pr-4 bg-white border rounded-lg text-right text-2xl ${noofPeople === 0 && billAmount > 0
                                        ?
                                        'border-red-500 bg-red-50/50'
                                        : 'border-teal-200'
                                        } text-teal-900`}
                                />

                            </div>
                            {noofPeople === 0 && billAmount > 0 && (
                                <p className='text-red-600 text-sm mt-2'>Can't be zero</p>
                            )}
                        </div>


                    </div>


                    {/* rgiht */}

                    <div className='bg-teal-900 p-8 md:p-10 text-white flex flex-col'>

                        <div className='flex-1 flex-col justify-center gap-12'>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className='text-lg'>Tip Amount</p>
                                    <p className='text-teal-300 text-sm'>/Person</p>
                                </div>
                                <p className=''>${showMoney(tipPerperson)}</p>

                            </div>

                            <div className='flex justify-between items-center '>
                                <div>
                                    <p className='text-lg '>Total</p>
                                    <p className='text-teal-300 text-sm'>/person</p>
                                </div>
                                <p>${showMoney(totalPerPerson)}</p>
                            </div>
                        </div>

                 
                    <ResetButton
                        onReset={resetEveryThing}
                        disabled={!canReset} />
                </div> </div>
                   </div>
    )
}

export default Home
