import React from 'react'

export const Pagination = ({ setPageNumber, pageNumber }) => {

    const onPrevius = () => {
        setPageNumber(x=>x-1)
    }
    const onNext = () => {
        setPageNumber(x=>x+1)
    }

    return (
        <nav className='my-5'>
            <ul className='pagination justify-content-center'>
                {pageNumber > 1 &&
                    <li className='page-item'>
                        <button className='page-link' onClick={onPrevius}>Previus</button>
                    </li>
                    }
                {pageNumber < 20 &&
                    <li className='page-item'>
                        <button className='page-link' onClick={onNext}>Next</button>
                    </li> 
                   }

            </ul>
        </nav>
    )
}
