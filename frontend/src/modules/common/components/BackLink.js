import {useNavigate} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import React from 'react'

const BackLink = () => {

    const navigate = useNavigate();
    
    return (

        <button type="button" className="btn btn-link" 
            onClick={() => navigate(-1)}>

            <FormattedMessage id='project.global.buttons.back'/>

        </button>

    );

};

export default BackLink;
