import React from 'react'
import Section from '../../HeaderSection/Section';

const OverlapSection = ({emailOverlaps}) => {
    return (
        <div className="emailList__sections">
                {
                    emailOverlaps.map(overlap => (
                        <Section 
                            key={overlap.id}
                            Icon={overlap.icon} 
                            title={overlap.title} 
                            color={overlap.color} 
                            selected={overlap.selected} 
                        />
                    ))
                }
            </div>
    )
}

export default OverlapSection
