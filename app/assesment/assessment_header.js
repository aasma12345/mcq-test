import React from 'react';
import Pagination from './pagination';
function Headerpage() {
    return (
        <>  <div className='des-only'>
            <div className="headerrow ">
                <div className='header-box '>
                    <div className='logo-text'>
                        <img className="logo" src="Logo Grp.png" alt="Logo" />
                        <p className="header-text">QA</p>
                    </div>
                    <div className='top'></div>
                    <div className='table'>
                        <Pagination />
                    </div>
                    <div className="sumbit-button-div -only">
                        <a href="/" className='submit-button'>Submit</a>
                    </div>

                </div>
            </div>
        </div>

            <div className='mob-only'>
                <div className=" headerrow ">
                    <div className='header-box'>
                        <div className='logo-text'>
                            <img className="logo" src="Logo Grp.png" alt="Logo" />
                            <p className="header-text">QA</p>
                        </div>
                        <div className='top'></div>
                        <div className='table'>

                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Headerpage;





