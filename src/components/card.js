import React from 'react'
import calculator from '../assets/images/icon-calculator.svg'
import karma from '../assets/images/icon-karma.svg'
import supervisor from '../assets/images/icon-supervisor.svg'
import teamBuilder from '../assets/images/icon-team-builder.svg'

const Card = (props) => {
    const {header, bodyText} = props
    return (
        <div className="content__card">
            <div className="content__card-inner-wrapper">
                <h1 className="content__card-header">
                    {header}
                </h1>
                <p className="card__description">
                    {bodyText}
                </p>
                <div className="content__card-image-wrapper">
                    <img
                        src={header.toLowerCase() === "supervisor" ? supervisor
                                : header.toLowerCase() === "team builder" ? teamBuilder
                                : header.toLowerCase() === "karma" ? karma
                                    : header.toLowerCase() === "calculator" ? calculator : null}
                        alt="" className="content__card-image"/>
                </div>
            </div>
        </div>
    )
}
export default Card