import React, { useEffect, useState } from 'react';
import generateUUID from '../../utils/generateUUID';
import './PageSelector.modules.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/actions/actions';

const PageSelector = ({ totalOfElements = 857351, next, prev, }) => {
    const firstPage = 1;
    const lastPage = Math.ceil(totalOfElements / 20);
    let pageSize = 5;

    const difference = lastPage - firstPage;

    if (difference >= 1 && difference <= 3) {
        pageSize = difference + 1;
    } else if (difference === 0) {
        pageSize = 1;
    }

    const dispatch = useDispatch();


    const actualStorage = useSelector(state => state.page);


    const [actual, setActual] = useState(actualStorage);

    const handlePageChange = (newPage) => {
        if (newPage >= firstPage && newPage <= lastPage) {

            setActual(newPage);
        }
    };

    useEffect(() => {
        dispatch(setPage(actual));
        
    }, [actual])

    useEffect(()=>{
        setActual(actualStorage);
    },[actualStorage])

    const renderPageButton = (page) => {
        return (
            <button
                key={generateUUID()}
                className={actual === page ? "active" : ``}
                title={`page ${page}`}
                onClick={() => handlePageChange(page)}
            >
                {page}
            </button>
        );
    };



    const renderPageRange = () => {
        let start = Math.max(firstPage, actual - Math.floor(pageSize / 2));
        const end = Math.min(lastPage, start + pageSize - 1);
        const pages = [];


        if (end - start < pageSize) {
            start = Math.max(firstPage, end - pageSize + 1);
        }

        for (let i = 1; i <= pageSize; i++) {
            const page = start + i - 1;

            if (firstPage === lastPage) {
                pages.push(firstPage);
                break;
            }

            if (i === 1) {
                pages.push(firstPage);
            } else if (i === pageSize) {
                pages.push(lastPage);
            } else if ((actual >= 4 && i === 2)) {
                pages.push(<span key={generateUUID()}>...</span>);
            } else if (actual <= lastPage - 4 && i === pageSize - 1) {
                pages.push(<span key={generateUUID()}>...</span>);
            } else {

                pages.push(page);
            }

        }

        return pages.map((page) => (
            <li key={generateUUID()}>
                {renderPageButton(page)}
            </li>
        ));
    };

    return (
        <div className="pagination__wrapper">
            <ul className="pagination">
                <li>
                    <button
                        name="prev"
                        className={`prev ${prev ? 'disabled' : ''}`}
                        title="previous page"
                        onClick={() => handlePageChange(actual - 1)}
                    >
                        &#10094;
                    </button>
                </li>
                {renderPageRange()}
                <li>
                    <button
                        name="next"
                        className={`next ${next ? 'disabled' : ''}`}
                        title="next page"
                        onClick={() => handlePageChange(actual + 1)}
                    >
                        &#10095;
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default PageSelector;
