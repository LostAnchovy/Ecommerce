import React from 'react';
import Deck from '../Deck/Deck';
import AdminEventCard from '../AdminEventCard/AdminEventCard';
import { Link } from 'react-router-dom';
const adminDash = () => {
    // Will need to be adjusted for dynamic deck fill
    return (
        <div>
            <Deck> 
                <AdminEventCard/>
                <AdminEventCard/>
                <AdminEventCard/>
            </Deck>
            {/* Need to change link to event creation form */}
            <Link to="/event"><button className="btn btn-primary">Create new Event</button> </Link>
        </div>
    );
}
export default adminDash;